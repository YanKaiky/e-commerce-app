import { Alert, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { BackBtn, Button } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import initialValues from './schemas/initial.values';
import validationSchema from './schemas/validation.schema';
import { Formik } from 'formik';
import { COLORS } from '../../constants';

export const SignUp = () => {
    const navigation: NavigationProp<any> = useNavigation();

    const [obscureText, setObscureText] = useState(true);
    const [obscureConfirmText, setObscureConfirmText] = useState(true);

    const invalidForm = () => Alert.alert(
        "Invalid Form",
        "Please provide all required fields",
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
                                    <Text style={styles.label}>Name</Text>

                                    <View style={touched.name ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <AntDesign
                                            name='user'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            placeholder='Furniture'
                                            onFocus={() => setFieldTouched('name')}
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />
                                    </View>
                                    {touched.name && errors.name && (<Text style={styles.errorMsg}>{errors.name}</Text>)}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Username</Text>

                                    <View style={touched.username ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <AntDesign
                                            name='profile'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            placeholder='fur.nitu_re!@#$%ˆ&*'
                                            onFocus={() => setFieldTouched('username')}
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            value={values.username}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />
                                    </View>
                                    {touched.username && errors.username && (<Text style={styles.errorMsg}>{errors.username}</Text>)}
                                </View>

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

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Confirm Password</Text>

                                    <View style={touched.confirm_password ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <MaterialCommunityIcons
                                            name='lock-check-outline'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            secureTextEntry={obscureConfirmText}
                                            placeholder='••••••••'
                                            onFocus={() => setFieldTouched('confirm_password')}
                                            onChangeText={handleChange('confirm_password')}
                                            onBlur={handleBlur('confirm_password')}
                                            value={values.confirm_password}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />

                                        <TouchableOpacity onPress={() => setObscureConfirmText(!obscureConfirmText)}>
                                            <MaterialCommunityIcons
                                                name={obscureConfirmText ? 'eye-outline' : 'eye-off-outline'}
                                                size={20}
                                                color={COLORS.gray}
                                                style={styles.icon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    {touched.confirm_password && errors.confirm_password && (<Text style={styles.errorMsg}>{errors.confirm_password}</Text>)}
                                </View>

                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Location</Text>

                                    <View style={touched.location ? styles.inputWrapperTouched : styles.inputWrapper}>
                                        <MaterialCommunityIcons
                                            name='map-marker-account-outline'
                                            size={20}
                                            color={COLORS.gray}
                                            style={styles.icon}
                                        />

                                        <TextInput
                                            placeholder='New York'
                                            onFocus={() => setFieldTouched('location')}
                                            onChangeText={handleChange('location')}
                                            onBlur={handleBlur('location')}
                                            value={values.location}
                                            autoCorrect={false}
                                            autoCapitalize='none'
                                            style={{ flex: 1 }}
                                        />
                                    </View>
                                    {touched.location && errors.location && (<Text style={styles.errorMsg}>{errors.location}</Text>)}
                                </View>

                                <Button title='SIGN UP' onPress={isValid ? handleSubmit : invalidForm} isValid={isValid} />

                                <Text style={styles.registration} onPress={() => navigation.navigate('Login')}>Login</Text>
                            </View>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
