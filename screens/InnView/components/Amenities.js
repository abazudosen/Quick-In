import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Amenities() {
  return (
    <View style={gs.sectionContainter}>
      <Text style={gs.sectionTitle}>Anemities</Text>

      <View style={styles.amenitiesContainer}>
        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="wifi" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Free WI-FI</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="md-restaurant" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Cafe</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <FontAwesome5 name="swimmer" size={20} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Natatorium </Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Entypo name="drink" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Bar & Chill</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Ionicons name="ios-car" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Parking Zone</Text>
        </View>

        <View style={styles.amenityContainer}>
          <View style={styles.amenity}>
            <Feather name="speaker" size={24} color={colors.lightHl} />
          </View>
          <Text style={styles.amenityName}>Ibiza Club</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: "wrap",
  },
  amenityContainer: {
    alignItems: "center",
    width: 95,
    marginVertical: 12,
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: "#444",
  },
  amenityName: {
    color: colors.lightHl,
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
});
