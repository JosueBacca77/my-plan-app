import { HStack, IconButton, CloseIcon, Alert } from "native-base";
import { ToastAlertProps } from "./types";
import { MaterialIcons } from '@expo/vector-icons';
import Text from "../Text/Text";
import { FontVariant } from "../Text/types";


const ToastAlert = (toastAlertProps: ToastAlertProps) => {

    const {
        id,
        status,
        variant,
        title,
        description,
        isClosable,
        toast,

    } = toastAlertProps;

    const handleClose=()=>{
        toast.close(id);
    };

    return (
        <Alert
            status={status ? status : "info"}
            variant={variant}
            bg={variant === "error" ? "red.500" : "pink.100"}
            borderRadius={8}
            p={2}
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
        >
            <HStack space={2} alignItems="center">
                <MaterialIcons name="error" size={24} color="red" />
                <Text value={title} variant={FontVariant.TEXT_SM} />
            </HStack>
            {isClosable && (
                <IconButton
                    variant="unstyled"
                    icon={<CloseIcon size="3" color={variant === "solid" ? "white" : "darkText"} />}
                    onPress={handleClose}
                />
            )}
        </Alert>
    );
};

export default ToastAlert;
