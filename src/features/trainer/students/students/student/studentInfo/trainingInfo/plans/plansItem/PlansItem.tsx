import { PlansItemProps } from "./types";
import { Pressable, Box, Flex } from "native-base";
import Text from "../../../../../../../../../components/Text/Text";
import getTargetColor from "../../../../../../../../../utils/helpers";


export default function PlansItem(plansItemProps: PlansItemProps) {

    const { plan, onPressPlan } = plansItemProps;

    const handleOnPress=()=>{
        if (onPressPlan) onPressPlan(plan);     
    };

    return (
        <Box alignItems="center" marginRight={4} marginBottom={4} flex={1} key={plan.id} >
            <Pressable maxW="96" onPress={handleOnPress}>
                {({
                    isHovered,
                    isFocused,
                    isPressed
                }) => {
                    return <Box
                        bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"}
                        style={{
                            transform: [{
                                scale: isPressed ? 0.96 : 1
                            }],
                            paddingHorizontal: 4,
                            paddingBottom: 5,
                            paddingTop: 3,
                            borderTopColor: getTargetColor(plan.target),
                            borderTopWidth: 4,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,

                        }} rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300"
                        width={100}
                    >
                        <Flex alignItems="center" justifyContent="space-between">
                            <Text value={plan.fromDate} />
                            <Text value="al" />
                            <Text value={plan.toDate} />
                        </Flex>
                    </Box>
                }}
            </Pressable>
        </Box>
    )
}