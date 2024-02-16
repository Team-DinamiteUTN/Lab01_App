import {StyleSheet} from 'react-native';

export const style_01 = StyleSheet.create({
    btn_Home: {
    alignItems: 'center',
    backgroundColor: '#00D100',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_Details: {
    alignItems: 'center',
    backgroundColor: '#FF7634',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_About: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    borderColor: '#000000',
    borderWidth: 1,
    fontWeight: 'bold',
    padding: 10,
    width: '33%',
    },

    btn_Label: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    },

    row: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    },
    
    cont: {
    flex: 1,
    alignItems: 'center',
    paddingTop: "5%",
    backgroundColor: "#F5EEE6"
    },
    
    h1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center'
    },

    image: {
        width: '100%',
        height: 350,
        marginBottom: 20,
        marginTop: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#000000',
        textAlign: 'justify',
        margin: 25,

    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});