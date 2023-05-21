import { FlatList } from "native-base";
import { StudentsListProps } from "./types";
import StudentItem from "./studentItem/StudentItem";
import { StyleSheet } from "react-native";

export default function StudentsList(studentsListProps: StudentsListProps) {

    const { students } = studentsListProps;

    return (
        <FlatList
        // style={styles.studentsList}
            data={students}
            // numColumns={1}
            //columnWrapperStyle={styles.columnWrapper}
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

// const styles = StyleSheet.create({
//     studentsList: {
//         flex: 1,
//         backgroundColor:'red'
//     },
// });