import { LastPlansProps } from "./types";
import LastPlansItem from "./lastPlansItem/LastPlansItem";
import { HStack } from "native-base";

export default function LastPlans(lastPlansProps: LastPlansProps) {
    const { plans } = lastPlansProps;

    return (
        <HStack justifyContent={'space-between'}>
            {
                plans.map((plan=>(
                    <LastPlansItem plan={plan}/>
                )))
            }
        </HStack>
    ) 
}