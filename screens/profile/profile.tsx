import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { COLORS } from '../../constants';

export const Profile = () => {
    const [user, setUser] = useState(null);
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

                    <Text style={styles.name}>{logged ? user.name : 'Please login into your account'}</Text>
                </View>
            </View>
        </View>
    );
}
