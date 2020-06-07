import {Controls} from "./Controls";
import { ControllerInput } from "./input/ControllerInput";

export interface ControllerMapping {
    readonly MAPPING:Record<Controls,ControllerInput>;  // Mapping for current controller.
    readonly NAME:string; // Name to recognise controller by
}