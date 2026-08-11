# Harcama Takip

Basit bir harcama takip uygulaması. React Native (Expo) ile yapıldı.

## Ne İşe Yarar?

- Harcama eklersin (kategori seç + tutar gir)
- Eklediğin harcamaları liste halinde görürsün
- Toplam harcamanı görürsün
- İstemediğin harcamayı silebilirsin

## Ekranlar

Uygulamada alt tarafta iki sekme (tab) var:

1. **Harcama Ekle** — Kategori seçip (yemek, ulaşım vs.) tutar girerek yeni harcama ekliyorsun.
2. **Harcama Listesi** — Eklediğin tüm harcamaları kart halinde görüyorsun, üstte toplam harcama yazıyor, her kartın yanındaki çöp kutusuna basarak silebiliyorsun.

## Kullanılan Teknolojiler

- **React Native / Expo** — Uygulamanın kendisi
- **React Navigation (Bottom Tabs)** — Alt sekme geçişleri
- **react-native-toast-message** — Başarılı/hatalı işlem bildirimleri
- **@expo/vector-icons (Ionicons)** — Kategori ve buton ikonları

## Nasıl Çalıştırılır?

```bash
npm install
npx expo start
```

Açılan QR kodu telefondaki Expo Go uygulamasıyla okutman yeterli.

## Not

Bu proje bir öğrenme/staj projesidir. Veriler kalıcı olarak saklanmıyor (backend/veritabanı yok), uygulamayı kapatınca harcamalar silinir.
