import React from "react";
import { Text } from "react-native-rapi-ui";
export default (props) => {
  return (
    <Text
      fontWeight="bold"
      style={{
        marginBottom: 5,
        color: props.focused
          ? "#228B22"
          : "rgb(143, 155, 179)",
        fontSize: 10,
      }}
    >
      {props.title}
    </Text>
  );
};
