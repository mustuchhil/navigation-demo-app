import { useState } from 'react';
import { TextInput, Text, Button, View, Alert, StyleSheet } from 'react-native';

const SignInScreen = ( {navigation, route} ) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInClicked = () => {
        if (username != 'test' || password != 'test'){
            Alert.alert('Error', 'Incorrect username/password. Please try again !');
        }else{
            Alert.alert('Success', 'Login successful');

            //Go to homescreen
            // navigation.navigate('Home');    //only nagivation
            navigation.navigate('Home', {username: username});  //supply username state value to Home screen
        }
    }

    const onSignUpClicked = () => {
        navigation.navigate("SignUp");
    }

    return(
        <View style={styles.sectionContainer}>
            {/* <Text> SignInScreen </Text> */}

            <TextInput
                style={styles.inputStyle}
                placeholder='Username'
                textContentType="emailAddress"
                autoCapitalize='none'
                returnKeyType='next'
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.inputStyle}
                placeholder='Password'
                textContentType="password"
                autoCapitalize='none'
                returnKeyType='next'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Button style = {styles.buttonStyle} color= "orangered" title='SignIn' onPress={onSignInClicked}/>
            <Button style = {styles.buttonStyle} color= 'orangered' title='SignUp' onPress={onSignUpClicked}/>

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

export default SignInScreen;