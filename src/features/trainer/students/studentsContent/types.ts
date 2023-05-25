import { StackNavigationProp } from "@react-navigation/stack";

export interface StudentsContentProps {
    students: any[]
}

type RootStackStudents = {
    Students: undefined;
    Student: { studentId: string };
};

export type StudentsNavigationProp = StackNavigationProp<
    RootStackStudents
>;