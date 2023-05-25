import { StudentProps } from "./types";
import StudentPersonalInformation from "./personalInfo/StudentPersonalInformation"
import { View } from "native-base";
import StudentTrainingInformation from "./trainingInfo/StudentTrainingInformation";


export default function Student(studentProps: StudentProps) {

  const { navigation } = studentProps;

  const student1 = { id: 1, name: "Bacca Josue", age: 25, target: 'Tonificar', height: 1.83, weight: 80, image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no" }
  const student2 = { id: 1, name: "Ramirez Juan", age: 23, target: 'Tonificar', height: 1.56, weight: 59, image: "https://lh3.googleusercontent.com/a/AAcHTtdhCT0F5SxaT4CN5Q_M8E29_8hvalV8y_Sj9M4xSg=s576-c-no" }

  const studentTraining = { medicalConditions:['Sobrepeso', 'Fractura en el tobillo izquierdo'], plans: [] }

  return (
    <View style={{flex:1, paddingTop:10}}>
      <StudentPersonalInformation
        name={student2.name}
        age={student2.age}
        target={student2.target}
        height={student2.height}
        weight={student2.weight}
        image={student2.image}
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