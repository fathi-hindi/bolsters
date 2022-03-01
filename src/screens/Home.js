import React from "react";
import { View, Linking, Image } from "react-native";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <Layout>
      <View
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text 
          fontWeight="bold"
          style={{
          alignItems: "center",
          color:"#228B22",
          fontSize: 56,
          fontWeight: "800",
          marginTop: 40
        }}>المساند</Text>
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40
          }}>لتطوير البنية التحتية</Text>
          <Image source={require('./../../assets/back.png')} />
          <View style={{ width: "80%", marginTop: 20}}>
            <Button
              text="ابدا"
              color="green"
              onPress={() => {
                navigation.navigate("FormScreen");
              }}
            ></Button>
          </View>
      </View>
    </Layout>
  );
}
