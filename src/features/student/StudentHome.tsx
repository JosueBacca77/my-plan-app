
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { useTheme } from "native-base";
import StudentPlans from "./plans/StudentPlans";
import useStudentStore from "./useStudentStore";

interface Props {
    // add any additional props here
}

type RootDrawerParamList = {
    Students: undefined;
    // Profile: { userId: string };
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const StudentHome: React.FC<Props> = (props) => {

    const theme = useTheme()
    const { setStudent } = useStudentStore();
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
            description: '3/15',
            days: [1, 2]
        },
        {
            id: '2',
            exersice: exercises[1],
            description: '4/15 5"',
            days: [2]

        },
        {
            id: '3',
            exersice: exercises[2],
            description: '4/15 en colchoneta',
            days: [3]

        },
    ]

    const planExercises2 = [
        {
            id: '3',
            exersice: exercises[0],
            description: '4/10',
            days: [2, 3]
        },
        {
            id: '4',
            exersice: exercises[1],
            description: '3/12',
            days: [1, 3]

        },
        {
            id: '5',
            exersice: exercises[2],
            description: '3/10 + 5" arriba',
            days: [1]
        },
    ]

    const planExercises3 = [
        {
            id: '6',
            exersice: exercises[0],
            description: '4/12 + 5"',
            days: [1]
        },
        {
            id: '7',
            exersice: exercises[1],
            description: '3/15"',
            days: [2]
        },
        {
            id: '8',
            exersice: exercises[2],
            description: '4/15 en colchoneta + 20" a la mitad',
            days: [3]
        },
    ]

    const planExercises4 = [
        {
            id: '9',
            exersice: exercises[0],
            description: '4/10',
            days: [1, 2]
        },
        {
            id: '10',
            exersice: exercises[1],
            description: '3/12',
            days: [2, 3]
        },
        {
            id: '11',
            exersice: exercises[2],
            description: '3/10 + 5" arriba',
            days: [3]
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
        target: 'Composición corporal',
        muscularGroups: muscularGroupsPlan1,
        current: true
    }

    const plan2 = {
        id: '2',
        fromDate: '18/07/2022',
        toDate: '15/08/2022',
        target: 'Fuerza',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const plan3 = {
        id: '3',
        fromDate: '16/08/2022',
        toDate: '21/09/2022',
        target: 'Pérdida de peso',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const plan4 = {
        id: '4',
        fromDate: '15/06/2022',
        toDate: '14/07/2022',
        target: 'Resistencia',
        muscularGroups: muscularGroupsPlan2,
        current: true
    }

    const plan5 = {
        id: '5',
        fromDate: '18/07/2022',
        toDate: '15/08/2022',
        target: 'Deporte',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const plan6 = {
        id: '6',
        fromDate: '16/08/2022',
        toDate: '21/09/2022',
        target: 'Aptitud funcional',
        muscularGroups: muscularGroupsPlan2,
        current: false
    }

    const plan7 = {
        id: '7',
        fromDate: '16/08/2022',
        toDate: '21/09/2022',
        target: 'Salud general',
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
        plans: [plan1, plan2, plan3, plan4, plan5, plan6, plan7]
    }

    useEffect(() => {
        setStudent(student1);
    }, [setStudent]);

    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: theme.colors.white, // Change this color for the header icon,
                drawerActiveBackgroundColor: theme.colors.primary[500],
                drawerActiveTintColor: theme.colors.primary[50],
                headerTitleStyle: {
                    color: theme.colors.white,
                },
                headerStyle: {
                    backgroundColor: theme.colors.primary[500]
                },
            }}
        >
            <Drawer.Screen name='Planes' component={StudentPlans} />
        </Drawer.Navigator>
    )
}

export default StudentHome;