import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Button} from "react-native";

const AssistScreen = props => {
	return <SafeAreaView>
		<Text>
			Add the below item to your cart if you require any special assistance
			and our team members will be happy to help you.
		</Text>
		<Button
			onPress={ () => props.navigation.navigate('Assistance') }
			title='Special Assistance Required'
		/>
	</SafeAreaView>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection: 'column',
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	menuSty: {
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	iconSty: {
		height: 50,
		width: 50,
		borderRadius: 25
	},
	pickerContainer: {
		top: 20,
		left: 20
	},
});

export default AssistScreen
