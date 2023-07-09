import { Exercise } from "../Exercise.interface"

export interface PlanExerciseInterface {
    id: string,
    exercise: Exercise,
    description: string,
    days: number[]
}