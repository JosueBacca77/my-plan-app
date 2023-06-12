import { HStack, View, useTheme } from "native-base";
import { StudentTrainingInformationProps } from "./types";
import Text from "../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../components/Text/types";
import TrainingSection from "./trainingSection/TrainingSection";
import SecondaryButton from "../../../../../../components/SecondaryButton/SecondaryButton";
import LastPlans from "./plans/LastPlans";


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
                <LastPlans plans={plans}/>
                <HStack justifyContent="space-evenly" padding={6}>
                    <SecondaryButton
                        text="Agregar"
                        onPress={() => console.log('')}
                    />
                    <SecondaryButton
                        text="Ver todos"
                        onPress={() => console.log('')}
                    />
                </HStack>
            </TrainingSection>
        </View>
    )
}