import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {style_01} from '../styles/style_01';
import GetBirds from '../components/getBirds';
const Gallery = ({navigation}) => {
    return(
        <SafeAreaView style={style_01.cont}>
            <View>
                <Text style={style_01.h1}>Gallery View</Text>
                <GetBirds navegar={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default Gallery;