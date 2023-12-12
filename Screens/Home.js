import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Appbar, Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Login } from "./Login";
import { ScrollView } from "react-native-gesture-handler";
import { useUserContext } from "../Context/UserContext";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { logoutUser } = useUserContext();

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const { getUser } = useUserContext();

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Appbar.Header theme={{ colors: { primary: "black" } }}>
        <Appbar.Action
          onPress={() => navigation.goBack()}
          icon={() => <AntDesign name="left" size={24} color="white" />}
        />
        <Appbar.Content
          title="Página Principal"
          titleStyle={styles.appbarTitle}
        />
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
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "regular", fontSize: 21 }}>
            Seja bem vindo
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 21 }}>
            {getUser()?.email}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
            flexWrap: "wrap",
          }}
        >
          <Pressable
            style={{ margin: 18 }}
            onPress={() => navigation.navigate("DragonBall")}
          >
            <Image
              style={{
                display: "flex",
                width: 150,
                height: 210,
              }}
              resizeMode="contain"
              source={require("../assets/DragonBall.png")}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Dragon Ball
            </Text>
          </Pressable>
          <Pressable
            style={{ margin: 18 }}
            onPress={() => navigation.navigate("Bleach")}
          >
            <Image
              style={{
                display: "flex",
                width: 150,
                height: 210,
              }}
              resizeMode="contain"
              source={require("../assets/Bleach.png")}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Bleach
            </Text>
          </Pressable>
          <Pressable
            style={{ margin: 18 }}
            onPress={() => navigation.navigate("Naruto")}
          >
            <Image
              style={{
                display: "flex",
                width: 150,
                height: 210,
              }}
              resizeMode="contain"
              source={require("../assets/Naruto.png")}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Naruto
            </Text>
          </Pressable>
          <Pressable
            style={{ margin: 18 }}
            onPress={() => navigation.navigate("OnePiece")}
          >
            <Image
              style={{
                display: "flex",
                width: 150,
                height: 210,
              }}
              resizeMode="contain"
              source={require("../assets/OnePiece.png")}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              One Piece
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  centeredSearchBar: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  searchBar: {
    borderRadius: 15,
    width: "80%",
  },
  appbarTitle: {
    fontSize: 20,
  },
});

export default Home;
