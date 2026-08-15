/**
 * ADAM RAHMAN / PERFORMANCE COACH
 * Bilingual (Arabic / English) Application Logic & Dynamic i18n System
 */

// Translation Dictionary (Arabic Default & English Dual)
const translations = {
  ar: {
    nav_logo_sub: "مدرب أداء وتطوير بدني",
    nav_home: "الرئيسية",
    nav_about: "عن آدم",
    nav_coaching: "البرامج",
    nav_results: "النتائج",
    nav_method: "المنهج",
    nav_testimonials: "آراء العملاء",
    nav_book: "احجز مكالمتك ←",
    lang_toggle: "EN",
    
    hero_eyebrow: "تدريب أونلاين • أداء • تغذية",
    hero_h1_1: "ابني جسمك.",
    hero_h1_2: "وارتقِ بحياتك.",
    hero_sub: "تدريب شخصي مصمم حول جسمك، نمط حياتك وأهدافك — مع متابعة حقيقية تساعدك على تحقيق نتائج يمكنك الحفاظ عليها.",
    hero_cta_primary: "ابدأ رحلتك",
    hero_cta_secondary: "شاهد النتائج ↓",
    hero_badge_1_num: "+500 عميل",
    hero_badge_1_text: "حققوا نتائج حقيقية",
    hero_badge_2_num: "+12 سنة",
    hero_badge_2_text: "خبرة تدريبية نخبوية",
    hero_card_name: "آدم رحمن",
    hero_card_role: "رئيس مدربي الأداء",
    hero_card_quote: "أنا مش بدي الناس جدول تمرين وخلاص. أنا ببني لهم نظام يقدروا يعيشوا بيه.",
    hero_card_slots_label: "اشتراكات أونلاين 1:1",
    hero_card_slots_count: "متبقي 3 أماكن فقط هذا الشهر",

    stat_1_label: "عميل حقق نتائج",
    stat_1_sub: "في مصر وحول العالم",
    stat_2_label: "سنة خبرة",
    stat_2_sub: "أنظمة علمية مجربة",
    stat_3_label: "نسبة استمرار العملاء",
    stat_3_sub: "نتائج وأسلوب حياة مستدام",
    stat_4_label: "دولة حول العالم",
    stat_4_sub: "متابعة أونلاين عالمية",

    about_eyebrow: "المدرب",
    about_h2_1: "الموضوع مش مجرد إنك",
    about_h2_2: "تبان فورمة.",
    about_p1: "الموضوع إنك تبني جسمًا أقوى، وعادات أفضل، وانضباطًا يغيّر الطريقة التي تعيش بها حياتك. معظم النصائح الفردية بتفشل لأنها بتمشي على فورمة نظري، لكن في الحقيقة انت عندك شغل، سفر، والتزامات عائلية.",
    about_p2: "على مدار 12 سنة، طوّرت أنظمة تدريب وتغذية مخصصة لرجال الأعمال، التنفيذيين، والأشخاص اللي معندهمش وقت يضيعوه في تجارب عشوائية.",
    about_quote: "أنا مش بدي الناس جدول تمرين وخلاص. أنا ببني لهم نظام يقدروا يعيشوا بيه.",
    about_sig: "— آدم رحمن",
    about_b1: "أنظمة علمية مخصصة",
    about_b2: "مرونة تتناسب مع نمط حياتك",
    about_b3: "متابعة شخصية مباشرة 1:1",
    about_b4: "نتائج مستدامة على المدى البعيد",

    prog_eyebrow: "أنظمة مصممة لك",
    prog_h2: "تدريب مصمم ليك.",
    prog_sub: "مفيش خطط جاهزة. كل برنامج بيتبني حسب جسمك، جدولك، أهدافك ومستوى التزامك.",
    prog1_tier: "المستوى 01",
    prog1_title: "التدريب الشخصي أونلاين",
    prog1_desc: "للأشخاص الذين يريدون أقصى درجات التخصيص والمتابعة المباشرة لنتائج سريعة ومستدامة.",
    prog1_b1: "برنامج تمرين مخصص للكتلة والقوة",
    prog1_b2: "استراتيجية تغذية وحساب ماكروز دقيقة",
    prog1_b3: "متابعة أسبوعية بالفيديو والتقييم",
    prog1_b4: "تواصل مباشر مع المدرب عبر الواتساب",
    prog1_b5: "مراجعة التكنيك والأداء الرياضي",
    prog1_cta: "قدّم الآن",
    prog2_tier: "المستوى 02",
    prog2_title: "برنامج التحول",
    prog2_desc: "برنامج متكامل لمدة 12 أسبوعًا لإعادة تشكيل الجسم وخسارة الدهون مع الحفاظ على الكتلة العضلية.",
    prog2_b1: "مراحـل تدريبية مقسمة لـ 12 أسبوعًا",
    prog2_b2: "استراتيجية تغذية ومكملات دقيقة",
    prog2_b3: "متابعة ومحاسبة أسبوعية دقيقة",
    prog2_b4: "تحسين الكارديو واللياقة البدنية",
    prog2_b5: "دخول فوري لمكتبة التحول",
    prog2_cta: "اعرف المزيد",
    prog3_tier: "المستوى 03",
    prog3_title: "التدريب النخبوي",
    prog3_desc: "لرجال الأعمال والتنفيذيين وكبار الشخصيات الذين يحتاجون متابعة وأولوية تواصل 24/7.",
    prog3_b1: "بروتوكول كامل مخصص للمقامات والسفر",
    prog3_b2: "أولوية تواصل 24/7 عبر الواتساب",
    prog3_b3: "مكالمات أسبوعية لتطوير الأداء والصحة",
    prog3_b4: "أدلة التغذية في المطاعم والسفر",
    prog3_b5: "إدارة النوم والتحكم في الإجهاد",
    prog3_cta: "قدّم على التدريب النخبوي",

    res_eyebrow: "النتائج الحقيقية",
    res_h2: "النتائج هي الدليل.",
    res_filter_all: "الكل",
    res_filter_fatloss: "خسارة الدهون",
    res_filter_muscle: "بناء العضلات",
    res_filter_recomp: "إعادة التشكيل",

    case_eyebrow: "قصة نجاح / 01",
    case_h2: "تحول أحمد خلال 16 أسبوعًا",
    case_before_lbl: "قبل",
    case_after_lbl: "بعد",
    case_dur_lbl: "المدة",
    case_desc: "أحمد جرّب أنظمة غذائية مختلفة قبل كده. المشكلة لم تكن في الحماس، ولكن في عدم وجود نظام واضح يمكنه الاستمرار عليه وسط ضغوط عمله كمدير تنفيذي بأكثر من 60 ساعة عمل أسبوعيًا.",
    case_cta: "اقرأ قصة النجاح ←",

    method_eyebrow: "منظومة العمل",
    method_h2: "المنهج",
    method_sub: "أربعة مراحل علمية مدروسة لتحقيق تحول بدني مضمون ومستدام.",
    method_s1_t: "التقييم",
    method_s1_d: "نفهم جسمك، نمط حياتك وأهدافك.",
    method_s2_t: "البناء",
    method_s2_d: "نبني استراتيجية التدريب والتغذية المناسبة لك.",
    method_s3_t: "التطوير",
    method_s3_d: "نعدل الخطة بناءً على نتائجك الحقيقية.",
    method_s4_t: "التطور",
    method_s4_d: "نبني عادات تستمر معك حتى بعد انتهاء البرنامج.",

    test_eyebrow: "آراء العملاء",
    test_h2: "ناس حقيقية. تغيير حقيقي.",
    t1_quote: "آدم غيّر تمامًا طريقة تفكيري في التمرين والتغذية. لأول مرة فهمت فعلًا إيه اللي يناسب جسمي من غير ما أضحي بوقتي مع عيلتي.",
    t1_name: "عمر حسن",
    t1_role: "رجل أعمال • -14 كجم",
    t2_quote: "مستوى التفاصيل في المتابعة الأسبوعية مذهل. بيراجع فيديوهات التمرين ويبدل الماكروز حسب مستوى الإجهاد. احترافية حقيقية.",
    t2_name: "خالد السيد",
    t2_role: "مدير تنفيذي • +7 كجم عضل",
    t3_quote: "كطبيب بساعات عمل طويلة، الأنظمة التقليدية مكنتش بتظبط معايا. آدم بنى لي نظام 4 أيام غير تمامًا من لياقتي وجسمي.",
    t3_name: "د. شريف منصور",
    t3_role: "جراح عظام • إعادة تشكيل",

    social_eyebrow: "تابعنا",
    social_h2: "تابع الرحلة.",
    social_cta: "تابعني على Instagram ←",

    book_eyebrow: "طلب الاستشارة",
    book_h2: "جاهز تبدأ التغيير؟",
    book_sub: "احكيلنا أنت فين دلوقتي، وإيه هدفك، وهنحدد إذا كان التدريب مناسب ليك.",
    book_step1_t: "الخطوة 1: اختار هدفك الرئيسي",
    book_step1_d: "اختر النتيجة التي تريد تحقيقها بأعلى درجة من التزامك.",
    book_g1_t: "خسارة الدهون",
    book_g1_d: "خسارة الدهون ونحت الجسم مع الحفاظ على العضلات.",
    book_g2_t: "بناء العضلات",
    book_g2_d: "زيادة الكتلة العضلية والقوة بشكل متناسق.",
    book_g3_t: "تحسين الأداء",
    book_g3_d: "زيادة اللياقة، النشاط، الطاقة والمرونة.",
    book_g4_t: "تغيير نمط الحياة",
    book_g4_d: "إعادة تشكيل الجسم وعادات يومية تناسب عملك.",
    book_step2_t: "الخطوة 2: نوع الاستشارة",
    book_step2_d: "اختر تفضيلك لمكالمة الاستشارة المباشرة.",
    book_c1_t: "مكالمة تعارف وتحديد هدف — 20 دقيقة",
    book_c1_d: "مكالمة تقييم أداء مباشرة مع المدرب آدم رحمن لمراجعة وضعك الحالي.",
    book_step3_t: "الخطوة 3: بياناتك الشخصية",
    book_step3_d: "يرجى ملء بياناتك حتى نتمكن من مراجعة طلبك قبل المكالمة.",
    book_lbl_name: "الاسم بالكامل *",
    book_lbl_email: "البريد الإلكتروني *",
    book_lbl_phone: "رقم الواتساب *",
    book_lbl_level: "مستوى الخبرة في التمرين",
    book_lbl_notes: "إيه أكتر تحدي بيواجهك حالياً؟",
    book_btn_submit: "اطلب استشارتك",
    book_succ_h3: "تم استلام طلبك.",
    book_succ_p: "شكرًا لك. سنراجع بياناتك ونتواصل معك قريبًا.",
    book_succ_wa: "تسريع التواصل عبر الواتساب",

    faq_eyebrow: "الأسئلة الشائعة",
    faq_h2: "الأسئلة الشائعة",

    final_eyebrow: "الوقت حان",
    final_h2_1: "رحلتك نحو نسخة أقوى منك",
    final_h2_2: "تبدأ هنا.",
    final_sub: "توقف عن تأجيل إمكانياتك البدنية. ابني الجسم والعقلية والانضباط الذي يرفع من مستوى حياتك كلها.",
    final_cta_primary: "ابدأ رحلتك",
    final_cta_secondary: "تحدث عبر الواتساب",

    footer_tagline: "تدريب أونلاين للأداء والتحول البدني.",
    footer_copy: "© 2026 آدم رحمن. جميع الحقوق محفوظة.",
    wa_default_msg: "مرحبًا آدم، حابب أعرف أكتر عن برامج التدريب."
  },
  en: {
    nav_logo_sub: "Performance Coach",
    nav_home: "Home",
    nav_about: "About",
    nav_coaching: "Coaching",
    nav_results: "Results",
    nav_method: "Method",
    nav_testimonials: "Testimonials",
    nav_book: "BOOK A CALL →",
    lang_toggle: "العربية",

    hero_eyebrow: "ONLINE COACHING / PERFORMANCE / NUTRITION",
    hero_h1_1: "BUILD THE BODY.",
    hero_h1_2: "ELEVATE THE LIFE.",
    hero_sub: "Personalized training, nutrition and accountability for people who are serious about becoming their strongest version.",
    hero_cta_primary: "START YOUR TRANSFORMATION",
    hero_cta_secondary: "SEE RESULTS ↓",
    hero_badge_1_num: "500+ CLIENTS",
    hero_badge_1_text: "Transformed Worldwide",
    hero_badge_2_num: "12+ YEARS",
    hero_badge_2_text: "Elite Coaching Exp.",
    hero_card_name: "Adam Rahman",
    hero_card_role: "Head Performance Coach",
    hero_card_quote: "I don't give people another workout plan. I build systems they can actually live with.",
    hero_card_slots_label: "Online 1:1 Slots",
    hero_card_slots_count: "3 Spots Open This Month",

    stat_1_label: "CLIENTS TRANSFORMED",
    stat_1_sub: "Across Egypt & Internationally",
    stat_2_label: "YEARS COACHING",
    stat_2_sub: "Proven Science-Based Systems",
    stat_3_label: "CLIENT RETENTION",
    stat_3_sub: "Long-term Lifestyle Results",
    stat_4_label: "COUNTRIES",
    stat_4_sub: "Global Online Coaching Access",

    about_eyebrow: "THE COACH",
    about_h2_1: "THIS ISN'T ABOUT",
    about_h2_2: "LOOKING FIT.",
    about_p1: "It's about building a body, mindset and discipline that change the way you show up in every part of your life. Most fitness advice fails because it assumes everyone lives in a vacuum. You have a career, travel schedules, family commitments, and real-world stress.",
    about_p2: "Over the past 12 years, I've engineered performance frameworks specifically designed for high-performing entrepreneurs, executives, and individuals who don't have time to waste on generic fitness trends.",
    about_quote: "I don't give people another workout plan. I build systems they can actually live with.",
    about_sig: "— Adam Rahman",
    about_b1: "Science-Backed Protocols",
    about_b2: "Flexible Lifestyle Integration",
    about_b3: "Direct 1:1 Accountability",
    about_b4: "Sustainable Physique Architecture",

    prog_eyebrow: "TAILORED ARCHITECTURE",
    prog_h2: "COACHING BUILT AROUND YOU.",
    prog_sub: "No generic plans. No copy-paste programs. Every client gets a strategy built around their body, schedule and goals.",
    prog1_tier: "TIER 01",
    prog1_title: "1:1 PERFORMANCE COACHING",
    prog1_desc: "Designed for people who demand maximum personalization, structure, and direct coach guidance for high-impact results.",
    prog1_b1: "Custom Hypertrophy / Strength Program",
    prog1_b2: "Tailored Macro & Meal Plan Strategy",
    prog1_b3: "Weekly Video Analysis & Check-ins",
    prog1_b4: "Direct WhatsApp Coach Access",
    prog1_b5: "Form Check & Bio-feedback Adjustments",
    prog1_cta: "APPLY NOW",
    prog2_tier: "TIER 02",
    prog2_title: "TRANSFORMATION PROGRAM",
    prog2_desc: "A structured 12-week body re-engineering system focused on aggressive fat loss and lean muscle preservation.",
    prog2_b1: "12-Week Structured Training Phases",
    prog2_b2: "Precision Nutrition & Supplementation",
    prog2_b3: "Weekly Accountability Metrics",
    prog2_b4: "Cardio & Metabolic Conditioning",
    prog2_b5: "Private Transformation Vault Access",
    prog2_cta: "VIEW PROGRAM",
    prog3_tier: "TIER 03",
    prog3_title: "ELITE COACHING",
    prog3_desc: "For C-suite executives, high-performing founders, and athletes who require 24/7 priority access and lifestyle optimization.",
    prog3_b1: "Full Bespoke Strategy & Travel Protocols",
    prog3_b2: "Priority 24/7 WhatsApp Communication",
    prog3_b3: "Weekly Strategy Calls & Bio-hacking",
    prog3_b4: "Restaurant & Dining Out Guidelines",
    prog3_b5: "Sleep, HRV & Recovery Management",
    prog3_cta: "APPLY FOR ELITE",

    res_eyebrow: "REAL RESULTS",
    res_h2: "THE PROOF IS IN THE WORK.",
    res_filter_all: "All",
    res_filter_fatloss: "Fat Loss",
    res_filter_muscle: "Muscle Gain",
    res_filter_recomp: "Recomposition",

    case_eyebrow: "FEATURED CASE STUDY / 01",
    case_h2: "AHMED'S 16-WEEK TRANSFORMATION",
    case_before_lbl: "BEFORE",
    case_after_lbl: "AFTER",
    case_dur_lbl: "DURATION",
    case_desc: "Ahmed had tried multiple diets before hiring Adam. The problem wasn't motivation — it was the lack of a system he could sustain alongside 60-hour work weeks as a corporate director in Cairo.",
    case_cta: "READ CASE STUDY →",

    method_eyebrow: "THE SYSTEM",
    method_h2: "THE METHOD",
    method_sub: "A four-stage performance framework designed for predictable, sustainable physical transformation.",
    method_s1_t: "ASSESS",
    method_s1_d: "Understand your body composition, metabolic baseline, travel commitments, and current lifestyle habits.",
    method_s2_t: "BUILD",
    method_s2_d: "Create your personalized training structure, macronutrient distribution, and weekly habit targets.",
    method_s3_t: "ADAPT",
    method_s3_d: "Adjust the plan based on real-world bio-feedback, bio-metrics, and strength progression.",
    method_s4_t: "EVOLVE",
    method_s4_d: "Automate sustainable routines that protect your physique and energy levels long past the program.",

    test_eyebrow: "SOCIAL PROOF",
    test_h2: "REAL PEOPLE. REAL CHANGE.",
    t1_quote: "Adam completely changed the way I approach training. For the first time, I actually understand what works for my body without sacrificing family time.",
    t1_name: "Omar Hassan",
    t1_role: "Entrepreneur • -14 KG Loss",
    t2_quote: "The level of detail in the weekly check-ins is incredible. He spot-checks video form and adjusts macros based on stress levels. Pure professional.",
    t2_name: "Khaled El-Sayed",
    t2_role: "Managing Director • +7 KG Muscle",
    t3_quote: "As a doctor with long shift hours, standard routines never worked. Adam built a 4-day split that transformed my stamina and physique.",
    t3_name: "Dr. Sherif Mansour",
    t3_role: "Orthopedic Surgeon • Recomp",

    social_eyebrow: "SOCIAL FEED",
    social_h2: "FOLLOW THE JOURNEY.",
    social_cta: "FOLLOW ON INSTAGRAM →",

    book_eyebrow: "APPLICATION PROCESS",
    book_h2: "READY TO CHANGE WHAT'S POSSIBLE?",
    book_sub: "Tell me where you are now, where you want to go, and we'll determine whether coaching is the right fit.",
    book_step1_t: "Step 1: Select Your Primary Goal",
    book_step1_d: "Choose the outcome you are most committed to achieving.",
    book_g1_t: "Fat Loss",
    book_g1_d: "Aggressive bodyfat reduction while maintaining lean muscle mass.",
    book_g2_t: "Muscle Gain",
    book_g2_d: "Structured strength and hypertrophic muscle growth protocols.",
    book_g3_t: "Performance",
    book_g3_d: "Stamina, mobility, energy optimization, and power output.",
    book_g4_t: "Lifestyle Recomp",
    book_g4_d: "Complete habit engineering tailored around demanding work life.",
    book_step2_t: "Step 2: Consultation Format",
    book_step2_d: "Select your preferred 1:1 strategy alignment option.",
    book_c1_t: "20-Minute Discovery Strategy Call",
    book_c1_d: "Direct phone or Zoom assessment call with Adam Rahman to review your current setup.",
    book_step3_t: "Step 3: Your Information",
    book_step3_d: "Provide your details so our team can review your application before calling.",
    book_lbl_name: "Full Name *",
    book_lbl_email: "Email Address *",
    book_lbl_phone: "WhatsApp Number *",
    book_lbl_level: "Training Experience",
    book_lbl_notes: "What is your single biggest struggle right now?",
    book_btn_submit: "REQUEST MY CONSULTATION",
    book_succ_h3: "APPLICATION RECEIVED.",
    book_succ_p: "Thank you. We have logged your application and will contact you shortly.",
    book_succ_wa: "ACCELERATE VIA WHATSAPP",

    faq_eyebrow: "CLARITY",
    faq_h2: "FREQUENTLY ASKED QUESTIONS",

    final_eyebrow: "YOUR TIME IS NOW",
    final_h2_1: "YOUR NEXT LEVEL",
    final_h2_2: "STARTS HERE.",
    final_sub: "Stop postponing your physical potential. Build the body, mindset, and discipline that elevate everything else.",
    final_cta_primary: "START YOUR TRANSFORMATION",
    final_cta_secondary: "TALK ON WHATSAPP",

    footer_tagline: "Elite Online Fitness & Performance Coaching.",
    footer_copy: "© 2026 ADAM RAHMAN / PERFORMANCE COACH. All rights reserved.",
    wa_default_msg: "Hi Adam, I'd like to learn more about your coaching programs."
  }
};

// Global Current Language State (Default: Arabic)
let currentLang = localStorage.getItem('adam_fit_lang') || 'ar';

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
  localStorage.setItem('adam_fit_lang', lang);

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
   TRANSFORMATIONS FILTER
   ========================================================================== */
function initTransformationFilter() {
  const filterBtns = document.querySelectorAll('.transform-filter-btn');
  const cards = document.querySelectorAll('.transformation-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-accent', 'text-black', 'font-bold');
        b.classList.add('bg-neutral-900', 'text-neutral-400', 'border-neutral-800');
      });

      btn.classList.add('bg-accent', 'text-black', 'font-bold');
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
   TRANSFORMATION DETAIL MODAL
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
   MULTI-STEP BOOKING CONSULTATION ENGINE
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
        showToast(currentLang === 'ar' ? 'يرجى اختيار هدفك الرئيسي أولاً.' : 'Please select your primary transformation goal.');
        return;
      }
      goToStep(2);
    });
  }

  if (prevBtn2) prevBtn2.addEventListener('click', () => goToStep(1));

  if (nextBtn2) {
    nextBtn2.addEventListener('click', () => {
      if (!selectedConsultationInput.value) {
        showToast(currentLang === 'ar' ? 'يرجى اختيار نوع الاستشارة.' : 'Please select your consultation preference.');
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

      if (!name || !email || !phone) {
        showToast(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.');
        return;
      }

      const submitBtn = document.getElementById('submit-booking-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = currentLang === 'ar' ? 'جاري إرسال الطلب...' : 'Submitting Application...';

      setTimeout(() => {
        document.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
        const successStep = document.getElementById('wizard-step-success');
        successStep.classList.add('active');

        document.getElementById('summary-name').textContent = name;
        document.getElementById('summary-goal').textContent = selectedGoalInput.value;
        document.getElementById('summary-phone').textContent = phone;

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
  const whatsappNumber = '201000000000'; // Target coach phone number

  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultMsg = translations[currentLang]?.wa_default_msg || "Hi Adam, I'd like to learn more about your coaching programs.";
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
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white border border-accent/40 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-2xl z-50 transition-all duration-300 transform translate-y-12 opacity-0 flex items-center gap-2';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-accent animate-ping"></span> ${message}`;
  toast.classList.remove('translate-y-12', 'opacity-0');

  setTimeout(() => {
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 3500);
}
