import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Appbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useUserContext } from "../Context/UserContext";
import { useCommentsContext } from "../Context/CommentsContext";

const Naruto = ({ navigation }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const { logoutUser, getUser } = useUserContext();
  const { getComments, addComment } = useCommentsContext();

  const toggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    setComments(getComments("naruto"));
  }, []);

  const adicionarComentario = () => {
    if (!commentText) return;

    const newComment = {
      autor: getUser().email,
      texto: commentText,
      categoria: "naruto",
    };
    alert(JSON.stringify(newComment));
    addComment(newComment);
    setComments([...comments, newComment]);
    setCommentText("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Appbar.Header theme={{ colors: { primary: "black" } }}>
          <Appbar.Action
            onPress={() => navigation.goBack()}
            icon={() => <AntDesign name="left" size={24} color="white" />}
          />
          <Appbar.Content title="Naruto" titleStyle={styles.appbarTitle} />
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
      <ScrollView
        style={{
          backgroundColor: "red",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
          }}
        >
          <Text
            style={{
              fontSize: 33,
              fontWeight: "bold",
              padding: 30,
            }}
          >
            NARUTO
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ padding: 30, fontSize: 24 }}>
            A série gira em torno das aventuras vividas por Naruto Uzumaki, um
            jovem órfão habitante da Aldeia da Folha que sonha em se tornar o
            quinto Hokage, o maior guerreiro e governante da vila.
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              padding: 30,
            }}
          >
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("VideoNaruto", {
                    videoId: "hxRBl6tc-nk",
                  })
                }
              >
                <Image source={require("../assets/icons8-começar-64.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 15, marginRight: 15 }}>
              <TouchableOpacity onPress={toggleLike}>
                {liked && (
                  <Image
                    source={require("../assets/icons8-amor-circulou-48-preenchido.png")}
                  />
                )}
                {!liked && (
                  <Image
                    source={require("../assets/icons8-amor-circulou-48.png")}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              padding: 30,
            }}
          >
            DEIXE SEU COMENTÁRIO
          </Text>
          <TextInput
            placeholder="Deixe aqui seu comentário"
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
            style={{
              backgroundColor: "#FFFFFF",
              width: "90%",
              borderColor: "gray",
              borderWidth: 3,
              marginBottom: 15,
              padding: 100,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => adicionarComentario()}
          style={{
            backgroundColor: "#000000",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 60,
            marginLeft: 90,
            marginRight: 90,
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "bold",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 18,
            }}
          >
            Enviar
          </Text>
        </TouchableOpacity>
        <View
          style={{
            color: "#000000",
            fontSize: 18,
            fontWeight: "bold",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
          }}
        >
          {comments && comments.length > 0 && (
            <>
              <Text style={{ fontSize: 33, padding: 18 }}>COMENTÁRIOS</Text>
              {comments.map((c, index) => (
                <Text
                  key={index}
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    backgroundColor: "#FFFFFF",
                    //width: "90%",
                    borderColor: "gray",
                    borderWidth: 3,
                    marginBottom: 30,
                    padding: 60,
                  }}
                >
                  {c.texto} - {c.autor}
                </Text>
              ))}
            </>
          )}
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
  // infoText: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 30,
  //   fontSize: 24,
  // },
  imageContainer: {
    position: "absolute",
    top: 81,
    right: 9,
    zIndex: 1,
  },
});

export default Naruto;
