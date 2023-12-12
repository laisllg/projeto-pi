import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Cadastrar from "../Screens/Cadastro";
import Home from "../Screens/Home";
import DragonBall from "../Screens/DragonBall";
import OnePiece from "../Screens/OnePiece";
import Naruto from "../Screens/Naruto";
import Bleach from "../Screens/Bleach";
import Splash from "../Screens/Splash";
import VideoDragonBall from "../Screens/VideoDragonBall";
import VideoOnePiece from "../Screens/VideoOnePiece";
import VideoNaruto from "../Screens/VideoNaruto";
import VideoBleach from "../Screens/VideoBleach";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastrar} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DragonBall" component={DragonBall} />
        <Stack.Screen name="OnePiece" component={OnePiece} />
        <Stack.Screen name="Naruto" component={Naruto} />
        <Stack.Screen name="Bleach" component={Bleach} />
        <Stack.Screen name="VideoDragonBall" component={VideoDragonBall} />
        <Stack.Screen name="VideoOnePiece" component={VideoOnePiece} />
        <Stack.Screen name="VideoNaruto" component={VideoNaruto} />
        <Stack.Screen name="VideoBleach" component={VideoBleach} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
