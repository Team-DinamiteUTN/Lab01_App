import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* custom modules */
import Home from './src/views/home';
import Gallery from './src/views/gallery';
import References from './src/views/References';
import About from './src/views/about';
import InfoBird from './src/views/infoBird';
import InfoComment from './src/views/InfoComment';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const BirdGallery = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="ImgGallery" component={Gallery} options={{title: 'Birds View'}} />
    <Stack.Screen
      name="InfoBird"
      component={InfoBird}
      options={{title: 'Bird Data'}}
    />
    <Stack.Screen
      name="InfoComment"
      component={InfoComment}
      options={{title: 'Add comment'}}
    />
    </Stack.Navigator>
  );
};

function DrawNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home}/>
    <Drawer.Screen name="Gallery" component={BirdGallery} />
    <Drawer.Screen name="References" component={References} />
    <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <DrawNav/>
    </NavigationContainer>
  );
}

export default App;