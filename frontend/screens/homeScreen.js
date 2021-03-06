import React, {useState} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Input, Button } from 'react-native-elements';

import {connect} from 'react-redux'

function HomeScreen({navigation, onSubmitPseudo}) {

  const [pseudo, setPseudo] = useState('')

  return (
    <ImageBackground source={require('../assets/home.jpg')} style={styles.image}>
      <Input style={styles.username}
        containerStyle={{paddingHorizontal: 50}}
        placeholder='username'
        leftIcon={
          <FontAwesome name="user" size={24} color="tomato" />
        }
        // get username
        onChangeText={(e) => setPseudo(e)}
      />
    <Button
    onPress={() => {onSubmitPseudo(pseudo); navigation.navigate('Map')}}
      icon={
        <FontAwesome name="arrow-right" size={24} color="#fff" style={styles.arrow} />
      }
      title="Go to map"
    />
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  arrow : {
    marginRight: 10
  }
})


/* REDUX */
function mapDispatchToProps(dispatch) {
  return{
    onSubmitPseudo: function(pseudo) {
      dispatch( {type: 'savePseudo', pseudo: pseudo})
    }
  }
}

export default connect(
  null, 
  mapDispatchToProps
)(HomeScreen);

/* REDUX  */