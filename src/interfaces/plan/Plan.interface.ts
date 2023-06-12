import { StudentInterface } from "../Student.interface";
import { PlanMuscularGroupInterface } from "./PlanMuscularGroup.interface";

export interface PlanInterface{
    id: string,
    student: StudentInterface,
    muscularGroups: PlanMuscularGroupInterface[],
    fromDate: string,
    toDate: string,
    target: string;
}