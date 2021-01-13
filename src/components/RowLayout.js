import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default function RowLayout ({ photo, title, body }) {
	return <View style={styles.container}>
		<Image source={photo} style={styles.photoStyle}/>
		<View style={styles.textContainer}>
			<Text style={styles.titleStyle}>{title}</Text>
			<Text style={styles.bodyStyle}>{body}</Text>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		marginLeft:16,
		marginRight:16,
		marginTop: 100,
		marginBottom: 8,
		borderRadius: 5,
		backgroundColor: '#FFF',
		elevation: 2
	},
	photoStyle: {
		height: 40,
		width: 40
	},
	textContainer: {
		// flex: 1,
		flexDirection: 'column',
		marginLeft: 12,
	},
	titleStyle: {
		fontSize: 20,
	},
	bodyStyle: {
		fontSize: 12,
	},
});
