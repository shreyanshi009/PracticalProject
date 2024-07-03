import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [workStatus, setWorkStatus] = useState('fresher');
  const [city, setCity] = useState('');
  const cities = ['Ahmedabad', 'Gandhinagar', 'Rajkot']
  const [agree, setAgree] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create Your Workex Profile</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          autoCapitalize='none'
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Entypo
            name={isPasswordVisible ? 'eye' : 'eye-with-line'}
            size={20}
            color="#9FA1A0"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          value={confirmPassword}
          autoCapitalize='none'
          onChangeText={setConfirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <Entypo
            name={isConfirmPasswordVisible ? 'eye' : 'eye-with-line'}
            size={20}
            color="#9FA1A0"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.radioContainer}>
        <View style={styles.radioContainer}>
          <MaterialCommunityIcons onPress={() => setSelectedGender('male')} size={27} color={'#0D89F1'} name={selectedGender === 'male' ? 'circle-slice-8' : 'circle-outline'} />
          <Text style={styles.radioText}>Male</Text>
        </View>
        <View style={[styles.radioContainer, { marginStart: 15 }]}>
          <MaterialCommunityIcons onPress={() => setSelectedGender('female')} size={27} color={'#0D89F1'} name={selectedGender === 'female' ? 'circle-slice-8' : 'circle-outline'} />
          <Text style={styles.radioText}>Female</Text>
        </View>
      </View>

      <Text style={{ marginBottom: 10, fontWeight: 'bold', color: 'black', fontSize: 15 }}>Work status</Text>
      <View style={{ borderWidth: 1, borderColor: 'gray', }}>
        <View style={[styles.switchContainer]}>
          <TouchableOpacity
            style={[
              styles.largeButton,
              { backgroundColor: workStatus === 'experienced' ? '#F6F6F6' : 'white', padding: 10 }
            ]}
            onPress={() => setWorkStatus('experienced')}
          >
            <View style={styles.radioContainer}>
              <Text style={styles.largeButtonText}>I'm experienced</Text>
              {workStatus === 'experienced' && <MaterialCommunityIcons size={20} color={'#FE6B83'} name={'check'} />}
            </View>
            <Text style={{ fontSize: 14 }}>I have work experience (excluding internships)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.largeButton,
              { backgroundColor: workStatus === 'fresher' ? '#F6F6F6' : 'white', padding: 10 }
            ]}
            onPress={() => setWorkStatus('fresher')}
          >
            <View style={styles.radioContainer}>
              <Text style={styles.largeButtonText}>I'm a fresher </Text>
              {workStatus === 'fresher' && <MaterialCommunityIcons size={20} color={'#FE6B83'} name={'check'} />}
            </View>

            <Text style={{ fontSize: 14 }}>I am a student/Haven't worked after graduation</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ marginTop: 10 }}>current city</Text>
      <View>
        {!city ? <View style={{ borderWidth: 1, borderColor: '#564A4D', marginTop: 10 }}>
          <Picker selectedValue={city}
            onValueChange={(item) => setCity(item)}
          >
            <Picker.Item label={'Select a city...'} value={''} />
            {cities.map((cityName, index) => (
              <Picker.Item key={index} label={cityName} value={cityName} />
            ))}
          </Picker>
        </View> :
          <View style={{
            flexDirection: 'row',
            alignItems: 'center', marginTop: 10
          }}>
            <View style={{ borderWidth: 1, borderColor: '#564A4D', padding: 8, borderRadius: 25 }}>
              <Text style={{
                fontSize: 16,
                color: 'black'
              }}>{city} <Entypo onPress={() => setCity('')} style={{ marginStart: 10 }} size={20} color={'#564A4D'} name={'circle-with-cross'} /></Text>
            </View>
          </View>}
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={agree}
          onValueChange={setAgree}
          tintColors={{ true: '#f47c83', false: '#000' }}
        />
        <Text style={styles.label}>
          Send me important updates & promotions via SMS, email, and WhatsApp
        </Text>
      </View>

      <Text style={{ fontSize: 12, textAlign: 'center', marginLeft: 20, padding: 5 }}>
        By signing up, you confirm that you've read and accepted our{' '}
        <Text style={{ color: '#5e85c4' }}>User Notice</Text> and{' '}
        <Text style={{ color: '#5e85c4' }}>Privacy Policy</Text>.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register Now</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Already have a Pretelan account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 20,
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    marginBottom: 16,
    paddingLeft: 8,
  },
  passwordInput: {
    flex: 1,
    fontWeight: 'bold',
  },
  icon: {
    paddingHorizontal: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0D89F1',
  },
  radioCircleSelected: {
    backgroundColor: '#0D89F1',
  },
  radioText: {
    fontSize: 16,
    marginLeft: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeButton: {
    flex: 1,
  },
  selectedLargeButton: {
    backgroundColor: '#F6F6F6', padding: 10
  },
  largeButtonText: {
    fontSize: 16,
    color: 'black',
    flex: 1
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginRight: 30,
    padding: 5
  },
  button: {
    backgroundColor: '#f47c83',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    color: '#5e85c4',
    textAlign: 'center',
    marginTop: 20,
  },
  cityInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 5,
    paddingLeft: 8,
    borderRadius: 20,
    minHeight: 80,
  },
  smallInput: {
    fontSize: 16,
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 20,
    minHeight: 40,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -10,

  },
  label: {
    fontSize: 13,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 10,
    marginTop: 10
  },
});

export default App;
