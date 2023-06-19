import MainContainer from "../../../components/MainContainer/MainContainer";
import useStudentStore from "../useStudentStore";
import StudentCarouselPlans from "./StudentCarouselPlans/StudentCarouselPlans";

export default function StudentPlans(){

    const { student } = useStudentStore();

    const plans = student ? student.plans : [];

    return(
        <MainContainer>
            <StudentCarouselPlans plans={plans}/>
        </MainContainer>
    )
}