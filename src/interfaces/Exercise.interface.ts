import { MuscularGroup } from "./MuscularGroup.interface";

export interface Exercise{
    id: string;
    name: string;
    muscularGroup: MuscularGroup;
}