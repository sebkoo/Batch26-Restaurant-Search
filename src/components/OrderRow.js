// import React, { Component } from 'react'
// import {View, Text, Image, StyleSheet, Modal, Alert, TouchableHighlight} from 'react-native'
// import RadioButton from './components/RadioButton'
//
// const options = [
//
// ]
//
// export default function OrderRow ({ photo, title, body }) {
// 	const [modalVisible, setModalVisible] = useState(false)
// 	return <View style={styles.container}>
// 		<Image source={photo} style={styles.photoStyle}/>
// 		<View style={styles.textContainer}>
// 			<Text style={styles.titleStyle}>{title}</Text>
// 			<Modal
// 				animationType='slide'
// 				transparent={true}
// 				visible={modalVisible}
// 				onRequestClose={() => { Alert.alert('Modal has been closed.') } }
// 			>
// 				<View style={styles.centerSty}>
// 					<View style={styles.modalSty}>
// 						<Text style={styles.txtSty}>{body}</Text>
//
// 						<TouchableHighlight
// 							style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
// 							onPress={() => { setModalVisible(!modalVisible) }}
// 						>
// 							<Text style={styles.txtSty}>Cancel</Text>
// 						</TouchableHighlight>
// 					</View>
// 				</View>
// 			</Modal>
//
// 		</View>
// 	</View>
// }
//
// const styles = StyleSheet.create({
// 	container: {
// 		// flex: 1,
// 		flexDirection: 'row',
// 		padding: 10,
// 		marginLeft:16,
// 		marginRight:16,
// 		marginTop: 100,
// 		marginBottom: 8,
// 		// borderRadius: 5,
// 		backgroundColor: '#FFF',
// 		// elevation: 2
// 	},
// 	photoStyle: {
// 		height: 40,
// 		width: 40
// 	},
// 	textContainer: {
// 		// flex: 1,
// 		flexDirection: 'column',
// 		marginLeft: 12,
// 	},
// 	titleStyle: {
// 		fontSize: 20,
// 	},
// 	bodyStyle: {
// 		fontSize: 12,
// 	},
// 	centerSty: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginTop: 22
// 	},
// 	modalSty: {
// 		margin: 20,
// 		backgroundColor: 'white',
// 		borderRadius: 20,
// 		padding: 35,
// 		alignItems: 'center',
// 		shadowColor: '#000',
// 		shadowOffset: {
// 			width: 0,
// 			height: 2
// 		},
// 		shadowOpacity: 0.25,
// 		shadowRadius: 3.84,
// 		elevation: 5
// 	},
// 	txtSty: {
// 		color: 'white',
// 		fontWeight: 'bold',
// 		textAlign: 'center'
// 	}
// });
