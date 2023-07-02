import { InputTextVariant } from "../InputText/types";

export interface FormikInputProps {
    name: string,
    placeholder: string;
    variant?: InputTextVariant;
    size?: string
}