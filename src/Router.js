import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyHeader from './components/MyHeader';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './pages/MainTab';
import ScannerScreen from './pages/ScannerScreen';
import MenuScreen from './pages/MenuScreen';
import SetoranScreen from './pages/SetoranScreen';
import PilihSetoranScreen from './pages/PilihSetoranScreen';
import SetoranFormScreen from './pages/SetoranFormScreen';
import PrestasiScreen from './pages/PrestasiScreen';
import PrestasiFormScreen from './pages/PrestasiFormScreen';
import PelanggaranScreen from './pages/PelanggaranScreen';
import PelanggaranFormScreen from './pages/PelanggaranFormScreen';
import SplashScreen from './pages/SplashScreen';
import LoginScreen from './pages/LoginScreen';
import {AuthContext} from './components/Context';
/**
 *
 * MainScreen
 * MainStack -> MainTab -> HomeScreen || ProfileScreen
 * ScannerStack -> ScannerScreen
 * MenuStack -> MenuScreen
 *
 */
const MainStack = createStackNavigator();
const MainScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loginToken, setLoginToken] = React.useState();

  React.useEffect(() => {
    setIsLoading(false);
  }, [loginToken]);

  return (
    <AuthContext.Provider value={setLoginToken}>
      <MainStack.Navigator initialRouteName="SplashScreen" headerMode="screen">
        {isLoading ? (
          <MainStack.Screen
            name="SplashScreen"
            options={{headerShown: false}}
            component={SplashScreen}
          />
        ) : null}

        {loginToken === undefined ? (
          <MainStack.Screen
            name="LoginScreen"
            options={{headerShown: false}}
            component={LoginScreen}
          />
        ) : null}
        <MainStack.Screen
          name="MainScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={MainTab}
        />
        <MainStack.Screen
          name="ScannerScreen"
          options={{headerShown: false}}
          component={ScannerScreen}
        />
        <MainStack.Screen
          name="MenuScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={MenuScreen}
        />
        <MainStack.Screen
          name="SetoranScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={SetoranScreen}
        />
        <MainStack.Screen
          name="PilihSetoranScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={PilihSetoranScreen}
        />
        <MainStack.Screen
          name="SetoranFormScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={SetoranFormScreen}
        />
        <MainStack.Screen
          name="PrestasiScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={PrestasiScreen}
        />
        <MainStack.Screen
          name="PrestasiFormScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={PrestasiFormScreen}
        />
        <MainStack.Screen
          name="PelanggaranScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={PelanggaranScreen}
        />
        <MainStack.Screen
          name="PelanggaranFormScreen"
          options={{headerShown: true, header: (Props) => <MyHeader />}}
          component={PelanggaranFormScreen}
        />
      </MainStack.Navigator>
    </AuthContext.Provider>
  );
};

export default Router = () => {
  return (
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  );
};
