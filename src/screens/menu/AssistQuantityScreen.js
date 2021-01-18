import React from 'react'
import {SafeAreaView, View, Text, StyleSheet, Image, Button} from 'react-native'
import NumericInput from 'react-native-numeric-input'

const AssistQuantityScreen = props => {
	return <SafeAreaView>
		<NumericInput onChange={ value => console.log(value) } />
		<Button
			title='Add to Basket'
			onPress={ () => props.navigation.navigate('Menu') }
		/>
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

export default AssistQuantityScreen
