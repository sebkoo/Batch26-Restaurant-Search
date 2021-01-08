import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

function LocationScreen({navigation}) {
	return <View style={styles.content}>
		<Text style={{fontSize: 30}}>Welcome to Slurp</Text>
		<Text style={{fontSize: 20}}>How do you want your order?</Text>
		<Button
			title = 'Search for Locations'
			// onPress={() => navigation.navigate('')}
		/>
	</View>
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default LocationScreen;
