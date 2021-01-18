import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";


const BurgerScreen = props => {
	return <SafeAreaView>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<View style={{flexDirection:'column'}}>
				<Text>Hamburger</Text>
				<Text>$8.39  840 Calories</Text>
			</View>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Little Hamburger</Text>
			<Text>$6.39  540 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Cheeseburger</Text>
			<Text>$9.49  980 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Little cheeseburger</Text>
			<Text>$7.19  610 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Bacon Burger</Text>
			<Text>$9.39  920 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Little Bacon Burger</Text>
			<Text>$7.09  620 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Bacon Cheeseburger</Text>
			<Text>$9.59  1060 Calories</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('BurgerDetail')}
		>
			<Text>Little Bacon Cheeseburger</Text>
			<Text>$8.32  690 Calories</Text>
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

export default BurgerScreen
