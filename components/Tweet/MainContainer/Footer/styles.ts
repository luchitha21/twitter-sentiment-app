import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flexDirection: 'row',

  },
  comment:{
    paddingTop:2,
    flexDirection: 'row',
    marginLeft:5,
    marginTop:5,
    alignItems: 'center',
  },
  footerNumber:{
    color: 'grey',
    marginLeft:5,
 
  },
  footerIcons:{
    flexDirection: 'row',
    marginLeft:5,
    marginTop:5,
    alignItems: 'center',
    
  },
  sentimentScore:{
    color: 'red',
    flexDirection: 'row',
    marginLeft:5,
  },


});

export default styles;
