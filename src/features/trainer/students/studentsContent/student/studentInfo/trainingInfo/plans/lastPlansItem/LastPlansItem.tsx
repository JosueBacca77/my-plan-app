import { LastPlansItemProps } from "./types";
import { Pressable, Box, Flex } from "native-base";
import Text from "../../../../../../../../../components/Text/Text";


export default function LastPlansItem(lastPlansItemProps: LastPlansItemProps) {

    const { plan } = lastPlansItemProps;

    return (
        <Box alignItems="center">
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
                        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300"
                    >
                        <Flex alignItems="center" justifyContent="space-between" height={16}>
                            <Text value={plan.fromDate}/>
                            <Text value="al"/>
                            <Text value={plan.toDate}/>
                        </Flex>
                    </Box>
                }}
            </Pressable>
        </Box>
    )
}