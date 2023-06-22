import { Dispatch, SetStateAction } from "react";

export interface PlanHeaderProps {
    fromDate: string;
    toDate: string;
    target: string;
    days: number[],
    selectedDay: number | null;
    onChangedDay: (day: number | null)=> void
}