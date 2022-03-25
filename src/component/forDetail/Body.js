import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';

const Body = props => {

    return (
        <View>
            <Text style={styles.Judul}>Genre</Text>
            <FlatList
                horizontal={true}
                data={props.movieId.genres}
                keyExtractor={(index)=> index}
                renderItem={({item}) =>(
                    <Text style={styles.genres}>
                        {item.name}
                    </Text>
                )}
            />
            <Text style={styles.Judul}>Synopsis</Text>
            <Text style={styles.sinop}>{props.movieId.overview}</Text>
        </View>
    )
}

export default Body

const styles = StyleSheet.create({
    Judul:{
        fontWeight:'bold',
        fontSize:moderateScale(20),
        color:'#000000',
        marginHorizontal: moderateScale(7),
        marginTop: moderateScale(15),
        marginBottom:moderateScale(5)
    },
    sinop:{
        fontSize:moderateScale(13),
        marginHorizontal:moderateScale(7),
        textAlign: 'justify',
        color:'#000000'
    },
    genres:{
        fontSize: moderateScale(13),
        textAlign: 'justify',
        marginHorizontal: moderateScale(7),
        color:'#000000'
    }
})