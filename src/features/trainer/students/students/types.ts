export interface StudentsNavigationProps {
      push: (screen: string, params?: Record<string, any>) => void;
      pop: () => void;
  }
