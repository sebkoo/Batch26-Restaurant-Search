import React from "react";
import { View , Text, StyleSheet } from "react-native";

function ContactScreen() {
	return <View style={styles.content}>
		<Text style={{fontSize: 30}}>Thank you for reaching out!</Text>
		<Text style={{fontSize: 20}}>We look forward to getting back to you.</Text>
	</View>
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default ContactScreen;
