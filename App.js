import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';



export default function App() {
  return (<>
      <ScrollView>
    <View style={styles.container}>
      <Image source={require ('./Image/profile.png')} style={{width:100, height: 100, }}/>
            <Text> <b> Name:</b> Atta Ur Rahman Farooqi</Text>
            <Text> <b> Email:</b> attaurrahmanfarooqi9@gmail.com</Text>
            <Text> <b> Phone:</b> 0332*******</Text>
            <Text> <b> Address:</b> jamshed road Karachi</Text>
            

            <View class="a-edu">
        <h1 >Education</h1>

        <ul>
            <li>Matric:</li>
            <li>Intermediate:</li>
            <li>Graduation:</li>
            <li>Master:</li>
        </ul>
        </View>


        <View class="a-skill">
        <h1 >Skills</h1>
        <ul>
            <li>Skill-1:</li>
            <li>Skill-2:</li>
            <li>Skill-3:</li>
            <li>Skill-4:</li>
            <li>Skill-5:</li>
            
        </ul>
    </View>


    <View class="a-cert">
        <h1 >Certifications</h1>
        <ul>
            <li>Certificate-1:</li>
            <li>Certificate-2:</li>
            <li>Certificate-3:</li>
            <li>Certificate-4:</li>
            <li>Certificate-5:</li>
           
        </ul>
    </View>

    <View class="a-hob">
        <h1 >Hobbies</h1>
        <ul>
            <li>Hobby-1:</li>
            <li>Hobby-2:</li>
            <li>Hobby-3:</li>
            <li>Hobby-4:</li>
            <li>Hobby-5:</li>
           
        </ul>
    </View>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
