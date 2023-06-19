import { PlansItemProps } from "./types";
import { Pressable, Box, Flex } from "native-base";
import Text from "../../../../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../../../../components/Text/types";
import getTargetColor from "../../../../../../../../../utils/helpers";


export default function PlansItem(plansItemProps: PlansItemProps) {

    const { plan } = plansItemProps;

    return (
        <Box alignItems="center" marginRight={4} marginBottom={4} flex={1} key={plan.id} >
            <Pressable maxW="96">
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
                            }]
                        }} rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300"
                        p="3"
                        paddingTop={2}
                        width={150}
                    >
                        <Flex alignItems="center" justifyContent="space-between" >
                            <Text 
                                value={plan.target} 
                                fontColor={getTargetColor(plan.target)}
                                style={{height:26, textAlign:'center'}}
                            />
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