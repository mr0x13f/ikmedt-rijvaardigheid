import {Controls} from "./Controls";
import { ControllerInput } from "./input/ControllerInput";

export interface ControllerMapping {
    readonly MAPPING:Record<Controls,ControllerInput>;  // Mapping for current controller.
    readonly NAMES:string[]; // Name to recognise controller by
}