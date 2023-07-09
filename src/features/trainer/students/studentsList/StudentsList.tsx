import { FlatList } from "native-base";
import StudentItem from "./studentItem/StudentItem";
import { useState } from "react";
import MainContainer from "../../../../components/MainContainer/MainContainer";
import useStudentsStore from "../useStudentsStore";
import { ReactNavigationProps } from "../../../../lib/ReactNavigation/types";


export default function StudentsList(studentsNavigationProp: ReactNavigationProps) {

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
                        image={item.image}
                        id={item.id.toString()}
                        handleSelectStudent={handleSelectStudent}
                    />
                )}
            />
        </MainContainer>
    )
}