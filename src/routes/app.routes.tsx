import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Add from '../screens/Add';
 
 const {Navigator, Screen} = createNativeStackNavigator()

 export default function AppRoutes(){
    return(
    <Navigator initialRouteName ="add"screenOptions={{ headerShown: false }}>
      <Screen name = 'home' component={Home} />
      <Screen name = 'add' component={Add} />
    </Navigator>
    )
 }
 
 