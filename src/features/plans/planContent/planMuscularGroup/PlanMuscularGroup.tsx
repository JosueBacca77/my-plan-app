import { Box, Flex } from "native-base";
import { PlanMuscularGroupProps } from "./types";
import Text from "../../../../components/Text/Text";
import { FontVariant } from "../../../../components/Text/types";


export default function PlanMuscularGroup(planMuscularGroupProps: PlanMuscularGroupProps) {

    const { muscularGroup } = planMuscularGroupProps;

    return (
        <Box marginBottom={4}>
            <Text value={muscularGroup.muscularGroup.name} variant={FontVariant.TEXT_SM} />
            {/* <Flex flex={1}>
                {
                    muscularGroup.exercises.map((exercise) => (
                        <Flex flex={1} flexDirection='row'>
                            <Text value={exercise.exersice.name} variant={FontVariant.TEXT_XS} style={{marginRight:4}}/>
                            <Text value={exercise.description} variant={FontVariant.TEXT_XS}/>
                        </Flex>
                    ))
                }
            </Flex> */}
        </Box>
    )
}