import { useState } from 'react';
import { TextInput, Text, Button, View, Alert, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return(
        <View style={styles.sectionContainer}>
            {/* <Text> SignInScreen </Text> */}

            <TextInput
                style={styles.inputStyle}
                placeholder='Enter Name'
                textContentType="emailAddress"
                autoCapitalize='none'
                returnKeyType='next'
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.inputStyle}
                placeholder='Enter Address'
                textContentType="emailAddress"
                autoCapitalize='none'
                returnKeyType='next'
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder=' Enter Password '
                textContentType="password"
                autoCapitalize='none'
                returnKeyType='next'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Button style = {styles.buttonStyle} color= 'orangered' title='Register' onPress={onSignUpClicked}/>

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

export default SignUpScreen;