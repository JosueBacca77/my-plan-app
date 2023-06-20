import { FlatList } from "native-base";
import { PlanContentProps } from "./types";
import PlanMuscularGroup from "./planMuscularGroup/PlanMuscularGroup";

export default function PlanContent(planProps: PlanContentProps) {

    const { muscularGroups, selectedDay } = planProps;

    const m = [...muscularGroups]

    return (
        <FlatList
            data={m}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <PlanMuscularGroup muscularGroup={item} selectedDay={selectedDay} />
            )}
        />
    )
}