import { PlanMuscularGroupInterface } from "../../../interfaces/plan/PlanMuscularGroup.interface";

export interface PlanContentProps {
    muscularGroups: PlanMuscularGroupInterface[];
    selectedDay: number | null
}