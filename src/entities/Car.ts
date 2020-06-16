import {Entity} from "../Entity";
import {Vector3} from "../Vector3";
import {Gamepad} from "../gamepad/Gamepad";
import {Controls} from "../gamepad/Controls";
import {World} from "../World";
import {CarModel} from "../car/CarModel";
import {Gears, nextGear, previousGear} from "../car/Gears";

export class Car extends Entity {

    private headlightLeft:HTMLElement;
    private headlightRight:HTMLElement;
    private steeringWheel:HTMLElement;
    private debugText:HTMLElement;
    private gearIndicator:HTMLElement;

    private isHeadlightsOn:boolean = false;
    private direction:Vector3 = new Vector3();
    private carModel:CarModel;
    private currentGear:Gears = Gears.FIRST;

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

        this.velocity = new Vector3(0,0,0);
        this.direction = new Vector3(0,0,-1);

        this.setHeadlights(false);

    }

    protected update() {
        
        if (Gamepad.isPressed(Controls.HEADLIGHTS))
            this.toggleHeadlights();

        this.shift();
        this.physics();
        this.turnSteeringWheel();
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

    private shift() {
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
        console.log(this.currentGear);
        this.updateGearUI();
    }

    updateGearUI() {
        let position = this.gearIndicatorMap[this.currentGear];
        this.gearIndicator.setAttribute('position', position);
    }

    private turnSteeringWheel() {
        let axisValue = Gamepad.getAxes(Controls.STEERING);
        (<any>this.steeringWheel).object3D.rotation.z = axisValue * 90 / 180 * Math.PI;
    }

    // https://asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html
    private physics() {

        if (this.velocity.magnitude2() > 0)
            this.direction = this.velocity.normalize();

        let rpm = 1000;

        let maxTorque = this.carModel.torqueCurve(rpm);
        let engineTorque = maxTorque * Gamepad.getAxes(Controls.ACCELERATE);
        let driveTorque = engineTorque * this.carModel.gearRatios[this.currentGear] * this.carModel.differentialRatio * this.carModel.transmissionEfficiency;
        let driveForce = driveTorque / this.carModel.wheelRadius;

        let drag = this.velocity.mulNum(- this.carModel.dragConstant * this.velocity.magnitude());
        let rollingResistance = this.velocity.mulNum(- this.carModel.rollingResistanceConstant);

        let longtitudinalForce = drag.add(rollingResistance);

        /*
        let brakes = Gamepad.getAxes(Controls.BRAKE);
        if (brakes > 0 && velocity is not reduced to zero) {

            let brakingForce = this.direction.mulNum(this.carModel.brakingConstant);
            longtitudinalForce = longtitudinalForce.add(brakingForce);
            
        } else {
        */

            let traction = this.direction.mulNum(driveForce);
            longtitudinalForce = longtitudinalForce.add(traction);

        //}

        this.velocity = this.velocity.add( longtitudinalForce.mulNum(World.dt).divNum(this.carModel.mass) );

        this.debugText.setAttribute("value", ""+
            this.velocity.magnitude() + "\nkm/h"
        );


    }

}