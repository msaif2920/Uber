import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { styles } from "./HomeScreenStyles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.uberIcon}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
          retunKeyType={"search"}
          placeholder="Where From?"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
          }}
          fetchDetails={true}
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          minLength={2}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
