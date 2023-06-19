import { PlanInterface } from "../../../../../../../../../interfaces/plan/Plan.interface";

export interface PlansItemProps {
    plan: PlanInterface;
    onPressPlan: (plan: PlanInterface)=> void;
}