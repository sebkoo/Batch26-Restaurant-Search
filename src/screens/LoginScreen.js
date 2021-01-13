import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";

export default class LoginScreen extends Component {
	state = {
		username:'',
		password:''
	}
	render() {
		return <SafeAreaView style={styles.container}>
			<Text style={styles.logoStyle}>Slurp</Text>
			<View style={styles.inputStyle}>
				<TextInput
					style={styles.textStyle}
					placeholder='Username...'
					placeholderTextColor='#003f5c'
					onChangeText={user => this.setState({username:user})}
				/>
			</View>
			<View style={styles.inputStyle}>
				<TextInput
					secureTextEntry
					style={styles.textStyle}
					placeholder='Password...'
					placeholderTextColor='#003f5c'
					onChangeText={pw => this.setState({password:pw})}
				/>
			</View>
			<TouchableOpacity>
				<Text style={styles.pwStyle}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.entryStyle}>LogIn</Text>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={styles.entryStyle}>SignUp</Text>
			</TouchableOpacity>
		</SafeAreaView>
	}
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
	logoStyle: {
		fontWeight: 'bold',
		fontSize: 50,
		color: '#fb5b5a',
		marginBottom: 40
	},
	inputStyle: {
		width: '80%',
		backgroundColor: '#465881',
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	textStyle : {
		height: 50,
		color: 'white'
	},
	pwStyle: {
		color: 'white',
		fontSize: 11
	},
	loginBtn: {
		width: '80%',
		backgroundColor: '#fb5b5a',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10
	},
	entryStyle: {
		color: 'white'
	}
})
