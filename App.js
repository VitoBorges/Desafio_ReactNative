import React from 'react';
import { View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
        <View style={{width:200, height:40, backgroundColor: 'darkorange'}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: '50%', backgroundColor: 'darkorchid'}} />
        <View style={{width: '50%', backgroundColor: 'cornflowerblue'}} />
      </View>
      <View style={{flex: 0.2, backgroundColor:'cyan'}}></View>
      <View style={{flex: 3.5}}>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-evenly'}}>
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignContent: 'space-around', justifyContent: 'space-evenly'}}>
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
          <View style={{width:100, height:100, backgroundColor: 'darkorange'}} />
        </View>
      </View>
      <View style={{flex: 0.8, backgroundColor:'cornflowerblue'}}></View>
      <StatusBar
        backgroundColor='cyan'
        barStyle='dark-content'
        />
    </>
  );
}
