import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";

const HotDogScreen = props => {
	return <SafeAreaView>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('HotDogDetail')}
		>
			<Text>Hot Dog</Text>
			<Text>$6.19  520 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('HotDogDetail')}
		>
			<Text>Bacon Dog</Text>
			<Text>$6.89  600 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('HotDogDetail')}
		>
			<Text>Cheese Dog</Text>
			<Text>$6.79  590 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('HotDogDetail')}
		>
			<Text>Bacon Cheese Dog</Text>
			<Text>$7.79  670 Calories</Text>
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

export default HotDogScreen
