import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

/*
Task: display all the fav list items in Flat list : similar to AnimeList
*/

const FavoriteScreen = () => {

    const [favItems, setFavItems] = useState([]);

    const getFavList = async() => {
        try{
            const data = await AsyncStorage.getItem('fav_anime_list');
            console.log(`data from AsyncStorage ${data}`);

            if (data != null){
                setFavItems(JSON.parse(data));
            }
        }catch(ex){
            console.error(ex);
        }
    }

    useEffect ( () => {getFavList()} , []);

    return(
        <View>
            <Text> FavoriteScreen </Text>
        </View>
    )
}

export default FavoriteScreen;

// const FavouriteScreen = () => {

//     const [favItems, setFavItems] = useState([])
    
//     const getFavList = async() => {
//         try{
//             const data = await AsyncStorage.getItem('fav_anime_list')
//             console.log(`data from asyncStorage ${data}`)

//             if (data != null){
//                 setFavItems(JSON.parse(data))
//             }    

//         }catch(ex){
//             console.error(ex)
//         }
//     }

//     useEffect ( () => {getFavList()},[])

//     return(
//         <View>
//             <Text>FavouriteScreen</Text>
//         </View>
//     )
// }

// export default FavouriteScreen;