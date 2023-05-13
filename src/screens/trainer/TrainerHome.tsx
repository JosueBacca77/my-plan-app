
import { NavigationContainer, NavigationContainerProps } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Students } from "../../components/trainer/students";
import React from 'react';
import { MuscularGroups } from "../../components/trainer/muscularGroups";
import { Exersices } from "../../components/trainer/excersices";


// interface Props extends NavigationContainerProps {
//     // add any additional props here
// }

interface Props {
    // add any additional props here
  }

type RootDrawerParamList = {
    Students: undefined;
    // Profile: { userId: string };
  };

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const TrainerHome: React.FC<Props> =(props)=>{


    return(
        <NavigationContainer >
            <Drawer.Navigator>
                <Drawer.Screen name='Alumnos' component={Students} />
                <Drawer.Screen name='Grupos Musculares' component={MuscularGroups} />
                <Drawer.Screen name="Ejercicios" component={Exersices} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default TrainerHome;