import { Exersice } from "../Exersice.interface"

export interface PlanExersiceInterface {
    id: string,
    exersice: Exersice,
    description: string,
    days: number[]
}