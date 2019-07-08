import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }, 
});


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text stlye={style.welcome}>
          Welcome to My First React Native App
          </Text>
          <Text style={style.message}>
            I have a feeling that it will be an instresting moment here 
          </Text>
      </View>
    );
  }
}

<Card title="Important Lession to Learn">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Text style={styles.welcome}>
          it is going to be fine!
          </Text>
        </View>
      );
    })
  }
</Card>