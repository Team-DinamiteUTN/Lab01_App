import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

/* custom modules */
import Home from './src/views/home';
import Gallery from './src/views/gallery';
import References from './src/views/References';
import About from './src/views/about';

const Drawer = createDrawerNavigator();

function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Gallery" component={Gallery} />
    <Drawer.Screen name="References" component={References} />
    <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default App;