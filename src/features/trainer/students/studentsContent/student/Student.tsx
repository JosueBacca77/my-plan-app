import { StudentProps } from "./types";
import StudentPersonalInformation from "./personalInfo/StudentPersonalInformation"
import { View } from "native-base";
import StudentTrainingInformation from "./trainingInfo/StudentTrainingInformation";
import { string } from "yup";


export default function Student(studentProps: StudentProps) {

  const { navigation } = studentProps;

  const student1 = { id: 1, name: "Bacca Josue", age: 25, target: 'Tonificar', height: 1.83, weight: 80, image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no" }
  const student2 = { id: 1, name: "Ramirez Juan", age: 23, target: 'Tonificar', height: 1.56, weight: 59, image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no" }

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

  const exersices = [
    {
      id: '1',
      name: 'Press de banca',
      muscularGroup: '1'
    },
    {
      id: '2',
      name: 'Press de banca inclinado',
      muscularGroup: '1'
    },
    {
      id: '3',
      name: 'Apertura en polea',
      muscularGroup: '1'
    },
  ]

  const planExercises1 = [
    {
      id: '1',
      exersice: exersices[0],
      description: '3/15'
    },
    {
      id: '2',
      exersice: exersices[1],
      description: '4/15 5"'
    },
    {
      id: '3',
      exersice: exersices[2],
      description: '4/15 en colchoneta'
    },
  ]

  const planExercises2 = [
    {
      id: '3',
      exersice: exersices[0],
      description: '4/10'
    },
    {
      id: '4',
      exersice: exersices[1],
      description: '3/12'
    },
    {
      id: '5',
      exersice: exersices[2],
      description: '3/10 + 5" arriba'
    },
  ]

  const planExercises3 = [
    {
      id: '6',
      exersice: exersices[0],
      description: '4/12 + 5"'
    },
    {
      id: '7',
      exersice: exersices[1],
      description: '3/15"'
    },
    {
      id: '8',
      exersice: exersices[2],
      description: '4/15 en colchoneta + 20" a la mitad'
    },
  ]

  const planExercises4 = [
    {
      id: '9',
      exersice: exersices[0],
      description: '4/10'
    },
    {
      id: '10',
      exersice: exersices[1],
      description: '3/12'
    },
    {
      id: '11',
      exersice: exersices[2],
      description: '3/10 + 5" arriba'
    },
  ]

  const muscularGroupsPlan1 = [
    {
      id: '1',
      muscularGroup:muscularGroups[0],//pecho
      exersices: planExercises1,
    },
    {
      id: '2',
      muscularGroup:muscularGroups[1],//espalda
      exersices: planExercises2
    },
  ]

  const muscularGroupsPlan2 = [
    {
      id: '3',
      muscularGroup:muscularGroups[0],//pecho
      exersices: planExercises3,
    },
    {
      id: '4',
      muscularGroup:muscularGroups[1],//espalda
      exersices: planExercises4
    },
  ]

  const plan1 = {
    id: 1,
    fromDate: '15/06/2022',
    toDate: '14/07/2022',
    student: student2,
    target: 'Tonificar',
    muscularGroups: muscularGroupsPlan1
  }

  const plan2 = {
    id: 2,
    fromDate: '18/07/2022',
    toDate: '15/08/2022',
    student: student2,
    target: 'Tonificar',
    muscularGroups: muscularGroupsPlan2
  }

  const plan3 = {
    id: 3,
    fromDate: '16/08/2022',
    toDate: '21/09/2022',
    student: student2,
    target: 'Tonificar',
    muscularGroups: muscularGroupsPlan2
  }

  const studentTraining = { 
    medicalConditions: ['Sobrepeso', 'Fractura en el tobillo izquierdo'],
    plans: [plan1, plan2, plan3]
   }

  return (
    <View style={{ flex: 1, paddingTop: 10 }}>
      <StudentPersonalInformation
        name={student2.name}
        age={student2.age}
        height={student2.height}
        weight={student2.weight}
        image={student2.image}
        target={plan2.target}
      />
      <StudentTrainingInformation
        medicalConditions={studentTraining.medicalConditions}
        plans={studentTraining.plans}
      />
    </View>
    // <Button
    //   text='volver'
    //   onPress={() => navigation.pop()}
    //   variant={BUTTON_TYPE.SUBMIT}
    //   width={100}
    // />
  )
}