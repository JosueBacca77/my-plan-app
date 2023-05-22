import { FlatList } from "native-base";
import { StudentsListProps } from "./types";
import StudentItem from "./studentItem/StudentItem";

export default function StudentsList(studentsListProps: StudentsListProps) {

    const { students } = studentsListProps;

    return (
        <FlatList
            data={students}
            renderItem={({ item }) => (
                <StudentItem 
                    name={item.name}
                    age={item.age}
                    target={item.target}
                    image={item.image}
                />
            )}
        />
    )
}