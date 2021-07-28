import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Button from "./Button"

const Detay = ({ data }) => {
    const { containerStyle, subContainerStyle, ImageStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={subContainerStyle}>
                <Text style={{fontSize:18}}>{data.first_name} {data.last_name} </Text>
            </View>

            <View style={subContainerStyle}>
                <Image style={ImageStyle} source = {{uri: data.avatar}} />
            </View>

            <View style={subContainerStyle}>
                <Button onPress = {()=> Linking.openURL(data.avatar)}>Orjinal Görsele Git</Button>
            </View>
        </View>

    )
}
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,

    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
    ImageStyle: {
        height: 400,
        flex:1
      },
}

export default Detay;