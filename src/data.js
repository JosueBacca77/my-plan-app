export const muscularGroups = [
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

export const exercises = [
    {
      id: '1',
      name: 'Bench Press',
      muscularGroup: muscularGroups[0] // Chest
    },
    {
      id: '2',
      name: 'Incline Bench Press',
      muscularGroup: muscularGroups[0] // Chest
    },
    {
      id: '3',
      name: 'Cable Fly',
      muscularGroup: muscularGroups[0] // Chest
    },
    {
      id: '4',
      name: 'Deadlift',
      muscularGroup: muscularGroups[1] // Back
    },
    {
      id: '5',
      name: 'Pull-ups',
      muscularGroup: muscularGroups[1] // Back
    },
    {
      id: '6',
      name: 'Bent-Over Rows',
      muscularGroup: muscularGroups[1] // Back
    },
    {
      id: '7',
      name: 'Military Press',
      muscularGroup: muscularGroups[2] // Shoulders
    },
    {
      id: '8',
      name: 'Arnold Press',
      muscularGroup: muscularGroups[2] // Shoulders
    },
    {
      id: '9',
      name: 'Lateral Raises',
      muscularGroup: muscularGroups[2] // Shoulders
    },
    {
      id: '10',
      name: 'Squat',
      muscularGroup: muscularGroups[3] // Quadriceps
    },
    {
      id: '11',
      name: 'Leg Press',
      muscularGroup: muscularGroups[3] // Quadriceps
    },
    {
      id: '12',
      name: 'Lunges',
      muscularGroup: muscularGroups[3] // Quadriceps
    },
    {
      id: '13',
      name: 'Hip Thrusts',
      muscularGroup: muscularGroups[4] // Glutes
    },
    {
      id: '14',
      name: 'Glute Bridges',
      muscularGroup: muscularGroups[4] // Glutes
    },
    {
      id: '15',
      name: 'Sumo Deadlift',
      muscularGroup: muscularGroups[4] // Glutes
    },
    {
      id: '16',
      name: 'Romanian Deadlift',
      muscularGroup: muscularGroups[5] // Hamstrings
    },
    {
      id: '17',
      name: 'Hamstring Curls',
      muscularGroup: muscularGroups[5] // Hamstrings
    },
    {
      id: '18',
      name: 'Good Mornings',
      muscularGroup: muscularGroups[5] // Hamstrings
    },
    {
      id: '19',
      name: 'Crunches',
      muscularGroup: muscularGroups[6] // Abdomen
    },
    {
      id: '20',
      name: 'Plank',
      muscularGroup: muscularGroups[6] // Abdomen
    },
    {
      id: '21',
      name: 'Russian Twist',
      muscularGroup: muscularGroups[6] // Abdomen
    },
  ]; 
  
  
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
    // Additional exercises for Chest
    {
      id: '4',
      exercise: exercises[3],
      description: '3 sets of 12 reps',
      days: [1, 3]
    },
  ];
  
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
    // Additional exercises for Back
    {
      id: '6',
      exercise: exercises[3],
      description: '4 sets of 10 reps',
      days: [1, 2]
    },
  ];
  
  const planExercises3 = [
    // Add exercises for Shoulders
    {
      id: '7',
      exercise: exercises[3],
      description: '3 sets of 12 reps',
      days: [1, 2, 3]
    },
    {
      id: '8',
      exercise: exercises[4],
      description: '4 sets of 8 reps',
      days: [2]
    },
    {
      id: '9',
      exercise: exercises[5],
      description: '3 sets of 10 reps',
      days: [1, 3]
    },
  ];
  
  const planExercises4 = [
    // Add exercises for Quadriceps
    {
      id: '10',
      exercise: exercises[4],
      description: '4 sets of 10 reps',
      days: [1, 3]
    },
    {
      id: '11',
      exercise: exercises[5],
      description: '3 sets of 12 reps',
      days: [2, 3]
    },
    {
      id: '12',
      exercise: exercises[6],
      description: '4 sets of 15 reps',
      days: [1]
    },
  ];
  
  const planExercises5 = [
    // Add exercises for Glutes
    {
      id: '13',
      exercise: exercises[6],
      description: '3 sets of 12 reps',
      days: [1, 2]
    },
    {
      id: '14',
      exercise: exercises[7],
      description: '4 sets of 10 reps',
      days: [2]
    },
    {
      id: '15',
      exercise: exercises[8],
      description: '3 sets of 15 reps',
      days: [1, 3]
    },
  ];
  
  const planExercises6 = [
    // Add exercises for Hamstrings
    {
      id: '16',
      exercise: exercises[7],
      description: '4 sets of 12 reps',
      days: [1, 2]
    },
    {
      id: '17',
      exercise: exercises[8],
      description: '3 sets of 10 reps',
      days: [3]
    },
    {
      id: '18',
      exercise: exercises[9],
      description: '3 sets of 15 reps',
      days: [1]
    },
  ];
  
  const planExercises7 = [
    // Add exercises for Abdomen
    {
      id: '19',
      exercise: exercises[9],
      description: '3 sets of 15 reps',
      days: [1, 2]
    },
    {
      id: '20',
      exercise: exercises[10],
      description: '4 sets of 12 reps',
      days: [2, 3]
    },
    {
      id: '21',
      exercise: exercises[11],
      description: '3 sets of 10 reps',
      days: [1, 3]
    },
  ];
    
  const muscularGroupsPlan1 = [
    {
      id: '1',
      muscularGroup: muscularGroups[0], // Chest
      exercises: planExercises1
    },
    {
      id: '2',
      muscularGroup: muscularGroups[1], // Back
      exercises: planExercises2
    },
    {
      id: '3',
      muscularGroup: muscularGroups[2], // Shoulders
      exercises: planExercises3
    },
    {
      id: '4',
      muscularGroup: muscularGroups[3], // Quadriceps
      exercises: planExercises4
    },
    {
      id: '5',
      muscularGroup: muscularGroups[4], // Glutes
      exercises: planExercises5
    },
    {
      id: '6',
      muscularGroup: muscularGroups[5], // Hamstrings
      exercises: planExercises6
    },
    {
      id: '7',
      muscularGroup: muscularGroups[6], // Abdomen
      exercises: planExercises7
    }
  ];

  const plan1 = {
    id: '1',
    fromDate: '15/06/2022',
    toDate: '14/07/2022',
    target: 'Body Composition',
    muscularGroups: muscularGroupsPlan1,
    current: true
  };

export const student1 = {
    id: '1',
    name: "Josue Bacca",
    age: 25,
    target: 'Body Composition',
    height: 1.83,
    weight: 80,
    image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no",
    medicalConditions: ['Overweight', 'Fracture in the left ankle'],
    plans: [plan1]
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