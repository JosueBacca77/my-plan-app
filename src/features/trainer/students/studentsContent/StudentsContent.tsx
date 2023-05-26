import StudentsList from "./studentsList/StudentsList";
import { createStackNavigator } from '@react-navigation/stack';
import Student from "./student/Student";
import useStudentsStore from '../useStudentsStore';
import { useEffect } from "react";


export default function StudentsContent() {

    const Stack = createStackNavigator();
    const { setStudents } = useStudentsStore();

    useEffect(() => {
        const students = [
            { id: '1', name: "Bacca Josue", age: 25, target: 'Tonificar', height: 1.83, weight: 80, image: "https://wallpaperaccess.com/full/317502.jpg", medicalConditions:['Sobrepeso', 'Fractura de tobillo derecho'], plans:[] },
            { id: '2', name: "Romero Carla", age: 26, target: 'Disminuir grasa', height: 1.63, weight: 60, image: "https://wallpaperaccess.com/full/317503.jpg", medicalConditions:['Hipertensión'], plans:[] },
            { id: '3', name: "Albertinazi Juan", age: 19, target: 'Tonificar', height: 1.93, weight: 86, image: "https://wallpaperaccess.com/full/317504.jpg", medicalConditions:[], plans:[] },
            { id: '4', name: "Acosta Alberto", age: 40, target: 'Acondicionar', height: 1.83, weight: 80, image: "https://wallpaperaccess.com/full/317516.jpg", medicalConditions:[], plans:[] },
            { id: '5', name: "Falcone Jesus", age: 22, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317517.jpg", medicalConditions:['Hernia de disco'], plans:[] },
            { id: '6', name: "Martinez Fernanda", age: 36, target: 'Salud general', image: "https://wallpaperaccess.com/full/317507.jpg", medicalConditions:['Hernia de disco', 'Colesterol alto'], plans:[] },
            { id: '7', name: "Bone Nicolas", age: 29, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317508.jpg", medicalConditions:[], plans:[] },
            { id: '8', name: "Ludueña Sebastián", age: 40, target: 'Acondicionar', image: "https://wallpaperaccess.com/full/317509.jpg", medicalConditions:[], plans:[] },
            { id: '9', name: "Bou Pablo", age: 20, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317510.jpg", medicalConditions:[], plans:[] },
            { id: '10', name: "Agustino María Belen", age: 30, target: 'Disminuir grasa', image: "https://wallpaperaccess.com/full/317511.jpg", medicalConditions:[], plans:[] },
            { id: '11', name: "Reyna Juan Pablo", age: 25, target: 'Tonificar', image: "https://wallpaperaccess.com/full/317512.jpg", medicalConditions:['Escoriosis'], plans:[] },
        ]
    
        setStudents(students);
      }, [setStudents]); 

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Students" component={StudentsList} />
            <Stack.Screen name="Student" component={Student} />
        </Stack.Navigator>
    )
}