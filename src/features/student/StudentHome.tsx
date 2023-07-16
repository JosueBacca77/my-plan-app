
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import { useTheme } from "native-base";
import StudentPlans from "./plans/StudentPlans";
import useStudentStore from "./useStudentStore";
import MyProfile from '../user/MyProfile';
import { student1 } from '../../data';
import { MY_PROFILE, PLANS } from '../../configs/constants/strings';


const Drawer = createDrawerNavigator();

export default function StudentHome(){

    const theme = useTheme()
    const { setStudent } = useStudentStore();
    
    useEffect(() => {
        setStudent(student1);
    }, []);

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
            <Drawer.Screen name={PLANS} component={StudentPlans} />
            <Drawer.Screen name={MY_PROFILE} component={MyProfile} />
        </Drawer.Navigator>
    )
}