import { FlatList } from "native-base";
import { StudentCarouselPlansProps } from "./types";
import useStudentStore from "../../useStudentStore";
import { PlanInterface } from "../../../../interfaces/plan/Plan.interface";
import PlansItem from "../../../trainer/students/student/studentInfo/trainingInfo/plans/plansItem/PlansItem";

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
} 13