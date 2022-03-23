import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'

const Rekomen = props => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={styles.Judul}>Recommended</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.TombolRekom}
                        onPress={() => navigation.navigate('Detail', { movieId: item.id })}>
                        <Image style={styles.Gambar} source={{ uri: item.poster_path }} />
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default Rekomen

const styles = StyleSheet.create({
    TombolRekom: {
        marginHorizontal: moderateScale(12),
        marginTop: moderateScale(16),
        marginBottom: moderateScale(24),
        width: moderateScale(150),
    },
    Gambar: {
        height: moderateScale(180),
        borderRadius: moderateScale(10),
    }, Judul: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginTop: moderateScale(16),
        marginLeft: moderateScale(16),
    }
})