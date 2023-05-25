import { Image, View, useTheme } from "native-base";
import { StudentTrainingInformationProps } from "./types";
import { IMAGE_SIZE } from "../../../../../../configs/image";
import Text from "../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../components/Text/types";
import { StyleSheet } from "react-native";
import TrainingSection from "./trainingSection/TrainingSection";


export default function StudentTrainingInformation(studentTrainingInformationProps: StudentTrainingInformationProps) {

    const { medicalConditions, plans } = studentTrainingInformationProps;

    const theme = useTheme();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.primary[200],
                marginTop: 20,
            }}
        >
            {
                medicalConditions.length &&
                <TrainingSection
                    title="Condiciones médicas"
                >
                    {medicalConditions.map((condition: string) => (
                        <Text
                            value={condition}
                            variant={FontVariant.TEXT_SM}
                            fontColor={theme.colors.primary[50]}
                        />
                    ))}
                </TrainingSection>
            }
            <TrainingSection
                title="Planes"
            >
            </TrainingSection>
        </View>
    )
}