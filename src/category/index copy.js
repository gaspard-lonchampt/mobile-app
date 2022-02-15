import { Image, ScrollView, ActivityIndicator,View,Text, FlatList  } from 'react-native';
import React, { useEffect, useState } from 'react';




const Programs = () => {
  // const [data, setData] = useState({});
  const [loader, setLoader] = useState(false)
  const [category, setCategory] = useState({})

  const myFetch = async () => {
    setLoader(true)
     try {
      const response = await fetch('http://127.0.0.1:8080/categories/');
      const json = await response.json();
  
      setCategory(json['hydra:member'])
      setLoader(false)
     

    } catch (error) {
      console.error(error);
      setLoader(false)
    } 
  }


  const loop = (data) =>{

    let array = []
    for (let i =0; i < data.length; i++){
       array.push(data[i].name)
    }

    return array.map(cat => <Text key={cat}>{cat}</Text>)

  }

  useEffect(()=>{
    myFetch()
  },[])






  return (
    <View style={{ flex: 1, padding: 24 }}>
    {loader ? <ActivityIndicator/> :   <> {loop(category)} </>}
    </View>
  )


}



export default Programs;