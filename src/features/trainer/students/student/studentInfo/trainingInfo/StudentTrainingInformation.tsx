import { Flex, HStack, useTheme } from "native-base";
import { StudentTrainingInformationProps } from "./types";
import TrainingSection from "./trainingSection/TrainingSection";
import Plans from "./plans/Plans";
import { MEDICAL_CONDITIONS } from "../../../../../../configs/constants/strings";
import Text from "../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../components/Text/types";
import SecondaryButton from "../../../../../../components/SecondaryButton/SecondaryButton";


export default function StudentTrainingInformation(studentTrainingInformationProps: StudentTrainingInformationProps) {

    const { medicalConditions, plans } = studentTrainingInformationProps;
    const theme = useTheme();

    return (
        <Flex
            flex={1}
            style={{
                backgroundColor: theme.colors.secondary[50],
                marginTop: 20,
            }}
        >
            {
                medicalConditions.length > 0 &&
                <TrainingSection
                    title={MEDICAL_CONDITIONS}
                >
                    {medicalConditions.map((condition: string, index: number) => (
                        <Text
                            key={index}
                            value={condition}
                            variant={FontVariant.TEXT_SM}
                            fontColor={theme.colors.primary[50]}
                        />
                    ))}
                </TrainingSection>
            }
            {
                plans.length > 0 &&
                <TrainingSection
                    title="Plans"
                    flex={1}
                >
                    <Plans plans={plans} />
                    <HStack justifyContent="space-evenly" padding={6}>
                        <SecondaryButton
                            text="New plan"
                            onPress={()=>console.log('')}
                        />
                    </HStack>
                </TrainingSection>
            }
        </Flex>
    )
}