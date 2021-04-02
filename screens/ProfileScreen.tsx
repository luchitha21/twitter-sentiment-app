import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Feed from '../components/Feed' ;
import CommentScreen from '../screens/CommentScreen' ;


import tweets from '../data/tweets';




export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      
      <Feed/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
