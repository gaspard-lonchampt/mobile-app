import React , {useState, useEffect} from "react";

import { SafeAreaView, StyleSheet, TextInput, Pressable, Text, View, ImageBackground} from "react-native";

const checkMessage = (array, nameLabel) => {
    for(let i = 0 ; i < array.length ; i++) {
        if(array[i].propertyPath === nameLabel) {
            return array[i].message; 
        }
    }
}

const Login = () => {

  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');

  const[message , setMessage] = useState([]) ; 
  const[style, setStyle] = useState(styles.text_error) ; 

    const checkRegister = () => {

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "email": email,
        "password": pass,
        "name": lastName,
        "surname": firstName,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/users", requestOptions)
    .then(response => response.json())
    .then((result) => {
        if(result.error)
        {
          console.log(result.error)
        }
        else {
            //   setStyle(styles.text_validate)
            console.log(result.violations);

            setMessage(result.violations); 
        }
    })
    .catch(error => console.log('error', error));
  }
      
      
  return (
    <SafeAreaView style={styles.global_container}>
      <ImageBackground source={require('../../assets/bg.svg')}
          resizeMode="cover" 
          style={styles.image_bg}>
      <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLastName}
            value={lastName}
            placeholder="Nom"
          />
          <Text style={styles.error}> {checkMessage(message, "name" )}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="Prénom"
        />
        <Text style={styles.error}> {checkMessage(message, "surname" )}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
          <Text style={styles.error}> {checkMessage(message, "email" )}</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Mot de passe"
        />
        <Text style={styles.error}> {checkMessage(message, "password" )}</Text>
        {/* <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangeConfirmPass}
          value={confirmPass}
          placeholder="Confirmation du mot de passe"
        /> */}
        <Pressable
          style={styles.button}
          onPress={() => {
            checkRegister();  
          }}>
          <Text style={styles.text_button}>S'inscrire</Text>
        </Pressable>

        {/* <Text style={styles.error}> {console.log(message)} </Text> */}

      </View>

      <Text style={styles.text_msg}>
        Déjà incrit ? Connecte toi ici ! 
      </Text>  
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius : 8, 
    marginVertical : 12,
    marginHorizontal: 20, 
    borderWidth: 1,
    paddingVertical : 12, 
    paddingHorizontal : 16, 
    borderColor : '#D9D9D9',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
    backgroundColor : "white",
  },

  button : {
    backgroundColor : 'black', 
    paddingVertical: 16,
    borderRadius : 32,
    height: 48,
    marginVertical: 12, 
    marginHorizontal: 40, 
    
  }, 
  text_button : {
    color: 'white', 
    textAlign: "center",
  }, 
  image : {
    flex: 1, 
    justifyContent: "center", 
  },
  link_register : {
    textDecorationLine : "underline",
    marginVertical: 12, 
    marginHorizontal: 20, 
  }, 
  global_container : {
    flex : 1,
    flexDirection : "column", 
    justifyContent: "center",
    height : "100%",
    width: "100%" 
  },
  image_bg : {
    flex: 1,
    justifyContent: "center",
  },
  text_msg : {
    color : "black",
    marginVertical: 12, 
    marginHorizontal: 20, 
    textDecorationLine : "underline",
  },
  text_error : {
    color : "red",
    marginVertical: 12, 
    marginHorizontal: 20, 
  },
  text_validate : {
    color : "green",
    marginVertical: 12, 
    marginHorizontal: 20, 
  },
  error : {
      color : "red", 
      marginHorizontal: 20, 
  }
});

export default Login;
