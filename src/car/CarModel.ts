import { Vector3 } from "../Vector3";
import { Layout } from "./Layout";
import { Gears } from "./Gears";

export interface CarModel {

    // Visual
    readonly frameModel: string;
    readonly steeringWheelModel: string;
    readonly handBrakeModel: string;
    readonly headlightPosition: Vector3;
    readonly cameraPosition: Vector3;
    readonly steeringWheelPosition: Vector3;

    // Physics constants
    readonly dragConstant: number;
    readonly brakingConstant: number;

    // Wheels
    readonly wheelRadius: number; // m
    readonly frontWheelPosition: Vector3;
    readonly rearWheelPosition: Vector3;

    // Weight Transfer
    readonly mass: number; // kg
    readonly centerOfGravity: Vector3;

    // Drivetrain
    readonly layout: Layout;
    readonly rollingResistanceConstant: number; // ~ 30 times dragConstant
    readonly transmissionEfficiency: number;
    readonly differentialRatio: number;
    readonly gearRatios:Record<Gears, number>;

    // Engine
    readonly stallRpm: number;
    readonly redlineRpm: number;
    readonly idleRpm: number;
    torqueCurve(rpm:number): number; // torque = torqueCurve(rpm)

}