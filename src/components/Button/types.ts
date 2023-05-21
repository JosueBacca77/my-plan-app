import { BUTTON_TYPE } from "../../configs/enums";

export interface ButtonProps {
    text:string,
    onPress:any,
    variant: BUTTON_TYPE,
    width?:number
}
