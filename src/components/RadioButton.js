// import React, { Component } from 'react'
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
//
// export default function RadioButton ({ options, selectedOpt, onSelect }) {
// 	return <View> {options.map((item) => {
// 		return <View key={item.key} style={styles.btnContainer}>
// 			<Text>{item.text}</Text>
// 			<TouchableOpacity style={styles.circleSty} onPress={() => {
// 				onSelect(item)
// 			}}>
// 				{selectedOpt && selectedOpt.key === item.key && (
// 					<View style={styles.checkedSty}/>)}
// 			</TouchableOpacity>
// 		</View>
// 	})}
// 	</View>
//
// 	const styles = StyleSheet.create({
// 		btnContainer: {
// 			flexDirection: 'row',
// 			justifyContent: 'space-between',
// 			alignItems: 'center',
// 			marginBottom: 30
// 		},
// 		circleSty: {
// 			height: 20,
// 			width: 20,
// 			borderRadius: 10,
// 			borderWidth: 1,
// 			borderColor: '#ACACAC',
// 			alignItems: 'center',
// 			justifyContent: 'center'
// 		},
// 		checkedSty: {
// 			width: 14,
// 			height: 14,
// 			borderRadius: 7,
// 			backgroundColor: '#794F9B'
// 		}
// 	})
// }
