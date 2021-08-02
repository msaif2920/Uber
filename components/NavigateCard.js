import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={{ textAlign: "center", paddingVertical: 5, fontSize: 20 }}>
        Good Morning, Samin
      </Text>
      <View style={{ borderTop: "1px solid Gray", flexShrink: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          fetchDetails={true}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

            navigation.navigate("RideOptionsCard");
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          styles={{
            container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
            textInput: {
              backgroundColor: "#DDDDDF",
              borderRadius: 0,
              fontSize: 18,
            },
            textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
