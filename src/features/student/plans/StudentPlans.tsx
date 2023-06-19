import { Flex } from "native-base";
import MainContainer from "../../../components/MainContainer/MainContainer";
import Plan from "../../plans/Plan";
import useStudentStore from "../useStudentStore";
import StudentCarouselPlans from "./StudentCarouselPlans/StudentCarouselPlans";

export default function StudentPlans(){

    const { student, selectedPlan } = useStudentStore();

    const plans = student ? student.plans : [];

    return(
        <MainContainer>
            <Flex flex={1}>
            <StudentCarouselPlans plans={plans}/>
            {
                selectedPlan && 
                <Plan plan={selectedPlan}/>
            }
            </Flex>
        </MainContainer>
    )
}