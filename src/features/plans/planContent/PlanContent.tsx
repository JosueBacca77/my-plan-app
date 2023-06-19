import { FlatList, Flex, ScrollView, View } from "native-base";
import { PlanContentProps } from "./types";
import PlanMuscularGroup from "./planMuscularGroup/PlanMuscularGroup";


export default function PlanContent(planProps: PlanContentProps) {

    const { muscularGroups } = planProps;

    const m = [...muscularGroups,...muscularGroups,...muscularGroups,...muscularGroups,...muscularGroups,...muscularGroups ]

    return (
            // <ScrollView marginTop={4} backgroundColor={'amber.100'}>
            // {
            //     m.map((muscularGroup) => (
            //         <PlanMuscularGroup muscularGroup={muscularGroup} />
            //     ))
            // }
            // </ScrollView>
            // )
            <FlatList
                data={m}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <PlanMuscularGroup muscularGroup={item} />
                )}
            />
    )
}