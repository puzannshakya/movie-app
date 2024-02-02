import { Text } from "@rneui/themed";
import { ActivityIndicator, View } from "react-native";
const Loader = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <ActivityIndicator size="small" color="black" />
      <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "bold" }}>
        Loading Results
      </Text>
    </View>
  );
};

export default Loader;
