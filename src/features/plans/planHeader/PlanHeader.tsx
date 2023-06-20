import { Flex, Pressable, useTheme } from "native-base";
import { PlanHeaderProps } from "./types";
import Text from "../../../components/Text/Text";
import { useState } from "react";

export default function PlanHeader(planHeaderProps: PlanHeaderProps) {

    const { toDate, fromDate, days } = planHeaderProps;

    const theme = useTheme();

    return (
        <Flex>
            <Flex flexDirection='row'
                style={{
                    height: 24
                }}
            >
                <Flex flexDirection='row' flex={1} marginBottom={1}>
                    <Text value='Desde' style={{ marginRight: 3 }} />
                    <Text value={fromDate} />
                </Flex>
                <Flex flexDirection='row' flex={1}>
                    <Text value='Hasta' style={{ marginRight: 3 }} />
                    <Text value={toDate} />
                </Flex>
            </Flex>

            <Flex flexDirection='row' justifyContent='flex-end'>
                {
                    days.map(day => {

                        const [isSelected, setIsSelected] = useState(false);

                        return (
                            <Pressable onPress={()=>setIsSelected(prev=> !prev)}>
                                {({
                                    isHovered,
                                    isFocused,
                                    isPressed
                                }) => {
                                    return <Flex
                                        justifyContent='center'
                                        flexDirection='row'
                                        alignItems='center'
                                        bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : isSelected ? theme.colors.primary[500] : theme.colors.primary[50] }
                                        style={{
                                            transform: [{
                                                scale: isPressed ? 0.96 : 1
                                            }],
                                            borderRadius:100,
                                            marginRight: 6
                                        }} 
                                        rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300"
                                        width={6}
                                        height={6}
                                    >
                                        <Text
                                            value={day.toString()}
                                            fontColor={isSelected ? theme.colors.primary[50] : theme.colors.primary[500]}
                                        />
                                    </Flex>
                                }}
                            </Pressable>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}