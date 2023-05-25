import { useTheme } from "native-base";

export default function getTargetColor(target: string) {
    const theme = useTheme();

    switch (target) {

        case 'Composición corporal y estética':
            return (theme.colors.secondary[100])

        case 'Aptitud funcional':
            return (theme.colors.secondary[200])

        case 'Salud general':
            return (theme.colors.secondary[300])

        case 'Resistencia':
            return (theme.colors.secondary[400])

        case 'Fortalecer':
            return (theme.colors.secondary[500])
        
        case 'Deporte':
            return (theme.colors.secondary[600])

        case 'Tonificar':
            return (theme.colors.secondary[700])

        default:
            return (theme.colors.secondary[200])
    }
}