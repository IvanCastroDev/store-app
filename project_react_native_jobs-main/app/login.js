import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { images, SIZES } from '../constants';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

import { Redirect } from 'expo-router';

const Login = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <View style={{paddingHorizontal: 25}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={images.logo} style={{width: '90%', height: '50%'}}/>
                </View>

                <Text
                style={{
                    fontFamily: 'Roboto-Medium',
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                }}>
                Login
                </Text>

                <InputField
                label='Email ID'
                icon={
                    <MaterialIcons            
                    name="alternate-email"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}/>
                }
                keyboardType="email-address"
                />

                <InputField
                label='Password'
                icon={
                    <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                    />
                }
                inputType="password"
                fieldButtonLabel={"Forgot?"}
                fieldButtonFunction={() => {}}
                />
                
                <CustomButton label={"Login"} onPress={() => {}} />

                <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
                Or, login with ...
                </Text>

                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 30,
                }}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={{
                    borderColor: '#ddd',
                    borderWidth: 2,
                    borderRadius: 10,
                    paddingHorizontal: 30,
                    paddingVertical: 10,
                    }}>
                </TouchableOpacity>
                </View>

                <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 30,
                }}>
                <Text>New to the app?</Text>
                <TouchableOpacity onPress={() => <Redirect href="/Register" />}>
                    <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
