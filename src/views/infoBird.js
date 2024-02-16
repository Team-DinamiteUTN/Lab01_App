import React from 'react';
import {SafeAreaView, View} from 'react-native';

import GetBird from '../components/getBird';

const InfoBird = ({navigation}) => {
    const valores = navigation.getState();
    const token = valores.routes[1].params.token;

    return (
    <SafeAreaView>
        <View>
        <GetBird navegar={navigation} token={token} />
        </View>
    </SafeAreaView>
    );
};

export default InfoBird;