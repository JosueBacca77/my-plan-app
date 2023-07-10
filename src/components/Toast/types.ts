import { useToast } from "native-base";

export interface ToastAlertProps {
    id: string;
    status: string;
    variant: string;
    title: string;
    description: string;
    isClosable: boolean;
    toast: ReturnType<typeof useToast>;
}