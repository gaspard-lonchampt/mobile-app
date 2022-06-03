import { StyleSheet,Image, ScrollView, ActivityIndicator,View,Text, FlatList,Button, Pressable   } from 'react-native';
import React, { useEffect, useState } from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Category = ({ navigation }) => {
  // const [data, setData] = useState({});
  const [loader, setLoader] = useState(false)
  const [category, setCategory] = useState({})

  const fetchCategory = async () => {
    setLoader(true)
     try {
      // const response = await fetch('http://localhost:8080/categories/');
      const response = await fetch('https://intense-springs-77079.herokuapp.com/categories');
      const json = await response.json();
      setCategory(json['hydra:member'])
      console.log(json['hydra:member'])
      console.log(json['hydra:member'][0].id)
      setLoader(false)

    } catch (error) {
      console.error(error);
      setLoader(false)
    } 
  }

  const categoryInArray = (data) =>{
    let arrayForMap = []

    for (let i =0; i < data.length; i++){
      let idcat = data[i].id
      let category = data[i].name
      let objectInArrayForMap = {id:idcat,name:category}

     console.log(objectInArrayForMap)
     arrayForMap.push(objectInArrayForMap)
    }
    console.log(arrayForMap)

    return arrayForMap.map(category => 
      <Pressable onPress={()=> navigation.navigate('Programs', {idCat:category.id})}
                 style={styles.button}    
                 key={category.id}
                 title={category.id} 
                 name={category.name}> 
        <Text style={styles.text}>{`${category.name}`}</Text>
      </Pressable >)

  }

  useEffect(()=>{
    fetchCategory()
  },[])


  return (
    <Text >

        {loader ? <ActivityIndicator/> :   <> {categoryInArray(category)} </>}
  
    </Text>
  )


}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export default Category;

