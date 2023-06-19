import { FlatList } from "native-base";
import PlansItem from "../../../trainer/students/students/student/studentInfo/trainingInfo/plans/plansItem/PlansItem";
import { StudentCarouselPlansProps } from "./types";

export default function StudentCarouselPlans(studentCarouselPlansProps: StudentCarouselPlansProps){

    const { plans } = studentCarouselPlansProps;

    return(
        <FlatList
            data={plans}
            horizontal={true}
            style={{ flexGrow: 0 }}
            renderItem={({ item }) => (
                <PlansItem
                    plan={item}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}