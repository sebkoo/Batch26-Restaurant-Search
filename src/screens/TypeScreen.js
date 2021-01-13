import React, { Component } from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity, Image, SafeAreaView} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'

export default class TypeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			type: null,
			when: null,
			types: [],
			whens: []
		}
	}

	changeType(item) {
		let type = null
		let types
		switch (item.value) {
			case 'pick-up':
				types = [{label: 'In-Store Pickup', value: 'in-store pickup'}]
				break
			case 'drive-up':
				types = [{label: 'Mobile Drive-Up Window', value: 'drive-up window'}]
				break
			case 'curbside':
				types = [{label: 'Curbside', value: 'curbside'}]
				break
			case 'Delivery':
				types = [{label: 'Delivery', value: 'delivery'}]
				break
		}
		this.setState({type, types})
	}

	changeWhen(item) {
		let when = null
		let whens
		switch (item.value) {
			case 'asap':
				whens = [{label: 'ASAP', value: 'asap'}]
				break
			case 'later':
				whens = [{label: 'Later', value: 'later'}]
				break
		}
		this.setState({when, whens})
	}

	render() {
		return <View>
			<View style={styles.container}>
				<Image source={require('../../assets/type.png')} style={styles.iconSty}/>
				<DropDownPicker
					items={[
						{label: 'In-Store Pickup', value: 'in-store pickup'},
						{label: 'Mobile Drive-Up Window', value: 'drive-up window'},
						{label: 'Curbside', value: 'curbside'},
						{label: 'Delivery', value: 'delivery'}
					]}
					defaultNull={this.state.type === null}
					placeholder='How would you like to get your order?'
					containerStyle={{height: 40, width: 350}}
					onChangeItem={item => this.changeType(item)}
				/>
			</View>
			<View style={styles.container}>
				<Image source={require('../../assets/when.png')} style={styles.iconSty}/>
				<DropDownPicker
					items={[
						{label: 'ASAP', value: 'asap'},
						{label: 'Later', value: 'later'}
					]}
					defaultNull={this.state.when === null}
					placeholder='When would you like your order?'
					containerStyle={{height: 40, width: 350}}
					onChangeItem={item => this.changeWhen(item)}
				/>
			</View>
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('Search')}} style = {{padding:30}}>
				<Text>Search for Locations</Text>
			</TouchableOpacity>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		flexDirection: 'row',
		padding: 10,
		marginLeft:16,
		marginRight:16,
		marginTop: 100,
		marginBottom: 100,
		// borderRadius: 5,
		backgroundColor: '#FFF',
	},
	iconSty: {
		height: 40,
		width: 40
	},
});
