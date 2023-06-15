import { StackNavigationProp } from "@react-navigation/stack";

// export interface StudentsContentProps {
//     students: any[]
// }

// type RootStackStudents = {
//     Students: undefined;
//     Student: { studentId: string };
// };

// export type StudentsNavigationProps = StackNavigationProp<
//     RootStackStudents
// >;

export interface StudentsNavigationProps {
    navigation: {
      push: (screen: string, params?: Record<string, any>) => void;
      // Other navigation-related properties and methods
      // You can add more specific types based on your requirements
    };
  }
