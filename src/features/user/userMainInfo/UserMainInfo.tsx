import { Flex, Image, View, useTheme } from "native-base";
import { UserMainInfoProps } from "./types";
import { IMAGE_SIZE } from "../../../configs/image";
import { FontVariant } from "../../../components/Text/types";
import Text from "../../../components/Text/Text";
import { StyleSheet } from "react-native";

export default function UserMainInfo(userMaininfoProps: UserMainInfoProps) {
    
    const { user } = userMaininfoProps;

    const theme = useTheme();

    const { image, name, email } = user;

    return (
        <Flex flexDirection='row' justifyContent='flex-start' alignItems='center'>
            <Image
                source={{
                    uri: image
                }}
                alt="Foto de perfil"
                size={IMAGE_SIZE.LG}
                borderRadius={50}
            />
            <View style={style.data}>
                <Text
                    value={name}
                    variant={FontVariant.TEXT_LG}
                />
                <Text
                    value={email}
                    variant={FontVariant.TEXT_SM}
                    fontColor={theme.colors.secondary[100]}
                    style={{paddingHorizontal:3}}
                />
            </View>
        </Flex>
    )
}

const style = StyleSheet.create({
    data:{
        paddingHorizontal: 10
    }
})