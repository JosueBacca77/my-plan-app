import { StudentProps } from "./types";
import useStudentsStore from "../../useStudentsStore";
import { Flex } from "native-base";
import LeftBackArrow from "../../../../../components/LeftBackArrow/LeftBackArrow";
import StudentInfo from "./studentInfo/StudentInfo";


export default function Student(studentProps: StudentProps) {
  const { navigation, route } = studentProps;
  const { studentId } = route.params;

  const student = useStudentsStore(state=> state.students.find(student => student.id === studentId));

  const handleGoBack =()=>{
    navigation.pop()
  }

  return (
    <Flex flex={1}>
      <StudentInfo student={student} />
      <LeftBackArrow onPress={handleGoBack}/>
    </Flex>
  )
}  