import { View } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 
import { LeftBackArrowProps } from "./types";

export default function LeftBackArrow(leftBackArrowProps: LeftBackArrowProps) {

    const { onPress } = leftBackArrowProps;

    return (
        <View
            style={{
                position: 'absolute',
                margin: 8
            }}
        >
            <AntDesign name="arrowleft" size={28} onPress={onPress} />
        </View>
    )
}