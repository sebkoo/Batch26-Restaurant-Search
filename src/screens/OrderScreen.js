import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Image, TouchableOpacity, Button, View} from "react-native";

export default class PrivacyScreen extends Component {
	render() {
		return <SafeAreaView style = {{flex: 1, flexDirection: 'column'}}>
			<Image
				source={require('../../assets/order.png')}
				style={{width: 550, height: 600}}/>
			<Button
				title='Start new order'
				// style={}
				onPress={ () => this.props.navigation.navigate('Type') }
			/>
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
