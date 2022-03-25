import { StyleSheet, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FetchSemua, FetchDetail } from '../config/api'
import Rekomen from '../component/forHome/Rekomen'
import Latest from '../component/forHome/Latest'

const Home = () => {
    // const [screenStatus, setScreenStatus] = useState(false);
    const [data, getData] = useState({});

    useEffect(() => {
        FetchSemua.get(getData);
    }, []);
    
        return (
            <SafeAreaView style={styles.container}>
                <Rekomen data={data.results} />
                <Latest data={data.results} />
            </SafeAreaView>
        )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})