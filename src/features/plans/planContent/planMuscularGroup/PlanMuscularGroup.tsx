import { Box, Flex, View, useTheme } from "native-base";
import { PlanMuscularGroupProps } from "./types";
import Text from "../../../../components/Text/Text";
import { FontVariant } from "../../../../components/Text/types";


export default function PlanMuscularGroup(planMuscularGroupProps: PlanMuscularGroupProps) {

    const { muscularGroup } = planMuscularGroupProps;

    const theme = useTheme();

    return (
        <Box marginBottom={4}>
            <Text value={muscularGroup.muscularGroup.name} variant={FontVariant.TEXT_LG} />
            <Flex flex={1}>
                {
                    muscularGroup.exercises.map((exercise) => (
                        <Flex flex={1} flexDirection='row' marginBottom={2}>
                            <Flex flex={1} flexDirection='row'>
                                <Text value={exercise.exersice.name} style={{ marginRight: 4 }} />
                                <Text value={exercise.description} />
                            </Flex>
                            <Flex flex={1} flexDirection='row' justifyContent='flex-end'>
                                {
                                    exercise.days.map(day => (
                                        <View
                                            style={{
                                                backgroundColor: theme.colors.primary[500],
                                                borderRadius: 20,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginRight: 4,
                                                width: 20,
                                                height: 20
                                            }}
                                        >
                                            <Text
                                                value={day.toString()}
                                                fontColor={theme.colors.primary[50]}
                                            />
                                        </View>
                                    ))
                                }
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Box>
    )
}