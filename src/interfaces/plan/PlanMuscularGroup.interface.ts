import { MuscularGroup } from "../MuscularGroup.interface";
import { PlanExerciseInterface } from "./PlanExercise.interface";

export interface PlanMuscularGroupInterface {
    id: string;
    muscularGroup: MuscularGroup;
    exercises: PlanExerciseInterface[];
  }