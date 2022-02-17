import { Image, ScrollView, ActivityIndicator,View,Text, FlatList  } from 'react-native';
import React, { useEffect, useState } from 'react';




const Programs = ({route}) => {
  const [loader, setLoader] = useState(false)
  const [programs, setPrograms] = useState({})
  const articleId = route.params.idCat

  console.log(articleId)
  const fetchPrograms = async () => {
    setLoader(true)
     try {
      const response = await fetch(`http://localhost:8080/programs?categories=${articleId}`);
      const json = await response.json();
  
      setPrograms(json)
      setLoader(false)
      console.log(json)
    
     

    } catch (error) {
      console.error(error);
      setLoader(false)
    } 
  }


  // const loop = (data) =>{

  //   let array = []
  //   for (let i =0; i < data.length; i++){
  //      array.push(data[i].name)
  //   }

  //   return array.map(cat => <Text key={cat}>{cat}</Text>)

  // }

  useEffect(()=>{
    fetchPrograms()
  },[])






  return (
    <View style={{ flex: 1, padding: 24 }}>
    {loader ? <ActivityIndicator/> :   <> {`${articleId}`}</>}
    </View>
  )


}



export default Programs;