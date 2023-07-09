import { Dimensions } from "react-native"

export default function getTargetColor(target: string) {

    switch (target) {
        case 'General Health':
            return ('#FC9834')
    
        case 'Functional Fitness':
            return ('#8EC916')
    
        case 'Sports':
            return ('#249C0B')
    
        case 'Endurance':
            return ('#1FA9B2')
    
        case 'Weight Loss':
            return ('#1465B1')
    
        case 'Strength':
            return ('#3E0D7D')
    
        case 'Body Composition':
            return ('#A70612')
    
        default:
            return ('#000')
    }
};

export const getHP = (percentage: number) => {
    return Dimensions.get('window').height * (percentage / 100);
};

export const getWP = (percentage: number) => {
    return Dimensions.get('window').width * (percentage / 100);
};