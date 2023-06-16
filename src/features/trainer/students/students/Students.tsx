import { createStackNavigator } from '@react-navigation/stack';
import useStudentsStore from '../useStudentsStore';
import { useEffect } from "react";
import StudentsList from './studentsList/StudentsList';
import Student from './student/Student';


export default function Students() {

    const Stack = createStackNavigator();
    const { setStudents } = useStudentsStore();
    const muscularGroups = [
        {
            id: '1',
            name: 'Pecho'
        },
        {
            id: '2',
            name: 'Espalda'
        },
        {
            id: '3',
            name: 'Hombros'
        },
        {
            id: '4',
            name: 'Cuádriceps'
        },
        {
            id: '5',
            name: 'Gluteos'
        },
        {
            id: '6',
            name: 'Isquiotibiales'
        },
        {
            id: '7',
            name: 'Abdomen'
        },
    ]

    const exercises = [
        {
            id: '1',
            name: 'Press de banca',
        },
        {
            id: '2',
            name: 'Press de banca inclinado',
        },
        {
            id: '3',
            name: 'Apertura en polea',
        },
    ]

    const planExercises1 = [
        {
            id: '1',
            exersice: exercises[0],
            description: '3/15'
        },
        {
            id: '2',
            exersice: exercises[1],
            description: '4/15 5"'
        },
        {
            id: '3',
            exersice: exercises[2],
            description: '4/15 en colchoneta'
        },
    ]

    const planExercises2 = [
        {
            id: '3',
            exersice: exercises[0],
            description: '4/10'
        },
        {
            id: '4',
            exersice: exercises[1],
            description: '3/12'
        },
        {
            id: '5',
            exersice: exercises[2],
            description: '3/10 + 5" arriba'
        },
    ]

    const planExercises3 = [
        {
            id: '6',
            exersice: exercises[0],
            description: '4/12 + 5"'
        },
        {
            id: '7',
            exersice: exercises[1],
            description: '3/15"'
        },
        {
            id: '8',
            exersice: exercises[2],
            description: '4/15 en colchoneta + 20" a la mitad'
        },
    ]

    const planExercises4 = [
        {
            id: '9',
            exersice: exercises[0],
            description: '4/10'
        },
        {
            id: '10',
            exersice: exercises[1],
            description: '3/12'
        },
        {
            id: '11',
            exersice: exercises[2],
            description: '3/10 + 5" arriba'
        },
    ]

    const muscularGroupsPlan1 = [
        {
            id: '1',
            muscularGroup: muscularGroups[0],//pecho
            exercises: planExercises1,
        },
        {
            id: '2',
            muscularGroup: muscularGroups[1],//espalda
            exercises: planExercises2
        },
    ]

    const muscularGroupsPlan2 = [
        {
            id: '3',
            muscularGroup: muscularGroups[0],//pecho
            exercises: planExercises3,
        },
        {
            id: '4',
            muscularGroup: muscularGroups[1],//espalda
            exercises: planExercises4
        },
    ]

    const plan1 = {
        id: '1',
        fromDate: '15/06/2022',
        toDate: '14/07/2022',
        target: 'Tonificar',
        muscularGroups: muscularGroupsPlan1,
        current: true
    }

    const plan2 = {
        id: '2',
        fromDate: '18/07/2022',
        toDate: '15/08/2022',
        target: 'Tonificar',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const plan3 = {
        id: '3',
        fromDate: '16/08/2022',
        toDate: '21/09/2022',
        target: 'Tonificar',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const student1 = {
        id: '1',
        name: "Bacca Josue",
        age: 25,
        target: 'Tonificar',
        height: 1.83,
        weight: 80,
        image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no",
        medicalConditions: ['Sobrepeso', 'Fractura en el tobillo izquierdo'],
        plans: [plan1, plan2, plan3]
    }

    useEffect(() => {
        const students = [
            student1,
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
            <Stack.Screen name="Students"
                component={StudentsList} 
            />
            <Stack.Screen name="Student"
                component={Student}
            />
        </Stack.Navigator>
    )
}