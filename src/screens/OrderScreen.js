import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

export default class PrivacyScreen extends Component {
	render() {
		return <SafeAreaView style = {{padding:15}}>
			<Image
				source={require('../../assets/order.png')}
				style={{width: 500, height: 500}}/>
			<TouchableOpacity
				onPress = { () => { this.props.navigation.navigate('Type') } }
				style   = {{padding:30}} >
				<Text>Start new order</Text>
			</TouchableOpacity>
		</SafeAreaView>
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
	}
});
