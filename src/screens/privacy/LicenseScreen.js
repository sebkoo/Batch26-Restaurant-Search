import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

export default class LicenseScreen extends Component {
	render() {
		return <SafeAreaView style = {{padding:15}}>
			<Text>Open Source Licenses</Text>
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
