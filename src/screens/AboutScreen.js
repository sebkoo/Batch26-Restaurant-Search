import React from "react";
import { View , Text, StyleSheet } from "react-native";

function AboutScreen() {
	return <View style={styles.content}>
		<Text style={{fontSize: 30}}>Slupr connects foodies with awesome local restaurants</Text>
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

export default AboutScreen;
