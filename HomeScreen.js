import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const HomeScreen = ({navigation, route}) => {
    const {username} = route.params;
    const [searchQuery, setSearchQuery] = useState('');

    const goToSearchScreen = () => {
        navigation.navigate("SearchResult", {screen: "Anime", params: {searchQuery: searchQuery}} );
    }

    return(
        <View style = {styles.sectionContainer}>
            <Text> Welcome {JSON.stringify(username)} </Text>

            <TextInput
                style={styles.inputStyle}
                placeholder='Anime'
                textContentType="none"
                returnKeyType='done'
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            <Button 
                style = {styles.buttonStyle} 
                color= 'orangered' 
                title='Go' 
                onPress={goToSearchScreen}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 32,
        paddingHorizontal: 24,
    },
    inputStyle: {
        height: 50,
        margin: 8,
        borderColor: 'orangered',
        borderWidth: 1,
        padding: 5,
    },
    buttonStyle: {
        margin: 30,
        padding: 10,
        
    },
});

export default HomeScreen;