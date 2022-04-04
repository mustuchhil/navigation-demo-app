import { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Pressable, ActivityIndicator} from 'react-native';
//import { Value } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

//npm install @react-native-async-storage/async-storage

const AnimeListScreen = ( {route} ) => {

    const {searchQuery} = route.params;
    const [animeData, setAnimeData] = useState([]);
    const [favList, setFavList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getAnimeFromAPI = () => {
        const apiURL = `https://api.jikan.moe/v3/search/anime?q=${JSON.stringify(searchQuery)}`;
        console.log(apiURL);

        return fetch(apiURL)
        .then( (response) => response.json().then( (json) => { setAnimeData(json.results); console.log(json.results);})
        .catch( (error) => {console.error(error); })
        .finally( () => setLoading(false) )
        );
    }

    useEffect( () => {getAnimeFromAPI()}, []);

    const saveFavourites = async(value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('fav_anime_list', jsonValue);
        }catch(ex){
            console.error(ex);
        }
    }

    const renderItem = ( {item} ) => (
        <Pressable onLongPress={ () => {
            console.log(`Adding ${item.title} to favList`);
            favList.push(item);
            saveFavourites(favList);
            //TODO
            //necessary check to identify if the same item is already in the list or not
            //if yes, do not add
            //if no, then push() the item on favList
            } } >
            <View style={styles.listItem}>
                <Image style = {styles.imgAnime} source = { {uri: item.image_url} }/>
                <Text style = {styles.title}> {item.title} </Text>
                <Text style = {styles.synopsis}> {item.synopsis} </Text>
                <Text style = {styles.score}>Score:  {item.score} </Text>
                <View style={styles.separator}/>
            </View>
        </Pressable>
    );

    return(
        <View style={styles.sectionContainer}>
            {/* <Text> SearchQuery = {searchQuery} </Text> */}

            {/* <FlatList 
                data = {animeData}
                keyExtractor = { (item) => {return item.mal_id}}
                renderItem = { ( {item} ) => (
                    <View style={styles.listItem}>
                        <Image style = {styles.imgAnime} source = { {uri: item.image_url} }/>
                        <Text style = {styles.title}> {item.title} </Text>
                        <Text style = {styles.synopsis}> {item.synopsis} </Text>
                        <Text style = {styles.score}>Score:  {item.score} </Text>
                        <View style={styles.separator}/>
                    </View>
                ) }
            /> */}

            {isLoading ? (
                <ActivityIndicator animating={true} size="large"/>
            ) : (
                <FlatList 
                data = {animeData}
                keyExtractor = { (item) => {return item.mal_id}}
                renderItem = { renderItem }
                />
            ) }


            

        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 32,
        paddingHorizontal: 24,
        flex: 1,
    },
    separator:{
        height: 1,
        backgroundColor: "#dddddd",
    },
    imgAnime: {
        width: '90%',
        height: 150,
        padding: 10,
        borderRadius: 1,
    },
    listItem: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: 'orangered',
        fontWeight: 'bold',
    },
    synopsis: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: 'black',
    },
    score: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
    }
});


export default AnimeListScreen;