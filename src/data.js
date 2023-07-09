const muscularGroups = [
    {
        id: '1',
        name: 'Chest'
    },
    {
        id: '2',
        name: 'Back'
    },
    {
        id: '3',
        name: 'Shoulders'
    },
    {
        id: '4',
        name: 'Quadriceps'
    },
    {
        id: '5',
        name: 'Glutes'
    },
    {
        id: '6',
        name: 'Hamstrings'
    },
    {
        id: '7',
        name: 'Abdomen'
    },
]

const exercises = [
    {
        id: '1',
        name: 'Bench Press',
    },
    {
        id: '2',
        name: 'Incline Bench Press',
    },
    {
        id: '3',
        name: 'Cable Fly',
    },
]

const planExercises1 = [
    {
        id: '1',
        exercise: exercises[0],
        description: '3 sets of 15 reps',
        days: [1, 2]
    },
    {
        id: '2',
        exercise: exercises[1],
        description: '4 sets of 15 reps, 5" rest',
        days: [2]
    },
    {
        id: '3',
        exercise: exercises[2],
        description: '4 sets of 15 reps on a mat',
        days: [3]
    },
]

const planExercises2 = [
    {
        id: '3',
        exercise: exercises[0],
        description: '4 sets of 10 reps',
        days: [2, 3]
    },
    {
        id: '4',
        exercise: exercises[1],
        description: '3 sets of 12 reps',
        days: [1, 3]
    },
    {
        id: '5',
        exercise: exercises[2],
        description: '3 sets of 10 reps + 5" hold at the top',
        days: [1]
    },
]

const planExercises3 = [
    {
        id: '6',
        exercise: exercises[0],
        description: '4 sets of 12 reps + 5" rest',
        days: [1]
    },
    {
        id: '7',
        exercise: exercises[1],
        description: '3 sets of 15 reps',
        days: [2]
    },
    {
        id: '8',
        exercise: exercises[2],
        description: '4 sets of 15 reps on a mat + 20" hold at the midpoint',
        days: [3]
    },
]

const planExercises4 = [
    {
        id: '9',
        exercise: exercises[0],
        description: '4 sets of 10 reps',
        days: [1, 2]
    },
    {
        id: '10',
        exercise: exercises[1],
        description: '3 sets of 12 reps',
        days: [2, 3]
    },
    {
        id: '11',
        exercise: exercises[2],
        description: '3 sets of 10 reps + 5" hold at the top',
        days: [3]
    },
]

const muscularGroupsPlan1 = [
    {
        id: '1',
        muscularGroup: muscularGroups[0], // Chest
        exercises: planExercises1,
    },
    {
        id: '2',
        muscularGroup: muscularGroups[1], // Back
        exercises: planExercises2
    },
]

const muscularGroupsPlan2 = [
    {
        id: '3',
        muscularGroup: muscularGroups[0], // Chest
        exercises: planExercises3,
    },
    {
        id: '4',
        muscularGroup: muscularGroups[1], // Back
        exercises: planExercises4
    },
]

const plan1 = {
    id: '1',
    fromDate: '15/06/2022',
    toDate: '14/07/2022',
    target: 'Body Composition',
    muscularGroups: muscularGroupsPlan1,
    current: true
}

const plan2 = {
    id: '2',
    fromDate: '18/07/2022',
    toDate: '15/08/2022',
    target: 'Strength',
    muscularGroups: muscularGroupsPlan2,
    current: false
}

const plan3 = {
    id: '3',
    fromDate: '16/08/2022',
    toDate: '21/09/2022',
    target: 'Weight Loss',
    muscularGroups: muscularGroupsPlan2,
    current: false
}

const plan4 = {
    id: '4',
    fromDate: '15/06/2022',
    toDate: '14/07/2022',
    target: 'Endurance',
    muscularGroups: muscularGroupsPlan2,
    current: true
}

const plan5 = {
    id: '5',
    fromDate: '18/07/2022',
    toDate: '15/08/2022',
    target: 'Sports',
    muscularGroups: muscularGroupsPlan2,
    current: false
}

const plan6 = {
    id: '6',
    fromDate: '16/08/2022',
    toDate: '21/09/2022',
    target: 'Functional Fitness',
    muscularGroups: muscularGroupsPlan2,
    current: false
}

const plan7 = {
    id: '7',
    fromDate: '16/08/2022',
    toDate: '21/09/2022',
    target: 'General Health',
    muscularGroups: muscularGroupsPlan2,
    current: false
}

export const student1 = {
    id: '1',
    name: "Josue Bacca",
    age: 25,
    target: 'Body Composition',
    height: 1.83,
    weight: 80,
    image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no",
    medicalConditions: ['Overweight', 'Fracture in the left ankle'],
    plans: [plan1, plan2, plan3, plan4, plan5, plan6, plan7]
}


export const trainerUser = {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    name: 'Cristian Herrera',
    email: 'crist_herrera_242423@gmail.com'
}

export const studentUser = {
    image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no",
    name: 'Josue Bacca',
    email: 'josuemanuelbacca@gmail.com'
}