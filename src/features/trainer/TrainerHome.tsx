
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MuscularGroups } from "./muscularGroups";
import { Exersices } from "./excersices";
import { useTheme } from "native-base";
import Students from "./students/students/Students";
import React from 'react';
import MyProfile from '../user/MyProfile';


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
            <Drawer.Screen name='Alumnos' component={Students} />
            <Drawer.Screen name='Grupos Musculares' component={MuscularGroups} />
            <Drawer.Screen name="Ejercicios" component={Exersices} />
            <Drawer.Screen name="Mi perfil" component={MyProfile} />
        </Drawer.Navigator>
    )
}