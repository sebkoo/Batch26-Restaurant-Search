import React, { useState } from 'react'
import { Button, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const DateTime = () => {
	const [visible, setVisible] = useState(false)

	const showDateTime = () => { setVisible(true) }
	const hideDateTime = () => { setVisible(false) }
	const handleConfirm = (date) => { hideDateTime() }

	return <View>
		<Button title='Select a time for this order' onPress={ showDateTime } />
		<DateTimePickerModal
			isVisible={ visible }
			mode='datetime'
			onConfirm={ handleConfirm }
			onCancel={ hideDateTime }
		/>
	</View>
}

export default DateTime
