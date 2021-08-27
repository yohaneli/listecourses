import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'

const index = () => {
    return (
        <Header
        placement="center"
        centerComponent={{ text: 'Accueil Liste de Courses', style: { color: 'black' } }}
        backgroundColor="#CABEAB"
        containerStyle={{
            borderBottomColor:"white"
        }}
        />
    )
}

export default index