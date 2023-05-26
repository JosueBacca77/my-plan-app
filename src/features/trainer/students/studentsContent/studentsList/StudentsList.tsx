import { FlatList } from "native-base";
import StudentItem from "./studentItem/StudentItem";
import { useState } from "react";
import { StudentsListProps } from "./types";
import MainContainer from "../../../../../components/MainContainer/MainContainer";
import useStudentsStore from '../../useStudentsStore';


export default function StudentsList(studentsNavigationProp: StudentsListProps) {

    const { navigation } = studentsNavigationProp;

    const { students } = useStudentsStore();

    const [studentId, setStudentId] = useState<string>('');

    const handleSelectStudent = (id: string) => {
        setStudentId(id)
        navigation.push('Student', { studentId: id })
    };

    return (
        <MainContainer>
            <FlatList
                data={students}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <StudentItem
                        name={item.name}
                        age={item.age}
                        target={item.target}
                        image={item.image}
                        id={item.id.toString()}
                        handleSelectStudent={handleSelectStudent}
                    />
                )}
            />
        </MainContainer>
    )
}