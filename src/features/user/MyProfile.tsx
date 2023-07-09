import { ScrollView, View } from "native-base";
import useUserStore from "../auth/useUserStore";
import { studentUser, trainerUser } from "../../data";
import UserMainInfo from "./userMainInfo/UserMainInfo";
import { LayoutAnimation, StyleSheet } from "react-native";
import Text from "../../components/Text/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainContainer from "../../components/MainContainer/MainContainer";
import { FontVariant } from "../../components/Text/types";
import { useEffect, useState } from "react";
import MyProfileSection from "./myProfileSection/MyProfileSection";


export default function MyProfile() {

    const { user, setUser } = useUserStore();

    const [sections, setSections] = useState([
        {
            id: 'personal_info',
            name: 'Personal information',
            opened: false,
        },
        {
            id: 'medical_conditions',
            name: 'Medical conditions',
            opened: false,
        },
    ]);

    useEffect(() => {
        return () => {
            setSections([
                {
                    id: 'personal_info',
                    name: 'Personal information',
                    opened: false,
                },
                {
                    id: 'medical_conditions',
                    name: 'Medical conditions',
                    opened: false,
                },
            ])
        }
    }, [])

    const testingUser = user ? trainerUser : studentUser;

    const handlePressSection = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        let updatedSections = [...sections];
        updatedSections[index].opened = !sections[index].opened;
        setSections(updatedSections);
    };

    const handleCloseSession = () => {
        setUser(null);
    };

    return (
        <MainContainer>
            <UserMainInfo user={testingUser} />
            <ScrollView style={styles.sections}>
                {
                    !user && sections.map((section, index) => (
                        <MyProfileSection
                            section={section}
                            index={index}
                            handlePressSection={handlePressSection}
                        />
                    ))
                }
                <TouchableOpacity style={styles.item} onPress={handleCloseSession}>
                    <Text key={'close_session'} value={'Close session'} variant={FontVariant.TEXT_SM}/>
                </TouchableOpacity>
            </ScrollView>
        </MainContainer>
    )
};

export const styles = StyleSheet.create({
    item: {
        borderColor: '#D3D3D3',
        borderBottomWidth: 1,
        padding: 10,
    },
    itemContent: {
        padding: 4,
        position: 'relative'
    },
    sections:{
        marginTop:10
    }
});