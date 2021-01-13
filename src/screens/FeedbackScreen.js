import React, { Component } from "react";
import {SafeAreaView, Text, StyleSheet, Button, Platform, Linking, TouchableOpacity} from "react-native";

import Mind from './feedback/CategoryFeedbackScreen'

export default function FeedbackScreen ({ navigation }) {
	return <SafeAreaView style = {{padding:15}}>
		<Text>What is this regarding?</Text>
		<Button
			title='App'
			onPress={() => navigation.navigate('Feedback Category')}
		/>
		<Button
			title='Food'
			onPress={() => navigation.navigate('Feedback Category')}
		/>
		<Button
			title='Service'
			onPress={() => navigation.navigate('Feedback Category')}
		/>
		<Button
			title='Other'
			onPress={() => navigation.navigate('Feedback Category')}
		/>
	</SafeAreaView>
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
	}
});
