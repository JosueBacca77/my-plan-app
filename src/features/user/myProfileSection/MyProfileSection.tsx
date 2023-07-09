import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../../../components/Text/Text";
import { Flex, View } from "native-base";
import { FontVariant } from "../../../components/Text/types";
import { MyProfileSectionProps } from "./types";
import { student1 } from "../../../data";
import { styles } from "../MyProfile";
import getTargetColor from "../../../utils/helpers";

export default function MyProfileSection(myProfileSectionProps: MyProfileSectionProps) {

    const { section, index, handlePressSection } = myProfileSectionProps;

    const [layoutHeight, setlayoutHeight] = useState<number | undefined>(0);

    const student = student1;

    useEffect(() => {
        if (section.opened) {
            setlayoutHeight(undefined);
        } else {
            setlayoutHeight(0)
        }
    }, [section.opened])

    return (
        <TouchableOpacity key={section.name} style={styles.item} onPress={() => handlePressSection(index)}>
            <Text key={section.name} value={section.name} variant={FontVariant.TEXT_SM} />
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden'
                }}
            >
                {
                    section.id === 'personal_info' &&
                    <View style={styles.itemContent}>
                        <Flex flexDirection='row' marginBottom={1}>
                            <Text value={student.target} fontColor={getTargetColor(student.target)}/>
                        </Flex>
                        <Flex flexDirection='row' marginBottom={1}>
                            <Text value={student.age.toString()} />
                            <Text value={' years old'} />
                        </Flex>
                        <Flex flexDirection='row' marginBottom={1}>
                            <Text value={student.height.toString()} />
                            <Text value={' meters'} />
                        </Flex>
                        <Flex flexDirection='row'>
                            <Text value={student.weight.toString()} />
                            <Text value={' kg'} />
                        </Flex>
                    </View>
                }
                {
                    section.id === 'medical_conditions' &&
                    <View style={styles.itemContent}>
                        {
                            student.medicalConditions.map(mc => (
                                <Flex marginBottom={1}>
                                    <Text key={mc} value={mc} />
                                </Flex>
                            ))
                        }
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}