import React from 'react';
import { View } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
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
            marginBottom: 80
          }}>لتطوير البنية التحتية</Text>
        <Text
            style={{
            alignItems: "stretch",
            marginHorizontal: 20,
            marginBottom: 40
          }}>
            تقوم فكرة هذا المشروع على انشاء تطبيق مبتكرا لخدمة السكان كجزء من تطوير الخدمة بالوسائل الرقمية. حيث يتيح هذا التطبيق لسكان و المواطنين على مساعدة البلديات و المجالس المحلية بمتابعة و حل المشاكل اليومية والمخالافات التي قد تحدث على ارض الواقع في اي جزء من اجزاء البنية التحتية من خلال السماح للمواطنين بالابلاغ عن هذه المشاكل والمخالفات من خلال هذا التطبيق في دقائق معدودة
          </Text>
          <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}>2022</Text>
			</View>
		</Layout>
	);
}
