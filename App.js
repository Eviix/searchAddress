import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView, Dimensions, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [searchLocation, setSearchLocation] = useState('');
  const [mapLatitude, setMapLatitude] = useState(60.200692);
  const [mapLongitude, setMapLongitude] = useState(24.934302);
  const [mapLatitudeDelta, setMapLatitudeDelta] = useState(0.0250);
  const [mapLongitudeDelta, setMapLongitudeDelta] = useState(0.0250);

  cconst [address, setAddress] = useState('');
  const [markerLat, setMarkerLat] = useState(0.0);
  const [markerLong, setMarkerLong] = useState(0.0);
  const [regionLat, setRegionLat] = useState(0.0);
  const [regionLong, setRegionLong] = useState(0.0);
  const [data, setData] = ([]);


  const fetchCoordinates = () => {
    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=s9RDVPqGhFHEQCfGvUtJNWgUDhmDfc9v&location=${address}`)
    .then(response => response.json())
    .then(data => {
      const lat = data.results[0].locations[0].latLng.lat;
      const long = data.results[0].locations[0].latLng.lng;
      setMarkerLat(lat);
      setRegionLat(lat);
      setMarkerLong(long);
      setRegionLong(long);
    })
    .catch(error => {
      console.log(error)
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

