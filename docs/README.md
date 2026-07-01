# Physio CRM Cursor Blueprint v2

**Tarih:** 2026-07-01  
**Amaç:** Fizyoterapistler için danışan takip mini-CRM projesini Cursor'da düzenli geliştirmek.

Bu blueprint, ilk konuştuğumuz özellik listesini daha gerçekçi bir MVP planına dönüştürür:

- Önce **API'siz çalışan manuel CRM çekirdeği**
- Sonra **WhatsApp provider/BSP entegrasyonu**
- Instagram için önce **manuel/deep link akışı**
- Talep kanıtlanırsa **Chatwoot/respond.io/WATI pilotu veya Meta Instagram API**
- En son AI/otomasyon

## Ana ürün fikri

Fizyoterapistler Instagram, WhatsApp, telefon veya referans yoluyla gelen danışanları kaçırmasın.

Ürün şunları yapar:

- Danışan kartı oluşturur.
- Not, durum, randevu ve seans paketi takip eder.
- Hazır cevap şablonları sunar.
- Gün sonunda cevap bekleyen danışanları gösterir.
- Basit dönüşüm raporu verir.
- Mesajlaşma entegrasyonlarına hazır mimariyle büyür.

## En önemli mimari karar

Mesajlaşma sağlayıcıları ürünün merkezi değildir.

```txt
Ürünün merkezi = CRM çekirdeği
WhatsApp / Instagram / Chatwoot / Twilio / 360dialog = kanal adaptörleri
```

Bu yüzden domain modeli şu çekirdekte kalır:

```txt
Contact
ContactIdentity
Conversation
Message
Appointment
TreatmentPackage
Task
Report
```

## Önerilen teknoloji

- Next.js App Router
- TypeScript
- Supabase Postgres + Auth + RLS
- Tailwind CSS + shadcn/ui
- Vercel
- Provider-ready channel adapter layer

## Klasörler

```txt
.cursor/
  rules/         Cursor proje kuralları
  skills/        Tekrar kullanılabilir çalışma akışları
  commands/      Cursor'a yapıştırılacak komut/prompt dosyaları

docs/
  Ürün, mimari, veri modeli, risk, entegrasyon, test ve UX dokümanları

tasks/
  Fazlara bölünmüş yapılacak işler

PROCESS.md      Çalışma süreci
TASKS.md        Genel task board
WORKLOG.md      Yapılan işler kaydı
DECISIONS.md    Mimari/ürün kararları
CHANGELOG.md    Blueprint değişiklikleri
```

## İlk Cursor prompt'u

```txt
Read README.md, PROCESS.md, TASKS.md, DECISIONS.md and all docs/*.md.
Do not implement yet.

Create a detailed implementation plan for Phase 0 and Phase 1 only.

Include:
- database tables and migrations
- pages and components
- server actions/API routes
- tests
- security and privacy concerns
- missing decisions

After the plan, wait for approval before editing code.
```

## Çalışma prensibi

Her geliştirme sonunda şunlar güncellenir:

- `TASKS.md`
- ilgili `tasks/PHASE-*.md`
- `WORKLOG.md`
- gerekirse `DECISIONS.md`
- gerekirse `docs/OPEN_QUESTIONS.md`

Ayrıntılar için `PROCESS.md` dosyasına bak.
