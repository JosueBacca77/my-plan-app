import { FlatList } from "native-base";
import PlansItem from "../../../trainer/students/students/student/studentInfo/trainingInfo/plans/plansItem/PlansItem";
import { StudentCarouselPlansProps } from "./types";
import useStudentStore from "../../useStudentStore";
import { PlanInterface } from "../../../../interfaces/plan/Plan.interface";

export default function StudentCarouselPlans(studentCarouselPlansProps: StudentCarouselPlansProps){

    const { plans } = studentCarouselPlansProps;

    const { setSelectPlan } = useStudentStore();

    return(
        <FlatList
            data={plans}
            horizontal={true}
            flexShrink={0}
            style={{ flexGrow: 0 }}
            renderItem={({ item }) => (
                <PlansItem
                    plan={item}
                    onPressPlan={(plan:PlanInterface)=>setSelectPlan(plan)}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}