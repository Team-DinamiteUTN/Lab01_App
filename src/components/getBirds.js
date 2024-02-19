import React, {useEffect, useState} from 'react';
import {PATHURL, PORT} from './config/config';
import { Image } from 'react-native';
import { styleBirds } from '../styles/styleBirds';

import {
FlatList,
SafeAreaView,
Text,
TouchableOpacity,
View,
} from 'react-native';
import axios from 'axios';

const GetBirds = props => {
const nav = props.navegar;
const [data, setData] = useState([]);

const Obtener = async () => {
try {
    axios.get(`${PATHURL}:${PORT}/bird`).then(response => {
    const json = response.data;
    setData(json.data);
    });
} catch (error) {
    console.error(error);
}
};

useEffect(() => {
Obtener();
}, []);

const onPressViewArticle = token => {
nav.navigate('InfoBird', {token: token});
};

return (
<SafeAreaView>
    <FlatList
    contentContainerStyle={{ paddingTop: 30 }}
    data={data}
    keyExtractor={({id}, index) => id}
    renderItem={({item}) => (
        <TouchableOpacity
        key={item.name}
        style={styleBirds.itemText}
        onPress={() => onPressViewArticle(item._id)}>
        <View style={styleBirds.itemContainer}>
            <Text style={styleBirds.tit_02}>{item.name}</Text>
            <Image style ={styleBirds.imgContainer} source={require('../imgs/Pigeons.png')} />
        </View>
        </TouchableOpacity>
    )}
    />
</SafeAreaView>
);
};

export default GetBirds;