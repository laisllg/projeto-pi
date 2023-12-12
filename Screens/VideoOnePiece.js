import React, { useCallback } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import YoutubeIframe from "react-native-youtube-iframe";
import * as ScreenOrientation from "expo-screen-orientation";
import { useUserContext } from "../Context/UserContext";

const VideoOnePiece = ({ navigation }) => {
  const onFullScreenChange = useCallback((isFullScreen) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, []);

  const { logoutUser } = useUserContext();

  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header theme={{ colors: { primary: "black" } }}>
          <Appbar.Action
            onPress={() => navigation.goBack()}
            icon={() => <AntDesign name="left" size={24} color="white" />}
          />
          <Appbar.Content title="One Piece" titleStyle={styles.appbarTitle} />
          <TouchableOpacity
            onPress={() => {
              logoutUser();
              navigation.navigate("Login");
            }}
          >
            <Image
              source={require("../assets/icons8-sair-24.png")}
              style={{ height: 36, width: 36 }}
            />
          </TouchableOpacity>
        </Appbar.Header>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          padding: 21,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 21, fontWeight: "bold", padding: 15 }}>
          Assista aqui seu episódio de One Piece!!!
        </Text>
        <YoutubeIframe
          videoId="Uj-K3cIIabA"
          height={210}
          onFullScreenChange={onFullScreenChange}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  imageContainer: {
    position: "absolute",
    top: 81,
    right: 9,
    zIndex: 1,
  },
});

export default VideoOnePiece;
