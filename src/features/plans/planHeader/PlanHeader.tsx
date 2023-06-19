import { Flex, View } from "native-base";
import { PlanHeaderProps } from "./types";
import Text from "../../../components/Text/Text";
import { FontVariant } from "../../../components/Text/types";
import getTargetColor from "../../../utils/helpers";

export default function PlanHeader(planHeaderProps: PlanHeaderProps) {

    const { toDate, fromDate, target } = planHeaderProps;

    return (
        <Flex flexDirection='row' justifyContent='space-between'>

            <View minWidth={120}>
                <Flex flexDirection='row' flex={1} justifyContent='space-between' marginBottom={1}>
                    <Text value='Desde' />
                    <Text value={fromDate} />
                </Flex>
                <Flex flexDirection='row' flex={1} justifyContent='space-between'>
                    <Text value='Hasta' />
                    <Text value={toDate} />
                </Flex>
            </View>

            <Flex alignItems='flex-end' justifyContent='center'>
                <Text
                    value={target}
                    variant={FontVariant.TEXT_SM}
                    fontColor={getTargetColor(target)}
                />
            </Flex>

        </Flex>
    )
}