import { Flex, HStack, useTheme } from "native-base";
import { StudentTrainingInformationProps } from "./types";
import Text from "../../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../../components/Text/types";
import TrainingSection from "./trainingSection/TrainingSection";
import SecondaryButton from "../../../../../../../components/SecondaryButton/SecondaryButton";
import Plans from "./plans/Plans";


export default function StudentTrainingInformation(studentTrainingInformationProps: StudentTrainingInformationProps) {

    const { medicalConditions, plans } = studentTrainingInformationProps;
    const theme = useTheme();

    return (
        <Flex
            flex={1}
            style={{
                backgroundColor: theme.colors.secondary[100],
                marginTop: 20,
            }}
        >
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

            <TrainingSection
                title="Planes"
                flex={1}
            >
                <Plans plans={plans} />
                <HStack justifyContent="space-evenly" padding={6}>
                    <SecondaryButton
                        text="Nuevo plan"
                        onPress={() => console.log('')}
                    />
                </HStack>
            </TrainingSection>
        </Flex>
    )
}