import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";

const FriesScreen = props => {
	return <SafeAreaView>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Little Fries</Text>
			<Text>$3.69  530 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Little Cajun Fries</Text>
			<Text>$3.69  530 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Regular Fries</Text>
			<Text>$4.79  950 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Cajun Fries</Text>
			<Text>$4.79  950 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Large Fries</Text>
			<Text>$6.19  1310 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('FriesDetail')}
		>
			<Text>Large Cajun Fries</Text>
			<Text>$6.19  1310 Calories</Text>
		</TouchableOpacity>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	menuSty: {
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	iconSty: {
		height: 50,
		width: 50,
		borderRadius: 25
	},
	pickerContainer: {
		top: 20,
		left: 20
	},
});

export default FriesScreen
