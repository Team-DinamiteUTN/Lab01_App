import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {style_01} from '../styles/style_01';

const Gallery = () => {
    return(
        <SafeAreaView style={style_01.cont}>
            <View>
                <Text style={style_01.h1}>Gallery View</Text>
            </View>
        </SafeAreaView>
    );
};

export default Gallery;