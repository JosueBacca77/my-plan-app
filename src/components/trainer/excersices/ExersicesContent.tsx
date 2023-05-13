import { Box, CheckIcon, Select } from "native-base";
import {StyleSheet, View} from "react-native"
import TextsList from "../../common/TextsList";
import { MuscularGroup } from "../../../interfaces/MuscularGroup.interface";
import { Exersice } from "../../../interfaces/Exersice.interface";

type ExersicesContentTypes = {
    muscularGroups: MuscularGroup[], 
    exersices: Exersice[]
}
const ExersicesContent=({muscularGroups, exersices}:ExersicesContentTypes)=>{

    return (
            <View
                style={styles.exersicesContent}
            >
                <Box maxW="300">
                    <Select selectedValue={'2'} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => null}>
                    {
                        muscularGroups.map((group: MuscularGroup)=>(
                            <Select.Item label={group.name} value={group.id} />
                        ))
                    }
                    </Select>
                </Box>
                <TextsList 
                    data={exersices}
                    numColumns={2}
                    itemPropertyText={'name'}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    exersicesContent:{
        gap:10
    },
    
})

export default ExersicesContent;