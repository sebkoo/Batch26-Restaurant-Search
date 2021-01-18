import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";

const SandwichScreen = props => {
	return <SafeAreaView>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('SandwichDetail')}
		>
			<Text>Grilled Cheese Sandwich</Text>
			<Text>$5.19  420 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('SandwichDetail')}
		>
			<Text>Veggie Sandwich</Text>
			<Text>$4.49  280 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('SandwichDetail')}
		>
			<Text>BLT Sandwich</Text>
			<Text>$6.29  600 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('SandwichDetail')}
		>
			<Text>Veggie Sandwich with Cheese</Text>
			<Text>$5.19  420 Calories</Text>
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

export default SandwichScreen
