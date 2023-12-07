import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import { COLORS } from '../../constants';
import { NavigationProp } from '@react-navigation/native';

interface IUser {
    name: string,
    email: string,
    image_url: string,
}

interface IProfile {
    navigation: NavigationProp<any>,
}

export const Profile: FC<IProfile> = ({ navigation }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [logged, setLogged] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.gray} />

                <View style={{ width: '100%' }}>
                    <Image
                        source={require('../../assets/images/background-profile.jpeg')}
                        style={styles.cover}
                    />
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={require('../../assets/images/me.jpeg')}
                        style={styles.profile}
                    />

                    <Text style={styles.name}>{logged ? user?.name : 'Please login into your account'}</Text>

                    {!logged ? (
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.loginBtn}>
                            <Text style={styles.menuText}>yankaikys@gmail.com</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}
