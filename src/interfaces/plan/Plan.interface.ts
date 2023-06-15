import { PlanMuscularGroupInterface } from "./PlanMuscularGroup.interface";

export interface PlanInterface{
    id: string;
    fromDate: string;
    toDate: string;
    target: string;
    muscularGroups: PlanMuscularGroupInterface[];
    current: boolean;
}