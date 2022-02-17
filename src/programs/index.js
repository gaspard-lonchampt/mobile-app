import { Image, ScrollView, ActivityIndicator,View,Text, FlatList,StyleSheet ,Pressable } from 'react-native';
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
  
      setPrograms(json['hydra:member'])
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

    const programsInArray = (data) =>{
      let arrayForMap = []
  
      for (let i =0; i < data.length; i++){
        let idcat = data[i].id
        let category = data[i].name
        let objectInArrayForMap = {id:idcat,name:category}
  
       console.log(objectInArrayForMap)
       arrayForMap.push(objectInArrayForMap)
      }
      console.log(arrayForMap)
  
    //   return arrayForMap.map(category => 
    //     <Pressable onPress={()=> navigation.navigate('Programs', {idCat:category.id})}
    //                style={styles.button}    
    //                key={category.id}
    //                title={category.id} 
    //                name={category.name}> 
    //        <Text style={styles.text}>{`${category.name}`}</Text>
    //     </Pressable >)
  
    // }

    return arrayForMap.map(program =>  <Pressable onPress={()=> navigation.navigate('Programs', {programId:program.id})}
          style={styles.button}    
          key={program.id}
          title={program.id} 
          name={program.name}> 
        <Text style={styles.text}>{`${program.name}`}</Text>
      </Pressable >)
  }

  useEffect(()=>{
    fetchPrograms()
  },[])






  return (
    <View style={{ flex: 1, padding: 24 }}>
    {loader ? <ActivityIndicator/> :   <> {programsInArray(programs)}</>}
    </View>
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
    backgroundColor: 'red',
  

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export default Programs;