
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
           
                 {/* inline styling */}

      <View style={{backgroundColor: 'red', flex: 1, }}>
        <View style={{backgroundColor: 'grey', margin:20, flex: 1, borderRadius:10, flexDirection: 'row',}}>
        <View style={{
          backgroundColor: 'orange', 
          width: 150,
          height: 150,
          borderRadius: 100,
          margin:50,
          flex: 6,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
           
        }}>
           <Text style={{color:'black', fontSize:22, fontWeight:"bold", justifyContent:'flex-start', textAlign:'center',}}>Orange Circle</Text>
        </View>

        <View style={{
          backgroundColor: 'yellow', 
          marginTop:100,
          marginBottom:100,
          marginRight:20, 
          flex: 4,
          borderRadius:20,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',}}>

          <Text style={{color:'black', fontSize:18, fontWeight:"bold", justifyContent:'flex-start', textAlign:'center',}}>Yellow Box</Text>
        </View>
        </View>
      </View>
     
     {/* interline styling */}

      <View style={styles.container_down}>
      <View style={styles.box_down_left}>
        <Text style={styles.box_down_left_text}>Black Box</Text>
      </View>
       <View style={styles.box_down_right}>
       <Text style={styles.box_down_right_text}>{'Brown\nBox'}</Text>
       </View>
       
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container_down: {
    flex: 1.6,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'center', 
   
  },
  box_down_left: {
    backgroundColor: 'black', 
    margin:40, 
    flex: 1.4, 
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  box_down_left_text:{
    color:'white', 
    fontSize:18,
    fontWeight:"bold", 

  },
  box_down_right:{
    backgroundColor: 'brown', 
    margin:30, 
    borderRadius:60, 
    flex: 0.6,  
    justifyContent: 'center',
    alignItems: 'center',

  },
  box_down_right_text :{
    color:'white', 
    transform: [{ rotate: '-90deg'}],

  }

  
});