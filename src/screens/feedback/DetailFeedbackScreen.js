import React, { Component } from "react";
import {SafeAreaView, Text, TextInput, StyleSheet, Button, View, TouchableOpacity} from "react-native";

export default function DetailFeedbackScreen() {
	return <SafeAreaView style={styles.container}>
		<View style={styles.inputSty}>
			<TextInput
				style={styles.textStyle}
				placeholder='Full Name...'
				placeholderTextColor='#003f5c'
				// onChangeText={user => this.setState({username:user})}
			/>
		</View>
		<View style={styles.inputSty}>
			<TextInput
				style={styles.textStyle}
				placeholder='Email...'
				placeholderTextColor='#003f5c'
				// onChangeText={user => this.setState({username:user})}
			/>
		</View>
		<Text>Feedback</Text>
		<View style={styles.inputSty}>
			<TextInput
				style={styles.textStyle}
				placeholder='What is on your mind?...'
				placeholderTextColor='#003f5c'
				// onChangeText={user => this.setState({username:user})}
			/>
		</View>
		<TouchableOpacity style={styles.submitBtn}>
			<Text style={styles.entryStyle}>Submit Feedback</Text>
		</TouchableOpacity>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#003f5c',
		// flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
		// fontSize: 30
	},
	logoSty: {
		fontWeight: 'bold',
		fontSize: 50,
		color: '#fb5b5a',
		marginBottom: 40
	},
	inputSty: {
		width: '80%',
		backgroundColor: '#465881',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	textSty : {
		height: 50,
		color: 'white'
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
	}
})
