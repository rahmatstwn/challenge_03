import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ListActor = props => {
    return (
        <View>
            <Text style={styles.Judul}>Actors/Artist</Text>
            <FlatList
                numColumns={3}
                keyExtractor={(item, index) => index}
                data={props?.movieId?.credits?.cast}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            source={{ uri: item.profile_path }}
                            style={{width: 30, height: 30}}
                        />
                        <Text>
                            {item.name}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ListActor

const styles = StyleSheet.create({
    Judul: {
        fontWeight: 'bold',
        fontSize: moderateScale(20),
        color: '#000000',
        marginHorizontal: moderateScale(7),
        marginTop: moderateScale(15),
        marginBottom: moderateScale(5)
    },
})