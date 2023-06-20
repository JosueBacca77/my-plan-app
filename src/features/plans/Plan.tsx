import { Flex } from "native-base";
import { PlanProps } from "./types";
import PlanHeader from "./planHeader/PlanHeader";
import PlanContent from "./planContent/PlanContent";
import { getAllPlanExersiceDays } from "./common";
import { useState } from "react";

export default function Plan(planProps: PlanProps) {

    const { plan } = planProps;

    const allDays = getAllPlanExersiceDays(plan);

    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const onChangeDay = (selectedDay: number | null) => {
        if(selectedDay){
            setSelectedDay(selectedDay);
        }else{
            setSelectedDay(null)
        }
    };

    return (
        <Flex flex={1}>
            <PlanHeader
                fromDate={plan.fromDate}
                toDate={plan.toDate}
                days={allDays}
                selectedDay={selectedDay}
                onChangedDay={onChangeDay}
            />
            <PlanContent muscularGroups={plan.muscularGroups} selectedDay={selectedDay} />
        </Flex>
    )
}