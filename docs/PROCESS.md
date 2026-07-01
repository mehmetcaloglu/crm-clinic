# Process

Bu dosya projenin çalışma düzenidir. Cursor ile geliştirme yaparken her oturumda referans alınmalıdır.

## Temel kural

Kod yazmadan önce plan çıkar. Plan onaylanmadan büyük değişiklik yapma.

```txt
Planla → Küçük task seç → Uygula → Test et → Dokümanı güncelle → Commit öner
```

## Task statüleri

```txt
[ ] Todo
[~] In progress
[x] Done
[!] Blocked
[?] Needs decision
```

## Definition of Done

Bir task ancak şu şartlarda tamamlandı sayılır:

- İlgili kod yazıldı.
- Temel testler eklendi veya elle test notu yazıldı.
- Multi-tenant veri sızıntısı riski kontrol edildi.
- Form validasyonları eklendi.
- Hata durumları ele alındı.
- `TASKS.md` güncellendi.
- İlgili phase dosyası güncellendi.
- `WORKLOG.md` içine kısa kayıt girildi.
- Karar değiştiyse `DECISIONS.md` güncellendi.

## Cursor çalışma akışı

### 1. Plan mode

Her yeni özellikte önce şu prompt kullanılır:

```txt
Use plan mode. Read the relevant docs and code.
Do not edit code yet.
Produce a step-by-step implementation plan with files to change, data model impact, tests, and risks.
```

### 2. Küçük parça geliştirme

Tek prompt ile bütün fazı yaptırma. Her seferinde tek modül:

- Auth layout
- Contacts list
- Contact detail
- Notes
- Status pipeline
- Appointments
- Packages
- Reports
- Provider adapter

### 3. Migration disiplini

DB değişikliği varsa:

- Migration dosyası oluştur.
- Geriye dönük etkiyi yaz.
- RLS policy kontrolü yap.
- Seed/demo data gerekiyorsa ayrı yaz.
- TypeScript tipleri güncelle.

### 4. Güvenlik kontrolü

Her PR/değişiklikten sonra:

```txt
Run a security/privacy review against:
- workspace_id scoping
- RLS policies
- role permissions
- audit log needs
- sensitive health-related notes
- webhook signature validation if integration code changed
```

### 5. Doküman güncelleme

Her oturum sonunda Cursor'a şu komut ver:

```txt
Update TASKS.md, the relevant tasks/PHASE file, WORKLOG.md, and DECISIONS.md if any product or architecture decision changed.
Summarize what was implemented, what remains, and what is blocked.
```

## Branch isimleri

```txt
phase-0-foundation
phase-1-contacts
phase-1-notes-status
phase-2-appointments
phase-2-packages
phase-3-whatsapp-provider
phase-4-instagram-manual
```

## Commit mesaj formatı

```txt
feat(contacts): add contact list and detail page
fix(messages): make inbound webhook idempotent
docs(process): update worklog after phase 1 notes
test(auth): add workspace isolation tests
```

## Yapılmış iş kaydı nasıl tutulur?

`WORKLOG.md` içinde tarihli kayıt açılır:

```md
## YYYY-MM-DD

### Done
- ...

### Changed
- ...

### Blocked
- ...

### Next
- ...
```

## MVP yayın checklist'i

Yayın öncesi:

- [ ] Login/logout çalışıyor.
- [ ] Workspace izolasyonu test edildi.
- [ ] Contact CRUD çalışıyor.
- [ ] Notlar doğru contact'a bağlanıyor.
- [ ] Durum güncelleme çalışıyor.
- [ ] Randevu çakışması kontrol edildi.
- [ ] Seans paketi eksiltme mantığı elle test edildi.
- [ ] Rapor sayıları demo veriyle doğrulandı.
- [ ] Hata sayfaları ve boş state'ler var.
- [ ] KVKK/aydınlatma metni placeholder olarak eklendi.
- [ ] Production env değişkenleri kontrol edildi.
