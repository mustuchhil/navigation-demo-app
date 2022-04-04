import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimeListScreen from './AnimeListScreen';
import FavouriteScreen from './FavouriteScreen';
//import Icon from 'react-native-vector-icons/FontAwesome';

// npm install @react-navigation/bottom-tabs

// npm install --save react-native-vector-icons
// https://github.com/oblador/react-native-vector-icons
// https://fontawesome.com/v4/icons/

const Tab = createBottomTabNavigator();

const SearchResultScreen = ({route}) => {
    return(
        <Tab.Navigator
            // screenOptions={ ({route}) => ({
            //     "tabBarActiveTintColor": "orangered",
            //     "tabBarInactiveTintColor": "gray",
            //     "tabBarStyle": [
            //         {
            //         "display": "flex"
            //         },
            //         null
            //     ],
            //     "tabBarIcon" : ( {focused, color, size} ) => {
            //         let iconName;

            //         if (route.name === "Anime"){
            //             iconName = focused ? 'list' : 'bars';
            //         }else if (route.name === "Favorite"){
            //             iconName = focused ? 'heart' : 'heart-o';
            //         }

            //         return <Icon name={iconName} size={size} color={color} />;
            //     }
            // }) }
        >
            <Tab.Screen component={AnimeListScreen} name="Anime" 
            options={ ({route}) => ( {searchQuery: route.params.searchQuery} ) }/>
            
            <Tab.Screen component={FavouriteScreen} name ="Favorite"/>
        </Tab.Navigator>
    )
}

export default SearchResultScreen;