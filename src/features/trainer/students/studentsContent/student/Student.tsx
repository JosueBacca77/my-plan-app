import { StudentProps } from "./types";
import StudentInfo from "./studentInfo/StudentInfo";
import useStudentsStore from "../../useStudentsStore";


export default function Student(studentProps: StudentProps) {
  const { navigation, route } = studentProps;
  const { studentId } = route.params;

  const student = useStudentsStore(state=> state.students.find(student => student.id === studentId));

  return (
    <StudentInfo student={student} />
  )
}  