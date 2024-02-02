import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MoreDetails from "../screens/MoreDetails";
import Main from "../screens/Main";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={Main}
            options={{
              title: "Movie App",
              headerStyle: {
                backgroundColor: "#293646",
              },
              headerTitleStyle: {
                color: "#fff",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="MoreDetails"
            component={MoreDetails}
            options={{ headerBackTitle: "Back to List" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default AppStack;
