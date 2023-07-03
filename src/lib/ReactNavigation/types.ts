export interface ReactNavigationProps {
    navigation:{
        push: (screen: string, params?: Record<string, any>) => void;
        pop: () => void;
    }
}