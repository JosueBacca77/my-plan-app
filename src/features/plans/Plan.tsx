import { Box, Flex } from "native-base";
import { PlanProps } from "./types";
import PlanHeader from "./planHeader/PlanHeader";
import PlanContent from "./planContent/PlanContent";

export default function Plan(planProps: PlanProps) {

    const { plan } = planProps;

    return (
        <Flex flex={1}>
            <PlanHeader fromDate={plan.fromDate} toDate={plan.toDate} days={[1,2,3]}/>
            <PlanContent muscularGroups={plan.muscularGroups} />
        </Flex>
    )
}