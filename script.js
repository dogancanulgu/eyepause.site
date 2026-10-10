/**
 * EyePause Landing Page — Interactive Scripts, Bilingual i18n & Web Audio Engine
 */

// MARK: - 1. Web Audio Tibetan Bowl Chime (528 Hz Pure Harmonic Synthesis)
class ChimeSynth {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTibetanBowl() {
    try {
      this.init();
      const now = this.ctx.currentTime;

      // Master gain
      const masterGain = this.ctx.createGain();
      masterGain.connect(this.ctx.destination);
      masterGain.gain.setValueAtTime(0.3, now);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

      // Fundamental frequency: 528 Hz (The Solfeggio "Transformation & Miracles" frequency)
      const freqs = [528, 528 * 2.01, 528 * 3.03, 528 * 0.5];
      const gains = [0.6, 0.25, 0.1, 0.3];

      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now);

        g.gain.setValueAtTime(gains[idx], now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        osc.connect(g);
        g.connect(masterGain);

        osc.start(now);
        osc.stop(now + 3.8);
      });
    } catch (e) {
      console.log('Web Audio not allowed before user interaction:', e);
    }
  }
}

const chime = new ChimeSynth();

// MARK: - 2. Bilingual i18n Dictionary
const translations = {
  tr: {
    page_title: "EyePause — macOS İçin Akıllı Göz ve Odaklanma Asistanı",
    meta_desc: "20-20-20 kuralını iş akışınızı asla bölmeden uygulayın. Zoom toplantılarını, video izlemeyi ve yazı yazmayı algılayan akıllı mola yöneticisi.",
    nav_features: "Özellikler",
    nav_science: "Göz Sağlığı",
    nav_smart_pause: "Akıllı Duraklatma",
    nav_calculator: "Yorgunluk Testi",
    nav_faq: "S.S.S.",
    nav_early_access: "Erken Erişime Katıl",

    hero_badge: "Yakında Mac App Store'da — Ön Kayıt Açık",
    hero_title: 'Gözlerinizi dinlendirin.<br><span class="gradient-text">Odaklanmanızı koruyun.</span>',
    hero_subtitle: 'Ekran başında saatlerce kaybolduğunuzda gözlerinizin ve duruşunuzun en zarif koruyucusu. <strong>20-20-20 kuralını</strong>, toplantılarınızı ve yazı akışınızı asla bölmeden işleten yerel (native) macOS asistanı.',
    hero_email_placeholder: "E-posta adresinizi girin...",
    hero_submit_btn: "Erken Erişim Sırasına Gir",
    hero_micro_1: "Spam yok, yalnızca ilk lansman davetiyesi",
    hero_micro_2: "Apple Silicon (M1/M2/M3/M4) & Intel uyumlu",
    hero_micro_3: "%100 Yerel Swift & Sıfır Bulut Takibi",

    mockup_window_title: "EyePause — Menü Çubuğu Deneyimi",
    mockup_status: "Çalışma Seansı Aktif",
    mockup_btn_preview: "✨ Molayı Canlandır",
    mockup_next_break: "Sonraki Mola",
    mockup_break_type_label: "Mola Türü:",
    mockup_break_type_val: "Kısa Göz Molası (20s)",
    mockup_score_label: "Screen Score:",
    mockup_today_label: "Bugünkü Molalar:",
    mockup_today_val: "14 Başarılı Mola",
    mockup_start_btn: "Şimdi Mola Ver",
    mockup_cursor_caption: "İmleç Takip Widget'ı (Son 5 saniyede nazikçe ekranda belirir)",
    mockup_cursor_pill: "Mola başlıyor: <strong>05</strong>",

    science_badge: "BİLİMSEL TEMELLER",
    science_title: "Neden Ekran Başında Gözlerimiz Yorulur?",
    science_desc: "Modern insan gününün ortalama 8 ila 11 saatini dijital ekranlara odaklanarak geçiriyor. Göz kaslarımız doğası gereği 60 cm mesafeye saatlerce kilitlenmek üzere tasarlanmadı.",
    science_c1_title: "Altın Kural",
    science_c1_text: "Amerikan Oftalmoloji Akademisi (AAO) onaylı: <strong>Her 20 dakikada bir</strong>, <strong>20 saniye</strong> boyunca en az <strong>20 fit (6 metre)</strong> uzağa bakmak, gözün silier odak kaslarını tamamen gevşetir ve spazmı önler.",
    science_c2_title: "Göz Kırpma Kaybı",
    science_c2_text: "Normalde dakikada 15-20 kez göz kırparız. Ekrana kilitlendiğimizde bu sayı <strong>5-7'ye düşer</strong>. EyePause nazik görsel ve sesli sinyallerle göz yaşı tabakanızı taze tutmanızı sağlar.",
    science_c3_title: "Omurga & Nefes Dengesi",
    science_c3_text: "Öne eğik boyun (\"Tech Neck\"), omurgaya 27 kilograma kadar fazladan yük bindirir. EyePause molaları sadece gözünüzü değil, omuz ve sırtınızı esnetmeniz için kusursuz bir ritim sunar.",

    features_badge: "AKILLI VE SAYGILI TASARIM",
    features_title: "İşinizi Asla Bölmeyen Tek Mola Asistanı",
    features_desc: 'Geleneksel zamanlayıcılar can sıkıcıdır çünkü ne yaptığınızı bilmezler. Tam kod derlerken veya bir müşteriyle konuşurken ekrana fırlayan kaba pencerelerden nefret ettiğimiz için <strong>EyePause</strong>\'u geliştirdik.',
    feat_m1_badge: "CoreAudio Donanım Sensörü",
    feat_m1_title: "Toplantıda mısınız? Saygıyla bekler.",
    feat_m1_text: "Zoom, Google Meet, Microsoft Teams, Slack Huddles veya FaceTime görüşmelerinizde mikrofon akışını donanım seviyesinde algılar. Siz konuşurken veya önemli bir sunum dinlerken asla mola uyarısı vermez; görüşme bittikten 1 dakika sonra sessizce devam eder.",
    feat_m1_mic_name: "MacBook Pro Mikrofonu",
    feat_m1_mic_status: "Toplantı Algılandı • Duraklatıldı",
    feat_m1_mic_badge: "Akıllı Bekleme",
    feat_m2_badge: "IOKit Video Uyku Kilidi Algılama",
    feat_m2_title: "YouTube veya Drive izlerken masada olduğunuzu bilir.",
    feat_m2_text: "Chrome veya Safari'de klavye ve fareye dokunmadan 15 dakika boyunca bir eğitim videosu izlediğinizde, sıradan uygulamalar sizi \"masadan kalktı\" sanır. EyePause sistemin video oynatma sinyalini (Video Wake Lock) anlar; sürenizi sıfırlamaz ve gözleriniz için doğru anda molanızı verir.",
    feat_m2_video_name: "Google Chrome • YouTube",
    feat_m2_video_status: "Video İzleniyor • Ekran Süresi Aktif",
    feat_m2_video_badge: "Göz Koruması Açık",
    feat_3_badge: "Flow Guard",
    feat_3_title: "Cümleniz Bitene Kadar Sabırla Bekler",
    feat_3_text: "Tam kritik bir e-posta yazarken veya Figma'da bir bileşeni taşırken mola saati geldiyse, yazma etkinliğiniz bittiği ana kadar geri sayımı dondurur. Akışınız asla bozulmaz.",
    feat_4_badge: "528 Hz Ses Motoru",
    feat_4_title: "Rahatsız Edici Alarmlar Yok",
    feat_4_text: "Harici dosyalara ihtiyaç duymadan gerçek zamanlı matematiksel sinüs dalgalarıyla üretilen 528 Hz Tibet çanağı tınıları. Zihninizi germez, huzurla uzağa bakmanızı sağlar.",
    feat_5_badge: "Native Mac Uygulama Seçici",
    feat_5_title: "Elle Yazma Yok, Tıkla ve Seç",
    feat_5_text: "Dikte (Wispr Flow vb.), derin odak (Xcode, Photoshop) veya hariç tutulacak uygulamaları (Spotify vb.) Mac'inizdeki yüklü uygulamalardan gerçek ikonlarıyla anında seçin.",
    feat_6_badge: "%100 Gizlilik Odaklı",
    feat_6_title: "Sıfır Kamera, Sıfır Bulut",
    feat_6_text: "Web kameranızı açmaz, mikrofon seslerinizi kaydetmez veya dinlemez; yalnızca donanım seviyesinde kullanım durumunu sorgular. Tüm verileriniz yalnızca Mac'inizde saklanır.",

    demo_badge: "CANLI DENEYİM",
    demo_title: "EyePause Mola Ekranını Şimdi Test Edin",
    demo_desc: "Aşağıdaki butona tıkladığınızda EyePause'un imza <strong>koyu buzlu cam katmanı</strong>, nefes halkası ve 528 Hz akustik çanı sayfada canlanacak. 5 saniye boyunca gözlerinizi ekrandan kaldırıp rahatlayın.",
    demo_btn: "5 Saniyelik Molayı Başlat",
    demo_hint: "İstediğiniz an ESC veya X tuşuyla kapatabilirsiniz",

    presets_badge: "ÇALIŞMA ŞEKLİNİZE UYARLANIR",
    presets_title: "Her İş Rutinine Uygun Hazır Modlar",
    presets_desc: "İster aralıksız kod yazan bir mühendis, ister tasarımcı, ister yoğun toplantı trafiğindeki bir yönetici olun; EyePause size uyum sağlar.",
    tab_balanced: "⚖️ Balanced (Dengeli)",
    tab_deepFocus: "🎯 Deep Focus (Derin Odak)",
    tab_eyeCare: "🌿 Eye Care (Maksimum Göz)",
    tab_wellness: "🧘 Wellness (Bütünsel)",
    spec_label_work: "Çalışma Aralığı",
    spec_label_short: "Kısa Göz Molası",
    spec_label_long: "Uzun Mola",
    spec_label_target: "Önerilen Kullanım",

    calc_badge: "GÖZ YORGUNLUĞU HESAPLAYICI",
    calc_title: "Gününüzün Ne Kadarı Ekran Işığında Geçiyor?",
    calc_desc: "Günlük çalışma sürenizi seçin; EyePause'un gözlerinizi kaç bin gereksiz spazmdan ve gözyaşı kuruluğundan koruduğunu hesaplayalım.",
    calc_slider_label: "Günlük Ekran Süreniz:",
    calc_slider_unit: "saat / gün",
    calc_tick_2: "2 saat",
    calc_tick_6: "6 saat",
    calc_tick_10: "10 saat",
    calc_tick_14: "14 saat+",
    calc_m1_label: "Eksik Kalan Göz Kırpma / Gün",
    calc_m1_sub: "Ekrana bakarken kuruyan gözyaşı tabakası",
    calc_m2_label: "EyePause İle Kazanılan Mikro Dinlenme",
    calc_m2_sub: "Göz kaslarını gevşeten 20 saniyelik molalar",
    calc_m3_label: "Hedeflenen Screen Score",
    calc_m3_sub: "Gün sonu baş ağrısı ve göz kızarıklığı riski sıfıra iner",

    comp_badge: "FARK YARATAN DETAYLAR",
    comp_title: "Neden Sıradan Bir Mola Uygulaması Değil?",
    comp_th_feature: "Özellik & Yetenek",
    comp_th_eyepause: "EyePause (macOS)",
    comp_th_traditional: "Geleneksel Mola Uygulamaları",
    comp_th_pomodoro: "Basit Pomodoro / Alarmlar",
    comp_r1_f: "Toplantı Algılama (CoreAudio)",
    comp_r1_ep: "✅ Otomatik Askıya Alır",
    comp_r1_tr: "❌ Aramanızı böler",
    comp_r1_po: "❌ Farkında değildir",
    comp_r2_f: "Video İzlerken Akıllı Süreç",
    comp_r2_ep: "✅ Masadasınız kabul eder",
    comp_r2_tr: "❌ \"Boşta\" sanıp durur",
    comp_r2_po: "❌ Farkında değildir",
    comp_r3_f: "Yazma & Sürükleme Koruması",
    comp_r3_ep: "✅ Cümleniz bitene kadar bekler",
    comp_r3_tr: "❌ Ekranı küt diye kilitler",
    comp_r3_po: "❌ Yok",
    comp_r4_f: "İmleç Takip Eden Hap Sayacı",
    comp_r4_ep: "✅ Var (5 sn önce belirir)",
    comp_r4_tr: "❌ Yok",
    comp_r4_po: "❌ Yok",
    comp_r5_f: "Sistem Kaynağı ve Pil Tüketimi",
    comp_r5_ep: "✅ Saf Native Swift (<30 MB RAM)",
    comp_r5_tr: "⚠️ Ağır Electron (~500 MB RAM)",
    comp_r5_po: "Değişken",
    comp_r6_f: "Ses Tasarımı",
    comp_r6_ep: "✅ 528 Hz Sentezlenmiş Tibet Çanı",
    comp_r6_tr: "❌ İrkilten Dijital Bip",
    comp_r6_po: "❌ Standart Çalar Saat",

    faq_badge: "MERAK EDİLENLER",
    faq_title: "Sıkça Sorulan Sorular",
    faq_q1: "EyePause neden indirmeye şu anda açık değil? Ne zaman çıkacak?",
    faq_a1: "EyePause şu anda özel beta test aşamasında ve Mac App Store onay sürecine hazırlanıyor. Erken erişim listesine e-postanızı bıraktığınızda, ilk v1.0 sürümü yayınlandığı gün size özel bir davet bağlantısı ve erken erişim avantajları gönderilecektir.",
    faq_q2: "EyePause mikrofonumu veya kameramı dinliyor mu? Gizliliğim güvende mi?",
    faq_a2: "<strong>Kesinlikle hayır.</strong> EyePause kamera erişimi bile istemez. Mikrofon tarafında ise CoreAudio API'si aracılığıyla yalnızca <em>\"Şu anda herhangi bir girdi aygıtından ses kanalı akışı var mı?\"</em> şeklinde donanımsal bir evet/hayır sinyali sorgular. Ses verileriniz asla kaydedilmez, çözülmez veya herhangi bir sunucuya gönderilmez. %100 Mac'inizde yerel olarak çalışır.",
    faq_q3: "Çoklu monitör (birden fazla ekran) kullanıyorum, nasıl çalışır?",
    faq_a3: "EyePause çoklu monitör sistemleri için özel olarak optimize edilmiştir. Mola vakti geldiğinde Mac'inize bağlı tüm harici monitörler eşzamanlı olarak dinlendirici koyu cam katmanıyla kaplanır, böylece gözünüzü diğer ekrana kaçırarak yormaya devam etmezsiniz.",
    faq_q4: "Mac'imin pilini tüketir mi?",
    faq_a4: "Hayır. EyePause, modern Swift ve AppKit mimarisiyle sıfırdan macOS için derlenmiştir. Electron veya web sarmalayıcıları gibi arka planda gizli Chromium çalıştırmaz. Boşta çalışma CPU kullanımı %0.1'in altındadır ve pil ömrünüzü asla fark edilmeyecek seviyede tutar.",

    cta_badge: "GÖZLERİNİZE BİR İYİLİK YAPIN",
    cta_title: "Günün Sonunda Gözlerinizi Yorgun Hissetmeyi Bırakın.",
    cta_desc: "EyePause çok yakında macOS kullanıcılarıyla buluşuyor. İlk sürüm yayınlandığında bildirim almak ve sınırlı erken erişim topluluğuna katılmak için e-postanızı kaydedin.",
    cta_placeholder: "E-posta adresinizi buraya yazın...",
    cta_btn: "Erken Erişime Katıl",

    footer_tagline: "Gözlerinizi dinlendirin, odaklanmanızı koruyun. macOS için özenle tasarlandı.",
    footer_contact_prefix: "İletişim & Kurumsal:",
    footer_domain_note: "Resmi Web Sitesi: eyepause.site • © 2026 EyePause. Tüm hakları saklıdır.",
    footer_col_nav: "Navigasyon",
    footer_col_compat: "Uyumluluk",
    footer_col_legal: "Yasal & Güvenlik",
    footer_link_rule: "20-20-20 Kuralı",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Koşulları",
    footer_contact_link: "Destek & Geri Bildirim",

    privacy_title: "Gizlilik Politikası",
    terms_title: "Kullanım Koşulları",
    legal_last_updated: "Son Güncelleme: 11 Ekim 2026 • EyePause (eyepause.site)",
    privacy_body_html: `
      <h3>1. Sıfır Veri Toplama Taahhüdü</h3>
      <p>EyePause olarak kişisel mahremiyetinize en üst düzeyde saygı duyuyoruz. EyePause macOS yerel uygulaması ve eyepause.site web sitemiz, kullanıcıların kişisel kullanım alışkanlıklarını, ekran içeriklerini veya özel verilerini asla uzaktaki bir sunucuya aktarmaz, saklamaz veya üçüncü taraflarla paylaşmaz.</p>

      <h3>2. Mikrofon & Kamera İzinleri</h3>
      <p>EyePause, toplantı ve görüntülü arama tespiti için <strong>kamera erişimi kesinlikle talep etmez</strong>. Mikrofon tarafında ise CoreAudio API'si üzerinden yalnızca donanımsal ses girdisi akışının aktif olup olmadığını (true/false) sorgular. Ses dalgalarınız asla dinlenmez, kaydedilmez veya metne dönüştürülmez.</p>

      <h3>3. Ekran ve Çalışma Süresi Analitiği</h3>
      <p>Tüm mola istatistikleriniz, oturum süreleriniz ve ayarlarınız yalnızca yerel Mac diskinizde şifrelenmiş veya korumalı yerel tercihler dosyasında saklanır. Hiçbir telemetri verisi buluta gönderilmez.</p>

      <h3>4. Erken Erişim E-posta Listesi</h3>
      <p>Landing page üzerinden waitlist'e gönüllü olarak kaydettiğiniz e-posta adresiniz, yalnızca EyePause'un ilk sürümü yayınlandığında size bildirim göndermek için kullanılır. E-postanız asla reklam verenlerle paylaşılmaz ve dilediğiniz an listeden çıkma hakkına sahipsiniz.</p>

      <h3>5. İletişim</h3>
      <p>Gizlilik uygulamalarımızla ilgili herhangi bir sorunuz olursa lütfen bizimle resmi e-posta adresimiz üzerinden iletişime geçin: <a href="mailto:info@eyepause.site" class="footer-mail">info@eyepause.site</a></p>
    `,
    terms_body_html: `
      <h3>1. Koşulların Kabulü</h3>
      <p>eyepause.site web sitesini ziyaret ederek veya EyePause macOS uygulamasını indirip kullanarak bu Kullanım Koşulları'nı kabul etmiş sayılırsınız.</p>

      <h3>2. Fikri Mülkiyet Hakları</h3>
      <p>EyePause markası, logosu, kullanıcı arayüzü tasarımları, özgün ses tasarımları (528 Hz Tibet çanı sentezi) ve tescilli algoritmaları EyePause'un mülkiyetindedir. İzinsiz kopyalanamaz, dağıtılamaz veya tersine mühendislikle çoğaltılamaz.</p>

      <h3>3. Sağlık ve Medikal Sorumluluk Reddi</h3>
      <p>EyePause, Amerikan Oftalmoloji Akademisi'nin (AAO) yaygın 20-20-20 ergonomi prensiplerine dayalı bir dijital mola ve odaklanma asistanıdır. EyePause bir medikal cihaz veya teşhis aracı değildir; profesyonel tıbbi veya göz hekimi tavsiyesinin yerini alamaz. Kronik göz veya kas rahatsızlıklarınız için lütfen bir göz hekimine danışınız.</p>

      <h3>4. Sorumluluğun Sınırlandırılması</h3>
      <p>EyePause, kullanıcıların çalışma alışkanlıklarını iyileştirmek amacıyla sunulur. Uygulama veya web sitesi "olduğu gibi" sunulmakta olup, olası teknik aksaklıklar, işletim sistemi uyumsuzlukları veya veri kaybı durumlarında sorumluluk yasal sınırlarla kısıtlıdır.</p>

      <h3>5. İletişim & Destek</h3>
      <p>Kullanım koşulları veya kurumsal iş birlikleri hakkında sorularınız için bize ulaşabilirsiniz: <a href="mailto:info@eyepause.site" class="footer-mail">info@eyepause.site</a></p>
    `,

    demo_overlay_title: "Uzağa Bakın (6 Metre)",
    demo_overlay_sub: "Derin bir nefes alın ve gözlerinizi pencereden dışarıya veya odanın en uzak köşesine odaklayın.",
    demo_overlay_bell: "🔔 528 Hz Tibet Çanı Çalıyor",
    demo_overlay_skip: "Molayı Şimdi Bitir (ESC)",

    feedback_invalid_email: "Lütfen geçerli bir e-posta adresi girin.",
    feedback_success: "🎉 Tebrikler! \"{email}\" erken erişim listesine eklendi. Lansman günü ilk siz davet edileceksiniz."
  },
  en: {
    page_title: "EyePause — Smart Eye Care & Flow Assistant for macOS",
    meta_desc: "Apply the 20-20-20 rule without interrupting your workflow. Smart break assistant that detects Zoom meetings, video watching, and typing flow.",
    nav_features: "Features",
    nav_science: "Eye Health",
    nav_smart_pause: "Smart Pause",
    nav_calculator: "Strain Test",
    nav_faq: "FAQ",
    nav_early_access: "Join Early Access",

    hero_badge: "Coming Soon to Mac App Store — Early Access Open",
    hero_title: 'Rest your eyes.<br><span class="gradient-text">Preserve your focus.</span>',
    hero_subtitle: 'The most elegant protector of your vision and posture during long screen hours. A native macOS assistant practicing the <strong>20-20-20 rule</strong> without breaking your meetings or typing flow.',
    hero_email_placeholder: "Enter your email address...",
    hero_submit_btn: "Join Early Access Waitlist",
    hero_micro_1: "No spam, launch invitation only",
    hero_micro_2: "Apple Silicon (M1–M4) & Intel compatible",
    hero_micro_3: "100% Native Swift & Zero Cloud Tracking",

    mockup_window_title: "EyePause — Menu Bar Experience",
    mockup_status: "Active Working Session",
    mockup_btn_preview: "✨ Preview Break",
    mockup_next_break: "Next Break",
    mockup_break_type_label: "Break Type:",
    mockup_break_type_val: "Short Eye Break (20s)",
    mockup_score_label: "Screen Score:",
    mockup_today_label: "Today's Breaks:",
    mockup_today_val: "14 Completed Breaks",
    mockup_start_btn: "Take Break Now",
    mockup_cursor_caption: "Cursor Follow Widget (Gently appears in last 5 seconds)",
    mockup_cursor_pill: "Break in: <strong>05</strong>",

    science_badge: "SCIENTIFIC FOUNDATIONS",
    science_title: "Why Do Our Eyes Get Strained at Screens?",
    science_desc: "Modern professionals spend 8 to 11 hours daily locked onto digital displays. Human eye muscles were never biologically evolved to fixate at a 60 cm focal plane for hours.",
    science_c1_title: "The Golden Rule",
    science_c1_text: "Endorsed by the American Academy of Ophthalmology: Looking at least <strong>20 feet away</strong> for <strong>20 seconds</strong> every <strong>20 minutes</strong> completely relaxes ciliary muscles and prevents eye strain spasm.",
    science_c2_title: "Blink Rate Loss",
    science_c2_text: "Normally we blink 15–20 times per minute. Staring at screens drops this to <strong>5–7 blinks</strong>. EyePause restores tear film hydration through gentle sensory cues.",
    science_c3_title: "Spine & Breath Balance",
    science_c3_text: "Forward head posture (\"Tech Neck\") adds up to 27 kg of extra pressure onto your cervical spine. EyePause breaks create a seamless rhythm to reset your neck and back posture.",

    features_badge: "SMART & RESPECTFUL DESIGN",
    features_title: "The Only Break Assistant That Never Breaks Your Flow",
    features_desc: 'Traditional timers are annoying because they are blind to your context. We built <strong>EyePause</strong> because we despise intrusive popups appearing mid-compile or while speaking with clients.',
    feat_m1_badge: "CoreAudio Hardware Sensor",
    feat_m1_title: "In a meeting? It politely waits.",
    feat_m1_text: "Detects microphone audio hardware streams across Zoom, Google Meet, Microsoft Teams, Slack Huddles, and FaceTime. Never interrupts your speech or presentations; quietly resumes 1 minute after calls end.",
    feat_m1_mic_name: "MacBook Pro Microphone",
    feat_m1_mic_status: "Meeting Detected • Paused",
    feat_m1_mic_badge: "Smart Holding",
    feat_m2_badge: "IOKit Video Wake Lock Detection",
    feat_m2_title: "Knows you're at your desk while watching YouTube or Drive.",
    feat_m2_text: "When watching a video on Chrome or Safari without touching your keyboard or mouse, ordinary timers think you're away. EyePause detects native macOS video wake assertions; keeping your eye care cadence uninterrupted.",
    feat_m2_video_name: "Google Chrome • YouTube",
    feat_m2_video_status: "Playing Video • Screen Time Active",
    feat_m2_video_badge: "Eye Care Active",
    feat_3_badge: "Flow Guard",
    feat_3_title: "Patiently Waits Until You Finish Your Thought",
    feat_3_text: "If a break arrives while drafting a critical email or dragging a component in Figma, countdown freezes until you pause typing. Your flow is sacred.",
    feat_4_badge: "528 Hz Sound Engine",
    feat_4_title: "No Jarring Alarms",
    feat_4_text: "Synthesized in real time using 528 Hz pure harmonic sine waves without external sample files. Never startles; gently invites you to look into the distance.",
    feat_5_badge: "Native Mac App Picker",
    feat_5_title: "No Manual Typing, Click & Pick",
    feat_5_text: "Select dictation tools (Wispr Flow), deep focus apps (Xcode, Photoshop), or excluded media apps from your installed macOS apps with real high-res icons.",
    feat_6_badge: "100% Privacy Focused",
    feat_6_title: "Zero Camera, Zero Cloud",
    feat_6_text: "Never enables your webcam, never records audio. Only checks hardware operational flags. 100% of your data stays strictly on your Mac.",

    demo_badge: "LIVE EXPERIENCE",
    demo_title: "Test The EyePause Break Screen Right Now",
    demo_desc: "Click below to experience EyePause's signature <strong>dark frosted glass overlay</strong>, breathing halo, and 528 Hz Tibetan chime right in your browser. Relax your eyes for 5 seconds.",
    demo_btn: "Start 5-Second Break Demo",
    demo_hint: "Press ESC or click X anytime to dismiss",

    presets_badge: "ADAPTS TO YOUR WORKFLOW",
    presets_title: "Presets Built For Every Work Routine",
    presets_desc: "Whether you're an engineer writing code, a designer crafting interfaces, or an executive running back-to-back meetings, EyePause adapts to your rhythm.",
    tab_balanced: "⚖️ Balanced (Default)",
    tab_deepFocus: "🎯 Deep Focus",
    tab_eyeCare: "🌿 Eye Care (Maximum)",
    tab_wellness: "🧘 Wellness (Holistic)",
    spec_label_work: "Focus Interval",
    spec_label_short: "Short Eye Break",
    spec_label_long: "Long Break",
    spec_label_target: "Target Audience",

    calc_badge: "EYE STRAIN CALCULATOR",
    calc_title: "How Much of Your Day is Spent in Screen Light?",
    calc_desc: "Select your daily screen time to estimate how many blinks and micro-breaks EyePause protects you with.",
    calc_slider_label: "Daily Screen Time:",
    calc_slider_unit: "hours / day",
    calc_tick_2: "2 hours",
    calc_tick_6: "6 hours",
    calc_tick_10: "10 hours",
    calc_tick_14: "14 hours+",
    calc_m1_label: "Missed Blinks / Day",
    calc_m1_sub: "Dehydrated tear film due to fixed staring",
    calc_m2_label: "Micro-Breaks Won With EyePause",
    calc_m2_sub: "20-second ciliary muscle relaxation sessions",
    calc_m3_label: "Target Screen Score",
    calc_m3_sub: "Zero end-of-day eye redness or tension headache risk",

    comp_badge: "THE CRITICAL DETAILS",
    comp_title: "Why It's Not Just Another Break App",
    comp_th_feature: "Feature & Capability",
    comp_th_eyepause: "EyePause (macOS)",
    comp_th_traditional: "Traditional Break Apps",
    comp_th_pomodoro: "Simple Pomodoro / Timers",
    comp_r1_f: "Meeting Detection (CoreAudio)",
    comp_r1_ep: "✅ Automatically Pauses",
    comp_r1_tr: "❌ Interrupts your calls",
    comp_r1_po: "❌ Unaware of calls",
    comp_r2_f: "Smart Video Playback Tracking",
    comp_r2_ep: "✅ Keeps timer active",
    comp_r2_tr: "❌ False idle resets",
    comp_r2_po: "❌ Unaware of video",
    comp_r3_f: "Flow Guard (Typing & Dragging)",
    comp_r3_ep: "✅ Waits until sentence ends",
    comp_r3_tr: "❌ Locks screen abruptly",
    comp_r3_po: "❌ None",
    comp_r4_f: "Cursor Follow Floating Widget",
    comp_r4_ep: "✅ Yes (appears 5s before)",
    comp_r4_tr: "❌ None",
    comp_r4_po: "❌ None",
    comp_r5_f: "System Resource & Battery Impact",
    comp_r5_ep: "✅ Pure Native Swift (<30 MB RAM)",
    comp_r5_tr: "⚠️ Heavy Electron (~500 MB RAM)",
    comp_r5_po: "Variable",
    comp_r6_f: "Audio Design",
    comp_r6_ep: "✅ 528 Hz Synthesized Tibetan Bowl",
    comp_r6_tr: "❌ Jarring Digital Beeps",
    comp_r6_po: "❌ Standard Alarm Clocks",

    faq_badge: "FREQUENTLY ASKED QUESTIONS",
    faq_title: "Frequently Asked Questions",
    faq_q1: "Why isn't EyePause available for immediate download? When does it release?",
    faq_a1: "EyePause is currently undergoing private beta polish and preparing for Mac App Store review. Joining the waitlist guarantees you an exclusive invitation link and early adopter perks on launch day.",
    faq_q2: "Does EyePause record my microphone or camera? Is my privacy safe?",
    faq_a2: "<strong>Absolutely not.</strong> EyePause never even requests camera permissions. For audio, it queries a low-level CoreAudio hardware boolean: <em>\"Is any input stream currently active?\"</em> Audio is never recorded, captured, or transmitted. 100% runs on-device on your Mac.",
    faq_q3: "How does it handle multi-monitor setups?",
    faq_a3: "EyePause is engineered specifically for multi-monitor workstations. When a break triggers, all connected external displays are simultaneously covered with the soothing frosted glass backdrop, preventing you from straining on another screen.",
    faq_q4: "Will it drain my MacBook battery?",
    faq_a4: "No. EyePause is natively compiled using modern Swift and AppKit. Unlike Electron or web wrappers, it does not run Chromium in the background. Idle CPU usage is under 0.1%, ensuring zero noticeable battery drain.",

    cta_badge: "DO YOUR EYES A FAVOR",
    cta_title: "Stop Finishing Your Workday With Burning, Tired Eyes.",
    cta_desc: "EyePause is launching very soon for macOS users. Drop your email to get notified the second v1.0 drops and join our limited early adopter circle.",
    cta_placeholder: "Enter your email address here...",
    cta_btn: "Join Early Access",

    footer_tagline: "Rest your eyes, preserve your focus. Crafted with care for macOS.",
    footer_contact_prefix: "Contact & Corporate:",
    footer_domain_note: "Official Website: eyepause.site • © 2026 EyePause. All rights reserved.",
    footer_col_nav: "Navigation",
    footer_col_compat: "Compatibility",
    footer_col_legal: "Legal & Security",
    footer_link_rule: "20-20-20 Rule",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_contact_link: "Support & Feedback",

    privacy_title: "Privacy Policy",
    terms_title: "Terms of Service",
    legal_last_updated: "Last Updated: October 11, 2026 • EyePause (eyepause.site)",
    privacy_body_html: `
      <h3>1. Zero Data Collection Guarantee</h3>
      <p>At EyePause, we hold user privacy in the highest regard. Neither the EyePause macOS native application nor the eyepause.site website tracks, collects, stores, or transmits your personal activity, screen content, or private files to external servers or third parties.</p>

      <h3>2. Microphone & Camera Permissions</h3>
      <p>EyePause <strong>never requests camera permissions</strong>. For meeting detection, it queries the CoreAudio low-level API solely for a hardware boolean indicating whether audio input streaming is currently active. Your audio is never recorded, captured, sampled, or transcribed.</p>

      <h3>3. Screen & Session Analytics</h3>
      <p>All break records, session timers, and user configurations are stored strictly on your local Mac disk. No telemetry or usage analytics leave your machine.</p>

      <h3>4. Early Access Waitlist</h3>
      <p>Email addresses voluntarily submitted via our landing page waitlist are used solely to send an exclusive invitation when EyePause v1.0 goes live. Your address is never sold, shared, or spammed, and you can unsubscribe at any time.</p>

      <h3>5. Contact</h3>
      <p>For any privacy inquiries or data concerns, reach out directly to our official inbox: <a href="mailto:info@eyepause.site" class="footer-mail">info@eyepause.site</a></p>
    `,
    terms_body_html: `
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing the eyepause.site website or downloading the EyePause macOS application, you agree to be bound by these Terms of Service.</p>

      <h3>2. Intellectual Property</h3>
      <p>The EyePause trademark, interface design, synthesized acoustics (528 Hz harmonic Tibetan chime), and proprietary algorithms are the exclusive property of EyePause. Unauthorized replication, redistribution, or reverse engineering is prohibited.</p>

      <h3>3. Medical & Ergonomic Disclaimer</h3>
      <p>EyePause provides ergonomic break pacing inspired by the American Academy of Ophthalmology (AAO) 20-20-20 rule. EyePause is not a medical device and does not offer clinical medical diagnoses. For chronic eye strain or vision issues, always consult a licensed ophthalmologist.</p>

      <h3>4. Limitation of Liability</h3>
      <p>EyePause is provided "as is" to foster healthier desk habits. To the maximum extent permitted by applicable law, EyePause shall not be liable for any indirect, incidental, or consequential damages.</p>

      <h3>5. Contact & Support</h3>
      <p>For inquiries regarding terms, licensing, or corporate inquiries: <a href="mailto:info@eyepause.site" class="footer-mail">info@eyepause.site</a></p>
    `,

    demo_overlay_title: "Look Away (20 Feet)",
    demo_overlay_sub: "Take a deep breath and gently focus on the furthest point across the room or out a window.",
    demo_overlay_bell: "🔔 Playing 528 Hz Tibetan Chime",
    demo_overlay_skip: "Finish Break Now (ESC)",

    feedback_invalid_email: "Please enter a valid email address.",
    feedback_success: "🎉 Congratulations! \"{email}\" has been added to the early access list. You'll be the first invited on launch day."
  }
};

let currentLang = 'tr';

// MARK: - 3. Presets Data for Both Languages
const presetsData = {
  tr: {
    balanced: {
      name: 'Balanced Mod (Dengeli)',
      desc: 'Amerikan Oftalmoloji standartlarına dayanan 20-20-20 kuralı. Günlük ofis temposunda göz kas spazmını engellerken odaklanmayı kesintisiz sürdürür.',
      work: '20 Dakika',
      short: '20 Saniye',
      long: 'İsteğe Bağlı',
      target: 'Günlük Çalışma & Yazışma',
      rhythm: [
        { type: 'work', flex: 20, label: '20m Odak' },
        { type: 'break', flex: 1, label: '20s' },
        { type: 'work', flex: 20, label: '20m Odak' },
        { type: 'break', flex: 1, label: '20s' }
      ]
    },
    deepFocus: {
      name: 'Deep Focus Mod (Derin Odak)',
      desc: 'Kodlama, mimari tasarım veya karmaşık analiz seansları için. 45 dakikalık akış (flow state) ardından 30 saniye göz molası ve her 3 seansta bir 5 dakikalık zihinsel tazelenme.',
      work: '45 Dakika',
      short: '30 Saniye',
      long: '5 Dakika (3 seansta bir)',
      target: 'Yazılımcılar & Tasarımcılar',
      rhythm: [
        { type: 'work', flex: 45, label: '45m Derin Odak' },
        { type: 'break', flex: 1.5, label: '30s' },
        { type: 'work', flex: 45, label: '45m Derin Odak' },
        { type: 'break', flex: 5, label: '5m Uzun Mola' }
      ]
    },
    eyeCare: {
      name: 'Eye Care Mod (Maksimum Göz Bakımı)',
      desc: 'Göz kuruluğu, lazer operasyonu sonrası veya kontakt lens kullananlar için sık mikro-dinlenme. 15 dakikada bir 15 saniye gözyaşı yenilenmesi.',
      work: '15 Dakika',
      short: '15 Saniye',
      long: '3 Dakika (4 seansta bir)',
      target: 'Kuru Göz & Hassas Gözler',
      rhythm: [
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 1, label: '15s' },
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 1, label: '15s' },
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 3, label: '3m' }
      ]
    },
    wellness: {
      name: 'Wellness Mod (Bütünsel Duruş & Esneme)',
      desc: '25 dakikalık çalışma sonrasında 45 saniyelik duruş düzeltme, derin nefes ve omuz germe egzersizleri içeren ergonomik mod.',
      work: '25 Dakika',
      short: '45 Saniye',
      long: '5 Dakika (2 seansta bir)',
      target: 'Boyun/Sırt Ağrısı Yaşayanlar',
      rhythm: [
        { type: 'work', flex: 25, label: '25m Odak' },
        { type: 'break', flex: 2, label: '45s Esneme' },
        { type: 'work', flex: 25, label: '25m Odak' },
        { type: 'break', flex: 5, label: '5m Yürüyüş' }
      ]
    }
  },
  en: {
    balanced: {
      name: 'Balanced Mode (Default)',
      desc: 'The classic 20-20-20 rule standard recommended by ophthalmologists. Relieves ciliary muscle spasm while sustaining seamless focus during daily office work.',
      work: '20 Minutes',
      short: '20 Seconds',
      long: 'Optional',
      target: 'General Office & Writing',
      rhythm: [
        { type: 'work', flex: 20, label: '20m Focus' },
        { type: 'break', flex: 1, label: '20s' },
        { type: 'work', flex: 20, label: '20m Focus' },
        { type: 'break', flex: 1, label: '20s' }
      ]
    },
    deepFocus: {
      name: 'Deep Focus Mode',
      desc: 'Crafted for coding, architecture, and intense analysis sprints. 45 minutes of uninterrupted flow state followed by a 30s micro-break, with 5m restoration every 3 cycles.',
      work: '45 Minutes',
      short: '30 Seconds',
      long: '5 Minutes (every 3 cycles)',
      target: 'Developers & Designers',
      rhythm: [
        { type: 'work', flex: 45, label: '45m Deep Flow' },
        { type: 'break', flex: 1.5, label: '30s' },
        { type: 'work', flex: 45, label: '45m Deep Flow' },
        { type: 'break', flex: 5, label: '5m Long Break' }
      ]
    },
    eyeCare: {
      name: 'Eye Care Mode (Maximum Relief)',
      desc: 'Frequent micro-relief designed for dry eyes, post-LASIK recovery, or contact lens wearers. 15-second tear film hydration every 15 minutes.',
      work: '15 Minutes',
      short: '15 Seconds',
      long: '3 Minutes (every 4 cycles)',
      target: 'Dry Eyes & High Sensitivity',
      rhythm: [
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 1, label: '15s' },
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 1, label: '15s' },
        { type: 'work', flex: 15, label: '15m' },
        { type: 'break', flex: 3, label: '3m' }
      ]
    },
    wellness: {
      name: 'Wellness Mode (Posture & Stretching)',
      desc: '25-minute work intervals combined with 45 seconds of posture recalibration, diaphragmatic breathing, and shoulder releases.',
      work: '25 Minutes',
      short: '45 Seconds',
      long: '5 Minutes (every 2 cycles)',
      target: 'Neck & Back Fatigue Sufferers',
      rhythm: [
        { type: 'work', flex: 25, label: '25m Focus' },
        { type: 'break', flex: 2, label: '45s Stretch' },
        { type: 'work', flex: 25, label: '25m Focus' },
        { type: 'break', flex: 5, label: '5m Walk' }
      ]
    }
  }
};

let currentPresetKey = 'balanced';

// MARK: - 4. Language Switcher Engine
function setLanguage(lang) {
  if (lang !== 'tr' && lang !== 'en') lang = 'tr';
  currentLang = lang;

  try {
    localStorage.setItem('eyepause_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang;

  // Toggle button styling
  const btnTR = document.getElementById('langBtnTR');
  const btnEN = document.getElementById('langBtnEN');
  if (btnTR && btnEN) {
    if (lang === 'tr') {
      btnTR.classList.add('active');
      btnEN.classList.remove('active');
    } else {
      btnEN.classList.add('active');
      btnTR.classList.remove('active');
    }
  }

  const dict = translations[lang];
  if (!dict) return;

  // Document title and meta
  if (dict.page_title) document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.meta_desc) metaDesc.setAttribute('content', dict.meta_desc);

  // Apply plain text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Apply HTML-formatted translations
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Apply placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Re-render open legal modals if any
  const privBody = document.getElementById('privacyModalBody');
  if (privBody) privBody.innerHTML = dict.privacy_body_html || '';
  const termsBody = document.getElementById('termsModalBody');
  if (termsBody) termsBody.innerHTML = dict.terms_body_html || '';

  // Re-render preset
  renderPreset(currentPresetKey);

  // Re-render calculator
  const slider = document.getElementById('hoursSlider');
  if (slider) {
    updateCalculator(slider.value);
  }
}

// MARK: - 5. Interactive Break Demo Modal
let breakInterval = null;

function triggerBreakDemo() {
  const overlay = document.getElementById('breakOverlayDemo');
  const countSpan = document.getElementById('demoOverlaySeconds');
  if (!overlay || !countSpan) return;

  chime.playTibetanBowl();

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');

  let remaining = 5;
  countSpan.textContent = remaining;

  if (breakInterval) clearInterval(breakInterval);

  breakInterval = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      countSpan.textContent = remaining;
    } else {
      clearInterval(breakInterval);
      breakInterval = null;
      countSpan.textContent = "✓";
      setTimeout(() => {
        closeBreakDemo();
      }, 700);
    }
  }, 1000);
}

function closeBreakDemo() {
  const overlay = document.getElementById('breakOverlayDemo');
  if (!overlay) return;

  if (breakInterval) {
    clearInterval(breakInterval);
    breakInterval = null;
  }

  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
}

// MARK: - 5.1. Legal Modals (Privacy & Terms)
function openLegalModal(type) {
  const modal = document.getElementById(type === 'privacy' ? 'privacyModal' : 'termsModal');
  const bodyEl = document.getElementById(type === 'privacy' ? 'privacyModalBody' : 'termsModalBody');
  const dict = translations[currentLang] || translations.tr;

  if (bodyEl) {
    bodyEl.innerHTML = type === 'privacy' ? dict.privacy_body_html : dict.terms_body_html;
  }

  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeLegalModal(type) {
  const modal = document.getElementById(type === 'privacy' ? 'privacyModal' : 'termsModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBreakDemo();
    closeLegalModal('privacy');
    closeLegalModal('terms');
  }
});

// MARK: - 6. Interactive Hero Menu Bar & Popover
let popoverOpen = true;

function togglePopover() {
  const popover = document.getElementById('heroPopover');
  if (!popover) return;
  popoverOpen = !popoverOpen;
  popover.style.display = popoverOpen ? 'block' : 'none';
}

function snoozeDemo(minutes) {
  const timer = document.getElementById('demoTimer');
  const livePill = document.getElementById('livePillTimer');
  if (timer) timer.textContent = `+${minutes}m`;
  if (livePill) livePill.textContent = `+${minutes}m`;

  setTimeout(() => {
    if (timer) timer.textContent = '18:42';
    if (livePill) livePill.textContent = '18:42';
  }, 2500);
}

// Live timer ticking mockup
let mockSeconds = 18 * 60 + 42;
setInterval(() => {
  mockSeconds--;
  if (mockSeconds <= 0) mockSeconds = 20 * 60;
  const m = Math.floor(mockSeconds / 60);
  const s = mockSeconds % 60;
  const str = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const demoTimer = document.getElementById('demoTimer');
  const pillTimer = document.getElementById('livePillTimer');
  if (demoTimer && demoTimer.textContent !== '+1m' && demoTimer.textContent !== '+5m' && demoTimer.textContent !== '+15m') {
    demoTimer.textContent = str;
  }
  if (pillTimer && pillTimer.textContent !== '+1m' && pillTimer.textContent !== '+5m' && pillTimer.textContent !== '+15m') {
    pillTimer.textContent = str;
  }
}, 1000);

// MARK: - 7. Preset Modes
function selectPreset(key) {
  currentPresetKey = key;

  // Update tabs
  document.querySelectorAll('.preset-tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });
  if (window.event && window.event.currentTarget) {
    window.event.currentTarget.classList.add('active');
    window.event.currentTarget.setAttribute('aria-selected', 'true');
  }

  renderPreset(key);
}

function renderPreset(key) {
  const langData = presetsData[currentLang] || presetsData.tr;
  const data = langData[key] || langData.balanced;
  if (!data) return;

  const nameEl = document.getElementById('presetName');
  const descEl = document.getElementById('presetDesc');
  const workEl = document.getElementById('presetWork');
  const shortEl = document.getElementById('presetShort');
  const longEl = document.getElementById('presetLong');
  const targetEl = document.getElementById('presetTarget');

  if (nameEl) nameEl.textContent = data.name;
  if (descEl) descEl.textContent = data.desc;
  if (workEl) workEl.textContent = data.work;
  if (shortEl) shortEl.textContent = data.short;
  if (longEl) longEl.textContent = data.long;
  if (targetEl) targetEl.textContent = data.target;

  // Visual rhythm chart
  const chart = document.querySelector('.rhythm-bar-chart');
  if (chart) {
    chart.innerHTML = data.rhythm.map(seg => `
      <div class="rhythm-segment ${seg.type}" style="flex: ${seg.flex};">
        <span>${seg.label}</span>
      </div>
    `).join('');
  }
}

// MARK: - 8. Interactive Screen Strain Calculator
function updateCalculator(hours) {
  hours = parseInt(hours, 10);
  const display = document.getElementById('calcHoursDisplay');
  if (display) display.textContent = hours;

  // In normal state: 18 blinks/min. On screen: 6 blinks/min. Loss = 12 blinks/min = 720 blinks/hour.
  const blinkLoss = Math.round(hours * 720);
  const breaksWon = Math.round(hours * 3);
  const score = Math.max(88, Math.min(99, 100 - Math.round(hours * 0.4)));

  const blinkEl = document.getElementById('calcBlinkLoss');
  const breaksEl = document.getElementById('calcBreaksWon');
  const scoreEl = document.getElementById('calcScoreEst');

  const locale = currentLang === 'tr' ? 'tr-TR' : 'en-US';
  const breaksUnit = currentLang === 'tr' ? 'Mola' : 'Breaks';

  if (blinkEl) blinkEl.textContent = `~${blinkLoss.toLocaleString(locale)}`;
  if (breaksEl) breaksEl.textContent = `${breaksWon} ${breaksUnit}`;
  if (scoreEl) scoreEl.textContent = `${score} / 100`;
}

// MARK: - 9. Waitlist Form Submission Handler
function handleWaitlistSubmit(event, formId) {
  event.preventDefault();

  const emailInput = formId === 'hero' ? document.getElementById('heroEmail') : document.getElementById('finalEmail');
  const feedback = formId === 'hero' ? document.getElementById('heroFeedback') : document.getElementById('finalFeedback');
  const email = emailInput ? emailInput.value.trim() : '';
  const dict = translations[currentLang] || translations.tr;

  if (!email || !email.includes('@')) {
    feedback.textContent = dict.feedback_invalid_email || 'Lütfen geçerli bir e-posta adresi girin.';
    feedback.className = 'form-feedback error';
    return;
  }

  // Store in localStorage as simulated early access list
  try {
    const list = JSON.parse(localStorage.getItem('eyepause_waitlist') || '[]');
    list.push({ email, lang: currentLang, timestamp: new Date().toISOString() });
    localStorage.setItem('eyepause_waitlist', JSON.stringify(list));
  } catch (e) {}

  const successTemplate = dict.feedback_success || '🎉 Tebrikler! "{email}" listeye eklendi.';
  feedback.textContent = successTemplate.replace('{email}', email);
  feedback.className = 'form-feedback success';

  emailInput.value = '';
  chime.playTibetanBowl();
}

// MARK: - 10. Initialization
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = null;
  try {
    savedLang = localStorage.getItem('eyepause_lang');
  } catch (e) {}

  if (!savedLang) {
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    savedLang = browserLang.startsWith('tr') ? 'tr' : 'en';
  }

  setLanguage(savedLang);
});
