import { StyleSheet, Text, SafeAreaView, FlatList, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FetchDetail } from '../config/api'
import Banner from '../component/forDetail/Banner'
import Detil from '../component/forDetail/Detil'
import Body from '../component/forDetail/Body'
import ListActor from '../component/forDetail/ListActor'
import { moderateScale } from 'react-native-size-matters'



const Detail = ({ route }) => {
  const [screenStatus, setScreenStatus] = useState(true);
  const [data, getData] = useState({});

  useEffect(() => {
    FetchDetail.get(getData, setScreenStatus, route.params.movieId);
  }, []);

  if (screenStatus) {
    return (
      <SafeAreaView style={{flex:1}}>
        <FlatList
          columnWrapperStyle={{ marginHorizontal: moderateScale(18) }}
          numColumns={3}
          // data={data.credits.cast}
          keyExtractor={(item, index) => index}
          ListHeaderComponent={() => (
            <>
              <Banner movieId={data} />
              <Detil movieId={data} />
              <Body movieId={data} />
              <ListActor movieId={data}/>

            </>
          )}
          // renderItem={({ item }) => (
          //   <View >
          //     <Image
          //       source={{ uri: item.profile_path }}

          //     />
          //     <View >
          //       <Text>{item.name}</Text>
          //     </View>
          //   </View>
          // )}
        />

      </SafeAreaView>
    )
  }

}

export default Detail

const styles = StyleSheet.create({})