import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from "react";
import Student from './student/Student';
import { student1 } from '../../../data';
import useStudentsStore from './useStudentsStore';
import StudentsList from './studentsList/StudentsList';


export default function Students() {

    const Stack = createStackNavigator();
    const { setStudents } = useStudentsStore();

    useEffect(() => {
        const students = [
            student1,
            { id: '2', name: "Ferreira Carla", age: 26, target: 'Reduce fat', height: 1.63, weight: 60, image: "https://wallpaperaccess.com/full/317503.jpg", medicalConditions: ['Hypertension'], plans: [] },
            { id: '3', name: "Albertinazi Juan", age: 19, target: 'Tone up', height: 1.93, weight: 86, image: "https://wallpaperaccess.com/full/317504.jpg", medicalConditions: [], plans: [] },
            { id: '4', name: "Acosta Alberto", age: 40, target: 'Condition', height: 1.83, weight: 80, image: "https://wallpaperaccess.com/full/317516.jpg", medicalConditions: [], plans: [] },
            { id: '5', name: "Falcone Jesus", age: 22, target: 'Reduce fat', image: "https://wallpaperaccess.com/full/317517.jpg", medicalConditions: ['Disc hernia'], plans: [] },
            { id: '6', name: "Martinez Fernanda", age: 36, target: 'General health', image: "https://wallpaperaccess.com/full/317507.jpg", medicalConditions: ['Disc hernia', 'High cholesterol'], plans: [] },
            { id: '7', name: "Bone Nicolas", age: 29, target: 'Tone up', image: "https://wallpaperaccess.com/full/317508.jpg", medicalConditions: [], plans: [] },
            { id: '8', name: "Ludueña Sebastián", age: 40, target: 'Condition', image: "https://wallpaperaccess.com/full/317509.jpg", medicalConditions: [], plans: [] },
            { id: '9', name: "Bou Pablo", age: 20, target: 'Reduce fat', image: "https://wallpaperaccess.com/full/317510.jpg", medicalConditions: [], plans: [] },
            { id: '10', name: "Agustino María Belen", age: 30, target: 'Reduce fat', image: "https://wallpaperaccess.com/full/317511.jpg", medicalConditions: [], plans: [] },
            { id: '11', name: "Reyna Juan Pablo", age: 25, target: 'Tone up', image: "https://wallpaperaccess.com/full/317512.jpg", medicalConditions: ['Scoliosis'], plans: [] },]
        setStudents(students);
    }, [setStudents]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Students list"
                component={StudentsList}
            />
            <Stack.Screen name="Student"
                component={Student}
            />
        </Stack.Navigator>
    )
}