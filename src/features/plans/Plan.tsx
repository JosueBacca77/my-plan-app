import { Box, Flex, ScrollView } from "native-base";
import { PlanProps } from "./types";
import PlanHeader from "./planHeader/PlanHeader";
import PlanContent from "./planContent/PlanContent";

export default function Plan(planProps: PlanProps) {

    const { plan } = planProps;

    return (
        <Box>
            <PlanHeader target={plan.target} fromDate={plan.fromDate} toDate={plan.toDate} />
            {/* <ScrollView marginTop={4} backgroundColor={'amber.100'}> */}
                <PlanContent muscularGroups={plan.muscularGroups} />
            {/* </ScrollView> */}
        </Box>
    )
}