import React, { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";
import CheckboxFormX from 'react-native-checkbox-form'

const noBun = [
	{
		label: 'No bun (bowl)',
		value: ''
	}
]

const BurgerDetailScreen = props => {
	const {price, calories} = props.route.params
	const [amount, setAmount] = useState(initAmount)

	return <SafeAreaView>
		<View style={styles.amtSty} >
			<Text style={styles.txtSty}>${price} {calories}</Text>
			<Text style={styles.title}>Quantity</Text>
			<View style={styles.numSty}>
				<TouchableOpacity onPress={ () => (amount > 1) ? setAmount(amount - 1) : null}>
					<Text style={styles.btnSty}> - </Text>
				</TouchableOpacity>
				<Text style={styles.btnSty}>{amount}</Text>
				<TouchableOpacity onPress={ () => (amount > 1) ? setAmount(amount + 1) : null}>
					<Text style={styles.btnSty}> + </Text>
				</TouchableOpacity>
			</View>
		</View>
		<Text>Prefer no bun?</Text>
		<Text>OPTIONAL</Text>
		<Checkbox label='No bun (bowl)' onPress={ (checked) => console.log('Checked!') } />
		<Checkbox label='No bun (bowl)' onPress={ (checked) => console.log('Checked!') } />
		<TouchableOpacity style={styles.menuSty}
			onPress={() => props.navigation.navigate('ShakeDetail')}
		>
			<Text>Milkshake</Text>
			<Text>$5.05  670 Calories</Text>
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
	amtSty: {
		marginHorizontal: 20,
		marginVertical: 20
	},
	numSty: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btnSty: {
		fontSize: 40
	}
});

export default BurgerDetailScreen
