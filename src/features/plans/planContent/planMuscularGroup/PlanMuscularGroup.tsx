import { Box, Flex, View, useTheme } from "native-base";
import { PlanMuscularGroupProps } from "./types";
import Text from "../../../../components/Text/Text";
import { FontVariant } from "../../../../components/Text/types";


export default function PlanMuscularGroup(planMuscularGroupProps: PlanMuscularGroupProps) {

    const { muscularGroup, selectedDay } = planMuscularGroupProps;

    const theme = useTheme();

    //if there is a selected day, it will select the exersices that belongs to (has in days array property) this day
    //otherwise, it'll show all the exersices no mater days
    const dayExersices = selectedDay ? muscularGroup.exercises.filter(exersice => exersice.days.includes(selectedDay)) : muscularGroup.exercises

    return (
        <Box marginBottom={4}>
            <Text value={muscularGroup.muscularGroup.name} variant={FontVariant.TEXT_SM} />
            <Flex flex={1}>
                {
                    dayExersices.map((exercise, index) => (
                        <Flex flex={1} flexDirection='row' marginBottom={2} key={index}>
                            <Flex flex={1} flexDirection='row'>
                                <Text value={exercise.exersice.name} style={{ marginRight: 4 }} />
                                <Text value={exercise.description} />
                            </Flex>
                            {
                                !selectedDay &&
                                <Flex flex={1} flexDirection='row' justifyContent='flex-end'>
                                    {
                                        exercise.days.map(day => (
                                            <View
                                                key={day.toString()}
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
                                                    key={day.toString()}
                                                    value={day.toString()}
                                                    fontColor={theme.colors.primary[50]}
                                                />
                                            </View>
                                        ))
                                    }
                                </Flex>
                            }
                        </Flex>
                    ))
                }
            </Flex>
        </Box>
    )
}