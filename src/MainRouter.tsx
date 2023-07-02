import PublicRouter from "./features/routers/PublicRouter";
import PrivateRouter from "./features/routers/PrivateRouter";
import { NavigationContainer } from "@react-navigation/native";

const MainRouter = () => {

    return (
        <NavigationContainer>
            {
                true?
                <PublicRouter />
                :
                <PrivateRouter />
            }
        </NavigationContainer>
    )
}

export default MainRouter;