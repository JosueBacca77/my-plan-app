import { PlansProps } from "./types";
import { FlatList, View } from "native-base";
import PlansItem from "./plansItem/PlansItem";

export default function Plans(plansProps: PlansProps) {

    const { plans } = plansProps;

    return (
        <View>
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
        </View>
    )
}