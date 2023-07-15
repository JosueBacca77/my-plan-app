import { Image, View, useTheme } from "native-base";
import { StudentPersonalInformationProps } from "./types";
import { StyleSheet } from "react-native";
import { IMAGE_SIZE } from "../../../../../../configs/image";
import Text from "../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../components/Text/types";
import getTargetColor from "../../../../../../utils/helpers";


export default function StudentPersonalInformation(studentPersonalInformationProps: StudentPersonalInformationProps) {

    const { name, image, target, age, weight, height } = studentPersonalInformationProps;

    const theme = useTheme();

    return (
        <View style={styles.center}>
            <Image
                source={{
                    uri: image
                }}
                alt="Foto de perfil"
                size={IMAGE_SIZE.LG}
                borderRadius={50}
            />
            <Text
                value={name}
                variant={FontVariant.TEXT_LG}
            />
            <Text
                value={target}
                variant={FontVariant.TEXT_SM}
                fontColor={getTargetColor(target)}
            />
            <View style={styles.horizontal}>

                <View style={styles.center}>
                    <Text
                        value={age.toString()}
                        variant={FontVariant.TEXT_LG}
                    />
                    <Text
                        value='Age'
                        variant={FontVariant.TEXT_XS}
                    />
                </View>

                <View style={styles.center}>
                    <View style={styles.row}>
                        <Text
                            value={height.toString()}
                            variant={FontVariant.TEXT_LG}
                        />
                        <Text
                            value='m'
                            variant={FontVariant.TEXT_XS}
                            style={{ marginBottom: 4, marginLeft: 2 }}
                        />
                    </View>

                    <Text
                        value='Height'
                        variant={FontVariant.TEXT_XS}
                    />
                </View>

                <View style={styles.center}>
                    <View style={styles.row}>

                        <Text
                            value={weight.toString()}
                            variant={FontVariant.TEXT_LG}
                        />
                        <Text
                            value='kg'
                            variant={FontVariant.TEXT_XS}
                            style={{ marginBottom: 4, marginLeft: 2 }}
                        />
                    </View>
                    <Text
                        value='Weight'
                        variant={FontVariant.TEXT_XS}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    horizontal: {
        flexDirection: 'row',
        marginTop: 20,
        width: 260,
        justifyContent: 'space-between'
    }
})