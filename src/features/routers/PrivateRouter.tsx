import { View } from "native-base";
import TrainerHome from "../trainer/TrainerHome";
import StudentHome from "../student/StudentHome";
import useUserStore from "../auth/useUserStore";

export default function PrivateRouter() {

    const { user } = useUserStore();

    return (
        <View>
            {
                user ? // user is student?
                <StudentHome />
                :
                <TrainerHome />
            }
        </View>
    )
}