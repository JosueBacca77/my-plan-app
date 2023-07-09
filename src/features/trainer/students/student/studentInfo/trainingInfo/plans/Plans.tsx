import { PlansProps } from "./types";
import { FlatList } from "native-base";
import PlansItem from "./plansItem/PlansItem";

export default function Plans(plansProps: PlansProps) {

    const { plans } = plansProps;

    return (
        <FlatList
            data={plans}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            horizontal={false}
            renderItem={({ item }) => (
                <PlansItem
                    plan={item}
                />
            )}
        />
    )
}