import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from "react-native";
import {
  Layout,
  TopNav,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { Form, FormItem } from 'react-native-form-component';
import { IconButton, Colors } from 'react-native-paper';

export default function ({ navigation }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");

  const [images, setImages] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      images.push(result.uri);
    }
  };

  return (
    <Layout>
      <TopNav
        middleContent="ارسال جديد"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color="#191921"
          />
        }
        leftAction={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginTop: 20,
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <Form 
          onButtonPress={() => navigation.goBack()}
          buttonStyle={{backgroundColor: '#228B22'}}
          buttonText="ارسال"
          >
          <FormItem
            label="الاسم"
            labelStyle={{textAlign: 'right', width: '100%'}}
            textInputStyle={{textAlign: 'right'}}
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <FormItem
            label="العنوان"
            labelStyle={{textAlign: 'right', width: '100%'}}
            textInputStyle={{textAlign: 'right'}}
            value={address}
            onChangeText={(address) => setAddress(address)}
          />
          <FormItem
            label="الموضوع"
            labelStyle={{textAlign: 'right', width: '100%'}}
            textInputStyle={{textAlign: 'right'}}
            value={subject}
            onChangeText={(subject) => setSubject(subject)}
          />
          <FormItem
            label="الملخص"
            labelStyle={{textAlign: 'right', width: '100%'}}
            textInputStyle={{textAlign: 'right'}}
            value={note}
            onChangeText={(note) => setNote(note)}
            textArea={true}
          />
          <View style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <IconButton
              style={{textAlign: 'right'}}
              icon="camera"
              color={'#228B22'}
              size={35}
              onPress={pickImage}
            />
            <View style={{ textAlign: 'right', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
              {images && images.map((image, index) => {
                return <Image key={index} source={{ uri: image }} style={{ width: 80, height: 80, margin: 1, flex: 4}} />
                }
              )}
            </View>
          </View>
        </Form>
      </View>
    </Layout>
  );
}
