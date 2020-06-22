import {Entity} from "../Entity";
import {Vector3} from "../Vector3";
import {Gamepad} from "../gamepad/Gamepad";
import {Controls} from "../gamepad/Controls";
import {World} from "../World";
import {CarModel} from "../car/CarModel";
import {Gears, nextGear, previousGear} from "../car/Gears";
import { Physics } from "../Physics";
import { Layout } from "../car/Layout";

export class Car extends Entity {

    private headlightLeft:HTMLElement;
    private headlightRight:HTMLElement;
    private steeringWheel:HTMLElement;
    private debugText:HTMLElement;
    private gearIndicator:HTMLElement;
    private gearDisplay:HTMLElement;
    private speedometerArrow:any;

    private isHeadlightsOn:boolean = false;
    private direction:Vector3 = new Vector3();
    private carModel:CarModel;
    private currentGear:Gears = Gears.NEUTRAL;

    private acceleration:number = 0;
    private rpm:number = 1000;
    private rearAngularVelocity:number = 0;
    private frontAngularVelocity:number = 0;
    private steeringAngle:number = 0;

    private gearIndicatorMap = {
        [Gears.REVERSE]: "-43 87 35",
        [Gears.NEUTRAL]: "-38 90 35",
        [Gears.FIRST]: "-33 93 35",
        [Gears.SECOND]: "-33 87 35",
        [Gears.THIRD]: "-38 93 35",
        [Gears.FOURTH]: "-38 87 35",
        [Gears.FIFTH]: "-43 93 35"
    }

    constructor(id:string, carModel:CarModel) {
        super(id);

        this.carModel = carModel;

        this.headlightLeft = <HTMLElement> document.getElementById("js--car-headlight-left");
        this.headlightRight = <HTMLElement> document.getElementById("js--car-headlight-right");
        this.steeringWheel = <HTMLElement> document.getElementById("js--car-steering-wheel");
        this.debugText = <HTMLElement> document.getElementById("js--debug-text");
        this.gearIndicator = <HTMLElement> document.getElementById("js--gear-indicator");
        this.gearDisplay = <HTMLElement> document.getElementById("js--gear-display");
        this.speedometerArrow = document.getElementById("js--speedometer-arrow");

        this.velocity = new Vector3(0,0,0);
        this.direction = new Vector3(0,0,-1);

        this.setHeadlights(false);

    }

    protected update() {
        
        if (Gamepad.isPressed(Controls.HEADLIGHTS))
            this.toggleHeadlights();

        this.steer();
        this.shift();
        this.dashboard();
        this.simplePhysics()
        //this.physics();

    }

    public toggleHeadlights() {
        this.isHeadlightsOn = !this.isHeadlightsOn;
        this.updateHeadlights();
    }

    public setHeadlights(enable:boolean) {
        this.isHeadlightsOn = enable;
        this.updateHeadlights();
    }

    private updateHeadlights() {
        this.headlightLeft.setAttribute("visible", ""+this.isHeadlightsOn);
        this.headlightRight.setAttribute("visible", ""+this.isHeadlightsOn);
    }

    private dashboard() {

        const arrowDegreesPerKmh = 1.35;
        let ms = this.velocity.magnitude();
        let kmh = ms / 1000 * 60 * 60;
        this.speedometerArrow.object3D.rotation.z = (135 - kmh * arrowDegreesPerKmh) / 180 * Math.PI;

    }

    private steer() {

        this.steeringAngle = -this.carModel.maxSteeringAngle * Gamepad.getAxes(Controls.STEERING);

        this.turnSteeringWheel();

    }

    private shift() {
        
        let showGear = Gamepad.isDown(Controls.CLUTCH);
        this.gearDisplay.setAttribute('visible', ""+showGear);
        this.gearIndicator.setAttribute('visible', ""+showGear);

        if (!Gamepad.isDown(Controls.CLUTCH))
            return;

        if (Gamepad.isPressed(Controls.DOGBOX_UP) && previousGear[this.currentGear]) {
            this.currentGear = <Gears> previousGear[this.currentGear];
            this.updateGear();
        }
            
        if (Gamepad.isPressed(Controls.DOGBOX_DOWN) && nextGear[this.currentGear]) {
            this.currentGear = <Gears> nextGear[this.currentGear];
            this.updateGear();
        }
        
    }

    private updateGear() {
        let position = this.gearIndicatorMap[this.currentGear];
        this.gearIndicator.setAttribute('position', position);
    }

    private turnSteeringWheel() {
        let axisValue = Gamepad.getAxes(Controls.STEERING);
        (<any>this.steeringWheel).object3D.rotation.z = axisValue * 90 / 180 * Math.PI;
    }

    private simpleSpeed = 0;
    private simplePhysics() {

        const gearAcceleration:{[gear in Gears]:number} = {
            [Gears.REVERSE]: -10,
            [Gears.NEUTRAL]: 0,
            [Gears.FIRST]: 10,
            [Gears.SECOND]: 8,
            [Gears.THIRD]: 5,
            [Gears.FOURTH]: 3,
            [Gears.FIFTH]: 1,
        }

        const gearTopSpeed:{[gear in Gears]:number} = {
            [Gears.REVERSE]: 1000,
            [Gears.NEUTRAL]: 1000000,
            [Gears.FIRST]: 500,
            [Gears.SECOND]: 1000,
            [Gears.THIRD]: 2000,
            [Gears.FOURTH]: 3000,
            [Gears.FIFTH]: 4000,
        }

        const friction = 5;
        const brakingAcceleration = 10; // m/s2
        const maxSteering = 1 / 180*Math.PI; // rad/s
        const velocityMultiplier = 2;

        this.velocity = this.velocity.divNum(velocityMultiplier);

        if (this.velocity.magnitude() > 0)
            this.rotation.y -= maxSteering * Gamepad.getAxes(Controls.STEERING);

        let acceleration = gearAcceleration[this.currentGear] * Gamepad.getAxes(Controls.ACCELERATE);
        let braking = brakingAcceleration * Gamepad.getAxes(Controls.BRAKE);
        if (Gamepad.isDown(Controls.CLUTCH))
            acceleration = 0;
        if (acceleration == 0)
            braking += friction;
        this.simpleSpeed += (acceleration - braking);

        this.simpleSpeed = Math.min(this.simpleSpeed, gearTopSpeed[this.currentGear]);
        this.simpleSpeed = Math.max(this.simpleSpeed, 0);

        let directionVector = new Vector3( -Math.sin(this.rotation.y), 0, -Math.cos(this.rotation.y) );
        this.velocity = directionVector.mulNum( this.simpleSpeed * World.dt );

        this.velocity = this.velocity.mulNum(velocityMultiplier);

    }

    // https://asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html
    private physics() {

        if (this.velocity.magnitude2() > 0)
            this.direction = this.velocity.normalize(); // u

        // Engine
        let maxEngineTorque = this.carModel.torqueCurve(this.rpm);
        let engineTorque = maxEngineTorque * Gamepad.getAxes(Controls.ACCELERATE); // Tengine
        let driveTorque = engineTorque * this.carModel.gearRatios[this.currentGear] * this.carModel.differentialRatio * this.carModel.transmissionEfficiency; // Tdrive =  Tengine * xg * xd * n
        let driveForce = driveTorque / this.carModel.wheelRadius; // Fdrive = Tdrive / Rw

        // Resistance
        let drag = this.velocity.mulNum(- this.carModel.dragConstant * this.velocity.magnitude()); //  Fdrag = - Cdrag * v * |v|
        let rollingResistance = this.velocity.mulNum(- this.carModel.rollingResistanceConstant); // Frr = - Crr * v

        // Weight transfer
        let totalWeight = this.carModel.mass * Physics.GRAVITY; // W = M * g
        let frontPostition = this.carModel.centerOfGravity.z + this.carModel.frontWheelPosition.z; // c
        let rearPostition = this.carModel.centerOfGravity.z + this.carModel.rearWheelPosition.z; // d
        let wheelBase = rearPostition - frontPostition; // L
        let frontScalar = frontPostition / wheelBase; // c/L
        let rearScalar = rearPostition / wheelBase; // d/L
        let frontWeight = frontScalar * totalWeight - (this.carModel.centerOfGravity.y / wheelBase)*this.carModel.mass * this.acceleration; // (c/L)*W - (h/L)*M*a
        let rearWeight = rearScalar * totalWeight + (this.carModel.centerOfGravity.y / wheelBase)*this.carModel.mass * this.acceleration; // (c/L)*W - (h/L)*M*a
        let frontMaxTraction = this.carModel.tyreFrictionCoefficient * frontWeight; // Fmax = mu * W
        let rearMaxTraction = this.carModel.tyreFrictionCoefficient * rearWeight; // Fmax = mu * W

        let frontAngularVelocity:number;
        let rearAngularVelocity:number;
        let frontTraction:number;
        let rearTraction:number;

        // Front wheel traction
        if (this.carModel.layout == Layout.FRONT_WHEEL_DRIVE || this.carModel.layout == Layout.FOUR_WHEEL_DRIVE) {
            //let slipRatio = this.frontAngularVelocity * this.carModel.wheelRadius - this.velocity.magnitude();
        } else {
            // free
            frontTraction = 0;
            frontAngularVelocity = this.velocity.magnitude() / (Math.PI * 2 * this.carModel.wheelRadius);
        }

        // Rear wheel traction
        if (this.carModel.layout == Layout.REAR_WHEEL_DRIVE || this.carModel.layout == Layout.FOUR_WHEEL_DRIVE) {

        } else {
            // free
            rearTraction = 0;
            rearAngularVelocity = this.velocity.magnitude() / (Math.PI * 2 * this.carModel.wheelRadius);
        }

        let longtitudinalForce;
        let brakes = Gamepad.getAxes(Controls.BRAKE);

        if (brakes > 0 /*&& velocity is not reduced to zero*/) {

            let brakingForce = this.direction.mulNum(this.carModel.brakingConstant); // Fbraking = -u * Cbraking
            longtitudinalForce = brakingForce.add(drag.add(rollingResistance)); // Flong = Fbraking + Fdrag + Frr
            
        } else {

            let traction = this.direction.mulNum(driveForce); // Ftraction = u * Engineforce
            longtitudinalForce = traction.add(drag.add(rollingResistance));  // Flong = Ftraction + Fdrag + Frr

        }

        // Turning
        let turnCircleRadius = wheelBase / Math.sin(this.steeringAngle); // R = L / sin(delta)
        let angularVelocity = this.velocity.magnitude() / turnCircleRadius; // w = v / R
    
        let velocityAngle = this.rotation.eulerAngleFromDirection().y;
        let sideslipAngle = velocityAngle - this.steeringAngle;
        let lateralForce = this.carModel.corneringStiffness * sideslipAngle;

        // Apply forces
        let acceleration = longtitudinalForce.divNum(this.carModel.mass);
        this.velocity = this.velocity.add( acceleration.mulNum(World.dt) );
        this.acceleration = acceleration.magnitude();

        if (!isNaN(angularVelocity)) {
            this.rotation.y += angularVelocity * World.dt;
        }

    }

}