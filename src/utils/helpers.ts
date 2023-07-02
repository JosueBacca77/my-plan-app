import { Dimensions } from "react-native"

export default function getTargetColor(target: string) {

    switch (target) {
        case 'Salud general':
            return ('#FC9834')

        case 'Aptitud funcional':
            return ('#8EC916')

        case 'Deporte':
            return ('#249C0B')

        case 'Resistencia':
            return ('#1FA9B2')

        case 'Pérdida de peso':
            return ('#1465B1')

        case 'Fuerza':
            return ('#3E0D7D')

        case 'Composición corporal':
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