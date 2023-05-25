import { Image, View } from "native-base";
import { StudentItemProps } from "./types";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import Text from "../../../../../../components/Text/Text";
import { IMAGE_SIZE } from "../../../../../../configs/image";
import { FontVariant } from "../../../../../../components/Text/types";

export default function StudentItem(studentItemProps: StudentItemProps) {

    const { id, image, name, age, target, handleSelectStudent } = studentItemProps;

    const onPressStudent = () => {
        handleSelectStudent(id);
    };

    return (
        <TouchableNativeFeedback onPress={onPressStudent}>
            <View
                style={styles.item}
            >
                <View style={styles.imageAndName}>
                    <Image
                        source={{
                            uri: image
                        }}
                        alt="Foto de perfil"
                        size={IMAGE_SIZE.XS}
                        borderRadius={50}
                    />
                    <Text
                        value={name}
                        variant={FontVariant.TEXT_SM}
                        style={styles.name}
                    />
                </View>
                <Text
                    value={target}
                    variant={FontVariant.TEXT_SM}
                    style={styles.target}
                />
                <Text
                    value={age.toString()}
                    variant={FontVariant.TEXT_SM}
                />
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        height: 76
    },
    imageAndName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        marginLeft: 10,
        width: 110,
    },
    target: {
        width: 110
    },
});