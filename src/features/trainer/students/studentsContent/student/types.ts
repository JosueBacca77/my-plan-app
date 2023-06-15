import { StudentsNavigationProps } from "../types";

export interface StudentProps {
    navigation: StudentsNavigationProps;
    route: {
        params: {
          studentId: string;
        };
      };
};