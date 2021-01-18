import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper'
import { Checkbox } from 'react-native-paper'
// import CheckBox from '@react-native-community/checkbox'

const DeliveryAddress = () => {
	const [checked, setChecked] = useState(false)

	return <View style={styles.hiddenContainer}>
		<Text style={{padding: 10, fontWeight: 'bold'}}>We Now Offer Contactless Deliveries</Text>
		<Text>Minimize contact with your delivery person by selecting</Text>
		<Text>"I want contactless delivery" when adding a new address.</Text>
		<TextInput
			style={styles.hiddenTxtSty}
			placeholder='Street Address...'
			placeholderTextColor='#003f5c'
			// onChangeText={user => this.setState({username:user})}
		/>
		<TextInput
			style={styles.hiddenTxtSty}
			placeholder='Building Name / Suite / Apt...'
			placeholderTextColor='#003f5c'
			// onChangeText={user => this.setState({username:user})}
		/>
		<TextInput
			style={styles.hiddenTxtSty}
			placeholder='City...'
			placeholderTextColor='#003f5c'
			// onChangeText={user => this.setState({username:user})}
		/>
		<TextInput
			style={styles.hiddenTxtSty}
			placeholder='Zip Code...'
			placeholderTextColor='#003f5c'
			// onChangeText={user => this.setState({username:user})}
		/>
		<TextInput
			style={styles.hiddenTxtSty}
			placeholder='Delivery Instructions (22 Character Limit)...'
			placeholderTextColor='#003f5c'
			// onChangeText={user => this.setState({username:user})}
		/>
		<View>
			<Checkbox.Item
				label='I want contactless delivery'
				status={ checked ? 'checked' : 'unchecked'}
				onPress={ () => setChecked(!checked) }
				style={styles.optSty}
			/>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	logoSty: {
		fontWeight: 'bold',
		fontSize: 50,
		color: '#fb5b5a',
		marginBottom: 40
	},
	inputSty: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	txtStyle : {
		width: '80%',
		height: '15%',
		color: 'black',
		borderColor: 'black',
		borderWidth: 2
	},
	submitBtn: {
		width: '80%',
		backgroundColor: '#fb5b5a',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10
	},
	entrySty: {
		color: 'white'
	},
	contactSty: {
		flex: 1,
		backgroundColor: '#003f5c',
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	hiddenContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	hiddenTxtSty: {
		marginTop: 10,
		padding: 10,
		width: '80%',
		backgroundColor: '#cfcdc1',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
	},
	optSty: {
		borderRadius: 5,
		borderWidth: 2,
		borderColor: '#FF5722',
		color: '#fff',
		backgroundColor: '#CDDC39',
		padding: 2,
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	}
})

export default DeliveryAddress
