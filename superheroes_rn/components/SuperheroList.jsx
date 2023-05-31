import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const SuperheroList = () => {
  const [rows, setRows] = useState(null);
  const ipAndPort = "10.44.22.39:3001"; // use your IP address

  useEffect(() => {
    const getSuperheroes = async () => {
      try {
        let response = await fetch(`http://${ipAndPort}/api/superhero`);
        let data = await response.json();
        setRows(data);
      } catch (ex) {
        console.error(`Problems fetching: ${ex.message}`);
      }
    };
    getSuperheroes();
  }, []);

  return (
    <View style={styles.container}>
      {rows ? (
        rows.map((row) => <Text>{row.name}</Text>)
      ) : (
        <Text>'No superheroes found...yet!'</Text>
      )}
    </View>
  );
};

export default SuperheroList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
