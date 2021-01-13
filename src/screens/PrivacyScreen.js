import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

export default class PrivacyScreen extends Component {
	render() {
		return <SafeAreaView style = {{padding:15}}>
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('Agreement')}} style = {{padding:30}}>
				<Text>User Agreement</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('Policy')}} style = {{padding:30}}>
				<Text>Privacy Policy</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('Guide')}} style = {{padding:30}}>
				<Text>Online Tracking Opt Out Guide</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {this.props.navigation.navigate('License')}} style = {{padding:30}}>
				<Text>Open Source Licenses</Text>
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
