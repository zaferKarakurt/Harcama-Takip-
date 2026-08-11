import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { KATEGORILER } from "../kategoriler";

export default function HarcamaListesi({
  harcamalar,
  silHarcama,
  toplamHarcama,
}) {
  const kategoriBul = (key) => {
    for (let i = 0; i < KATEGORILER.length; i++) {
      if (KATEGORILER[i].key === key) {
        return KATEGORILER[i];
      }
    }
    return null;
  };

  const renderHarcama = ({ item }) => {
    const kategori = kategoriBul(item.kategori);

    return (
      <View style={styles.card}>
        <View style={styles.ikonDaire}>
          <Ionicons
            name={kategori ? kategori.icon : "help"}
            size={20}
            color="#fff"
          />
        </View>

        <Text style={styles.isim}>{kategori.isim}</Text>
        <Text style={styles.amount}>{item.tutar} TL</Text>

        <TouchableOpacity
          onPress={() => silHarcama(item.id)}
          style={styles.deleteButton}
        >
          <Ionicons name="trash-outline" size={20} color="#ff5555" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Harcamalarım</Text>

      <View style={styles.toplamCard}>
        <Text style={styles.toplamText}>
          Toplam Harcama: {toplamHarcama} TL
        </Text>
      </View>

      <FlatList
        data={harcamalar}
        renderItem={renderHarcama}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>İlk harcamanızı ekleyin!</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
  },
  ikonDaire: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ff5555",
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    flex: 1,
    marginLeft: 12,
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff5555",
  },
  isim: {
    flex: 1,
    left:10,
    color: "#ff5555",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 12,
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  emptyText: {
    color: "#888",
    fontSize: 16,
  },
  toplamCard: {
    backgroundColor: "#ff5555",
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  toplamText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
