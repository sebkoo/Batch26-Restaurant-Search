import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";

const DrinkScreen = props => {
	return <SafeAreaView>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Regular Drink</Text>
			<Text>$2.89  360 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Large Drink</Text>
			<Text>$2.99  520 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Bottled Water</Text>
			<Text>$1.99  0 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Honest Tea Bottle</Text>
			<Text>$2.79  70 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Simply Lemonade Bottle</Text>
			<Text>$2.79  160 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Coke Bottle</Text>
			<Text>$2.59  240 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Diet Coke Bottle</Text>
			<Text>$2.59  0 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('DrinkDetail')}
		>
			<Text>Sprite Bottle</Text>
			<Text>$2.59  240 Calories</Text>
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

export default DrinkScreen
