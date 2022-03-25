import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import * as ubahFormat from '../../config/utils/ubahTanggalan'
const Genres = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    SciFi: 878,
    TV: 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
};

const Latest = props => {
    const navigation = useNavigation();

    const Genre = props => {
        let keys = props.keys;
        let list = props.list;
    
        return keys.map((key, index) => {
          let genre = Object.keys(list).find(data => list[data] === key);
    
          return (
            <View style={styles.genreSemiContainer} key={index}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          );
        });
      };

    return (
        <View style={styles.container}>
            <Text style={styles.Judul}>Latest Upload</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.listContainer}>
                        <Image
                            source={{ uri: item.poster_path }}
                            style={styles.Gambar}
                        />
                        <View style={styles.ConDetail}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.tanggal}>
                                Release pada {ubahFormat.ubahTanggalan(item.release_date)}
                            </Text>
                            <View style={styles.rating}>
                                <Icon name="star-o" size={15} style={{ marginRight: moderateScale(5) }} />
                                <Text style={styles.text}>{item.vote_average}/10</Text>
                            </View>
                            <View style={styles.genreContainer}>
                                <Genre keys={item.genre_ids} list={Genres} />
                            </View>
                            <View style={styles.ConTombol}>
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate('Detail', { movieId: item.id })
                                    }
                                    style={styles.Tombol}>
                                    <Text style={styles.Text}>Show More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Latest;

const styles = StyleSheet.create({
    Judul: {
        fontSize: moderateScale(16),
        marginTop: moderateScale(-20),
        marginBottom: moderateScale(15),
        fontWeight: 'bold',
        color: '#000000'
    }
    , container: {
        marginTop: moderateScale(20),
        marginHorizontal: moderateScale(16),
        marginBottom: moderateScale(90),
    },
    listContainer: {
        marginBottom: moderateScale(12),
        padding: moderateScale(16),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: moderateScale(10),
        elevation: 2,
    },
    Gambar: {
        height: moderateScale(150),
        width: moderateScale(100),
        borderRadius: moderateScale(10),
    },
    ConDetail: {
        width: moderateScale(220),
        marginLeft: moderateScale(16),
    },
    title: {
        fontSize: moderateScale(14),
        marginBottom: moderateScale(4),
        fontWeight: 'bold',
        width: moderateScale(200),
        color: '#000000'
    },
    tanggal: {
        color: '#000000',
        fontSize: moderateScale(10),
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(4),
    },
    text: {

        fontSize: moderateScale(10),
    },
    genreContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: moderateScale(3),
    },
    genreSemiContainer: {
        backgroundColor:'#E0E7EC',
        paddingVertical: moderateScale(2),
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(20),
        marginRight: moderateScale(8),
        marginVertical: moderateScale(5),
    },
    genreText: {
        fontSize: moderateScale(10),
    },
    ConTombol: {
        alignItems: 'flex-start',
        marginTop: moderateScale(3),

    },
    Tombol: {
        padding: moderateScale(4),
        borderRadius: moderateScale(5),
        backgroundColor: 'yellow'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: moderateScale(11),
    },
});