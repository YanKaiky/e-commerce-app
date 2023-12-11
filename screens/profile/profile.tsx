import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { FC, useState } from 'react';
import styles from './styles';
import { COLORS } from '../../constants';
import { NavigationProp } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../hooks/useAuth';

interface IUser {
    name: string,
    email: string,
    image_url: string,
}

interface IProfile {
    navigation: NavigationProp<any>,
}

export const Profile: FC<IProfile> = ({ navigation }) => {
    const { user, isAuthenticated, logout } = useAuth();

    const handleLogout = () => Alert.alert(
        "Logout",
        "Are you sure you want to logoout?",
        [
            {
                text: "Cancel",
                onPress: () => console.log('Cancel'),
                style: 'default'
            },
            {
                text: "Continue",
                onPress: () => {
                    logout();
                    navigation.navigate('Login');
                },
            },
        ],
    );

    const deleteAccount = () => Alert.alert(
        "Delete account",
        "Are you sure you want to delete yout account?",
        [
            {
                text: "Cancel",
                onPress: () => console.log('Cancel'),
                style: 'cancel'
            },
            {
                text: "Continue",
                onPress: () => console.log('Continue'),
            },
        ],
    );

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

                    <Text style={styles.name}>{isAuthenticated ? user?.name : 'Please login into your account'}</Text>

                    {!isAuthenticated ? (
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.loginBtn}>
                            <Text style={styles.menuText}>{user?.email}</Text>
                        </View>
                    )}

                    {!isAuthenticated ? (
                        <View></View>
                    ) : (
                        <View style={styles.menuWrapper}>
                            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons
                                        name='heart-outline'
                                        color={COLORS.primary}
                                        size={24}
                                    />

                                    <Text style={styles.menuText}>Favorites</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons
                                        name='truck-outline'
                                        color={COLORS.primary}
                                        size={24}
                                    />

                                    <Text style={styles.menuText}>Orders</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons
                                        name='cart-outline'
                                        color={COLORS.primary}
                                        size={24}
                                    />

                                    <Text style={styles.menuText}>Cart</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => deleteAccount()}>
                                <View style={styles.menuItem}>
                                    <AntDesign
                                        name='deleteuser'
                                        color={COLORS.red}
                                        size={24}
                                    />

                                    <Text style={styles.menuText}>Delete account</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleLogout()}>
                                <View style={styles.menuItem}>
                                    <AntDesign
                                        name='logout'
                                        color={COLORS.primary}
                                        size={24}
                                    />

                                    <Text style={styles.menuText}>Logout</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}
