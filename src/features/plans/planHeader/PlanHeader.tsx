import { Flex } from "native-base";
import { PlanHeaderProps } from "./types";
import Text from "../../../components/Text/Text";

export default function PlanHeader(planHeaderProps: PlanHeaderProps) {

    const { toDate, fromDate } = planHeaderProps;

    return (
        <Flex flexDirection='row' justifyContent='space-between' paddingBottom={4}>
            <Flex flexDirection='row' flex={1} marginBottom={1}>
                <Text value='Desde' style={{ marginRight: 3 }} />
                <Text value={fromDate} />
            </Flex>
            <Flex flexDirection='row' flex={1}>
                <Text value='Hasta' style={{ marginRight: 3 }} />
                <Text value={toDate} />
            </Flex>
        </Flex>
    )
}