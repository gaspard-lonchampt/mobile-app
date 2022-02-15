import React , {useState, useEffect} from "react";

import { SafeAreaView, StyleSheet, TextInput, Pressable, Text, View, ImageBackground} from "react-native";


const Login = () => {

  const [login, onChangeLogin] = useState(null);
  const [pass, onChangePass] = useState(null);
  const[message , setMessage] = useState('') ; 
  const[style, setStyle] = useState(styles.text_error) ; 

    const checkLogin = () => {

      if(login !== null && pass !== null && login !== '' && pass !== '')
      {
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "username": login,
          "password": pass,
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("http://localhost:8080/api/login", requestOptions)
        .then(response => response.json())
        .then((result) => {
            if(result.error)
            {
              setMessage('c\'est pas bon mon pote')
            }
            else {
              setStyle(styles.text_validate)
              setMessage('c\'est nice');
            }
        })
        .catch(error => console.log('error', error));
      }
      else {
        setMessage('Faut remplir les champs mon pote') ; 
      }
    }

  const image = { uri: "https://cdn.radiofrance.fr/s3/cruiser-production/2021/04/beac62cf-1817-4eb0-820b-d999826775bb/838_gettyimages-1271539431.jpg" };
  

  return (
    <SafeAreaView style={styles.global_container}>
      <ImageBackground source={require('../../assets/bg.svg')}
          resizeMode="cover" 
          style={styles.image_bg}>
      <View style={styles.section_img}>
        <View style={styles.container_img}>
            <ImageBackground source={image}
            resizeMode="cover" 
            style={styles.image}></ImageBackground>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLogin}
          value={login}
          placeholder="Login"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePass}
          value={pass}
          placeholder="Mot de passe"
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            checkLogin(login,pass);
          }}>
          <Text style={styles.text_button}>Se connecter</Text>
        </Pressable>

        <Text style={style}> {message} </Text>
      </View>

      <Text style={styles.text_msg}>
        Pas de compte ? Inscrit toi ici !
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
  section_img : {
    justifyContent: "center",
    flexDirection: "row",
  },
  container_img : {
    width : 198, 
    height : 198,
    borderRadius: 314,
    overflow: "hidden", 
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
  }
});

export default Login;
