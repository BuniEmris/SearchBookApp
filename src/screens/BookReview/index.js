import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { Txt, Header, SearchInput, Card } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

const BookReview = ({ navigation }) => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${filter}`
      );
      setData(result.data.hits);
    };
    fetchData();
  }, [filter]);

  const onSearch = (text) => {
    setFilter(text);
  };
  return (
    <View style={styles.container}>
      <Header
        title="My Book List"
        text={{ color: "white", marginTop: 30, marginLeft: 120 }}
      />
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput placeholder="type" onChangeText={onSearch} />
          <View style={styles.text}>
            <Txt
              title="Books reviewed by you"
              h5
              textStyle={{ textTransform: "uppercase" }}
            />
          </View>

          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("BookDetails", { item })}
              style={styles.boxContainer}
            >
              <View style={styles.bookImage}>
                <Card type="small" />
                <View style={styles.bookName}>
                  <Txt
                    h3
                    bold
                    title={item.title}
                    textStyle={{ textAlign: "left" }}
                  />
                  <View style={styles.author}>
                    <Txt title={item.author} h5 />
                    <View style={styles.rating}>
                      <MaterialCommunityIcons
                        name="star"
                        size={16}
                        color="gold"
                      />

                      <MaterialCommunityIcons
                        name="star"
                        size={16}
                        color="#E3E4F2"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export { BookReview };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    marginBottom: 30,
  },
  author: {
    height: 18,

    marginTop: 10,
  },
  bookImage: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  boxContainer: {
    width: 315,
    height: 147,
    backgroundColor: "pink",
    margin: 5,
    borderRadius: 8,
  },
  bookName: {
    width: 182,
    height: 46,
  },
  input: {
    borderRadius: 8,
    width: 300,
    height: 40,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    shadowOpacity: 4,
    shadowRadius: 4,
    bottom: 20,
  },
  text: {
    alignItems: "flex-start",
    margin: 20,
  },
  rating: {
    flexDirection: "row",

    height: 16,
    marginTop: 30,
  },
});
