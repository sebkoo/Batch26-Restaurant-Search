import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Button, FlatList, TouchableOpacity} from "react-native";

const menu = [
	{ name: 'Burgers', imgSrc: require('../../../assets/burger.png') },
	{ name: 'Hot Dogs', imgSrc: require('../../../assets/hot_dog.png') },
	{ name: 'Sandwiches', imgSrc: require('../../../assets/sandwich.png') },
	{ name: 'Fries', imgSrc: require('../../../assets/fries.png') },
	{ name: 'Drinks', imgSrc: require('../../../assets/drink.png') },
	{ name: 'Shakes', imgSrc: require('../../../assets/shakes.png') },
]

const MenuScreen = props => {

	return <SafeAreaView>
		<Text style={{padding: 10}}>CURBSIDE PICKUP is now available at this location!
			Place your order and select CURBSIDE from the available options.</Text>
		<Text style={{padding: 10}}>PLEASE CALL THE STORE at the phone number listed above when you arrive,
			tell us the color and model of your car, and we’ll run your order out to you!</Text>
		<Text style={{padding: 10}}>DELIVERY FEES WAIVED at this location for delivery orders placed on slurp.com or
			the slurp app ($15 order minimum)! Only bottled drinks available for delivery.
			Note that orders are delivered by a third-party provider.</Text>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/burger.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('Burger') }
				title='Burgers'
			/>
		</View>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/hot_dog.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('HotDog') }
				title='Hot Dogs'
			/>
		</View>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/sandwich.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('Sandwich') }
				title='Sandwiches'
			/>
		</View>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/fries.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('Fries') }
				title='Fries'
			/>
		</View>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/drink.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('Drink') }
				title='Drinks'
			/>
		</View>
		<View style={styles.menuSty}>
			<Image source={require('../../../assets/shakes.png')} style={styles.iconSty} />
			<Button
				onPress={ () => props.navigation.navigate('Shake') }
				title='Shakes'
			/>
		</View>
		<Text style={{padding: 10}}>Add the below item to your cart if you require any special assistance
			and our team members will be happy to help you.</Text>
		<Button
			onPress={ () => props.navigation.navigate('Special Assistance Required') }
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

export default MenuScreen
