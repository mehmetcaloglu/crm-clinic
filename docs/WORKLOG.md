# Worklog

Bu dosya yapılmış işleri kaydeder. Kod geliştikçe güncellenmelidir.

## 2026-07-01

### Done

- Blueprint v2 hazırlandı.
- MVP stratejisi güncellendi:
  - Önce manuel CRM.
  - WhatsApp provider ile sonraki faz.
  - Instagram önce manuel/deep link.
  - Omnichannel/Meta API daha sonraki faz.
- Cursor rules, skills, commands, process ve task dokümanları oluşturuldu.
- Contact ve ContactIdentity ayrımı ana mimari karar olarak kaydedildi.
- Provider bağımsız `ChannelProvider` mimarisi dokümante edildi.

### Changed

- Önceki "Instagram + WhatsApp API hemen entegre edilsin" yaklaşımı yumuşatıldı.
- Ürün merkezi "mesaj inbox" değil, "fizyoterapist danışan takip CRM'i" olarak netleştirildi.
- WATI/respond.io/Chatwoot gibi araçlar ürün merkezi değil, validasyon veya kanal adaptörü olarak konumlandırıldı.

### Blocked

- Henüz gerçek provider seçilmedi.
- Henüz KVKK/hukuki süreç doğrulanmadı.
- Henüz hedef pilot müşteri listesi kesinleşmedi.

### Next

- Cursor'da Phase 0 ve Phase 1 için plan çıkart.
- İlk API'siz CRM'i kodla.
- 5-10 fizyoterapistle özellik doğrulaması yap.
