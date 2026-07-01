# Global Task Board

Bu dosya ana task board'dur. Detaylı checklist'ler `tasks/` klasöründedir.

## Current strategy

```txt
MVP 1: API'siz manuel CRM
MVP 2: WhatsApp provider entegrasyonu
MVP 3: Instagram manuel/deep link
MVP 4: Instagram/omnichannel pilot
MVP 5: Direkt API / gelişmiş otomasyon
```

## Phase 0 — Foundation

- [ ] Proje oluştur: Next.js + TypeScript
- [ ] UI sistemi kur: Tailwind + shadcn/ui
- [ ] Supabase proje ve env ayarları
- [ ] Auth akışı
- [ ] Workspace modeli
- [ ] Role/member modeli
- [ ] Ana dashboard layout
- [ ] RLS policy temel testleri
- [ ] Error/loading/empty state componentleri

Detay: `tasks/PHASE-0-foundation.md`

## Phase 1 — Manual CRM Core

- [ ] Contact list
- [ ] Contact create/edit
- [ ] Contact detail
- [ ] ContactIdentity modeli
- [ ] Kaynak alanı: Instagram / WhatsApp / Telefon / Referans / Diğer
- [ ] Not ekleme
- [ ] Status pipeline
- [ ] Conversation/manual message kayıtları
- [ ] Hazır cevap şablonları
- [ ] Cevap bekleyenler filtresi
- [ ] Basit dashboard raporu

Detay: `tasks/PHASE-1-manual-crm.md`

## Phase 2 — Physio-specific Features

- [ ] Randevu modeli
- [ ] Randevu takvimi/listesi
- [ ] Randevu durumları
- [ ] Seans paketi modeli
- [ ] Tamamlanan seans işleme
- [ ] Kalan seans gösterimi
- [ ] Gün sonu cevap bekleyenler özeti
- [ ] Aktif danışan ve paket raporları

Detay: `tasks/PHASE-2-physio-features.md`

## Phase 3 — WhatsApp Provider Integration

- [ ] Provider seçimi: Twilio mı, 360dialog mı?
- [ ] ChannelProvider interface
- [ ] ProviderConnection modeli
- [ ] Webhook endpoint
- [ ] Raw event storage
- [ ] Normalize inbound message
- [ ] Phone number → ContactIdentity match
- [ ] Duplicate webhook protection
- [ ] Outbound message sending
- [ ] Message status updates
- [ ] 24 saat pencere uyarısı
- [ ] Template mesaj stratejisi

Detay: `tasks/PHASE-3-whatsapp-provider.md`

## Phase 4 — Instagram Manual / Pilot

- [ ] Instagram username alanı
- [ ] Instagram profile/deep link button
- [ ] Manuel Instagram conversation kayıt akışı
- [ ] Hazır cevap kopyala butonu
- [ ] Chatwoot/respond.io/WATI pilot değerlendirmesi
- [ ] Provider sync PoC kararı

Detay: `tasks/PHASE-4-instagram-manual-pilot.md`

## Phase 5 — Instagram API

- [ ] Meta app gereksinimleri
- [ ] Business/Professional account onboarding
- [ ] OAuth/permissions flow
- [ ] Webhook endpoint
- [ ] Instagram user id → ContactIdentity match
- [ ] Inbound DM normalize
- [ ] Outbound reply
- [ ] App Review hazırlık dokümanı

Detay: `tasks/PHASE-5-instagram-api.md`

## Phase 6 — Reporting / Automation / AI

- [ ] Haftalık rapor
- [ ] Dönüşüm oranı raporu
- [ ] Paket gelir raporu
- [ ] CSV export
- [ ] AI conversation summary
- [ ] AI reply suggestion
- [ ] Human approval requirement
- [ ] Otomatik medikal tavsiye engeli

Detay: `tasks/PHASE-6-reporting-automation-ai.md`

## Blockers / Decisions Needed

- [?] İlk müşteri segmenti: sadece fizyoterapist mi, klinik mi, estetik merkezi de var mı?
- [?] WhatsApp provider: Twilio, 360dialog, başka?
- [?] İlk canlı pilot kaç kullanıcıyla yapılacak?
- [?] KVKK danışmanlığı ne zaman alınacak?
- [?] Ücretlendirme: aylık sabit mi, koltuk başı mı, şube başı mı?
