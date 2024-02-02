import { Button, Card, Text } from "@rneui/themed";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const SingleCard = ({
  image,
  title,
  popularity,
  release,
  id,
  media,
  navigation,
}) => {
  return (
    <Card>
      <View style={styles.container}>
        <View>
          <Card.Image
            style={{ width: 100 }}
            source={{ uri: "https://image.tmdb.org/t/p/w500" + image }}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={{ marginBottom: 5 }}>Popularity: {popularity}</Text>
          <Text>Release Date: {release}</Text>
          <Button
            title="More Details"
            buttonStyle={{
              width: "100%",
              marginTop: 5,
              backgroundColor: "#04accd",
              height: 40,
              borderRadius: 3,
            }}
            onPress={() => {
              navigation.navigate("MoreDetails", { id, media_type: media });
            }}
          />
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
export default SingleCard;
