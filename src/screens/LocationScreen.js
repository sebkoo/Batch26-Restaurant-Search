import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import MapView from 'react-native-maps'

export default function LocationScreen() {
	return <MapView
			style={{flex: 1}}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.05,
				longitudeDelta: 0.05
			}}
		/>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		alignItems: 'center',
		justifyContent: 'center',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	map: {
		width: useWindowDimensions.width,
		height: useWindowDimensions.height,
	},
});
