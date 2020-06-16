import { CarModel } from "../CarModel";
import { Vector3 } from "../../Vector3";
import { Layout } from "../Layout";
import { Gears } from "../Gears";

export class GTRSkyline implements CarModel{

    // Visual
    readonly frameModel = ""; // TODO
    readonly steeringWheelModel = ""; // TODO
    readonly handBrakeModel = ""; // TODO
    readonly headlightPosition = new Vector3(); // TODO
    readonly cameraPosition = new Vector3(); // TODO
    readonly steeringWheelPosition = new Vector3(); // TODO

    // Physics constants
    readonly dragConstant = 0.4257;
    readonly brakingConstant = 0; // TODO

    // Wheels
    readonly wheelRadius = 0.3265;
    readonly frontWheelPosition = new Vector3(); // TODO
    readonly rearWheelPosition = new Vector3(); // TODO

    // Weight Transfer
    readonly mass = 1560;
    readonly centerOfGravity = new Vector3(); // TODO

    // Drivetrain
    readonly layout = Layout.FOUR_WHEEL_DRIVE;
    readonly rollingResistanceConstant = 12.8;
    readonly transmissionEfficiency = 0.7;
    readonly differentialRatio = 3.42;
    readonly gearRatios = {
        [Gears.REVERSE] : 2.90,
        [Gears.NEUTRAL] : 0,
        [Gears.FIRST] : 2.66,
        [Gears.SECOND] : 1.78, 
        [Gears.THIRD] : 1.30,
        [Gears.FOURTH] : 1,
        [Gears.FIFTH] : 0.74,
    };

    // Engine
    readonly idleRpm = 1000;
    readonly stallRpm = 1000;
    readonly redlineRpm = 7000;
    public torqueCurve(rpm:number): number {
        return -0.000003792735043*rpm*rpm + 0.03803418803*rpm + 254.6474359;
    }

}