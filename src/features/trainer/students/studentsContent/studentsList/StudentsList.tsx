import { FlatList } from "native-base";
import { StudentsListProps } from "./types";
import StudentItem from "./studentItem/StudentItem";
import { useState } from "react";

export default function StudentsList(studentsListProps: StudentsListProps) {

    const { students } = studentsListProps;

    const [studentId, setStudentId] = useState<string>('');

    const handleSelectStudent = (id: string) => {
        setStudentId(id)
    }

    return (
        <FlatList
            data={students}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <StudentItem
                    name={item.name}
                    age={item.age}
                    target={item.target}
                    image={item.image}
                    id={item.id}
                    handleSelectStudent={handleSelectStudent}
                />
            )}
        />
    )
}