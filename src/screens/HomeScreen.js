import React, {Component} from 'react'
import {StyleSheet, Text, SafeAreaView, View, FlatList} from "react-native"
import axios from 'axios'

export default class HomeScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dataSource: []	// Store the JSON data in array
		}
	}

	componentDidMount() {	// Called at the beginning of the app
		axios.get(`http://jsonplaceholder.typicode.com/posts`)
			.then(res => {
				const dataSource = res.data
				this.setState({dataSource})
			})
	}

	renderItem = ({item}) => {
		return <View style = {{height: 60}}>
			<Text style={{height: 55}}>{item.title}</Text>
			<View style={{height: 2,backgroundColor:'blue'}}/>
		</View>
	}

	render() {	// Make the UI
		return <SafeAreaView style = {{padding:15}}>
			<FlatList // component to scroll the data list
				padding = {25}
				data = {this.state.dataSource}
				renderItem = {this.renderItem}
				keyExtractor = {(item, index) => index.toString()}
			/>
		</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
