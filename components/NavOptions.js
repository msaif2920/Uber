import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={styles.container}
            disabled={!origin}
          >
            <View style={{ opacity: !origin ? 0.3 : 1 }}>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text style={styles.text}> {item.title}</Text>
              <Icon
                style={styles.icon}
                name="arrowright"
                color="white"
                type="antdesign"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingLeft: 6,
    paddingBottom: 10,
    paddingTop: 4,
    backgroundColor: `#d3d3d3`,
    margin: 10,
  },
  text: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "700",
  },
  icon: {
    padding: 5,
    backgroundColor: "black",
    borderRadius: 40,
    width: 35,
    marginTop: 10,
  },
});

export default NavOptions;
