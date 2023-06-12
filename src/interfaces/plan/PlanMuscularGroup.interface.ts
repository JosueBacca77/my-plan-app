import { MuscularGroup } from "../MuscularGroup.interface";
import { PlanExersiceInterface } from "./PlanExersice.interface";

export interface PlanMuscularGroupInterface {
    id: string;
    muscularGroup: MuscularGroup;
    exercises: PlanExersiceInterface[];
  }