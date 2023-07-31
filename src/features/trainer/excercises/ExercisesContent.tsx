import { Flex, Select, useTheme } from "native-base";
import {StyleSheet} from "react-native"
import { MuscularGroup } from "../../../interfaces/MuscularGroup.interface";
import { Exercise } from "../../../interfaces/Exercise.interface";
import { useMemo, useState } from "react";
import NewExerciseForm from "./NewExerciseForm/NewExerciseForm";
import { NEW_EXERCISE } from "../../../configs/constants/strings";
import Modal from "../../../components/Modal/Modal";
import TextsList from "../../../components/TextsList/TextsList";
import CircleAddButton from "../../../components/CircleButton/CircleButton";


type ExercisesContentTypes = {
    muscularGroups: MuscularGroup[], 
    exercises: Exercise[]
}

const  ExercisesContent=({muscularGroups, exercises}:ExercisesContentTypes)=>{

    const [modalVisible, setModalVisible] = useState(false);

    const { colors } = useTheme();

    const [muscularGroupSelected, setMuscularGroupSelected] = useState<string>('')

    const filteredExercises = useMemo(
        ()=>exercises.filter(exercise => exercise.muscularGroup.name === muscularGroupSelected )
        ,[muscularGroupSelected]
    );

    const handleMuscularGroupChange = (value: string) => {
        setMuscularGroupSelected(value);
    };

    const handleCancel= () => {
        setModalVisible(false);
    };

    const handleSubmit= (data:any) => {
        //SAVE EXERCISE
    };

    return (
        <Flex
            style={styles.exercisesContent}
            flex={1}
        >
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header={NEW_EXERCISE}
            >
                <NewExerciseForm 
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                />
            </Modal>
            <Select selectedValue={muscularGroupSelected} accessibilityLabel="Muscular group" placeholder="Muscular group" _selectedItem={{
                bg: colors.primary[500]
                }} mt={1} 
                onValueChange={handleMuscularGroupChange}
                >
            {
                muscularGroups.map((group: MuscularGroup)=>(
                    <Select.Item key={group.name} label={group.name} value={group.name} />
                ))
            }
            </Select>
            <TextsList
                data={filteredExercises}
                numColumns={2}
                itemPropertyText={'name'}
            />
            <CircleAddButton 
                onPress={()=>setModalVisible(true)}
            />
        </Flex>
    )
}

const styles = StyleSheet.create({
    exercisesContent:{
        gap:10,
    },
})

export default ExercisesContent;