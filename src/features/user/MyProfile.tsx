import { ScrollView } from "native-base";
import useUserStore from "../auth/useUserStore";
import { studentUser, trainerUser } from "../../data";
import UserMainInfo from "./userMainInfo/UserMainInfo";
import { LayoutAnimation } from "react-native";
import Text from "../../components/Text/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainContainer from "../../components/MainContainer/MainContainer";
import { FontVariant } from "../../components/Text/types";
import { useState } from "react";
import MyProfileSection from "./myProfileSection/MyProfileSection";
import { MEDICAL_CONDITIONS } from "../../configs/constants/strings";
import { styles } from "./styles";


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
            name: MEDICAL_CONDITIONS,
            opened: false,
        },
    ]);

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
                    !user && sections.length>0 && sections.map((section, index) => (
                        <MyProfileSection
                            key={index}
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