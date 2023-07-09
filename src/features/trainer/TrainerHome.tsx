
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MuscularGroups } from "./muscularGroups";
import { Exercises } from "./excercises";
import { useTheme } from "native-base";
import React from 'react';
import MyProfile from '../user/MyProfile';
import { EXERCISES, MUSCULAR_GROUPS, MY_PROFILE, STUDENTS } from '../../configs/constants/strings';
import Students from './students/Students';


type RootDrawerParamList = {
    Students: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function TrainerHome(){

    const theme = useTheme()

    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: theme.colors.white, // Change this color for the header icon,
                drawerActiveBackgroundColor: theme.colors.primary[500],
                drawerActiveTintColor: theme.colors.primary[50],
                headerTitleStyle: {
                    color: theme.colors.white,
                },
                headerStyle: {
                    backgroundColor: theme.colors.primary[500]
                },
            }}
        >
            <Drawer.Screen name={STUDENTS} component={Students} />
            <Drawer.Screen name={MUSCULAR_GROUPS} component={MuscularGroups} />
            <Drawer.Screen name={EXERCISES}  component={Exercises} />
            <Drawer.Screen name={MY_PROFILE} component={MyProfile} />
        </Drawer.Navigator>
    )
}