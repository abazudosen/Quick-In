import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "./styles";
import InnView from "./screens/InnView";
import ProfileView from './screens/ProfileView'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <InnView /> */}
      <ProfileView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
