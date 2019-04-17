import {StyleSheet} from 'react-native'

import colors from './../styles/variables';
export default StyleSheet.create({

    button: {
        height: 40, 
        width: 300, 
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    pictureContainer: {
      flex: 1,
      justifyContent: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50
      }, 
      returnButton: {
        position: 'absolute',
        left: 0,
        top: 25,
        width: 40,
        height: 40,
      }, 
      title: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      boxStyle: {
        height: 200, 
        width: '40%', 
        margin: 5,
      },
      touchable: {
          height: '100%',
          width: '100%',
          justifyContent: 'center'
      },
      vote_button: {
          height: 50, 
          width: '100%', 
          marginTop: 10
      },
      container: {
        flex: 1,
        justifyContent: 'center'
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }, 
      containerButton: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      },
      containerGlobal: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
  });