import {StyleSheet} from 'react-native';
import Colors from './Colors';

const GlobalStyle = StyleSheet.create({
  container_padding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 30,
    paddingHorizontal: 15,
  },
  container_main:{
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
    paddingTop: 70,
    paddingHorizontal: 0,
  },
  pictureContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
  },
  align_center:{
	  alignItems: 'center'
  },
  justify_center:{
	  justifyContent: 'center'
  },
  bottom_buttons:{
	  justifyContent: 'space-between',
    width: '100%',
    height: 200,
    alignSelf: 'flex-end'
  },
  align_left:{
	  alignItems: 'flex-start'
  },
  text_left:{
	  textAlign: 'left'
  },
  h1:{
	  fontSize: 30
  },
  h1_bold:{
	  fontSize: 30,
    fontWeight: 'bold'
  },
  h2:{
	  fontSize: 25
  },
  h2_bold:{
	  fontSize: 25,
    fontWeight: 'bold'
  },
  small:{
    fontSize: 15
  },
  highlight:{
    color: Colors.light.gradient_start
  },
  'w-full': {
    width: '100%',
  },
  'w-1/2': {
    width: '50%',
  },
  row_space:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  row_center:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row_evenly:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row_justify:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_full:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  default_text:{
    fontSize: 20,
    textAlign: 'center',
  },
  bold:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  hr:{
    width: '25%',
    height: 3,
    backgroundColor: Colors.light.gradient_start,
	  alignSelf: 'center',
  },
  err_msg: {
    marginTop:'auto', 
    marginBottom:10,
    color: '#F25D10',
    textAlign: 'center',
  }
});

export default GlobalStyle;