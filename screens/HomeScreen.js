import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { styles } from "./HomeScreenStyles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.uberIcon}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
