import React, { Component } from "react";
import { View , Text, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview'

class AboutScreen extends Component {
	render() {
		return <WebView
			source={{uri: 'https://about.fb.com/'}}
			style={{marginTop: 20}}
		/>
	}
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
