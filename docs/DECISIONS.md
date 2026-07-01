# Decisions

Bu dosya mimari ve ürün kararlarını tutar. Karar değişirse eski karar silinmez; yeni karar eklenir.

## ADR-001 — Ürünün merkezi CRM çekirdeği olacak

**Status:** Accepted  
**Date:** 2026-07-01

### Context

Instagram ve WhatsApp entegrasyonları önemli görünüyor ama ilk MVP'de teknik karmaşa yaratabilir. Fizyoterapistin asıl ihtiyacı danışanları, dönüşleri, randevuları ve seans paketlerini kaçırmamak.

### Decision

Ürün mesajlaşma entegrasyonlarından bağımsız çalışabilen bir CRM çekirdeği olarak tasarlanacak.

### Consequences

- İlk MVP API'siz satılabilir/test edilebilir.
- Provider değişse bile CRM domain modeli bozulmaz.
- Mesajlaşma kanalları adapter olarak eklenecek.

---

## ADR-002 — İlk MVP API'siz manuel CRM olacak

**Status:** Accepted  
**Date:** 2026-07-01

### Decision

Phase 1'de gerçek WhatsApp/Instagram API olmayacak. Kaynak alanı, telefon, Instagram username, hazır cevap kopyalama ve manuel conversation log yeterli olacak.

### Consequences

- MVP hızlı çıkar.
- Müşteri doğrulaması daha erken yapılır.
- Entegrasyon maliyeti talep kanıtlanmadan yapılmaz.

---

## ADR-003 — Contact ve ContactIdentity ayrı modeller olacak

**Status:** Accepted  
**Date:** 2026-07-01

### Context

Aynı danışan WhatsApp'tan telefon numarasıyla, Instagram'dan username ile gelebilir. Yanlış eşleştirme sağlık/veri gizliliği açısından risklidir.

### Decision

`Contact` gerçek danışanı temsil eder. `ContactIdentity` ise kanal kimliğini temsil eder.

```txt
Contact
  ├─ ContactIdentity: WhatsApp phone
  ├─ ContactIdentity: Instagram user id
  └─ ContactIdentity: manual phone/email
```

### Consequences

- Otomatik merge sadece güçlü kanıtla yapılır.
- Benzer isim/username sadece öneri üretir.
- Manuel merge ve audit log gerekir.

---

## ADR-004 — WhatsApp için provider/BSP önce değerlendirilecek

**Status:** Accepted  
**Date:** 2026-07-01

### Decision

WhatsApp için ilk gerçek entegrasyonda doğrudan Meta API yerine Twilio, 360dialog veya benzeri API sağlayıcı değerlendirilecek.

### Consequences

- MVP sonrası entegrasyon daha hızlı olabilir.
- Provider bağımlılığı doğar.
- Bu yüzden `ChannelProvider` abstraction zorunludur.

---

## ADR-005 — Instagram ilk etapta manuel/deep link kalacak

**Status:** Accepted  
**Date:** 2026-07-01

### Decision

Instagram gerçek API entegrasyonu ilk MVP'ye alınmayacak. İlk etapta Instagram username, profil açma butonu, hazır cevap kopyalama ve manuel kayıt akışı yapılacak.

### Consequences

- App Review ve izin riskleri MVP'yi engellemez.
- Talep kanıtlanırsa Chatwoot/respond.io/WATI pilotu veya Meta API fazına geçilir.

---

## ADR-006 — AI otomatik medikal cevap vermeyecek

**Status:** Accepted  
**Date:** 2026-07-01

### Decision

AI özellikleri gelirse sadece özet, etiket, taslak cevap veya operasyonel öneri üretecek. İnsan onayı olmadan danışana otomatik medikal cevap gönderilmeyecek.

### Consequences

- Risk azalır.
- AI fazı MVP dışına alınır.

---

## ADR-007 — Multi-tenant izolasyon temel mimari şarttır

**Status:** Accepted  
**Date:** 2026-07-01

### Decision

Her ana tabloda `workspace_id` bulunacak. Supabase RLS ile kullanıcı sadece kendi workspace verisine erişebilecek.

### Consequences

- Tüm query'lerde workspace scope zorunlu.
- Testlerde workspace isolation senaryoları olacak.
