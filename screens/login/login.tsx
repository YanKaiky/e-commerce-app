import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { encode as BufferBase64 } from 'base-64';
import { useAuth } from '../../hooks/useAuth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BackBtn, Button } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import initialValues from './schemas/initial.values';
import validationSchema from './schemas/validation.schema';
import { Formik } from 'formik';
import { COLORS } from '../../constants';

export const Login = () => {
    const navigation: NavigationProp<any> = useNavigation();

    const [data, setData] = useState({ email: '', password: '' });
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState(null);
    const [obscureText, setObscureText] = useState(true);

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

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid, setFieldTouched }) => (
                            <View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>E-mail</Text>

                                    <View style={touched.email ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <MaterialCommunityIcons
                                            name='email-outline'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            placeholder='example@furniture.com'
                                            onFocus={() => setFieldTouched('email')}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            keyboardType='email-address'
                                            value={values.email}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />
                                    </View>
                                    {touched.email && errors.email && (<Text style={styles.errorMsg}>{errors.email}</Text>)}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Password</Text>

                                    <View style={touched.password ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <MaterialCommunityIcons
                                            name='key-outline'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            secureTextEntry={obscureText}
                                            placeholder='••••••••'
                                            onFocus={() => setFieldTouched('password')}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />

                                        <TouchableOpacity onPress={() => setObscureText(!obscureText)}>
                                            <MaterialCommunityIcons
                                                name={obscureText ? 'eye-outline' : 'eye-off-outline'}
                                                size={20}
                                                color={COLORS.gray}
                                                style={styles.icon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && errors.password && (<Text style={styles.errorMsg}>{errors.password}</Text>)}
                                </View>

                                <Button title='LOGIN' onPress={() => isValid ? handleSubmit : () => { }} isValid={isValid} />
                            </View>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
