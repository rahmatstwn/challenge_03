import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Banner = props => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: props.movieId.backdrop_path }}
                    style={styles.atas}
                />
            </View>
        </View>
    )
}

export default Banner

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    atas: {
        width: windowWidth * 1,
        height: windowHeight * 0.4,
        
    },
})