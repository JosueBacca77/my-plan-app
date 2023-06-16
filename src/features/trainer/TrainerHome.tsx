
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MuscularGroups } from "./muscularGroups";
import { Exersices } from "./excersices";
import { useTheme } from "native-base";
import Students from "./students/students/Students";
import React from 'react';

interface Props {
    // add any additional props here
  }

type RootDrawerParamList = {
    Students: undefined;
    // Profile: { userId: string };
  };

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const TrainerHome: React.FC<Props> =(props)=>{

    const theme = useTheme()

    return(
        <NavigationContainer >
            <Drawer.Navigator
                screenOptions={{
                    headerTintColor: theme.colors.white, // Change this color for the header icon,
                    drawerActiveBackgroundColor:theme.colors.primary[500],
                    drawerActiveTintColor:theme.colors.primary[50],
                    headerTitleStyle:{
                        color:theme.colors.white,
                    },
                    headerStyle:{
                        backgroundColor: theme.colors.primary[500]
                    },
                }}
            >
                <Drawer.Screen name='Alumnos' component={Students} />
                <Drawer.Screen name='Grupos Musculares' component={MuscularGroups} />
                <Drawer.Screen name="Ejercicios" component={Exersices} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default TrainerHome;