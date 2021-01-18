import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import { TextInput } from 'react-native-gesture-handler'
import RNPickerSelect from 'react-native-picker-select'
import DeliveryAddress from '../../components/DeliveryAddress'
import DateTime from '../../components/DateTime'

// const typeOpt = ['In-Store Pick-up', 'Mobile Drive-up Window', 'Curbside', 'Delivery']
// const timeOpt = ['ASAP', 'Later']

const types = [
	{
		label: 'In-Store Pickup',
		value: 'in-store pickup'
	},
	{
		label: 'Mobile Drive-Up Window',
		value: 'drive-up window'
	},
	{ label: 'Curbside',
		value: 'curbside'
	},
	{
		label: 'Delivery',
		value: 'delivery'
	}
]

const times = [
	{
		label: 'ASAP',
		value: 'asap'
	},
	{
		label: 'Later',
		value: 'later'
	}
]

const TypeScreen = ({ navigation }) => {
	const [type, setType] = useState('delivery')
	const [when, setWhen] = useState('')
	const [time, setTime] = useState('asap')
	const [typeVisible, setTypeVisible] = useState(false)
	const [timeVisible, setTimeVisible] = useState(false)
	const [checked, setChecked] = useState(false)

	return <SafeAreaView style={styles.container}>
		<Text style={styles.txtSty}>How do you want your order?</Text>
		<View style={styles.typeSty}>
			<View style={styles.contentSty}>
				<Image source={require('../../../assets/type.png')} style={styles.iconSty}/>
				<View style={styles.pickerContainer}>
					<RNPickerSelect
						items={types}
						style={ styles.pickerSty }
						onValueChange={ value => {
								if (value === 'delivery') setTypeVisible(!typeVisible)
								else setTypeVisible(false)
						} }
						placeholder={{ label: 'How would you like to get your order?', value: null }}
					/>
				</View>
			</View>
			<View style={styles.contentSty}>
				<Image source={require('../../../assets/when.png')} style={styles.iconSty}/>
				<View style={styles.pickerContainer}>
					<RNPickerSelect
						items={times}
						style={ styles.pickerSty }
						onValueChange={ value => {
							if (value === 'later') setTimeVisible(!timeVisible)
							else setTimeVisible(false)
						} }
						placeholder={{ label: 'When would you like your order?', value: null }}
					/>
				</View>
			</View>
			{ typeVisible ? <DeliveryAddress /> : null }
			{ timeVisible ? <DateTime /> : null }
			<Button
				title='Search for Locations'
				onPress={ () => navigation.navigate('Search') }
			/>
		</View>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		// justifyContent: 'space-between',
		backgroundColor: '#fff'
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	txtSty: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	typeSty: {
		flexDirection: 'column'
	},
	contentSty: {
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	pickerContainer: {
		top: 20,
		left: 20
	},
	pickerSty: {
		fontSize: 10,
	},
	iconSty: {
		height: 50,
		width: 50,
		borderRadius: 25
	},
	btnSty: {
		alignSelf: 'center',
		bottom: -30,
		backgroundColor: '#FF6347',
		width: '80%'
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
	}
});

export default TypeScreen
