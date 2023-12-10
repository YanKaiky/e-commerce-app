import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { encode as BufferBase64 } from 'base-64';
import { useAuth } from '../../hooks/useAuth';
import { BackBtn, Button } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const Login = () => {
    const navigation: NavigationProp<any> = useNavigation();

    const [data, setData] = useState({ email: '', password: '' });
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState(null);

    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            const encode = BufferBase64(`${data.email}:${data.password}`);

            await login(encode);

            navigation.navigate('BottomNavigation');
        } catch (error: any) {
            console.error(error.response.data.message);
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.safeArea}>
                <View>
                    <BackBtn onPress={() => navigation.goBack()} />
                    <Image
                        source={require('../../assets/images/login-bg.png')}
                        style={styles.cover}
                    />

                    <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

                    <Button title='LOGIN' onPress={() => {}}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
