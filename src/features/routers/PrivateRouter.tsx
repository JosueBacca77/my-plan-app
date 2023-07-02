import { View } from "native-base";
import TrainerHome from "../trainer/TrainerHome";
import StudentHome from "../student/StudentHome";

export default function PrivateRouter() {

    return (
        <View>
            {
                true ? // user is trainer ?
                <TrainerHome />
                :
                <StudentHome />
            }
        </View>
    )
}