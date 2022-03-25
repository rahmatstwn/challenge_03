import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import * as ubahFormat from '../../config/utils/ubahTanggalan' 


const Detil = props => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: props.movieId.poster_path }}
                    style={styles.Image}
                />
                <View style={{ flexDirection: 'column', marginTop: Height * 0.01, marginLeft: moderateScale(20) }}>
                    <Text style={{ marginLeft:7, fontWeight: 'bold', fontSize: moderateScale(18), color: '#000000', width:180 }}>{props.movieId.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="star-o" size={15} style={{ marginLeft: 7, marginTop: 5,  }} />
                        <Text style={{ marginLeft: 7, marginTop: 3, color:'#000000' }}>{props.movieId.vote_average}/10</Text>
                    </View>
                    <Text style={{ marginLeft: 7, marginTop: 3, color:'#000000'}}>Durasi        : {props.movieId.runtime} Menit</Text>
                    <Text style={{ marginLeft: 7, marginTop: 3, color:'#000000'}}>Rilis Pada    : {props.movieId.release_date}</Text>
                </View>
            </View>
        </View>
    )
}

export default Detil

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        height: 180,
        marginHorizontal: 7,
        borderRadius: 8,
        marginTop: Height * -0.10
    },
    Image: {
        width: Width * 0.3,
        height: Height * 0.2,
        marginLeft: Width * 0.04,
        marginTop: Height * 0.017,
        borderRadius: 5,
    }
})