import { PRODUCT_BASE } from '../config/site';

/**
 * Localized <title> / meta description per page path (without locale prefix).
 * Keys: locale code → page path → SEO strings.
 * English lives in the default page props; this covers non-default locales.
 */
const P = PRODUCT_BASE;
const ELITE = `${P}elite/`;
const UTIL = `${P}utilities/`;

export const PAGE_SEO_BY_LOCALE: Record<
  string,
  Record<string, { title: string; description: string; h1?: string }>
> = {
  ko: {
    '/': {
      title: 'Modern Warfare 치트 — ESP·레이더·랭크 PvP 오버레이 (PC)',
      description:
        'PC용 Modern Warfare 치트: 플레이어 ESP, 월핵, 랭크 레이더, 루트 ESP, 직업 스킬 어시스트, 로드아웃 체인저. 멀티플레이·워존 PvP와 Warzone 대응, Activision 패치 후 빠른 업데이트.',
    },
    [P]: {
      title: 'Modern Warfare 치트 제품 — Elite, HWID 스푸퍼, UGC, 코스튬 | PC',
      description:
        'Modern Warfare 치트 전 제품 비교: Elite ESP·월핵·스킬 어시스트, HWID 스푸퍼, UGC 계정 복구, 로드아웃 체인저. Windows PC 전용, 디스코드 24시간 지원, 패치 후 즉시 업데이트.',
    },
    [ELITE]: {
      title: 'MW4 Elite 치트 — ESP, 오토 킬, 파밍 어시스트 | PC',
      description:
        'MW4 Elite: 풀 ESP 월핵, 직업 스킬 어시스트, Auto finish, Auto plate break, 파밍 어시스트, 로드아웃 체인저. 우선 패치 큐와 디스코드 직접 지원이 포함된 한정 슬롯 티어.',
    },
    [UTIL]: {
      title: 'Modern Warfare 유틸리티 — HWID 스푸퍼·UGC·로드아웃 체인저',
      description:
        'Modern Warfare PC 유틸리티 모음: HWID 스푸퍼, UGC 언밴·제재 이의 제기 워크스페이스, 로컬 로드아웃 체인저. 설치 가이드와 디스코드 지원, 안티치트 패치 후 호환 업데이트 제공.',
    },
    '/blog/': {
      title: 'Modern Warfare 치트 블로그 — 가이드·패치 노트·랭크 팁',
      description:
        'Modern Warfare ESP 월핵 설정, 랭크 프리셋, 직업 스킬 어시스트, 안티치트 패치 체크리스트와 로더 업데이트 소식을 한곳에서. 설치 가이드와 최신 패치 노트를 확인하세요.',
    },
    '/faq/': {
      title: 'Modern Warfare 치트 FAQ — 밴 위험·설치·HWID·환불 안내',
      description:
        'Modern Warfare 치트 자주 묻는 질문: 온라인 상태 확인, 구매 후 이용 방법, 밴 위험, 지원 플랫폼, HWID 초기화, 라이선스 이전, 환불 정책까지 한 번에 확인하세요.',
    },
    '/support/': {
      title: 'Modern Warfare Cheats 고객지원 — 로더·HWID·결제 도움',
      description:
        '로더 설치 오류, HWID 초기화, 결제·라이선스, 계정 문제를 디스코드 24시간 및 이메일로 지원합니다. 티켓에 포함할 정보와 빠른 해결 방법을 안내해 드립니다.',
    },
    '/about/': {
      title: 'Modern Warfare Cheats 소개 — buymw4cheats.com 팀과 서비스',
      description:
        'buymw4cheats.com은 PC용 Modern Warfare 치트 티어, 가이드, 유틸리티를 제공합니다. 패치 후 빠른 로더 업데이트와 디스코드 중심 지원 철학을 소개합니다.',
    },
    '/forum/': {
      title: 'Modern Warfare 치트 포럼 — 설정 공유·패치 토론·질문',
      description:
        'Modern Warfare 치트 이용자 포럼: ESP·스킬 어시스트 설정 공유, 랭크 팁, 안티치트 패치 토론, 로더 질문과 답변. 커뮤니티와 함께 더 안전하고 빠르게 세팅하세요.',
    },
    '/privacy/': {
      title: '개인정보 처리방침 | Modern Warfare Cheats',
      description:
        'buymw4cheats.com이 분석 도구, 쿠키, 주문·연락 데이터를 어떻게 수집하고 사용하는지, 그리고 이용자의 권리와 문의 방법을 안내하는 개인정보 처리방침입니다.',
    },
    '/terms/': {
      title: '이용약관 | Modern Warfare Cheats',
      description:
        'buymw4cheats.com Modern Warfare 치트 제품의 구매, 라이선스 범위, 환불, 책임 제한 및 계정 위험에 관한 이용약관입니다. 구매 전에 반드시 확인해 주세요.',
    },
  },

  'zh-tw': {
    '/': {
      title: 'Modern Warfare 外掛 — ESP 透視、雷達、排位 PvP 輔助（PC）',
      description:
        'PC 版 Modern Warfare 外掛：玩家 ESP、穿牆透視、排位雷達、採集 ESP、職業技能輔助、配裝變更器。支援多人 & Warzone PvP 與Warzone，Activision 更新後快速跟進，Discord 24 小時客服。',
    },
    [P]: {
      title: 'Modern Warfare 外掛產品總覽 — Elite、HWID、UGC、配裝變更器',
      description:
        '比較所有 Modern Warfare 外掛產品：Elite ESP 穿牆與技能輔助、HWID 偽裝器、UGC 帳號申訴、配裝變更器。僅限 Windows PC，Discord 全天客服，更新後立即維護。',
    },
    [ELITE]: {
      title: 'MW4 Elite 外掛 — ESP 穿牆、自動擊殺、刷資源輔助',
      description:
        'MW4 Elite 完整功能：ESP 穿牆、職業技能輔助、自動擊殺、自動打斷、刷資源輔助、配裝變更器。限量名額，含優先更新佇列與 Discord 直接支援，適合排位與競技場。',
    },
    [UTIL]: {
      title: 'Modern Warfare 工具 — HWID 偽裝、UGC 申訴、配裝變更器',
      description:
        'Modern Warfare PC 實用工具：HWID 偽裝器、UGC 解封與處分申訴工作區、本機配裝變更器。附安裝指南與 Discord 客服，反作弊更新後同步提供相容版本。',
    },
    '/blog/': {
      title: 'Modern Warfare 外掛部落格 — 攻略、更新紀錄、排位技巧',
      description:
        '一站掌握 Modern Warfare ESP 穿牆設定、排位預設、職業技能輔助、反作弊更新檢查清單與載入器更新消息。查看安裝教學與最新更新紀錄，快速上手不踩雷。',
    },
    '/faq/': {
      title: 'Modern Warfare 外掛常見問題 — 封號風險、安裝、HWID、退款',
      description:
        'Modern Warfare 外掛常見問題：如何確認運作狀態、購買後如何使用、封號風險、支援平台、HWID 重置、授權轉移與退款政策，一次看懂，購買前先做功課。',
    },
    '/support/': {
      title: 'Modern Warfare Cheats 客服支援 — 載入器、HWID、付款協助',
      description:
        '載入器安裝錯誤、HWID 重置、付款與授權、帳號問題，皆可透過 Discord 24 小時與電子郵件取得協助。了解客服單需附上的資料，更快解決問題。',
    },
    '/about/': {
      title: '關於 Modern Warfare Cheats — buymw4cheats.com 團隊與服務',
      description:
        'buymw4cheats.com 專為 PC 玩家提供 Modern Warfare 外掛方案、攻略與工具。了解我們如何在更新後快速推送載入器，並以 Discord 為核心提供貼心的客服。',
    },
    '/forum/': {
      title: 'Modern Warfare 外掛論壇 — 設定分享、更新討論、問答',
      description:
        'Modern Warfare 外掛玩家論壇：分享 ESP 與技能輔助設定、排位技巧、反作弊更新討論與載入器問答。與社群一起更安全、更有效率地完成設定。',
    },
    '/privacy/': {
      title: '隱私權政策 | Modern Warfare Cheats',
      description:
        '說明 buymw4cheats.com 如何蒐集與使用分析工具、Cookie、訂單與聯絡資料，以及您的權利與聯絡方式。使用本站服務前，請先閱讀本隱私權政策。',
    },
    '/terms/': {
      title: '服務條款 | Modern Warfare Cheats',
      description:
        'buymw4cheats.com Modern Warfare 外掛產品的購買、授權範圍、退款、責任限制與帳號風險條款。購買前請詳細閱讀，了解雙方權利與義務，保障自身權益。',
    },
  },

  de: {
    '/': {
      title: 'Modern Warfare – ESP, Radar & Ranked-PvP-Overlay für PC',
      description:
        'Modern Warfare Cheats für den PC: Spieler-ESP, Wallhack, Ranked-Radar, Loot-ESP, klassenbasierte Skill-Hilfe und Kostüm-Changer.',
      h1: 'Modern Warfare Cheats — ESP, Aimbot & Radar · buymw4cheats.com',
    },
    [P]: {
      title: 'Modern Warfare Cheat-Produkte — Elite, HWID-Spoofer, UGC, Kostüme',
      description:
        'Alle Modern Warfare Produkte im Vergleich: Elite mit ESP, Wallhack und Skill-Hilfe, HWID-Spoofer, UGC-Kontowiederherstellung und Kostüm-Changer. Nur Windows, Discord-Support rund um die Uhr.',
    },
    [ELITE]: {
      title: 'MW4 Elite Cheats — ESP, Auto finish & Farm-Assistent',
      description:
        'MW4 Elite: voller ESP-Wallhack, klassenbasierte Skill-Hilfe, Auto finish, Auto plate break, Farm-Assistent und Kostüm-Changer. Begrenzte Plätze mit Prioritäts-Patches und direktem Discord-Support.',
    },
    [UTIL]: {
      title: 'Modern Warfare Utilities — HWID-Spoofer, UGC & Kostüm-Changer',
      description:
        'Modern Warfare PC-Utilities: HWID-Spoofer, UGC-Workspace für Bann-Einsprüche und lokaler Kostüm-Changer. Mit Installationsanleitung, Discord-Support und Updates nach jedem Anti-Cheat-Patch.',
    },
    '/blog/': {
      title: 'Modern Warfare Cheat-Blog — Guides, Patchnotes & Ranked-Tipps',
      description:
        'Modern Warfare ESP-Wallhack-Setup, Ranked-Presets, klassenbasierte Skill-Hilfe, Anti-Cheat-Patch-Checklisten und Loader-Updates. Installationsguides und aktuelle Patchnotes auf einen Blick.',
    },
    '/faq/': {
      title: 'Modern Warfare Cheats FAQ — Bann-Risiko, Setup, HWID & Erstattung',
      description:
        'Häufige Fragen zu Modern Warfare Cheats: Online-Status prüfen, Nutzung nach dem Kauf, Bann-Risiko, unterstützte Plattformen, HWID-Reset, Lizenzübertragung und Erstattungsrichtlinie.',
    },
    '/support/': {
      title: 'Modern Warfare Cheats Support — Loader, HWID & Zahlung',
      description:
        'Hilfe bei Loader-Fehlern, HWID-Reset, Zahlung, Lizenz und Konto per Discord rund um die Uhr oder E-Mail. So gelingt dein Ticket: diese Angaben beschleunigen die Lösung.',
    },
    '/about/': {
      title: 'Über Modern Warfare Cheats — Team und Service von buymw4cheats.com',
      description:
        'buymw4cheats.com bietet Modern Warfare Cheat-Pakete, Guides und Utilities für PC-Spieler. Erfahre, wie wir Loader nach Patches schnell aktualisieren und über Discord unterstützen.',
    },
    '/forum/': {
      title: 'Modern Warfare Cheats Forum — Setups teilen, Patches & Fragen',
      description:
        'Das Modern Warfare Cheats Forum: ESP- und Skill-Hilfe-Setups teilen, Ranked-Tipps, Anti-Cheat-Patches besprechen und Loader-Fragen klären. Gemeinsam sicherer und schneller konfigurieren.',
    },
    '/privacy/': {
      title: 'Datenschutzerklärung | Modern Warfare Cheats',
      description:
        'So nutzt buymw4cheats.com Analysen, Cookies sowie Bestell- und Kontaktdaten. Informationen zu deinen Rechten und Kontaktmöglichkeiten in unserer Datenschutzerklärung.',
    },
    '/terms/': {
      title: 'Nutzungsbedingungen | Modern Warfare Cheats',
      description:
        'Kauf, Lizenzumfang, Erstattung, Haftungsbeschränkung und Kontorisiken für Modern Warfare Cheat-Produkte von buymw4cheats.com. Bitte vor dem Kauf sorgfältig lesen.',
    },
  },

  'pt-br': {
    '/': {
      title: 'Cheats Modern Warfare — ESP, Radar e Overlay PvP do Ranked (PC)',
      description:
        'Cheats de Modern Warfare para PC: ESP de jogadores, wallhack, radar do Ranked, ESP de coleta, assistência de skills por classe e trocador de trajes. Atualizado após cada patch da Activision.',
    },
    [P]: {
      title: 'Produtos Modern Warfare Cheats — Elite, HWID Spoofer, UGC e Trajes',
      description:
        'Compare todos os produtos de Modern Warfare: Elite com ESP, wallhack e assistência de skills, spoofer de HWID, recuperação UGC e trocador de trajes. Só Windows, suporte 24h no Discord.',
    },
    [ELITE]: {
      title: 'MW4 Elite Cheats — ESP, Auto finish e Assistência de Farm',
      description:
        'MW4 Elite: ESP wallhack completo, assistência de skills por classe, Auto finish, Auto plate break, assistência de farm e trocador de trajes. Vagas limitadas com patches prioritários.',
    },
    [UTIL]: {
      title: 'Utilitários Modern Warfare — Spoofer HWID, UGC e Trocador de Trajes',
      description:
        'Utilitários de Modern Warfare para PC: spoofer de HWID, espaço UGC para apelar bans e trocador de trajes local. Guia de instalação, suporte no Discord e atualizações após patches anticheat.',
    },
    '/blog/': {
      title: 'Blog Modern Warfare Cheats — Guias, Notas de Patch e Dicas do Ranked',
      description:
        'Configuração de ESP wallhack, presets do Ranked, assistência de skills por classe, checklists de patches anticheat e novidades do loader. Guias de instalação e notas de patch recentes.',
    },
    '/faq/': {
      title: 'FAQ Modern Warfare Cheats — Risco de Ban, Instalação, HWID e Reembolso',
      description:
        'Dúvidas comuns sobre cheats de Modern Warfare: status online, uso após a compra, risco de ban, plataformas suportadas, reset de HWID, troca de licença e política de reembolso.',
    },
    '/support/': {
      title: 'Suporte Modern Warfare Cheats — Loader, HWID e Pagamento',
      description:
        'Ajuda com erros do loader, reset de HWID, pagamento, licença e conta pelo Discord 24h ou e-mail. Veja o que incluir no ticket para resolver tudo mais rápido.',
    },
    '/about/': {
      title: 'Sobre o Modern Warfare Cheats — Equipe e Serviço do buymw4cheats.com',
      description:
        'O buymw4cheats.com oferece planos de cheats de Modern Warfare, guias e utilitários para jogadores de PC. Conheça nosso foco em atualizar o loader rápido após patches e suporte via Discord.',
    },
    '/forum/': {
      title: 'Fórum Modern Warfare Cheats — Configs, Patches e Perguntas',
      description:
        'Fórum de usuários de cheats de Modern Warfare: compartilhe configs de ESP e assistência de skills, dicas do Ranked, discuta patches anticheat e tire dúvidas do loader com a comunidade.',
    },
    '/privacy/': {
      title: 'Política de Privacidade | Modern Warfare Cheats',
      description:
        'Como o buymw4cheats.com usa análises, cookies, dados de pedido e contato, além dos seus direitos e formas de falar conosco. Leia nossa política antes de usar o site.',
    },
    '/terms/': {
      title: 'Termos de Serviço | Modern Warfare Cheats',
      description:
        'Termos de compra, escopo da licença, reembolso, limitação de responsabilidade e riscos de conta dos produtos de Modern Warfare do buymw4cheats.com. Leia com atenção antes de comprar.',
    },
  },

  th: {
    '/': {
      title: 'โกง Modern Warfare — ESP เรดาร์ โอเวอร์เลย์ PvP อบิส (PC)',
      description:
        'โกง Modern Warfare สำหรับ PC: ESP ผู้เล่น วอลล์แฮค เรดาร์อบิส ESP เก็บของ ตัวช่วยสกิลตามอาชีพ และเปลี่ยนชุดคอสตูม รองรับ PvP Warzone และการบิน อัปเดตไวหลังแพตช์ Activision',
    },
    [P]: {
      title: 'สินค้าโกง Modern Warfare — Elite, HWID Spoofer, UGC, คอสตูม',
      description:
        'เปรียบเทียบสินค้า Modern Warfare ทั้งหมด: Elite พร้อม ESP วอลล์แฮค ตัวช่วยสกิล, HWID Spoofer, กู้คืนบัญชี UGC และเปลี่ยนชุดคอสตูม รองรับ Windows เท่านั้น ซัพพอร์ต Discord 24 ชม.',
    },
    [ELITE]: {
      title: 'โกง MW4 Elite — ESP, Auto finish, ตัวช่วยฟาร์ม',
      description:
        'MW4 Elite: ESP วอลล์แฮคเต็มรูปแบบ ตัวช่วยสกิลตามอาชีพ Auto finish Auto plate break ตัวช่วยฟาร์ม และเปลี่ยนชุดคอสตูม จำนวนจำกัด พร้อมแพตช์ลำดับความสำคัญและซัพพอร์ต Discord',
    },
    [UTIL]: {
      title: 'ยูทิลิตี้ Modern Warfare — HWID Spoofer, UGC, เปลี่ยนชุดคอสตูม',
      description:
        'ยูทิลิตี้ Modern Warfare บน PC: HWID Spoofer, พื้นที่ UGC สำหรับอุทธรณ์แบน และเปลี่ยนชุดคอสตูมในเครื่อง พร้อมคู่มือติดตั้ง ซัพพอร์ต Discord และอัปเดตหลังแพตช์แอนตี้โกง',
    },
    '/blog/': {
      title: 'บล็อกโกง Modern Warfare — คู่มือ บันทึกแพตช์ เคล็ดลับอบิส',
      description:
        'ตั้งค่า ESP วอลล์แฮค พรีเซ็ตอบิส ตัวช่วยสกิลตามอาชีพ เช็กลิสต์แพตช์แอนตี้โกง และข่าวอัปเดตโหลดเดอร์ ครบทั้งคู่มือติดตั้งและบันทึกแพตช์ล่าสุด อ่านได้ที่นี่',
    },
    '/faq/': {
      title: 'FAQ โกง Modern Warfare — ความเสี่ยงแบน ติดตั้ง HWID คืนเงิน',
      description:
        'คำถามที่พบบ่อยเกี่ยวกับโกง Modern Warfare: เช็กสถานะออนไลน์ การใช้งานหลังซื้อ ความเสี่ยงโดนแบน แพลตฟอร์มที่รองรับ รีเซ็ต HWID ย้ายไลเซนส์ และนโยบายคืนเงิน',
    },
    '/support/': {
      title: 'ซัพพอร์ต Modern Warfare Cheats — โหลดเดอร์ HWID การชำระเงิน',
      description:
        'ช่วยเรื่องโหลดเดอร์ผิดพลาด รีเซ็ต HWID การชำระเงิน ไลเซนส์ และบัญชี ผ่าน Discord 24 ชม. หรืออีเมล ดูข้อมูลที่ควรแนบในทิกเก็ตเพื่อแก้ปัญหาให้เร็วขึ้น',
    },
    '/about/': {
      title: 'เกี่ยวกับ Modern Warfare Cheats — ทีมและบริการของ buymw4cheats.com',
      description:
        'buymw4cheats.com ให้บริการแพ็กเกจโกง Modern Warfare คู่มือ และยูทิลิตี้สำหรับผู้เล่น PC เรามุ่งอัปเดตโหลดเดอร์ไวหลังแพตช์ พร้อมซัพพอร์ตผ่าน Discord ตลอดเวลา',
    },
    '/forum/': {
      title: 'ฟอรัมโกง Modern Warfare — แชร์คอนฟิก คุยแพตช์ ถามตอบ',
      description:
        'ฟอรัมผู้ใช้โกง Modern Warfare: แชร์คอนฟิก ESP และตัวช่วยสกิล เคล็ดลับอบิส พูดคุยเรื่องแพตช์แอนตี้โกง และถามปัญหาโหลดเดอร์กับชุมชน ตั้งค่าได้ปลอดภัยและเร็วขึ้น',
    },
    '/privacy/': {
      title: 'นโยบายความเป็นส่วนตัว | Modern Warfare Cheats',
      description:
        'buymw4cheats.com ใช้ข้อมูลวิเคราะห์ คุกกี้ ข้อมูลคำสั่งซื้อและข้อมูลติดต่ออย่างไร รวมถึงสิทธิ์ของคุณและช่องทางติดต่อ โปรดอ่านก่อนใช้บริการของเรา',
    },
    '/terms/': {
      title: 'ข้อกำหนดการใช้บริการ | Modern Warfare Cheats',
      description:
        'เงื่อนไขการซื้อ ขอบเขตไลเซนส์ การคืนเงิน การจำกัดความรับผิด และความเสี่ยงต่อบัญชีสำหรับสินค้า Modern Warfare ของ buymw4cheats.com โปรดอ่านให้ครบก่อนตัดสินใจซื้อ',
    },
  },

  ja: {
    '/': {
      title: 'Modern Warfare チート — ESP・レーダー・ランク PvP オーバーレイ（PC）',
      description:
        'PC 向け Modern Warfare チート：プレイヤー ESP、ウォールハック、ランクレーダー、戰利品 ESP、クラス別スキルアシスト、ロードアウトチェンジャー。PvP・Warzone対応、パッチ後も迅速に更新。',
    },
    [P]: {
      title: 'Modern Warfare チート製品一覧 — Elite・HWID・UGC・コスチューム',
      description:
        'Modern Warfare の全製品を比較：ESP・ウォールハック・スキルアシストの Elite、HWID スプーファー、UGC アカウント復旧、ロードアウトチェンジャー。Windows 専用、Discord 24 時間サポート。',
    },
    [ELITE]: {
      title: 'MW4 Elite チート — ESP・Auto finish・周回アシスト',
      description:
        'MW4 Elite：フル ESP ウォールハック、クラス別スキルアシスト、Auto finish、Auto plate break、周回アシスト、ロードアウトチェンジャー。限定枠で優先パッチと Discord 直接サポート付き。',
    },
    [UTIL]: {
      title: 'Modern Warfare ユーティリティ — HWID・UGC・ロードアウトチェンジャー',
      description:
        'Modern Warfare PC 向けユーティリティ：HWID スプーファー、BAN 異議申し立ての UGC ワークスペース、ローカルのロードアウトチェンジャー。導入ガイドと Discord サポート、パッチ後の更新付き。',
    },
    '/blog/': {
      title: 'Modern Warfare チートブログ — ガイド・パッチノート・ランク攻略',
      description:
        'Modern Warfare ESP ウォールハックの設定、ランクプリセット、クラス別スキルアシスト、アンチチートパッチのチェックリスト、ローダー更新情報。導入ガイドと最新パッチノートをまとめて確認。',
    },
    '/faq/': {
      title: 'Modern Warfare チート FAQ — BAN リスク・導入・HWID・返金',
      description:
        'Modern Warfare チートのよくある質問：稼働状況の確認、購入後の使い方、BAN リスク、対応プラットフォーム、HWID リセット、ライセンス移行、返金ポリシーをわかりやすく解説します。',
    },
    '/support/': {
      title: 'Modern Warfare Cheats サポート — ローダー・HWID・決済',
      description:
        'ローダーのエラー、HWID リセット、決済・ライセンス、アカウントの問題を Discord（24 時間）とメールでサポート。チケットに含める情報を確認して、素早く解決しましょう。',
    },
    '/about/': {
      title: 'Modern Warfare Cheats について — buymw4cheats.com のチームとサービス',
      description:
        'buymw4cheats.com は PC プレイヤー向けに Modern Warfare チートのプラン、ガイド、ユーティリティを提供します。パッチ後の迅速なローダー更新と Discord 中心のサポート体制をご紹介します。',
    },
    '/forum/': {
      title: 'Modern Warfare チートフォーラム — 設定共有・パッチ議論・質問',
      description:
        'Modern Warfare チートユーザーのフォーラム：ESP やスキルアシストの設定共有、ランクのコツ、アンチチートパッチの議論、ローダーの質問。コミュニティと一緒に安全に素早くセットアップ。',
    },
    '/privacy/': {
      title: 'プライバシーポリシー | Modern Warfare Cheats',
      description:
        'buymw4cheats.com が分析ツール、Cookie、注文・連絡先データをどのように取得・利用するか、またお客様の権利とお問い合わせ方法を説明するプライバシーポリシーです。',
    },
    '/terms/': {
      title: '利用規約 | Modern Warfare Cheats',
      description:
        'buymw4cheats.com の Modern Warfare チート製品の購入、ライセンス範囲、返金、責任の制限、アカウントリスクに関する利用規約です。ご購入前に必ずお読みください。',
    },
  },

  es: {
    '/': {
      title: 'Cheats Modern Warfare — ESP, Radar y Overlay PvP del Ranked (PC)',
      description:
        'Cheats de Modern Warfare para PC: ESP de jugadores, wallhack, radar del Ranked, ESP de recolección, asistencia de habilidades por clase y cambiador de trajes. Actualizado tras cada parche.',
    },
    [P]: {
      title: 'Productos Modern Warfare Cheats — Elite, HWID Spoofer, UGC y Trajes',
      description:
        'Compara todos los productos de Modern Warfare: Elite con ESP, wallhack y asistencia de habilidades, spoofer de HWID, recuperación UGC y cambiador de trajes. Solo Windows, soporte 24h por Discord.',
    },
    [ELITE]: {
      title: 'MW4 Elite Cheats — ESP, Auto finish y Asistencia de Farmeo',
      description:
        'MW4 Elite: ESP wallhack completo, asistencia de habilidades por clase, Auto finish, Auto plate break, asistencia de farmeo y cambiador de trajes. Plazas limitadas con parches prioritarios.',
    },
    [UTIL]: {
      title: 'Utilidades Modern Warfare — Spoofer HWID, UGC y Cambiador de Trajes',
      description:
        'Utilidades de Modern Warfare para PC: spoofer de HWID, espacio UGC para apelar bans y cambiador de trajes local. Guía de instalación, soporte en Discord y actualizaciones tras parches anticheat.',
    },
    '/blog/': {
      title: 'Blog Modern Warfare Cheats — Guías, Notas de Parche y Tips del Ranked',
      description:
        'Configuración de ESP wallhack, presets del Ranked, asistencia por clase, listas de verificación de parches anticheat y novedades del loader. Guías de instalación y notas de parche recientes.',
    },
    '/faq/': {
      title: 'FAQ Modern Warfare Cheats — Riesgo de Ban, Instalación, HWID y Reembolso',
      description:
        'Preguntas frecuentes sobre cheats de Modern Warfare: estado en línea, uso tras la compra, riesgo de ban, plataformas compatibles, reinicio de HWID, traslado de licencia y reembolsos.',
    },
    '/support/': {
      title: 'Soporte Modern Warfare Cheats — Loader, HWID y Pagos',
      description:
        'Ayuda con errores del loader, reinicio de HWID, pagos, licencia y cuenta por Discord las 24 horas o por correo. Descubre qué incluir en tu ticket para resolverlo más rápido.',
    },
    '/about/': {
      title: 'Acerca de Modern Warfare Cheats — Equipo y Servicio de buymw4cheats.com',
      description:
        'buymw4cheats.com ofrece planes de cheats de Modern Warfare, guías y utilidades para jugadores de PC. Conoce nuestro enfoque: loaders actualizados rápido tras parches y soporte por Discord.',
    },
    '/forum/': {
      title: 'Foro Modern Warfare Cheats — Configs, Parches y Preguntas',
      description:
        'Foro de usuarios de cheats de Modern Warfare: comparte configs de ESP y asistencia de habilidades, consejos del Ranked, debate parches anticheat y resuelve dudas del loader con la comunidad.',
    },
    '/privacy/': {
      title: 'Política de Privacidad | Modern Warfare Cheats',
      description:
        'Cómo buymw4cheats.com usa analítica, cookies, datos de pedidos y de contacto, además de tus derechos y vías de contacto. Lee nuestra política antes de usar el sitio.',
    },
    '/terms/': {
      title: 'Términos del Servicio | Modern Warfare Cheats',
      description:
        'Condiciones de compra, alcance de la licencia, reembolsos, limitación de responsabilidad y riesgos de cuenta de los productos Modern Warfare de buymw4cheats.com. Léelos antes de comprar.',
    },
  },

  fr: {
    '/': {
      title: 'Cheats Modern Warfare — ESP, Radar et Overlay PvP de l’Ranked (PC)',
      description:
        'Cheats Modern Warfare pour PC : ESP joueurs, wallhack, radar de l’Ranked, ESP de récolte, assistance de compétences par classe et changeur de tenues. Mis à jour après chaque patch Activision.',
    },
    [P]: {
      title: 'Produits Modern Warfare Cheats — Elite, Spoofer HWID, UGC, Tenues',
      description:
        'Comparez tous les produits Modern Warfare : Elite avec ESP, wallhack et assistance de compétences, spoofer HWID, récupération UGC et changeur de tenues. Windows uniquement, support Discord 24 h/24.',
    },
    [ELITE]: {
      title: 'Cheats MW4 Elite — ESP, Auto finish et Assistance au Farm',
      description:
        'MW4 Elite : ESP wallhack complet, assistance de compétences par classe, Auto finish, Auto plate break, assistance au farm et changeur de tenues. Places limitées avec patchs prioritaires.',
    },
    [UTIL]: {
      title: 'Utilitaires Modern Warfare — Spoofer HWID, UGC et Changeur de Tenues',
      description:
        'Utilitaires Modern Warfare pour PC : spoofer HWID, espace UGC pour contester les bans et changeur de tenues local. Guide d’installation, support Discord et mises à jour après les patchs anticheat.',
    },
    '/blog/': {
      title: 'Blog Modern Warfare Cheats — Guides, Notes de Patch et Astuces Ranked',
      description:
        'Configuration de l’ESP wallhack, presets de l’Ranked, assistance par classe, checklists de patchs anticheat et actualités du loader. Guides d’installation et notes de patch récentes.',
    },
    '/faq/': {
      title: 'FAQ Modern Warfare Cheats — Risque de Ban, Installation, HWID, Remboursement',
      description:
        'Questions fréquentes sur les cheats Modern Warfare : statut en ligne, utilisation après l’achat, risque de ban, plateformes compatibles, réinitialisation HWID, transfert de licence et remboursement.',
    },
    '/support/': {
      title: 'Support Modern Warfare Cheats — Loader, HWID et Paiement',
      description:
        'Aide pour les erreurs du loader, la réinitialisation HWID, le paiement, la licence et le compte via Discord 24 h/24 ou par e-mail. Voyez quoi inclure dans votre ticket pour aller plus vite.',
    },
    '/about/': {
      title: 'À propos d’Modern Warfare Cheats — Équipe et Service d’buymw4cheats.com',
      description:
        'buymw4cheats.com propose des offres de cheats Modern Warfare, des guides et des utilitaires pour les joueurs PC. Découvrez nos loaders mis à jour rapidement après les patchs et notre support Discord.',
    },
    '/forum/': {
      title: 'Forum Modern Warfare Cheats — Configs, Patchs et Questions',
      description:
        'Forum des utilisateurs de cheats Modern Warfare : partagez vos configs ESP et assistance de compétences, astuces de l’Ranked, débats sur les patchs anticheat et questions sur le loader.',
    },
    '/privacy/': {
      title: 'Politique de Confidentialité | Modern Warfare Cheats',
      description:
        'Comment buymw4cheats.com utilise les statistiques, cookies, données de commande et de contact, ainsi que vos droits et moyens de nous joindre. À lire avant d’utiliser le site.',
    },
    '/terms/': {
      title: 'Conditions d’Utilisation | Modern Warfare Cheats',
      description:
        'Conditions d’achat, portée de la licence, remboursement, limitation de responsabilité et risques de compte pour les produits Modern Warfare d’buymw4cheats.com. À lire avant tout achat.',
    },
  },
};
