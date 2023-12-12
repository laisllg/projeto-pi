import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useUserContext } from "../Context/UserContext";

const Cadastro = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
    },
  });

  const { loginUser } = useUserContext();

  const onSubmit = async (data) => {
    try {
      const r = await fetch(
        "http://pi-api.cris.leandrofaria.com/api/auth/signup",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (r.status === 201) {
        loginUser({ email: data.email });
        navigation.navigate("Home");
      } else {
        alert("Cadastro inválido.");
      }
    } catch (e) {
      alert("Erro desconhecido");
    }
  };

  return (
    <View
      style={{
        flex: 1,

        backgroundColor: "red",
      }}
    >
      <View>
        <Appbar.Header theme={{ colors: { primary: "black" } }}>
          <Appbar.Action
            onPress={() => navigation.goBack()}
            icon={() => <AntDesign name="left" size={24} color="white" />}
          />
          <Appbar.Content title="Cadastro" titleStyle={styles.appbarTitle} />
        </Appbar.Header>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <Text
          style={{
            fontSize: 33,
            fontWeight: "bold",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          Criar Conta
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Seu email"
              onBlur={onBlur}
              label={"E-mail"}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              accessibilityLabel="Email Input"
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{ color: "white", marginBottom: 12 }}>
            Campo de preenchimento obrigatório.
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={true}
              placeholder="Senha"
              onBlur={onBlur}
              label={"Senha"}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              accessibilityLabel="Password Input"
            />
          )}
          name="senha"
        />
        {errors.senha && (
          <Text style={{ color: "white", marginBottom: 12 }}>
            Campo de preenchimento obrigatório.
          </Text>
        )}
        <Button
          title="Cadastrar"
          onPress={handleSubmit(onSubmit)}
          color="black"
          style={styles.cadastrarButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    color: "black",
  },
  cadastrarButton: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    fontSize: 21,
    fontWeight: "bold",
  },
});

export default Cadastro;
