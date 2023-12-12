import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Navigation from "./Navigation/Navigation";
import Cadastro from "./Screens/Cadastro";
import DragonBall from "./Screens/DragonBall";
import OnePiece from "./Screens/OnePiece";
import Naruto from "./Screens/Naruto";
import Bleach from "./Screens/Bleach";
import VideoDragonBall from "./Screens/VideoDragonBall";
import VideoOnePiece from "./Screens/VideoOnePiece";
import VideoNaruto from "./Screens/VideoNaruto";
import VideoBleach from "./Screens/VideoBleach";
import { UserContextProvider } from "./Context/UserContext";
import { CommentsContextProvider } from "./Context/CommentsContext";

const Stack = createStackNavigator();

const App = () => {
  const [setExibeSplash] = useState(true);
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return (
    <UserContextProvider>
      <CommentsContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login">
              {(props) => (
                <Login
                  {...props}
                  onLogin={handleLogin}
                  onLogout={handleLogout}
                  logado={logado}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Navigation" component={Navigation} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
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
      </CommentsContextProvider>
    </UserContextProvider>
  );
};

export default App;
