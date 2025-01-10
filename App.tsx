import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewCluster from 'react-native-map-clustering';

export default function App() {
  interface ClusterPressEvent {
    clusterId: number;
    position: {
      latitude: number;
      longitude: number;
    };
    markers: any[]; // Ändra till mer specifik typ om möjligt
  }

  const handleClusterPress = (cluster: ClusterPressEvent) => {
    console.log('Cluster pressed:', cluster);
  };

  return (
    <View style={styles.container}>
      <MapViewCluster
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: -25.363,
          longitude: 131.044,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        clusterColor="#FF5341" // Färg på klustrets cirkel
        clusterRadius={50} // Radie för klustrets gräns
        onClusterPress={cluster => handleClusterPress(cluster)}>
        {/* Första markören */}
        <Marker
          coordinate={{latitude: -25.163, longitude: 131.044}}
          title="Hello World!"
        />
        {/* Andra markören */}
        <Marker
          coordinate={{latitude: -25.364, longitude: 131.045}}
          title="Another Marker"
        />
      </MapViewCluster>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
