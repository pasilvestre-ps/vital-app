import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Start from '../pages/start'
import SignIn from '../pages/signin'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Start" component={Start} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />

        </Stack.Navigator>    
    );
}