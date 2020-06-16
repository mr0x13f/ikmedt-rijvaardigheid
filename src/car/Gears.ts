import { Vector3 } from "../Vector3"

export enum Gears {
    
    REVERSE =   "R",
    NEUTRAL =   "N",
    FIRST =     "1",
    SECOND =    "2",
    THIRD =     "3",
    FOURTH =    "4",
    FIFTH =     "5",

}

export let nextGear:{[gear in Gears]:Gears|null} = {
    [Gears.REVERSE]:    Gears.NEUTRAL,
    [Gears.NEUTRAL]:    Gears.FIRST,
    [Gears.FIRST]:      Gears.SECOND,
    [Gears.SECOND]:     Gears.THIRD,
    [Gears.THIRD]:      Gears.FOURTH,
    [Gears.FOURTH]:     Gears.FIFTH,
    [Gears.FIFTH]:      null,
}

export let previousGear:{[gear in Gears]:Gears|null} = {
    [Gears.REVERSE]: null,
    [Gears.NEUTRAL]:    Gears.REVERSE,
    [Gears.FIRST]:      Gears.NEUTRAL,
    [Gears.SECOND]:     Gears.FIRST,
    [Gears.THIRD]:      Gears.SECOND,
    [Gears.FOURTH]:     Gears.THIRD,
    [Gears.FIFTH]:      Gears.FOURTH,
}

export let gearPosition:{[gear in Gears]:Vector3} = {
    [Gears.REVERSE]:    new Vector3(0.5,-0.5,0),
    [Gears.NEUTRAL]:    new Vector3(0,0,0),
    [Gears.FIRST]:      new Vector3(-0.5,0.5,0),
    [Gears.SECOND]:     new Vector3(-0.5,-0.5,0),
    [Gears.THIRD]:      new Vector3(0,0.5,0),
    [Gears.FOURTH]:     new Vector3(0,-0.5,0),
    [Gears.FIFTH]:      new Vector3(-0.5,0.5,0),
}