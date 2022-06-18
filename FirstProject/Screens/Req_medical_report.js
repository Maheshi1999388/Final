import { View, Text,TouchableOpacity,Button,StyleSheet,Image,card, TextInput,ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import AppButton from '../Components/AppButton';

const Req_medical_report = () => { 

    const navigation = useNavigation();

    const [Appointment,setAppointment] =React.useState("");
    const [Description,setDescription] =React.useState("");
  
  
    return (
     
      <ScrollView>
    

            <Text>Request Chamal Medicare Lab Report</Text>
            <Text></Text>
            <Text>Check your lab reports here
               You can check Lab reports of chamal medicare laboratories by
               simply entering the "Lab Reference Number" and "Passcode"
              Printed on the bill        
              
            </Text>

            <Text></Text>

    <TouchableOpacity style={styles.card1} >


        
          <Text style={styles.cardText}>Appointment Number</Text> 
          <TextInput
         onChangeText={setAppointment}
         style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Appointment}
      />

            
<Text style={styles.cardText}>Description</Text> 
          <TextInput
         onChangeText={setDescription}
         style={{ borderWidth: 2, height: 300, borderColor: 'skyblue', margin: 20, textAlign: 'center' }}
         value={Description}
      />

<Text></Text>
<AppButton
             title="Send Request" onPress={()=>navigation.navigate('Req_Lab_report') }
            
/> 

      </TouchableOpacity>
      
      <Text></Text>

        
            </ScrollView>

);
};
const styles = StyleSheet.create({
             
  container:{
    flex:1,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    color: 'black',

  },
  card1:{
    backgroundColor: '#DBECFF',
    marginBottom:10,
    marginLeft: '2%',
    width:'90%',
    height: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
   



  },



});
  
  
  export default Req_medical_report;