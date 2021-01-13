import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

export default class GuideScreen extends Component {
	render() {
		return <SafeAreaView style = {{padding:15}}>
			<Text>Online Tracking Opt Put Guide</Text>
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
