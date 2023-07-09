
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { useTheme } from "native-base";
import StudentPlans from "./plans/StudentPlans";
import useStudentStore from "./useStudentStore";
import MyProfile from '../user/MyProfile';
import { student1 } from '../../data';


const Drawer = createDrawerNavigator();

export default function StudentHome(){

    const theme = useTheme()
    const { setStudent } = useStudentStore();
    
    useEffect(() => {
        setStudent(student1);
    }, [setStudent]);

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
                }
            }}
        >
            <Drawer.Screen name='Planes' component={StudentPlans} />
            <Drawer.Screen name='Mi perfil' component={MyProfile} />
        </Drawer.Navigator>
    )
}