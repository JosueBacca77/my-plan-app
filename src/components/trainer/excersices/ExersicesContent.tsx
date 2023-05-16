import { Select, useTheme } from "native-base";
import {StyleSheet, Text, View} from "react-native"
import TextsList from "../../common/TextsList";
import { MuscularGroup } from "../../../interfaces/MuscularGroup.interface";
import { Exersice } from "../../../interfaces/Exersice.interface";
import CircleAddButton from "../../common/CircleButton";
import { useState } from "react";
import { NewExerciseForm } from ".";
import Modal from "../../common/Modal";


type ExersicesContentTypes = {
    muscularGroups: MuscularGroup[], 
    exersices: Exersice[]
}

interface Option {
    value: string;
    label: string;
  }
  
  const options: Option[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

const ExersicesContent=({muscularGroups, exersices}:ExersicesContentTypes)=>{

    const [modalVisible, setModalVisible] = useState(false);

    const { colors } = useTheme();

    const [muscularGroupSelected, setMuscularGroupSelected] = useState<string>('')

    const handleMuscularGroupChange = (mg: string) => {
        setMuscularGroupSelected(mg);
      };

    return (
        <View
            style={styles.exersicesContent}
        >
            <Select selectedValue={muscularGroupSelected} accessibilityLabel="Grupo muscular" placeholder="Grupo muscular" _selectedItem={{
                bg: colors.primary[500]
                }} mt={1} onValueChange={handleMuscularGroupChange}>
            {
                muscularGroups.map((group: MuscularGroup)=>(
                    <Select.Item label={group.name} value={group.name} />
                ))
            }
            </Select>
            <TextsList 
                data={exersices}
                numColumns={2}
                itemPropertyText={'name'}
            />
            <CircleAddButton 
                onPress={()=>setModalVisible(true)}
            />
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header='Nuevo ejercicio'
                submitText='Guardar'
                cancelText="Cancelar"
            >
                <Text>HOLA</Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    exersicesContent:{
        gap:10,
        flex:1,
    },
})

export default ExersicesContent;