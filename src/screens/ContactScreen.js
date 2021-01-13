import React, { Component } from "react";
import { View , Text, StyleSheet, Button, Platform, Linking, TouchableOpacity } from "react-native";
import RowLayout from "../components/RowLayout";

export default class ContactScreen extends Component {
	dialCall = () => {
		let phoneNum = ''
		if (Platform.OS === 'android') {
			phoneNum = 'tel:${1234567890}'
		} else { phoneNum = `telprompt:${1234567890}` }
		Linking.canOpenURL(phoneNum)
			.then((supported) => {
				if (supported) {
					return Linking.openURL(phoneNum)
						.catch(() => null)
				}
			})
	}

	render() {
		return <View style={styles.container}>
			<RowLayout
				title={'Email'}
				body={'Info@gmail.com'}
				photo={require('../../assets/email.png')}
			/>
			<TouchableOpacity onPress={this.dialCall} activeOpacity={0.7}>
				<RowLayout
					title={'Phone'}
					body={'(123)654-4673'}
					photo={require('../../assets/phone.png')}
				/>
			</TouchableOpacity>
			<RowLayout
				title={'Message'}
				body={'Is there any way to be awarded much for the Project?'}
				photo={require('../../assets/message.png')}
			/>
			<Button title='SEND'/>
		</View>
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
