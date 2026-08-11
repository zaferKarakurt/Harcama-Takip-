import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import { KATEGORILER } from "../kategoriler";

export default function HarcamaEkle({ harcamalar = [], setHarcamalar }) {
  // Güvenlik için default değer eklendi
  const [seciliKategori, setSeciliKategori] = useState(null);
  const [harcamaTutar, setHarcamaTutar] = useState("");

  const kaydet = () => {
    if (seciliKategori === null || harcamaTutar.trim() === "") {
      Toast.show({
        type: "error",
        text1: "Hata!",
        text2: "Kategori seçip tutar girmelisiniz!",
        position: "top",
      });
      return;
    }

    const yeniHarcama = {
      id: Math.random().toString(),
      kategori: seciliKategori,
      tutar: harcamaTutar,
    };
    setHarcamalar([...harcamalar, yeniHarcama]);

    setSeciliKategori(null);
    setHarcamaTutar("");

    Toast.show({
      type: "success",
      text1: "Başarılı!",
      text2: "Harcama Eklendi!",
      position: "top",
    });
  };

  const kategoriButonlari = KATEGORILER.map((kategori) => {
    const seciliMi = seciliKategori === kategori.key;

    return (
      <TouchableOpacity
        key={kategori.key}
        style={[styles.kategoriKutusu, seciliMi && styles.kategoriKutusuSecili]}
        onPress={() => setSeciliKategori(kategori.key)}
      >
        <Ionicons
          name={kategori.icon}
          size={26}
          color={seciliMi ? "#fff" : "#ff5555"}
        />
        <Text
          style={[
            styles.kategoriYazisi,
            seciliMi && styles.kategoriYazisiSecili,
          ]}
        >
          {kategori.isim}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Harcama Ekle</Text>

      <View style={styles.content}>
        <View style={styles.kategoriGrid}>{kategoriButonlari}</View>

        <TextInput
          style={styles.input}
          placeholder="Harcama Tutarı"
          placeholderTextColor="#999"
          value={harcamaTutar}
          onChangeText={setHarcamaTutar}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.butonKaydet} onPress={kaydet}>
          <Text style={styles.butonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>

      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baslik: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
  },
  content: {
    width: "75%",
  },
  kategoriGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  kategoriKutusu: {
    width: "30%",
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  kategoriKutusuSecili: {
    backgroundColor: "#ff5555",
    borderColor: "#ff5555",
  },
  kategoriYazisi: {
    fontSize: 11,
    color: "#333",
    marginTop: 4,
    textAlign: "center",
  },
  kategoriYazisiSecili: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 15,
  },
  butonKaydet: {
    backgroundColor: "#ff5555",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  butonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
