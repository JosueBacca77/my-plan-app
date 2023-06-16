import { Flex, useTheme } from "native-base";
import Text from "../../../../../../../../components/Text/Text";
import { FontVariant } from "../../../../../../../../components/Text/types";
import { StyleSheet } from "react-native";
import { TrainingSectionProps } from "./types";

export default function TrainingSection(trainingSectionProps:TrainingSectionProps) {

    const { title, children, flex } = trainingSectionProps;

    const theme = useTheme();

    return (
        <Flex flex={flex} style={styles.trainingSection}>
            <Text
                value={title}
                variant={FontVariant.TEXT_XL}
                fontWeight="bold"
                fontColor={theme.colors.primary[50]}
                style={{ marginBottom: 10 }}
            />
            {children}
        </Flex>
    )
}

const styles = StyleSheet.create({
    trainingSection: {
        padding: 10
    },
})