import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useUserContext } from "../Context/UserContext";

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const { loginUser } = useUserContext();

  const onSubmit = async (data) => {
    try {
      const r = await fetch(
        "http://pi-api.cris.leandrofaria.com/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (r.status === 201) {
        loginUser({ email: data.email });
        navigation.navigate("Home");
      } else {
        alert("Credenciais inválidas.");
      }
    } catch (e) {
      alert("Erro ao autenticar");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/logosmall.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.heading}>Acesse</Text>
      <View style={styles.inputContainer}>
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
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("Cadastro")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </Button>
      </View>
      <Pressable
        onPress={() => alert("Funcionalidade ainda não implementada.")}
      >
        <Text style={styles.forgotPassword}>Esqueci a senha</Text>
      </Pressable>
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
  errorText: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  },
  imageContainer: {
    position: "absolute",
    top: 30,
    right: 10,
    zIndex: 1,
  },
  logo: {
    borderRadius: 30,
  },
  inputContainer: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width: 300,
  },
  input: {
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    padding: 50,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "black",
    width: 130,
    margin: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "white",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginRight: 150,
  },
  forgotPassword: {
    fontSize: 16,
    marginTop: 100,
  },
});

export default Login;
