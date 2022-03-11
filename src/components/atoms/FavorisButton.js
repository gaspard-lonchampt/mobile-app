// import styles from '../../styles/buttonfav.css';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Check if a User is logged in
function FavoriteButton() {
  // Declare a favBool that will eventually have a value of true or false
  const [favBool, setBool] = useState(false); // hooks d'état
  // verifier si le user est co 
  const user_id="1";
  const program_id="1";

  // fetch whether a user/program relationship exists
  // request postman
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const fetcher = async () => { 
    try {
      const got = await fetch(`https://intense-springs-77079.herokuapp.com/users?id=${user_id}&programs.id=${program_id}`, requestOptions);
      const response = await got.json(); 
      console.log(response);

      // on chercher 1 ou 0
      console.log(response['hydra:totalItems']);
      if (response['hydra:totalItems'] === 1) {
        setBool(true); 
      }
    } catch { 
      const error = console.log('error', error);
    }
  }
  // je lance ma variable 
  useEffect(()=> {
  fetcher()
  }, [])


  // premier render en jsx à mettre à la fin
  // afficjher le true ou false 
  // cilquable <3 

  console.log("user : ", user_id, ", program : ", program_id);
  // verify with console
  console.log("This user has this program favorited?", favBool);

// ----------------------------------------------------------------------------------------------------------------------------

  // Define the font awesome icons as variables (currentlyAFavorite or notCurrentlyAFavorite)
    const currentlyAFavorite = <MaterialCommunityIcons name="heart" size={24} color="#C71585"/>
    const notCurrentlyAFavorite = <MaterialCommunityIcons name="heart" size={24} color="grey" />

    // Declare a toggleFavorite variable that takes in program_id
    const toggleFavorite = () => {
          // If favorite is currently true, clicking will unfavorite and fetch a post request that
          // removes the program to the User/program datatable on the back-end
          if (favBool == true) {
            console.log("I clicked unfavorite")
            setBool(false);
            console.log(favBool);

            // methode pour changer la realtion 
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch(`https://intense-springs-77079.herokuapp.com/api/users/${user_id}/remove/programs/${program_id}`, requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

            // gerer les error
          }

          // If the favorite is false to start, clicking will favorite and fetch a post request that
          // adds the program that will add the program to the User/program datatable on the backend
          else {
            console.log("I clicked favorite")
            setBool(true);
            console.log(favBool);
            // méthode pour add realtion
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };

            fetch(`https://intense-springs-77079.herokuapp.com/api/users/${user_id}/add/programs/${program_id}`, requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));

            // gerer les error
          }
    };
    
    // return the favorite button that uses your CSS styling,
    // onClick handles toggleFavorite which will using the ternary of favorite === true
    return (
      <View style={styles.view}>
        <Pressable
          style={styles.fav}
          onPress={toggleFavorite}
          key={program_id}
          >
          <Text>{ favBool ? currentlyAFavorite : notCurrentlyAFavorite }</Text> 
          <Text>Favoris</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  view : {    
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text : {
    marginLeft: 15,
  },
  fav : {
      backgroundColor: 'white',
      fontSize: 18,
      fontWeight: '400', 
      color : '#61CB8A', 
      borderColor: '#61CB8A',
      borderWidth: 1,
      borderRadius: 4,
      justifyContent: 'flex-start',
      width: 100,
      height: 32,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      textTransform: 'uppercase',
  },
})
export {FavoriteButton};