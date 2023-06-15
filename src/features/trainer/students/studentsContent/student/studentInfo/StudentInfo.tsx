import { View } from "native-base";
import { StudentInfoProps } from "./types";
import StudentPersonalInformation from "./personalInfo/StudentPersonalInformation";
import StudentTrainingInformation from "./trainingInfo/StudentTrainingInformation";
import Text from "../../../../../../components/Text/Text";

export default function StudentInfo(studentInfoProps: StudentInfoProps) {

    const { student } = studentInfoProps;

    const studentTarget =  student && student.plans.length > 0 ? student.plans[0].target : ''

    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            {
                student ?
                    <View>
                        <StudentPersonalInformation
                            name={student.name}
                            age={student.age}
                            height={student.height ?? 0}
                            weight={student.weight ?? 0}
                            image={student.image ?? ''}
                            target={studentTarget}
                        />
                        <StudentTrainingInformation
                            medicalConditions={student.medicalConditions}
                            plans={student.plans}
                        />
                    </View>
                    :
                    <Text
                        value='Error al cargar alumno'
                    />
            }
        </View>
    )
}