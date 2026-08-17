/**
 * BASSEM SOLIMAN / FOOTBALL PERFORMANCE COACH
 * Bilingual (Arabic / English) Application Logic & Dynamic i18n System
 */

// Translation Dictionary (Arabic Default & English Dual)
const translations = {
  ar: {
    nav_logo_sub: "أداء وتدريب كرة القدم",
    nav_home: "الرئيسية",
    nav_about: "عن الكابتن",
    nav_coaching: "البرامج",
    nav_services: "الخدمات",
    nav_results: "تطور اللاعبين",
    nav_method: "المنهج",
    nav_testimonials: "آراء اللاعبين",
    nav_book: "احجز تدريبك ←",
    lang_toggle: "EN",
    
    hero_eyebrow: "أداء رياضي • سرعة ورشاقة • إعداد بدني لكرة القدم",
    hero_h1_1: "تدرب بذكاء. تحرك أسرع.",
    hero_h1_2: "العب أفضل.",
    hero_sub: "تدريب متخصص في كرة القدم لتطوير الأداء، السرعة، القوة، والرشاقة وزيادة الثقة والأداء البدني داخل الملعب.",
    hero_cta_primary: "ابدأ التدريب",
    hero_cta_secondary: "استكشف البرامج ↓",
    hero_badge_1_num: "+300 لاعب",
    hero_badge_1_text: "تم تطوير أداؤهم البدني",
    hero_badge_2_num: "+10 سنوات",
    hero_badge_2_text: "خبرة في تدريب لاعبي الكرة",
    hero_card_name: "باسم سليمان",
    hero_card_role: "مدرب أداء وتطوير بدني لكرة القدم",
    hero_card_quote: "تطوير أداء لاعب كرة القدم بيعتمد على تحويل القوة العضلية لسرعة انفجارية وتسارع يفرق في الملعب.",
    hero_card_slots_label: "اشتراكات التدريب والتطوير",
    hero_card_slots_count: "متبقي 4 أماكن هذا الشهر",

    stat_1_label: "لاعب تم تطويرهم",
    stat_1_sub: "في الأكاديميات والأندية",
    stat_2_label: "سنوات خبرة",
    stat_2_sub: "أنظمة إعداد بدني متخصصة",
    stat_3_label: "تحسن السرعة والرشاقة",
    stat_3_sub: "معدلات تسارع وقتالية أفضل",
    stat_4_label: "مركز في الملعب",
    stat_4_sub: "تخصيص متكامل لكل مركز",

    about_eyebrow: "عن الكابتن",
    about_h2_1: "كرة القدم الحديثة تتطلب",
    about_h2_2: "سرعة، قوة، ورشاقة استثنائية.",
    about_p1: "التدريب التقليدي في الجيم مش دايماً بينعكس على الملعب. لاعب الكرة محتاج سرعة خطوة أولى، قدرة عالية على تغيير الاتجاه، وانفجارية في الالتحامات البدنية بدون التضحية باللياقة طوال الـ 90 دقيقة.",
    about_p2: "على مدار أكثر من 10 سنوات، قمت بتطوير أنظمة تدريب مخصصة للاعبي كرة القدم بمختلف أعمارهم ومراكزهم، تركز على رفع مستوى الكفاءة الحركية، وقاية اللاعب من الإصابات، وتطوير الجوانب البدنية التي تصنع الفارق في المباريات الحاسمة.",
    about_quote: "هدفنا مش بس تمرين شاق، هدفنا تمرين ذكي بينعكس فوراً على أدائك وثقتك في أرض الملعب.",
    about_sig: "— باسم سليمان",
    about_b1: "بروتوكولات بدنية مخصصة لكرة القدم",
    about_b2: "تطوير التسارع والسرعة الانفجارية",
    about_b3: "تقوية العضلات والوقاية من الإصابات",
    about_b4: "تدريب مخصص حسب مراكز اللاعبين",

    prog_eyebrow: "برامج التدريب والتطوير",
    prog_h2: "برامج مخصصة لأبطال الملعب.",
    prog_sub: "كل برنامج يتم تصميمه وتطويره بناءً على احتياجات اللاعب، مركره، ومستواه البدني.",
    prog1_tier: "المستوى 01",
    prog1_title: "أداء كرة القدم الشامل",
    prog1_desc: "تطوير القوة البدنية، السرعة، والتحمل العام ليصبح اللاعب أكثر جاهزية وهيمنة في أرض الملعب.",
    prog1_b1: "إعداد بدني مخصص لمتطلبات كرة القدم",
    prog1_b2: "تطوير القوة الانفجارية والالتحامات",
    prog1_b3: "رفع اللياقة والتحمل لـ 90 دقيقة",
    prog1_b4: "متابعة أسبوعية وتقييم القياسات البدنية",
    prog1_b5: "تواصل مباشر وتوجيه مستمر",
    prog1_cta: "قدّم الآن",
    prog2_tier: "المستوى 02",
    prog2_title: "السرعة والرشاقة الانفجارية",
    prog2_desc: "برنامج مكثف مخصص لزيادة السرعة الأولى، تسارع الـ 10 و 30 متر، وسرعة تغيير الاتجاه.",
    prog2_b1: "تمارين سلم الرشاقة والأقماع التخصصية",
    prog2_b2: "تطوير ميكانيكية الجري والخطوة الأولى",
    prog2_b3: "تمارين البلايومتريك للقوة الانفجارية",
    prog2_b4: "تحسين زمن الاستجابة ورد الفعل",
    prog2_b5: "تقارير تحسن الأداء والسرعة",
    prog2_cta: "استكشف البرنامج",
    prog3_tier: "المستوى 03",
    prog3_title: "القوة والإعداد البدني",
    prog3_desc: "بناء القوة العضلية الخاصة بلاعبي الكرة مع تقوية الركبة والكاحل لحماية اللاعب من الإصابات.",
    prog3_b1: "تمارين قوة صممت خصيصاً للاعبي الكرة",
    prog3_b2: "تقوية العضلات الخلفية والمفاصل",
    prog3_b3: "برنامج وقاية من إصابات الرباط والصليبي",
    prog3_b4: "استراتيجيات التغذية والاستشفاء الرياضي",
    prog3_b5: "دعم ومتابعة أونلاين 1:1",
    prog3_cta: "انضم للبرنامج",

    services_eyebrow: "تخصصات التدريب",
    services_h2: "الخدمات الرئيسية",
    services_sub: "حلول تدريب بدني شاملة لتطوير اللاعبين في جميع المراكز.",

    res_eyebrow: "تطور اللاعبين",
    res_h2: "النتائج تحدث في الملعب.",
    res_filter_all: "الكل",
    res_filter_speed: "السرعة والتسارع",
    res_filter_power: "القوة والالتحام",
    res_filter_stamina: "اللياقة والبدني",

    case_eyebrow: "قصة تطوير / 01",
    case_h2: "تطوير أداء كريم (جناح أيسر)",
    case_before_lbl: "تسارع 30م قبل",
    case_after_lbl: "بعد التدريب",
    case_dur_lbl: "المدة",
    case_desc: "كريم كان بيواجه صعوبة في التفوق البدني في الدقائق الأخيرة من المباريات وصعوبة في تغيير الاتجاه المفاجئ. بعد 12 أسبوعًا من التدريب المتخصص في السرعة والرشاقة، تحسن زمن تسارعه بفارق 0.4 ثانية مع زيادة ملحوظة في قوة الالتحامات.",
    case_cta: "اقرأ قصة النجاح ←",

    method_eyebrow: "منظومة العمل",
    method_h2: "منهجية التدريب",
    method_sub: "أربعة مراحل مدروسة لبناء لاعب كرة قدم قوي، أسرع، وأكثر جاهزية.",
    method_s1_t: "التقييم البدني",
    method_s1_d: "فحص الحركة، اختبارات السرعة، وتحليل متطلبات مركز اللاعب.",
    method_s2_t: "تصميم الخطة",
    method_s2_d: "بناء برنامج مخصص يجمع بين السرعة، الرشاقة، والقوة العضلية.",
    method_s3_t: "التدريب الميداني",
    method_s3_d: "تنفيذ الوحدات التدريبية في الملعب والجيم بأعلى درجات التركيز.",
    method_s4_t: "القياس والتطور",
    method_s4_d: "متابعة التحسن في المباريات وتطوير الأرقام البدنية باستمرار.",

    test_eyebrow: "آراء اللاعبين",
    test_h2: "ثقة حقيقية.<br />أداء يتكلم.",
    t1_quote: "أكبر فرق لاحظته بعد التمرين مع كابتن باسم هو زيادة سرعتي في أول خطوة وثقتي الكبيرة في الالتحامات خلال المباريات الرسمية.",
    t1_name: "زياد طارق",
    t1_role: "لاعب وسط • تطوير السرعة",
    t2_quote: "التمرين أثر بشكل مباشر على لياقتي. بقيت أقدر أجري بنفس الكفاءة في الدقيقة 90 بدون هبوط في المستوى البدني.",
    t2_name: "أحمد حسام",
    t2_role: "جناح هجومي • أداء بدني",
    t3_quote: "كولي أمر، شفت تطور ممتاز في التزام ابني وحركته في الملعب. كابتن باسم بيشتغل باحترافية عالية واهتمام بكل التفاصيل.",
    t3_name: "م. طارق المحمدي",
    t3_role: "ولي أمر لاعب ناشئ",

    social_eyebrow: "محتوى التدريب",
    social_h2: "شاهد التمارين والأداء.",
    social_cta: "تابعنا على Instagram ←",

    book_eyebrow: "حجز جلسة تدريب",
    book_h2: "جاهز ترتقي بمستواك؟",
    book_sub: "اختر هدفك ورسالتك وسنقوم بالتواصل معك لتحديد موعد الاختبار وتقييم الأداء البدني.",
    book_step1_t: "الخطوة 1: اختار هدفك الرئيسي",
    book_step1_d: "اختر الجانب البدني الذي تريد تطويره بأعلى أولوية.",
    book_g1_t: "السرعة والرشاقة",
    book_g1_d: "زيادة سرعة الانطلاق، التسارع، وسرعة تغيير الاتجاه.",
    book_g2_t: "القوة والانفجارية",
    book_g2_d: "زيادة قوة القفز والتسديد والسيطرة في الالتحامات البدنية.",
    book_g3_t: "اللياقة والبدني 90 دقيقة",
    book_g3_d: "رفع معدلات الاستمرارية وتحمل المباريات الكثيفة.",
    book_g4_t: "تطوير أداء مخصص للمركز",
    book_g4_d: "برنامج متكامل مصمم خصيصاً لمركزك في الملعب.",
    book_step2_t: "الخطوة 2: نوع التدريب المطلوب",
    book_step2_d: "اختر نظام التدريب المناسب لك.",
    book_c1_t: "جلسة تقييم بدني وااختبار سرعة — 30 دقيقة",
    book_c1_d: "جلسة تقييم ميدانية وتحديد نقاط القوة والاحتياجات البدنية مع كابتن باسم سليمان.",
    book_step3_t: "الخطوة 3: البيانات الشخصية والمركز",
    book_step3_d: "يرجى ملء بياناتك لمراجعة طلبك وإعداد ملف التقييم.",
    book_lbl_name: "اسم اللاعب بالكامل *",
    book_lbl_email: "البريد الإلكتروني *",
    book_lbl_phone: "رقم الواتساب للتواصل *",
    book_lbl_age: "العمر *",
    book_lbl_position: "المركز في الملعب",
    book_lbl_level: "المستوى الحالي",
    book_lbl_notes: "ما هو أكثر جانب ترغب في تطويره حالياً؟",
    book_btn_submit: "احجز جلسة التقييم",
    book_succ_h3: "تم استلام طلبك بنجاح!",
    book_succ_p: "شكراً لك. سنقوم بمراجعة بياناتك والتواصل معك عبر الواتساب خلال ساعات لتأكيد موعد جلسة التقييم.",
    book_succ_wa: "تواصل مباشر مع كابتن باسم عبر الواتساب",

    faq_eyebrow: "الأسئلة الشائعة",
    faq_h2: "الأسئلة الشائعة",

    final_eyebrow: "احجز مكانك في التدريب",
    final_h2_1: "مستواك القادم في الملعب",
    final_h2_2: "يبدأ الآن.",
    final_sub: "توقف عن التردد. طور سرعتك وقوتك البدنية واحصل على الأفضلية التي تجعلك تتألق في كل مباراة.",
    final_cta_primary: "احجز تدريبك الآن",
    final_cta_secondary: "تحدث عبر الواتساب",

    footer_tagline: "برامج تدريب وإعداد بدني مخصصة للاعبي كرة القدم.",
    footer_copy: "© 2026 باسم سليمان / مدرب أداء كرة القدم. جميع الحقوق محفوظة.",
    wa_default_msg: "مرحبًا كابتن باسم، حابب أعرف أكتر عن برامج تدريب وتطوير أداء كرة القدم."
  },
  en: {
    nav_logo_sub: "Football Performance & Training",
    nav_home: "Home",
    nav_about: "About",
    nav_coaching: "Programs",
    nav_services: "Services",
    nav_results: "Player Progress",
    nav_method: "Method",
    nav_testimonials: "Testimonials",
    nav_book: "START TRAINING →",
    lang_toggle: "العربية",

    hero_eyebrow: "FOOTBALL PERFORMANCE / SPEED & AGILITY / STRENGTH & CONDITIONING",
    hero_h1_1: "TRAIN SMARTER. MOVE FASTER.",
    hero_h1_2: "PLAY BETTER.",
    hero_sub: "Football-focused training built to develop stronger, faster and more confident players on the pitch.",
    hero_cta_primary: "START TRAINING",
    hero_cta_secondary: "EXPLORE PROGRAMS ↓",
    hero_badge_1_num: "300+ PLAYERS",
    hero_badge_1_text: "Performance Developed",
    hero_badge_2_num: "10+ YEARS",
    hero_badge_2_text: "Football Fitness Experience",
    hero_card_name: "Bassem Soliman",
    hero_card_role: "Football Performance Coach",
    hero_card_quote: "Developing a football player comes down to converting strength into explosive pitch speed.",
    hero_card_slots_label: "Training & Performance Slots",
    hero_card_slots_count: "4 Spots Open This Month",

    stat_1_label: "PLAYERS DEVELOPED",
    stat_1_sub: "Across Academies & Clubs",
    stat_2_label: "YEARS EXPERIENCE",
    stat_2_sub: "Specialized Football Conditioning",
    stat_3_label: "SPEED & AGILITY GAINS",
    stat_3_sub: "Faster Acceleration & Mobility",
    stat_4_label: "PITCH POSITIONS",
    stat_4_sub: "Full Position Specialization",

    about_eyebrow: "THE COACH",
    about_h2_1: "MODERN FOOTBALL DEMANDS",
    about_h2_2: "SPEED, POWER & AGILITY.",
    about_p1: "Standard gym workouts don't automatically transfer to the pitch. Football players need explosive first-step acceleration, rapid change of direction, and physical duel strength without gassing out over 90 minutes.",
    about_p2: "For over 10 years, I've developed specialized performance systems tailored for football players across positions and age levels—focusing on movement mechanics, injury prevention, and game-changing physical qualities.",
    about_quote: "Our goal isn't just working hard—it's training smart so every drill translates directly to match day confidence.",
    about_sig: "— Bassem Soliman",
    about_b1: "Football-Specific Science",
    about_b2: "Acceleration & Explosive Speed",
    about_b3: "Lower Body Power & Injury Resilience",
    about_b4: "Position-Specific Skill Integration",

    prog_eyebrow: "TRAINING PROGRAMS",
    prog_h2: "PROGRAMS BUILT FOR THE PITCH.",
    prog_sub: "No generic workout routines. Every program is built around the player's position, physical goals, and current fitness level.",
    prog1_tier: "TIER 01",
    prog1_title: "FOOTBALL PERFORMANCE",
    prog1_desc: "Develop overall speed, strength, movement mechanics, and physical resilience to dominate every match.",
    prog1_b1: "Football-Specific Physical Conditioning",
    prog1_b2: "Explosive Duel & Contact Strength",
    prog1_b3: "90-Minute Match Stamina & Aerobic Base",
    prog1_b4: "Weekly Performance Metrics & Testing",
    prog1_b5: "Direct Coach Feedback & Support",
    prog1_cta: "APPLY NOW",
    prog2_tier: "TIER 02",
    prog2_title: "SPEED & AGILITY",
    prog2_desc: "Intensive training focused on first-step acceleration, 10m/30m sprint mechanics, and sharp change of direction.",
    prog2_b1: "Agility Ladder & Cone Reaction Drills",
    prog2_b2: "Sprint Kinematics & First-Step Drive",
    prog2_b3: "Plyometric Explosiveness Protocols",
    prog2_b4: "Reaction Time & Cognitive Speed",
    prog2_b5: "Speed Gains Tracking Reports",
    prog2_cta: "VIEW PROGRAM",
    prog3_tier: "TIER 03",
    prog3_title: "STRENGTH & CONDITIONING",
    prog3_desc: "Build football-specific muscular power while strengthening knees and ankles for ultimate injury prevention.",
    prog3_b1: "Soccer-Tailored Hypertrophy & Power",
    prog3_b2: "Posterior Chain & Joint Fortification",
    prog3_b3: "ACL & Hamstring Protection Protocol",
    prog3_b4: "Sports Nutrition & Recovery Guidelines",
    prog3_b5: "1:1 Online & Field Performance Access",
    prog3_cta: "JOIN PROGRAM",

    services_eyebrow: "COACHING SERVICES",
    services_h2: "CORE SERVICES",
    services_sub: "Comprehensive physical development solutions for football players of all levels.",

    res_eyebrow: "PLAYER PROGRESS",
    res_h2: "THE PROOF IS ON THE PITCH.",
    res_filter_all: "All",
    res_filter_speed: "Speed & Acceleration",
    res_filter_power: "Strength & Power",
    res_filter_stamina: "Match Stamina",

    case_eyebrow: "FEATURED PROGRESS / 01",
    case_h2: "KARIM'S PROGRESS (LEFT WINGER)",
    case_before_lbl: "30m Sprint Before",
    case_after_lbl: "After Training",
    case_dur_lbl: "Duration",
    case_desc: "Karim struggled with late-game fatigue and rapid directional changes against aggressive defenders. After 12 weeks of targeted speed & agility work, he chopped 0.4s off his sprint time while increasing physical duel win rate.",
    case_cta: "READ CASE STUDY →",

    method_eyebrow: "THE PROCESS",
    method_h2: "TRAINING METHODOLOGY",
    method_sub: "A structured four-stage framework designed to build faster, stronger, and more resilient football players.",
    method_s1_t: "ASSESS",
    method_s1_d: "Evaluate movement baseline, speed testing, and position requirements.",
    method_s2_t: "BUILD",
    method_s2_d: "Construct a custom performance plan integrating speed, agility, and strength.",
    method_s3_t: "TRAIN",
    method_s3_d: "Execute pitch and gym sessions with precision and high energy.",
    method_s4_t: "PROGRESS",
    method_s4_d: "Track match performance improvements and continuously adapt training.",

    test_eyebrow: "TESTIMONIALS",
    test_h2: "REAL PLAYERS.<br />REAL PERFORMANCE.",
    t1_quote: "The biggest difference was how much faster my first step became and how confident I felt physically during 1v1 duels in official matches.",
    t1_name: "Ziad Tarek",
    t1_role: "Midfielder • Speed Development",
    t2_quote: "The training helped me become faster and much more comfortable changing direction at top speed. I still sprint hard in the 90th minute.",
    t2_name: "Ahmed Hossam",
    t2_role: "Winger • Pitch Conditioning",
    t3_quote: "As a parent, seeing my son's physical evolution and field confidence under Coach Bassem has been outstanding. Pure professionalism.",
    t3_name: "Eng. Tarek El-Mohamady",
    t3_role: "Youth Player Parent",

    social_eyebrow: "TRAINING FEED",
    social_h2: "WATCH THE DRILLS.",
    social_cta: "FOLLOW ON INSTAGRAM →",

    book_eyebrow: "BOOK A SESSION",
    book_h2: "READY TO ELEVATE YOUR GAME?",
    book_sub: "Tell us your goals and position, and we will schedule your physical assessment session with Coach Bassem.",
    book_step1_t: "Step 1: Select Your Primary Focus",
    book_step1_d: "Choose the physical quality you are most committed to developing.",
    book_g1_t: "Speed & Agility",
    book_g1_d: "Improve acceleration, first step drive, and sharp directional changes.",
    book_g2_t: "Strength & Power",
    book_g2_d: "Build explosive jumping, shooting power, and duel dominance.",
    book_g3_t: "90-Minute Match Stamina",
    book_g3_d: "Elevate high-intensity endurance and repeatable sprint ability.",
    book_g4_t: "Position Development",
    book_g4_d: "Full physical program customized for your specific pitch position.",
    book_step2_t: "Step 2: Training Format",
    book_step2_d: "Select your preferred coaching option.",
    book_c1_t: "30-Min Field Physical Assessment",
    book_c1_d: "Direct speed & movement evaluation session with Coach Bassem Soliman.",
    book_step3_t: "Step 3: Player Details",
    book_step3_d: "Please fill out your details so we can review your application.",
    book_lbl_name: "Full Player Name *",
    book_lbl_email: "Email Address *",
    book_lbl_phone: "WhatsApp Number *",
    book_lbl_age: "Age *",
    book_lbl_position: "Pitch Position",
    book_lbl_level: "Current Level",
    book_lbl_notes: "What is your main physical challenge right now?",
    book_btn_submit: "BOOK ASSESSMENT SESSION",
    book_succ_h3: "APPLICATION RECEIVED!",
    book_succ_p: "Thank you. We have logged your application and will contact you via WhatsApp within hours to confirm your assessment date.",
    book_succ_wa: "CONNECT DIRECTLY ON WHATSAPP",

    faq_eyebrow: "FAQ",
    faq_h2: "FREQUENTLY ASKED QUESTIONS",

    final_eyebrow: "RESERVE YOUR SPOT",
    final_h2_1: "YOUR NEXT PITCH LEVEL",
    final_h2_2: "STARTS HERE.",
    final_sub: "Stop hesitating. Develop the speed, power, and physical edge that make you stand out in every match.",
    final_cta_primary: "BOOK YOUR SESSION NOW",
    final_cta_secondary: "TALK ON WHATSAPP",

    footer_tagline: "Specialized Football Performance & Conditioning Coaching.",
    footer_copy: "© 2026 BASSEM SOLIMAN / FOOTBALL PERFORMANCE COACH. All rights reserved.",
    wa_default_msg: "Hi Coach Bassem, I'd like to learn more about your Football Performance training programs."
  }
};

// Global Current Language State (Default: Arabic)
let currentLang = localStorage.getItem('bassem_foot_lang') || 'ar';

document.addEventListener('DOMContentLoaded', () => {
  // Apply initial language state
  applyLanguage(currentLang);

  // Initialize interactive components
  initCustomCursor();
  initNavigation();
  initScrollReveals();
  initStatCounters();
  initTransformationFilter();
  initTransformationModal();
  initBookingWizard();
  initFAQAccordion();
  initSmoothScrollLinks();
  initWhatsAppCTAs();
  initLanguageSwitchers();
});

/* ==========================================================================
   DYNAMIC I18N LANGUAGE ENGINE
   ========================================================================== */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bassem_foot_lang', lang);

  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  const dict = translations[lang];
  if (!dict) return;

  // Translate all DOM elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Toggle directional classes on arrow elements
  document.querySelectorAll('.flip-on-rtl').forEach(el => {
    if (isAr) {
      el.classList.add('rtl-flip');
    } else {
      el.classList.remove('rtl-flip');
    }
  });
}

function initLanguageSwitchers() {
  const switchBtns = document.querySelectorAll('.lang-toggle-btn');
  switchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(nextLang);
      showToast(nextLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language switched to English');
    });
  });
}

/* ==========================================================================
   CUSTOM DESKTOP CURSOR
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorDot = document.getElementById('custom-cursor-dot');
  
  if (!cursor || !cursorDot || window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .option-card, .faq-item, .transformation-card');
  hoverTargets.forEach((target) => {
    target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    target.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ==========================================================================
   NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const nav = document.getElementById('main-nav');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => closeMobileMenu());
    });
  }

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => mobileMenu.classList.add('open'), 10);
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    document.body.style.overflow = '';
    mobileMenuBtn.innerHTML = `<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
  }
}

/* ==========================================================================
   SCROLL REVEALS
   ========================================================================== */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-init');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/* ==========================================================================
   STAT COUNTERS ANIMATION
   ========================================================================== */
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-counter');
  let animated = false;

  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          const prefix = counter.getAttribute('data-prefix') || '';
          const duration = 2000;
          const steps = 60;
          const stepValue = target / steps;
          let current = 0;
          let countStep = 0;

          const timer = setInterval(() => {
            countStep++;
            current += stepValue;
            if (countStep >= steps) {
              counter.textContent = `${prefix}${target}${suffix}`;
              clearInterval(timer);
            } else {
              counter.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            }
          }, duration / steps);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/* ==========================================================================
   TRANSFORMATIONS / PLAYER PROGRESS FILTER
   ========================================================================== */
function initTransformationFilter() {
  const filterBtns = document.querySelectorAll('.transform-filter-btn');
  const cards = document.querySelectorAll('.transformation-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-accent', 'text-black', 'font-bold');
        b.classList.add('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
      });

      btn.classList.add('bg-brand-accent', 'text-black', 'font-bold');
      btn.classList.remove('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   PLAYER PROGRESS DETAIL MODAL
   ========================================================================== */
function initTransformationModal() {
  const modal = document.getElementById('transformation-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const cards = document.querySelectorAll('.transformation-card');

  if (!modal || !cards.length) return;

  const modalImg = document.getElementById('modal-img');
  const modalName = document.getElementById('modal-name');
  const modalGoal = document.getElementById('modal-goal');
  const modalResult = document.getElementById('modal-result');
  const modalDuration = document.getElementById('modal-duration');
  const modalQuote = document.getElementById('modal-quote');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const isAr = currentLang === 'ar';
      const name = isAr ? card.getAttribute('data-name-ar') : card.getAttribute('data-name');
      const goal = isAr ? card.getAttribute('data-goal-ar') : card.getAttribute('data-goal');
      const result = isAr ? card.getAttribute('data-result-ar') : card.getAttribute('data-result');
      const duration = isAr ? card.getAttribute('data-duration-ar') : card.getAttribute('data-duration');
      const quote = isAr ? card.getAttribute('data-quote-ar') : card.getAttribute('data-quote');
      const img = card.querySelector('img').src;

      modalImg.src = img;
      modalName.textContent = name;
      modalGoal.textContent = goal;
      modalResult.textContent = result;
      modalDuration.textContent = duration;
      modalQuote.textContent = quote;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   MULTI-STEP FOOTBALL BOOKING WIZARD
   ========================================================================== */
function initBookingWizard() {
  let currentStep = 1;
  const totalSteps = 3;

  const goalCards = document.querySelectorAll('.goal-option-card');
  const consultationCards = document.querySelectorAll('.consultation-option-card');
  const nextBtn1 = document.getElementById('wizard-next-1');
  const nextBtn2 = document.getElementById('wizard-next-2');
  const prevBtn2 = document.getElementById('wizard-prev-2');
  const prevBtn3 = document.getElementById('wizard-prev-3');
  const bookingForm = document.getElementById('booking-form');

  const selectedGoalInput = document.getElementById('selected-goal');
  const selectedConsultationInput = document.getElementById('selected-consultation');

  goalCards.forEach(card => {
    card.addEventListener('click', () => {
      goalCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const val = card.getAttribute('data-value');
      selectedGoalInput.value = val;
      if (nextBtn1) nextBtn1.disabled = false;
    });
  });

  consultationCards.forEach(card => {
    card.addEventListener('click', () => {
      consultationCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const val = card.getAttribute('data-value');
      selectedConsultationInput.value = val;
      if (nextBtn2) nextBtn2.disabled = false;
    });
  });

  if (nextBtn1) {
    nextBtn1.addEventListener('click', () => {
      if (!selectedGoalInput.value) {
        showToast(currentLang === 'ar' ? 'يرجى اختيار هدفك الرئيسي أولاً.' : 'Please select your primary performance goal.');
        return;
      }
      goToStep(2);
    });
  }

  if (prevBtn2) prevBtn2.addEventListener('click', () => goToStep(1));

  if (nextBtn2) {
    nextBtn2.addEventListener('click', () => {
      if (!selectedConsultationInput.value) {
        showToast(currentLang === 'ar' ? 'يرجى اختيار نوع التدريب.' : 'Please select your training preference.');
        return;
      }
      goToStep(3);
    });
  }

  if (prevBtn3) prevBtn3.addEventListener('click', () => goToStep(2));

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name').value.trim();
      const email = document.getElementById('client-email').value.trim();
      const phone = document.getElementById('client-phone').value.trim();
      const age = document.getElementById('client-age') ? document.getElementById('client-age').value.trim() : '';
      const position = document.getElementById('client-position') ? document.getElementById('client-position').value : '';

      if (!name || !email || !phone) {
        showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.');
        return;
      }

      const submitBtn = document.getElementById('submit-booking-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = currentLang === 'ar' ? 'جاري تسجيل البيانات...' : 'Submitting Details...';

      setTimeout(() => {
        document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
        const successStep = document.getElementById('wizard-step-success');
        successStep.classList.add('active');

        document.getElementById('summary-name').textContent = name;
        if (document.getElementById('summary-goal')) {
          document.getElementById('summary-goal').textContent = selectedGoalInput.value;
        }
        document.getElementById('summary-phone').textContent = phone;

        // Custom prefilled WhatsApp message for success button
        const waSuccessBtn = document.querySelector('#wizard-step-success .whatsapp-trigger');
        if (waSuccessBtn) {
          const msg = currentLang === 'ar'
            ? `مرحبًا كابتن باسم، أنا ${name} (مركز: ${position || 'لاعب'}، العمر: ${age || '-'}). قدمت طلب لحجز جلسة التقييم البدني (${selectedGoalInput.value})، وحابب نتأكد من الموعد.`
            : `Hi Coach Bassem, I am ${name} (Position: ${position || 'Player'}, Age: ${age || '-'}). I just submitted my physical assessment request (${selectedGoalInput.value}) and would like to confirm the schedule.`;
          waSuccessBtn.setAttribute('data-wa-message', msg);
        }

        document.getElementById('wizard-progress-bar').style.width = '100%';
        document.getElementById('wizard-step-indicator').textContent = currentLang === 'ar' ? 'مكتمل' : 'Completed';
        showToast(currentLang === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Application successfully submitted!');
      }, 1200);
    });
  }

  function goToStep(stepNumber) {
    currentStep = stepNumber;
    document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
    const targetStep = document.getElementById(`wizard-step-${stepNumber}`);
    if (targetStep) targetStep.classList.add('active');

    const progressPercent = ((stepNumber - 1) / (totalSteps - 1)) * 100;
    document.getElementById('wizard-progress-bar').style.width = `${progressPercent}%`;
    document.getElementById('wizard-step-indicator').textContent = currentLang === 'ar' ? `الخطوة 0${stepNumber} من 03` : `Step 0${stepNumber} of 03`;
  }
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const content = otherItem.querySelector('.faq-content');
        if (content) content.setAttribute('aria-hidden', 'true');
      });

      if (!isActive) {
        item.classList.add('active');
        const content = item.querySelector('.faq-content');
        if (content) content.setAttribute('aria-hidden', 'false');
      }
    });
  });
}

/* ==========================================================================
   SMOOTH SCROLL LINKS
   ========================================================================== */
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   WHATSAPP INTELLIGENT CTA HANDLER
   ========================================================================== */
function initWhatsAppCTAs() {
  const waButtons = document.querySelectorAll('.whatsapp-trigger');
  const whatsappNumber = '201000000000'; // Target coach WhatsApp line

  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultMsg = translations[currentLang]?.wa_default_msg || "Hi Coach Bassem, I'd like to learn more about your Football Performance training programs.";
      const customMessage = btn.getAttribute('data-wa-message') || defaultMsg;
      const encodedMsg = encodeURIComponent(customMessage);
      const url = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
      window.open(url, '_blank');
    });
  });
}

/* ==========================================================================
   TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white border border-brand-accent/40 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-2xl z-50 transition-all duration-300 transform translate-y-12 opacity-0 flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span> ${message}`;
  toast.classList.remove('translate-y-12', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 3500);
}
