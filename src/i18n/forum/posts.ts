import type { Locale } from '../locales';

export type ForumPostTranslation = {
  title: string;
  excerpt: string;
  body: string[];
  flair?: string;
  sourceTitle?: string;
  comments?: Array<{ body: string; age?: string; replies?: Array<{ body: string; age?: string }> }>;
};

/** Per-slug translations keyed by locale (English lives in src/data/forum.ts). */
const SLUG_I18N: Record<string, Partial<Record<Exclude<Locale, 'en'>, ForumPostTranslation>>> = {
  'can-custom-lobby-cheat-codes-be-used-in-ranked': {
    ko: {
      title: '랭크 매치메이킹에서 Modern Warfare 치트 코드를 쓸 수 있나요?',
      excerpt: '연습 로비 가이드 요약: 내장 로비 명령은 치트가 켜진 커스텀 매치에서만 동작합니다.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 치트 코드 가이드: 연습 로비 콘솔 명령',
      body: [
        '아니요. 프라이빗 매치와 봇 로비는 연습용입니다. 랭크 매치메이킹이나 Warzone에는 적용되지 않습니다.',
        'Training에서 에임 스무딩, ESP 거리, loadout을 익히세요. 가이드는 연습 드릴과 buymw4cheats.com 프라이빗 Modern Warfare 치트의 차이도 설명합니다.',
      ],
      comments: [
        { body: '맞아요. 랭크 프리셋 건드리기 전에 Training 에임 맵이나 봇 로비부터.', age: '1시간 전' },
        { body: '가이드에 스태프·활·총 드릴이 있어요. 연습 후엔 랭크 프리셋은 보수적으로.', age: '48분 전' },
        { body: '구분이 도움됐어요. 프라이빗 도구는 랭크 기능이 아닙니다.', age: '35분 전' },
      ],
    },
    'zh-tw': {
      title: '排位配對能用 Modern Warfare 作弊碼嗎？',
      excerpt: '練習大廳指南：內建指令僅在開啟作弊的自訂對戰有效。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 作弊碼指南：練習大廳主控台指令',
      body: [
        '不行。私人對戰與機器人大廳僅供練習，不會帶進排位或 Warzone。',
        '用 Training 熟悉瞄準平滑、ESP 距離與配裝。指南也說明練習流程與 buymw4cheats.com 私人 Modern Warfare 外掛的差異。',
      ],
      comments: [
        { body: '正確：動排位預設前先開 Training 瞄準圖或機器人大廳。', age: '1 小時前' },
        { body: '指南含法杖、弓、槍械訓練。練完排位預設仍要保守。', age: '48 分鐘前' },
        { body: '這區分很有用。私人工具不是排位功能。', age: '35 分鐘前' },
      ],
    },
    de: {
      title: 'Kann ich Modern-Warfare-Cheat-Codes im Ranked-Matchmaking nutzen?',
      excerpt: 'Kurzantwort aus dem Übungslobby-Guide: Lobby-Befehle gelten nur in Custom Matches mit aktivierten Cheats.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Cheat-Codes: Konsolenbefehle für Übungslobbys',
      body: [
        'Nein. Private Matches und Bot-Lobbys dienen nur zum Üben. Sie gelten nicht für Ranked-Matchmaking oder Warzone.',
        'Nutze Training für Aim-Smoothing, ESP-Reichweiten und Loadouts. Der Guide erklärt auch den Unterschied zwischen Übungsdrills und privaten Modern-Warfare-Cheats von buymw4cheats.com.',
      ],
      comments: [
        { body: 'Stimmt: Training-Aim-Map oder Bot-Lobby, bevor du Ranked-Presets anfasst.', age: 'vor 1 Stunde' },
        { body: 'Guide deckt Staff-, Bogen- und Waffendrills ab. Ranked-Presets danach konservativ halten.', age: 'vor 48 Min.' },
        { body: 'Nützliche Unterscheidung. Private-Tools sind keine Ranked-Features.', age: 'vor 35 Min.' },
      ],
    },
    'pt-br': {
      title: 'Posso usar códigos de cheat do Modern Warfare no matchmaking ranqueado?',
      excerpt: 'Resposta rápida do guia de lobby de prática: comandos só funcionam em partidas custom com cheats ativados.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia de códigos Modern Warfare: comandos de console para lobbies de prática',
      body: [
        'Não. Partidas privadas e lobbies de bots são só para prática. Não valem no ranqueado nem no Warzone.',
        'Use o Training para suavização de mira, alcance de ESP e loadouts. O guia também explica a diferença entre drills e cheats privados Modern Warfare na buymw4cheats.com.',
      ],
      comments: [
        { body: 'Certo: mapa de mira no Training ou lobby de bots antes dos presets ranqueados.', age: 'há 1 hora' },
        { body: 'O guia cobre staff, arco e arma. Mantenha presets ranqueados conservadores depois.', age: 'há 48 min' },
        { body: 'Distinção útil. Ferramentas de partida privada não são recursos ranqueados.', age: 'há 35 min' },
      ],
    },
    th: {
      title: 'ใช้รหัส cheat Modern Warfare ในแรงค์ได้ไหม?',
      excerpt: 'จากคู่มือลobbies ฝึก: คำสั่งในตัวใช้ได้แค่แมตช์กำหนดเองที่เปิด cheat',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือรหัส cheat Modern Warfare: คำสั่งคอนโซลสำหรับลobbies ฝึก',
      body: [
        'ไม่ได้ แมตช์ส่วนตัวและบอทลobbies ใช้ฝึกเท่านั้น ไม่มีผลในแรงค์หรือ Warzone',
        'ใช้ Training ฝึก aim smoothing ระยะ ESP และ loadout คู่มืออธิบายความต่างของ drill กับ cheat ส่วนตัวจาก buymw4cheats.com',
      ],
      comments: [
        { body: 'ถูกต้อง: โหลดแผนที่ aim ใน Training หรือบอทก่อนแตะพรีเซ็ตแรงค์', age: '1 ชม. ที่แล้ว' },
        { body: 'คู่มือมี staff ธนู ปืน หลังฝึกให้พรีเซ็ตแรงค์อ conservative', age: '48 นาทีที่แล้ว' },
        { body: 'แยกแยะชัดดี เครื่องมือแมตช์ส่วนตัวไม่ใช่ฟีเจอร์แรงค์', age: '35 นาทีที่แล้ว' },
      ],
    },
    ja: {
      title: 'ランクマッチで Modern Warfare のチートコードは使える？',
      excerpt: '練習ロビーガイドの要点：組み込みコマンドはチート有効のカスタムのみ。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare チートコードガイド：練習ロビー用コンソールコマンド',
      body: [
        'いいえ。プライベートマッチとボットロビーは練習専用です。ランクマッチメイキングや Warzone には引き継がれません。',
        'Training でエイムスムージング、ESP 距離、ロードアウトを学んでください。ガイドは練習ドリルと buymw4cheats.com のプライベート Modern Warfare チートの違いも説明します。',
      ],
      comments: [
        { body: 'その通り。ランクプリセットの前に Training のエイムマップかボットロビーを。', age: '1時間前' },
        { body: 'ガイドにスタッフ・弓・銃のドリルあり。練習後はランク設定は控えめに。', age: '48分前' },
        { body: '区別が助かる。プライベート用ツールはランク機能ではない。', age: '35分前' },
      ],
    },
    es: {
      title: '¿Puedo usar códigos cheat de Modern Warfare en matchmaking clasificado?',
      excerpt: 'Respuesta del guía de lobby de práctica: los comandos integrados solo funcionan en partidas custom con cheats activados.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía de códigos Modern Warfare: comandos de consola para lobbies de práctica',
      body: [
        'No. Partidas privadas y lobbies de bots son solo práctica. No aplican en clasificatorio ni Warzone.',
        'Usa Training para suavizado de puntería, rangos ESP y clases. El guía también explica la diferencia entre drills y cheats privados de buymw4cheats.com.',
      ],
      comments: [
        { body: 'Correcto: mapa de puntería en Training o lobby de bots antes de tocar presets de clasificado.', age: 'hace 1 hora' },
        { body: 'El guía cubre bastón, arco y arma. Mantén presets conservadores tras practicar.', age: 'hace 48 min' },
        { body: 'Distinción útil. Herramientas de partida privada no son funciones de clasificado.', age: 'hace 35 min' },
      ],
    },
    fr: {
      title: 'Puis-je utiliser des codes cheat Modern Warfare en matchmaking classé ?',
      excerpt: 'Réponse du guide lobby d’entraînement : les commandes intégrées ne marchent qu’en custom avec cheats activés.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide codes cheat Modern Warfare : commandes console pour lobbies d’entraînement',
      body: [
        'Non. Les matchs privés et lobbies bots servent à l’entraînement. Ils ne s’appliquent pas au classé ni à Warzone.',
        'Utilisez Training pour le lissage de visée, les portées ESP et les classes. Le guide distingue aussi drills d’entraînement et cheats privés buymw4cheats.com.',
      ],
      comments: [
        { body: 'Exact : map de visée Training ou lobby bots avant les presets classé.', age: 'il y a 1 h' },
        { body: 'Le guide couvre bâton, arc et fusil. Gardez des presets classé conservateurs après.', age: 'il y a 48 min' },
        { body: 'Distinction utile. Les outils de match privé ne sont pas des fonctions classé.', age: 'il y a 35 min' },
      ],
    },
  },
  'how-to-enable-the-mw4-2-console': {
    ko: {
      title: 'Modern Warfare 개발자 콘솔은 어떻게 켜나요?',
      excerpt: '설정 → 옵션 → 고급에서 콘솔을 활성화하세요. walkthrough 요약입니다.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare에서 치트 코드 사용하는 방법',
      body: [
        '설정에서 옵션을 고른 뒤 고급 옵션에서 개발자 콘솔을 켭니다. 커스텀 로비에서 콘솔 키(보통 ~)를 누르고 명령을 입력하세요. 호스트가 로비 설정에서 치트를 켜야 합니다.',
        '명령이 안 먹히면 해당 로비에서 치트가 활성화됐는지, 구문이 맞는지 확인하세요.',
      ],
      comments: [
        { body: '키보드 레이아웃에 ~가 없으면 단축키 설정에서 콘솔 키를 바인딩할 수 있어요.', age: '3시간 전' },
        { body: '명령은 로비 권한이 필요합니다. 관전자는 경제 명령을 못 쓸 수 있어요.', age: '2시간 전' },
      ],
    },
    'zh-tw': {
      title: '如何開啟 Modern Warfare 開發者主控台？',
      excerpt: '設定 → 選項 → 進階中啟用主控台。以下為教學摘要。',
      flair: '指南 Q&A',
      sourceTitle: '如何在 Modern Warfare 使用作弊碼',
      body: [
        '開啟設定，選擇選項，再進入進階選項啟用開發者主控台。自訂大廳中按主控台鍵（通常是 ~）輸入指令，且房主須在大廳設定開啟作弊。',
        '若指令無效，先確認該大廳已啟用作弊並檢查語法。',
      ],
      comments: [
        { body: '若鍵盤沒有 ~，可在熱鍵設定綁定主控台鍵。', age: '3 小時前' },
        { body: '指令需要大廳權限；觀戰者可能無法使用經濟相關指令。', age: '2 小時前' },
      ],
    },
    de: {
      title: 'Wie aktiviere ich die Modern-Warfare-Entwicklerkonsole?',
      excerpt: 'Einstellungen → Optionen → Erweitert: Konsole aktivieren. Kurz aus unserer Anleitung.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Cheat-Codes in Modern Warfare nutzen',
      body: [
        'Öffne Einstellungen, wähle Optionen, dann Erweiterte Optionen und aktiviere die Entwicklerkonsole. In einer Custom-Lobby die Konsolentaste (meist ~) drücken und Befehl eingeben. Der Host muss Cheats in den Lobby-Einstellungen aktivieren.',
        'Reagiert ein Befehl nicht, prüfe, ob Cheats in dieser Lobby aktiv sind und ob die Syntax stimmt.',
      ],
      comments: [
        { body: 'Du kannst die Konsolentaste in den Hotkey-Einstellungen binden, wenn ~ auf deinem Layout fehlt.', age: 'vor 3 Stunden' },
        { body: 'Befehle brauchen Lobby-Rechte; Zuschauer können Wirtschaftsbefehle evtl. nicht nutzen.', age: 'vor 2 Stunden' },
      ],
    },
    'pt-br': {
      title: 'Como ativar o console de desenvolvedor do Modern Warfare?',
      excerpt: 'Configurações → Opções → Avançado e ative o console. Resumo do nosso passo a passo.',
      flair: 'Q&A do guia',
      sourceTitle: 'Como usar códigos cheat no Modern Warfare',
      body: [
        'Abra Configurações, escolha Opções, depois Opções avançadas e ative o console de desenvolvedor. Em lobby custom, pressione a tecla do console (geralmente ~) e digite o comando. O host precisa ativar cheats nas configurações do lobby.',
        'Se nada acontecer, confirme cheats ativos nesse lobby e a sintaxe do comando.',
      ],
      comments: [
        { body: 'Se ~ não existir no teclado, vincule a tecla do console nas hotkeys.', age: 'há 3 horas' },
        { body: 'Comandos exigem permissão de lobby; espectadores podem não usar comandos de economia.', age: 'há 2 horas' },
      ],
    },
    th: {
      title: 'เปิดคอนโซลนักพัฒนา Modern Warfare อย่างไร?',
      excerpt: 'ตั้งค่า → ตัวเลือก → ขั้นสูง แล้วเปิดคอนโซล สรุปจากคู่มือ',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'วิธีใช้รหัส cheat ใน Modern Warfare',
      body: [
        'เปิดตั้งค่า เลือกตัวเลือก แล้วเปิดตัวเลือกขั้นสูงและเปิดคอนโซลนักพัฒนา ในลobbies กำหนดเองกดปุ่มคอนโซล (มักเป็น ~) แล้วพิมพ์คำสั่ง โฮสต์ต้องเปิด cheat ในการตั้งค่าลobbies',
        'ถ้าคำสั่งไม่ทำงาน ตรวจว่าเปิด cheat ในลobbiesนั้นและ syntax ถูกต้อง',
      ],
      comments: [
        { body: 'ถ้าไม่มี ~ ให้ bind ปุ่มคอนโซลใน hotkey', age: '3 ชม. ที่แล้ว' },
        { body: 'คำสั่งต้องมีสิทธิ์ลobbies ผู้ชมอาจใช้คำสั่ง economy ไม่ได้', age: '2 ชม. ที่แล้ว' },
      ],
    },
    ja: {
      title: 'Modern Warfare の開発者コンソールの開き方は？',
      excerpt: '設定 → オプション → 詳細でコンソールを有効化。手順の要約です。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare でチートコードを使う方法',
      body: [
        '設定を開き、オプション→詳細オプションで開発者コンソールを有効にします。カスタムロビーでコンソールキー（通常 ~）を押してコマンド入力。ホストがロビー設定でチートを有効にする必要があります。',
        '反応がなければ、そのロビーでチートが有効か、構文を確認してください。',
      ],
      comments: [
        { body: '~ がないレイアウトではホットキー設定でコンソールキーを割り当てできます。', age: '3時間前' },
        { body: 'コマンドにはロビー権限が必要。観戦者は経済コマンドを使えない場合があります。', age: '2時間前' },
      ],
    },
    es: {
      title: '¿Cómo activo la consola de desarrollador de Modern Warfare?',
      excerpt: 'Ajustes → Opciones → Avanzado y activa la consola. Resumen de nuestra guía.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Cómo usar códigos cheat en Modern Warfare',
      body: [
        'Abre Ajustes, elige Opciones, luego Opciones avanzadas y activa la consola de desarrollador. En lobby custom, pulsa la tecla de consola (suele ser ~) e introduce el comando. El anfitrión debe activar cheats en el lobby.',
        'Si un comando no hace nada, confirma cheats activos en ese lobby y la sintaxis.',
      ],
      comments: [
        { body: 'Si no tienes ~, vincula la tecla de consola en atajos.', age: 'hace 3 horas' },
        { body: 'Los comandos requieren permisos de lobby; espectadores quizá no usen comandos de economía.', age: 'hace 2 horas' },
      ],
    },
    fr: {
      title: 'Comment activer la console développeur Modern Warfare ?',
      excerpt: 'Paramètres → Options → Avancé, activez la console. Résumé de notre guide.',
      flair: 'Q&R guide',
      sourceTitle: 'Utiliser les codes cheat dans Modern Warfare',
      body: [
        'Ouvrez Paramètres, Options, puis Options avancées et activez la console développeur. En lobby custom, touche console (souvent ~) et commande. L’hôte doit activer les cheats dans le lobby.',
        'Si une commande ne répond pas, vérifiez cheats activés et syntaxe.',
      ],
      comments: [
        { body: 'Sans ~, liez la touche console dans les raccourcis.', age: 'il y a 3 h' },
        { body: 'Les commandes exigent des droits lobby ; les spectateurs peuvent ne pas utiliser l’économie.', age: 'il y a 2 h' },
      ],
    },
  },
  'practice-mw4-high-ground-safely': {
    ko: {
      title: '고지대 스폿은 어떻게 안전하게 연습하나요?',
      excerpt: 'Training이나 ESP 봇 로비로 시야를 익힌 뒤, 오버레이 없이 교전하세요.',
      flair: '가이드 Q&A',
      sourceTitle: '에임봇·ESP 연습용 Modern Warfare Training 팁',
      body: [
        'Training이나 봇 로비에서 연습하세요. ESP 박스를 잠깐 켜 고지 각도와 낙하 지점을 본 뒤, 오버레이를 줄이고 싸우세요.',
        '같은 구역 클리어를 몇 번 반복하면 랭크 한 판을 기다리지 않고 시야가 익숙해집니다.',
      ],
      comments: [
        { body: 'ESP 켠 채 피킹 후 박스 끄고 같은 각도 다시 확인해요. 고지 커버에 도움됩니다.', age: '5시간 전' },
        { body: 'Training에서 같은 경로 반복이 랭크에서만 배우는 것보다 낫습니다.', age: '4시간 전' },
      ],
    },
    'zh-tw': {
      title: '如何安全練習制高點位置？',
      excerpt: '用 Training 或 ESP 機器人大廳看視線，再關閉 overlay 實戰。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare Training：自瞄與 ESP 練習技巧',
      body: [
        '在 Training 或機器人大廳練習。短開 ESP 框看制高角度與落點，再縮小 overlay 戰鬥。',
        '重複清同一區域幾次，不必等一整場排位也能記住視線。',
      ],
      comments: [
        { body: '開 ESP  peek 後關框再確認同一角度，對制高掩護有幫助。', age: '5 小時前' },
        { body: '在 Training 重走同一路徑比只在排位學更好。', age: '4 小時前' },
      ],
    },
    de: {
      title: 'Wie übt man High-Ground-Spots am sichersten?',
      excerpt: 'Training oder Bot-Lobby mit ESP für Sichtlinien, dann ohne Overlay kämpfen.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Training-Tipps für Aimbot- und ESP-Übung',
      body: [
        'Übe in Training oder Bot-Lobby. ESP-Boxen kurz aktivieren, High-Ground-Winkel und Drops prüfen, dann Overlay minimieren und kämpfen.',
        'Dieselbe Zone mehrfach clearen, damit Sichtlinien hängen bleiben, ohne auf Ranked zu warten.',
      ],
      comments: [
        { body: 'Mit ESP peeken, Boxen aus, gleichen Winkel erneut prüfen – hilft bei High Ground.', age: 'vor 5 Stunden' },
        { body: 'Gleichen Pfad in Training wiederholen schlägt Nur-in-Ranked-Lernen.', age: 'vor 4 Stunden' },
      ],
    },
    'pt-br': {
      title: 'Qual a forma mais segura de treinar posições elevadas?',
      excerpt: 'Use Training ou lobby de bots com ESP para linhas de visão, depois lute sem fixar no overlay.',
      flair: 'Q&A do guia',
      sourceTitle: 'Dicas de Training Modern Warfare para aimbot e ESP',
      body: [
        'Pratique no Training ou lobby de bots. Ative caixas ESP brevemente para ângulos elevados e quedas, depois minimize o overlay e lute.',
        'Repita a mesma limpeza de zona para fixar linhas de visão sem esperar partida ranqueada.',
      ],
      comments: [
        { body: 'Dou peek com ESP, desligo caixas e reverifico o ângulo. Ajuda em cobertura elevada.', age: 'há 5 horas' },
        { body: 'Repetir o mesmo caminho no Training supera aprender só no ranqueado.', age: 'há 4 horas' },
      ],
    },
    th: {
      title: 'ฝึกจุดสูงอย่างปลอดภัยทำอย่างไร?',
      excerpt: 'ใช้ Training หรือบอทลobbies กับ ESP ดูเส้นสายตา แล้วสู้โดยไม่จ้อง overlay',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'เคล็ดลับ Training Modern Warfare สำหรับ aimbot และ ESP',
      body: [
        'ฝึกใน Training หรือบอทลobbies เปิด ESP สั้นๆ ดูมุมสูงและจุดดรอป แล้วลด overlay ลงสู้',
        'เคลียร์โซนเดิมซ้ำหลายครั้ง จำเส้นสายตาได้โดยไม่ต้องรอแมตช์แรงค์',
      ],
      comments: [
        { body: 'peek ด้วย ESP แล้วปิดกล่องเช็คมุมเดิม ช่วยคุมพื้นที่สูง', age: '5 ชม. ที่แล้ว' },
        { body: 'เดินเส้นทางเดิมใน Training ดีกว่าเรียนแค่ในแรงค์', age: '4 ชม. ที่แล้ว' },
      ],
    },
    ja: {
      title: '高所ポジションを安全に練習するには？',
      excerpt: 'Training か ESP 付きボットロビーで射線を学び、オーバーレイを見ないで戦う。',
      flair: 'ガイド Q&A',
      sourceTitle: 'エイムボット・ESP 練習向け Modern Warfare Training  tips',
      body: [
        'Training またはボットロビーで練習。ESP ボックスを短くオンにして高所角度とドロップを確認し、オーバーレイを最小にして戦ってください。',
        '同じゾーンクリアを数回繰り返すと、ランクマッチを待たずに射線が身につきます。',
      ],
      comments: [
        { body: 'ESP でピークしてからボックス off、同じ角度を再確認。高所カバーに効く。', age: '5時間前' },
        { body: 'Training で同じルートを繰り返す方がランクだけより良い。', age: '4時間前' },
      ],
    },
    es: {
      title: '¿La forma más segura de practicar posiciones en altura?',
      excerpt: 'Training o lobby de bots con ESP para líneas de visión; luego pelea sin mirar el overlay.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Consejos Training Modern Warfare para aimbot y ESP',
      body: [
        'Practica en Training o lobby de bots. Activa cajas ESP un momento para ángulos elevados y caídas, minimiza el overlay y pelea.',
        'Repite la misma limpieza de zona para fijar líneas de visión sin esperar una partida clasificada.',
      ],
      comments: [
        { body: 'Asomo con ESP, apago cajas y reviso el mismo ángulo. Ayuda en cobertura elevada.', age: 'hace 5 horas' },
        { body: 'Repetir la misma ruta en Training supera aprender solo en clasificado.', age: 'hace 4 horas' },
      ],
    },
    fr: {
      title: 'Comment s’entraîner aux positions en hauteur en sécurité ?',
      excerpt: 'Training ou lobby bots avec ESP pour les lignes de vue, puis combattez sans fixer l’overlay.',
      flair: 'Q&R guide',
      sourceTitle: 'Conseils Training Modern Warfare pour aimbot et ESP',
      body: [
        'Entraînez-vous en Training ou lobby bots. Activez brièvement les boîtes ESP pour angles et drops, réduisez l’overlay et combattez.',
        'Répétez le même clear de zone pour mémoriser les lignes de vue sans attendre une partie classée.',
      ],
      comments: [
        { body: 'Je peek avec ESP, j’éteins les boîtes et revérifie l’angle. Utile pour la hauteur.', age: 'il y a 5 h' },
        { body: 'Rejouer le même chemin en Training vaut mieux qu’apprendre seulement en classé.', age: 'il y a 4 h' },
      ],
    },
  },
  'what-to-check-after-a-mw4-2-patch': {
    ko: {
      title: 'Modern Warfare 패치 후 플레이 전에 무엇을 확인해야 하나요?',
      excerpt: '패치 당일 체크리스트: 빌드 상태 확인, 업데이트, 봇 로비 테스트 후 큐.',
      flair: '가이드 Q&A',
      sourceTitle: 'Ricochet 패치 당일 체크리스트',
      body: [
        '먼저 buymw4cheats.com의 현재 빌드/상태 공지를 확인하세요. 게임 업데이트 후 호환 빌드를 기다리고, 로더를 업데이트한 뒤 봇/프라이빗 매치에서 설정을 검증하고 랭크로 돌아가세요.',
        '이상 동작이 있으면 멈추고 상태 메모를 확인하세요. 예전 설정이 그대로라고 가정하지 마세요. 체크리스트에 패치 루틴이 자세히 있습니다.',
      ],
      comments: [
        { body: '예전엔 업데이트 후 랭크 바로 갔는데, 이제 빌드 노트 보고 봇 로비 한 판 돌립니다.', age: '8시간 전' },
        { body: '동의. 빌드/상태가 안 맞으면 기다리는 게 낫습니다. 추측보다 체크리스트.', age: '7시간 전' },
      ],
    },
    'zh-tw': {
      title: 'Modern Warfare 更新後開打前要檢查什麼？',
      excerpt: '更新日清單：查 build 狀態、更新、在機器人大廳測試再排隊。',
      flair: '指南 Q&A',
      sourceTitle: 'Ricochet 更新日檢查清單',
      body: [
        '先看 buymw4cheats.com 目前的 build/狀態公告。遊戲更新後等相容 build，更新 loader，在 bot 或私人對戰驗證設定再回排位。',
        '若行為異常就停下來看狀態說明，別假設舊設定仍有效。清單有更完整的更新日流程。',
      ],
      comments: [
        { body: '以前更新後直接排位，現在會看 build 說明並跑一場 bot。', age: '8 小時前' },
        { body: '同意。build 沒跟上就等，清單比瞎猜好。', age: '7 小時前' },
      ],
    },
    de: {
      title: 'Was prüfen vor dem Spielen nach einem Modern-Warfare-Patch?',
      excerpt: 'Patch-Day-Checkliste: Build-Status, Update, Bot-Lobby-Test vor der Queue.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Ricochet Patch-Day-Checkliste',
      body: [
        'Zuerst aktuellen Build-/Status-Hinweis auf buymw4cheats.com lesen. Nach Game-Update auf kompatiblen Build warten, Loader updaten, Setup in Bot-/Private-Match prüfen, dann Ranked.',
        'Bei unerwartetem Verhalten stoppen und Statusnotizen lesen – altes Setup nicht voraussetzen. Checkliste beschreibt die Routine.',
      ],
      comments: [
        { body: 'Früher direkt Ranked nach Update – jetzt Build-Note und kurze Bot-Lobby.', age: 'vor 8 Stunden' },
        { body: 'Zustimmung. Wenn Build/Status hinterherhinkt, warten. Checkliste schlägt Raten.', age: 'vor 7 Stunden' },
      ],
    },
    'pt-br': {
      title: 'O que verificar antes de jogar após um patch do Modern Warfare?',
      excerpt: 'Checklist de dia de patch: status do build, update, teste em lobby de bots antes da fila.',
      flair: 'Q&A do guia',
      sourceTitle: 'Checklist Ricochet no dia do patch',
      body: [
        'Confira primeiro o aviso de build/status em buymw4cheats.com. Após update do jogo, espere build compatível, atualize o loader, valide em bot/partida privada antes do ranqueado.',
        'Se algo falhar, pare e leia as notas de status; não assuma que o setup antigo ainda vale. A checklist detalha a rotina.',
      ],
      comments: [
        { body: 'Eu ia direto pro ranqueado após update; agora leio a nota e rodo bot lobby rápido.', age: 'há 8 horas' },
        { body: 'Concordo. Se build/status não acompanhou, espere. Checklist > chute.', age: 'há 7 horas' },
      ],
    },
    th: {
      title: 'หลังแพตช์ Modern Warfare ควรเช็คอะไรก่อนเล่น?',
      excerpt: 'เช็กลิสต์วันแพตช์: สถานะ build อัปเดต ทดสอบบอทก่อนคิว',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'เช็กลิสต์วันแพตช์ Ricochet',
      body: [
        'ดูประกาศ build/สถานะล่าสุดที่ buymw4cheats.com ก่อน หลังอัปเดตเกมรอ build ที่เข้ากัน อัปเดต loader ทดสอบในบอท/แมตช์ส่วนตัวก่อนกลับแรงค์',
        'ถ้าผิดปกติให้หยุดและอ่านโน้ตสถานะ อย่าคิดว่า setup เดิมยังใช้ได้ เช็กลิสต์มีรoutine ละเอียด',
      ],
      comments: [
        { body: 'เคยข้ามไปแรงค์หลังอัปเดต ตอนนี้ดู build note แล้วรันบอทสั้นๆ', age: '8 ชม. ที่แล้ว' },
        { body: 'เห็นด้วย ถ้า build ยังไม่ทันรอ เช็กลิสต์ดีกว่าเดา', age: '7 ชม. ที่แล้ว' },
      ],
    },
    ja: {
      title: 'Modern Warfare パッチ後、プレイ前に何を確認する？',
      excerpt: 'パッチ当日チェック：ビルド状態、更新、ボットロビーでテストしてからキュー。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Ricochet パッチ当日チェックリスト',
      body: [
        'まず buymw4cheats.com の現行ビルド/ステータスを確認。ゲーム更新後は互換ビルドを待ち、ローダーを更新し、ボット/プライベートでセットアップを確認してからランクへ。',
        '挙動がおかしければ停止しステータスを読む。旧設定が有効とは限りません。チェックリストに詳しい手順があります。',
      ],
      comments: [
        { body: '更新後すぐランクしてたが、今はビルドノートと短いボットロビー。', age: '8時間前' },
        { body: '同感。ビルドが追いついてなければ待つ。当てずっぽうよりチェックリスト。', age: '7時間前' },
      ],
    },
    es: {
      title: '¿Qué revisar antes de jugar tras un parche de Modern Warfare?',
      excerpt: 'Lista del día del parche: estado del build, actualizar, probar en lobby bots antes de cola.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Lista Ricochet para el día del parche',
      body: [
        'Consulta primero el aviso de build/estado en buymw4cheats.com. Tras la actualización del juego, espera build compatible, actualiza el loader, verifica en bot/privada antes del clasificado.',
        'Si algo falla, para y lee las notas; no asumas que el setup antiguo sigue. La lista detalla la rutina.',
      ],
      comments: [
        { body: 'Antes iba directo a clasificado; ahora leo la nota de build y hago bot lobby rápido.', age: 'hace 8 horas' },
        { body: 'De acuerdo. Si el build no alcanzó, espera. Lista > adivinar.', age: 'hace 7 horas' },
      ],
    },
    fr: {
      title: 'Que vérifier avant de jouer après un patch Modern Warfare ?',
      excerpt: 'Checklist jour de patch : statut du build, mise à jour, test bot lobby avant la file.',
      flair: 'Q&R guide',
      sourceTitle: 'Checklist Ricochet jour de patch',
      body: [
        'Consultez d’abord l’avis build/statut sur buymw4cheats.com. Après mise à jour du jeu, attendez un build compatible, mettez à jour le loader, vérifiez en bot/privé avant le classé.',
        'En cas de comportement inattendu, stoppez et lisez les notes ; ne supposez pas l’ancien setup. La checklist détaille la routine.',
      ],
      comments: [
        { body: 'J’allais en classé juste après la MAJ ; maintenant note de build et bot lobby rapide.', age: 'il y a 8 h' },
        { body: 'D’accord. Si le build n’a pas suivi, attendez. Checklist > deviner.', age: 'il y a 7 h' },
      ],
    },
  },
  'mw4-2-lite-or-pro-hero-scripts': {
    ko: {
      title: 'Lite vs Pro: 어느 티어에 플레이어 에임봇이 있나요?',
      excerpt: '비교 가이드: Lite는 시야 도구, Pro는 스크립트 모듈 추가.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro 기능 비교',
      body: [
        '비교 가이드에 따르면 Lite는 플레이어 ESP, 드롭/루트 정보, 줌, 스트림 프루프 등 맵 인식에 집중합니다. Pro는 이를 포함하고 Aimbot, Aim smoothing, Target lock, Bone Priority, 핫키 매크로 등 에임봇을 추가합니다.',
        '필요한 기능에 따라 선택하세요. 결정 전 전체 비교를 읽어보세요.',
      ],
      comments: [
        { body: '비교 페이지가 각 티어에 어떤 모듈이 있는지 헤드라인만이 아니라 보여줘서 유용합니다.', age: '10시간 전' },
      ],
    },
    'zh-tw': {
      title: 'Lite 還是 Pro：哪個方案含玩家自瞄？',
      excerpt: '比較指南：Lite 偏視野工具，Pro 加腳本模組。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro 功能比較',
      body: [
        '比較指南指出 Lite 聚焦玩家 ESP、掉落/戰利品資訊、縮放與防錄影等。Pro 在此基礎上加入 Aimbot、平滑、鎖定、骨骼優先與熱鍵巨集等。',
        '依需求選擇，決定前請讀完整比較。',
      ],
      comments: [
        { body: '比較頁清楚列出各方案模組，比只看標題有用。', age: '10 小時前' },
      ],
    },
    de: {
      title: 'Lite oder Pro: Welche Stufe enthält Player-Aimbot?',
      excerpt: 'Vergleichsguide: Lite = Vision-Tools, Pro = Skriptmodule.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro: Feature-Vergleich',
      body: [
        'Laut Vergleich fokussiert Lite ESP, Drop-/Loot-Infos, Zoom und Stream-Proof. Pro enthält das plus Aimbot, Smoothing, Target Lock, Bone Priority und Hotkey-Makros.',
        'Wähle nach Bedarf; lies den vollständigen Vergleich vor der Entscheidung.',
      ],
      comments: [
        { body: 'Die Vergleichsseite zeigt Module pro Stufe – besser als nur Überschriften.', age: 'vor 10 Stunden' },
      ],
    },
    'pt-br': {
      title: 'Lite ou Pro: qual tier inclui aimbot de jogador?',
      excerpt: 'Guia comparativo: Lite foca visão; Pro adiciona scripts.',
      flair: 'Q&A do guia',
      sourceTitle: 'Modern Warfare Lite vs Pro: comparação de recursos',
      body: [
        'O guia descreve Lite com ESP, info de drop/loot, zoom e stream-proof. Pro inclui tudo isso mais Aimbot, suavização, target lock, bone priority e macros.',
        'Escolha pelo que precisa; leia a comparação completa antes.',
      ],
      comments: [
        { body: 'A página de comparação mostra módulos por tier, não só manchetes.', age: 'há 10 horas' },
      ],
    },
    th: {
      title: 'Lite หรือ Pro: tier ไหนมี aimbot ผู้เล่น?',
      excerpt: 'คู่มือเปรียบเทียบ: Lite เน้นมองเห็น Pro เพิ่มสคริปต์',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'Modern Warfare Lite vs Pro: เปรียบเทียบฟีเจอร์',
      body: [
        'คู่มือบอก Lite เน้น ESP ข้อมูลดรอป/loot ซูม stream-proof Pro มีทั้งหมดนั้นบวก Aimbot smoothing lock bone priority และ hotkey macro',
        'เลือกตามที่ต้องการ อ่านเปรียบเทียบเต็มก่อนตัดสินใจ',
      ],
      comments: [
        { body: 'หน้าเปรียบเทียบบอกโมดูลแต่ละ tier ชัดกว่าแค่หัวข้อ', age: '10 ชม. ที่แล้ว' },
      ],
    },
    ja: {
      title: 'Lite と Pro：どちらにプレイヤーエイムボット？',
      excerpt: '比較ガイド：Lite は視界、Pro はスクリプト追加。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro 機能比較',
      body: [
        '比較ガイドでは Lite は ESP、ドロップ/ルート情報、ズーム、ストリームプルーフ中心。Pro はそれに加え Aimbot、スムージング、ターゲットロック、ボーン優先、ホットキーマクロ等。',
        '必要機能で選び、決める前に全文比較を読んでください。',
      ],
      comments: [
        { body: '比較ページは各 tier のモジュールが見えて便利。', age: '10時間前' },
      ],
    },
    es: {
      title: '¿Lite o Pro: qué tier incluye aimbot de jugador?',
      excerpt: 'Guía comparativa: Lite = visión; Pro añade scripts.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Modern Warfare Lite vs Pro: comparación de funciones',
      body: [
        'Lite se centra en ESP, info de botín/drops, zoom y stream-proof. Pro añade Aimbot, suavizado, target lock, bone priority y macros.',
        'Elige según necesidad; lee la comparación completa antes.',
      ],
      comments: [
        { body: 'La página comparativa muestra módulos por tier, no solo titulares.', age: 'hace 10 horas' },
      ],
    },
    fr: {
      title: 'Lite ou Pro : quel tier inclut l’aimbot joueur ?',
      excerpt: 'Guide comparatif : Lite = vision ; Pro ajoute des scripts.',
      flair: 'Q&R guide',
      sourceTitle: 'Modern Warfare Lite vs Pro : comparaison des fonctions',
      body: [
        'Lite vise ESP, infos loot/drops, zoom et stream-proof. Pro ajoute Aimbot, lissage, verrouillage, priorité os et macros.',
        'Choisissez selon vos besoins ; lisez la comparaison complète avant.',
      ],
      comments: [
        { body: 'La page compare les modules par tier, pas seulement les titres.', age: 'il y a 10 h' },
      ],
    },
  },
  'how-to-learn-weapon-aim-in-creative': {
    ko: {
      title: '실전 매치 없이 무기 에임은 어떻게 연습하나요?',
      excerpt: '프라이빗 매치나 봇 로비에서 스태프·활·총 프로필을 리셋하며 반복 드릴.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 프라이빗 매치: 랭크 전 스킬 드릴',
      body: [
        '프라이빗 매치나 봇 로비를 만드세요. 스태프, 활, 총 클래스를 하나씩 연습하고 시도마다 리셋하세요.',
        '현실적인 타이밍을 위해 라이브 전에 Training에서 랭크 스무딩 값을 쓰세요. 링크된 가이드에 전체 워크플로가 있습니다.',
      ],
      comments: [
        { body: '봇 타깃 하나로 같은 스킬 체인을 반복하면 트래킹이 자동처럼 느껴질 때까지.', age: '20시간 전' },
        { body: '랭크 프리셋은 보수적으로—Training은 리플레이에서 에임이 얼마나 날카로운지 가릴 수 있어요.', age: '18시간 전' },
      ],
    },
    'zh-tw': {
      title: '不排實戰如何練武器瞄準？',
      excerpt: '開私人對戰或機器人大廳，分別練法杖、弓、槍並可重置。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 私人對戰：排位前技能訓練',
      body: [
        '建立私人對戰或機器人大廳。一次練一種職業輪廓—法杖、弓、槍—每次嘗試後重置。',
        '要貼近實戰節奏，先在 Training 用排位平滑值，再在 live 啟用 aimbot。連結指南有完整流程。',
      ],
      comments: [
        { body: '對單一 bot 重複同一技能鏈直到追蹤變自動化。', age: '20 小時前' },
        { body: '排位預設保守—Training 可能掩蓋重播裡瞄準有多 snap。', age: '18 小時前' },
      ],
    },
    de: {
      title: 'Waffenziel üben ohne auf echte Matches zu warten?',
      excerpt: 'Private Match oder Bot-Lobby: Staff-, Bogen-, Waffenprofile mit Reset-Drills.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Private Match: Skill-Drills vor Ranked',
      body: [
        'Erstelle Private Match oder Bot-Lobby. Profiere nacheinander Staff, Bogen, Waffe – zwischen Versuchen resetten.',
        'Für realistisches Timing Ranked-Smoothing in Training nutzen, bevor Aimbot live geht. Der verlinkte Guide beschreibt den Workflow.',
      ],
      comments: [
        { body: 'Einen Bot, dieselbe Skill-Kette wiederholen, bis Tracking automatisch wirkt.', age: 'vor 20 Stunden' },
        { body: 'Ranked-Presets konservativ – Training kann verbergen, wie snapig die Aim in Replays wirkt.', age: 'vor 18 Stunden' },
      ],
    },
    'pt-br': {
      title: 'Como praticar mira de armas sem esperar partida real?',
      excerpt: 'Partida privada ou lobby de bots: perfis staff, arco e arma com resets.',
      flair: 'Q&A do guia',
      sourceTitle: 'Partida privada Modern Warfare: drills antes do ranqueado',
      body: [
        'Crie partida privada ou lobby de bots. Pratique um perfil por vez—staff, arco, arma—e resete entre tentativas.',
        'Para timing realista, use suavização ranqueada no Training antes do aimbot ao vivo. O guia linkado cobre o fluxo.',
      ],
      comments: [
        { body: 'Um alvo bot e repetir a mesma cadeia até o tracking parecer automático.', age: 'há 20 horas' },
        { body: 'Presets ranqueados conservadores—Training esconde o quão snap a mira fica nos replays.', age: 'há 18 horas' },
      ],
    },
    th: {
      title: 'ฝึมเล็งอาวุธโดยไม่รอแมตช์จริง?',
      excerpt: 'แมตช์ส่วนตัวหรือบอท: ฝึก staff ธนู ปืน รีเซ็ตซ้ำ',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'แมตช์ส่วนตัว Modern Warfare: drill ก่อนแรงค์',
      body: [
        'สร้างแมตช์ส่วนตัวหรือบอทลobbies ฝึกทีละโปรไฟล์ staff ธนู ปืน รีเซ็ตระหว่างครั้ง',
        'ใช้ค่า smoothing แรงค์ใน Training ก่อนเปิด aimbot ในเกมจริง คู่มือที่ลิงก์มี workflow เต็ม',
      ],
      comments: [
        { body: 'เป้าบอทเดียว ซ้ำสkill chain เดิมจน tracking รู้สึกอัตโนมัติ', age: '20 ชม. ที่แล้ว' },
        { body: 'พรีเซ็ตแรงค์ conservative Training อาจซ่อนว่า aim snap ใน replay', age: '18 ชม. ที่แล้ว' },
      ],
    },
    ja: {
      title: '実戦を待たず武器エイムを練習するには？',
      excerpt: 'プライベートまたはボットロビーで杖・弓・銃プロファイルをリセット練習。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare プライベートマッチ：ランク前スキルドリル',
      body: [
        'プライベートマッチかボットロビーを作成。杖、弓、銃を一度に一つずつ練習し、試行ごとにリセット。',
        'リアルなタイミングのため、ライブ前に Training でランクスムージング値を。リンクガイドに全体ワークフロー。',
      ],
      comments: [
        { body: 'ボット1体で同じスキルチェーンを追跡が自動化するまで繰り返す。', age: '20時間前' },
        { body: 'ランクプリセットは控えめに—Training はリプレイでの snap 具合を隠すことがある。', age: '18時間前' },
      ],
    },
    es: {
      title: '¿Cómo practicar puntería sin esperar partida real?',
      excerpt: 'Partida privada o lobby bots: perfiles bastón, arco y arma con resets.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Partida privada Modern Warfare: drills antes del clasificado',
      body: [
        'Crea partida privada o lobby de bots. Practica un perfil a la vez—bastón, arco, arma—y resetea entre intentos.',
        'Para timing realista, usa suavizado de clasificado en Training antes del aimbot en vivo. El guía enlazado cubre el flujo.',
      ],
      comments: [
        { body: 'Un bot y repetir la misma cadena hasta que el tracking se sienta automático.', age: 'hace 20 horas' },
        { body: 'Presets clasificados conservadores—Training puede ocultar lo snap que se ve la mira en replays.', age: 'hace 18 horas' },
      ],
    },
    fr: {
      title: 'Comment s’entraîner à la visée sans attendre une vraie partie ?',
      excerpt: 'Match privé ou lobby bots : profils bâton, arc, fusil avec resets.',
      flair: 'Q&R guide',
      sourceTitle: 'Match privé Modern Warfare : drills avant classé',
      body: [
        'Créez match privé ou lobby bots. Un profil à la fois—bâton, arc, fusil—reset entre essais.',
        'Pour un timing réaliste, lissage classé en Training avant aimbot en live. Le guide lié couvre le flux.',
      ],
      comments: [
        { body: 'Une cible bot, même enchaînement jusqu’à tracking automatique.', age: 'il y a 20 h' },
        { body: 'Presets classé conservateurs—Training peut masquer le côté snap en replay.', age: 'il y a 18 h' },
      ],
    },
  },
  'what-does-mw4-map-awareness-include': {
    ko: {
      title: '가이드에서 맵 인식(ESP)에는 무엇이 포함되나요?',
      excerpt: '플레이어, 상자, 루트, 은신 정보 등 맵 인식 가이드 범위 요약.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare ESP 월핵 설정 가이드',
      body: [
        '가이드는 플레이어 ESP, 루트·상자 마커, 루트 정보, 은신 알림, 마지막 목격 위치를 다룹니다. 옵션은 선택한 제품 티어에 따라 다릅니다.',
        '팀fight에서 읽기 편한 정보만 켜는 절제된 레이아웃으로 시작하라고 권장합니다.',
      ],
      comments: [{ body: '오버레이는 깔끔하게: 핵심 지표부터 켜고 거리·가시성은 하나씩 조정하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '指南中的 map awareness（ESP）包含哪些？',
      excerpt: '玩家、箱體、戰利品與潛行提示等資訊範圍摘要。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare ESP 透視設定指南',
      body: [
        '指南涵蓋玩家 ESP、戰利品與箱標記、戰利品資訊、潛行警示與最後目擊位置。實際選項依產品 tier 而定。',
        '建議從精簡版面開始，只開團戰中讀得舒服的資訊。',
      ],
      comments: [{ body: '保持 overlay 清爽：先開核心指示，再逐一調距離與可見度。', age: '摘自指南' }],
    },
    de: {
      title: 'Was umfasst Map Awareness im Guide?',
      excerpt: 'Kurzüberblick: Spieler, Kisten, Loot, Stealth-Infos.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare ESP-Wallhack-Setup',
      body: [
        'Der Guide deckt Player-ESP, Loot-/Kistenmarker, Loot-Infos, Stealth-Warnungen und Last-Seen-Positionen ab – je nach Produktstufe.',
        'Starte mit reduziertem Layout und nur Infos, die du im Teamfight lesen kannst.',
      ],
      comments: [{ body: 'Overlay uncluttered halten: Kernindikatoren zuerst, Reichweite/Sichtbarkeit nacheinander.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'O que inclui map awareness no guia?',
      excerpt: 'Resumo de jogador, caixas, loot e alertas stealth.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia de setup ESP wallhack Modern Warfare',
      body: [
        'Cobre ESP de jogadores, marcadores de loot/caixas, infos de loot, alertas stealth e última posição vista – conforme o tier.',
        'Comece com layout enxuto e só o que você lê bem em team fight.',
      ],
      comments: [{ body: 'Overlay limpo: indicadores core primeiro, alcance/visibilidade um de cada vez.', age: 'Do guia' }],
    },
    th: {
      title: 'map awareness ในคู่มือมีอะไรบ้าง?',
      excerpt: 'สรุปผู้เล่น หีบ loot และการแจ้ง stealth',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือตั้งค่า ESP wallhack Modern Warfare',
      body: [
        'ครอบคลุม ESP ผู้เล่น มาร์ก loot/หีบ ข้อมูล loot แจ้ง stealth และตำแหน่งเห็นล่าสุด ตาม tier สินค้า',
        'แนะนำเริ่ม layout เรียบง่าย เปิดแค่ข้อมูลที่อ่านทันในทีมไฟต์',
      ],
      comments: [{ body: 'overlay ไม่รก: เปิดตัวชี้หลักก่อน ปรับระยะ/มองเห็นทีละอย่าง', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'ガイドのマップ認識（ESP）には何が含まれる？',
      excerpt: 'プレイヤー、箱、ルート、ステalth 情報の範囲概要。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare ESP ウォールハック設定ガイド',
      body: [
        'プレイヤー ESP、ルート/クレートマーカー、ルート情報、ステalth アラート、最終目撃位置を扱います。製品 tier により異なります。',
        'チームファイトで読める情報だけの控えめレイアウトから始めることを推奨。',
      ],
      comments: [{ body: 'オーバーレイは整理：コア指標から、距離と可視性は一つずつ。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué incluye map awareness en la guía?',
      excerpt: 'Resumen de jugador, cajas, botín y alertas stealth.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía setup ESP wallhack Modern Warfare',
      body: [
        'Cubre ESP de jugadores, marcadores loot/cajas, info de botín, alertas stealth y última posición vista según tier.',
        'Recomienda empezar con diseño sobrio y solo info legible en team fight.',
      ],
      comments: [{ body: 'Overlay limpio: indicadores core primero; rango y visibilidad de uno en uno.', age: 'Del guía' }],
    },
    fr: {
      title: 'Que comprend la map awareness dans le guide ?',
      excerpt: 'Aperçu joueur, caisses, loot et alertes furtivité.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide setup ESP wallhack Modern Warfare',
      body: [
        'Couvre ESP joueurs, marqueurs loot/caisses, infos loot, alertes stealth et dernière position vue selon le tier.',
        'Commencez sobrement avec seulement ce que vous lisez en team fight.',
      ],
      comments: [{ body: 'Overlay épuré : indicateurs clés d’abord, portée/visibilité un par un.', age: 'Depuis le guide' }],
    },
  },
  'how-to-set-up-map-overlay': {
    ko: {
      title: '맵 오버레이는 처음에 어떻게 설정하나요?',
      excerpt: '기본 표시부터 확인하고, 트레이닝에서 검증한 뒤 하나씩 조정.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare ESP 월핵 설정 가이드',
      body: [
        '설정 가이드로 오버레이를 켜고, 읽기 쉬운 색을 고르며, 지표가 UI를 가리지 않는지 확인하세요.',
        '라이브 매치 전 봇 로비에서 레이아웃을 테스트하세요. 모든 옵션을 한 번에 켜는 것보다 단순한 구성이 이해하기 쉽습니다.',
      ],
      comments: [{ body: '화면이 복잡하면 크기/위치보다 표시 개수부터 줄이세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '第一次如何設定地圖 overlay？',
      excerpt: '先開基本顯示，在訓練確認，再逐項調整。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare ESP 透視設定指南',
      body: [
        '依設定指南啟用 overlay、選可讀顏色，確認指示不擋重要 UI。',
        '在 bot 大廳測試再進實戰。一次全開不如簡單配置好懂。',
      ],
      comments: [{ body: '畫面太擠先減指示數量，再改大小位置。', age: '摘自指南' }],
    },
    de: {
      title: 'Wie richte ich das Map-Overlay erstmalig ein?',
      excerpt: 'Basis-Anzeige, Training-Check, dann Schritt für Schritt.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare ESP-Wallhack-Setup',
      body: [
        'Overlay aktivieren, lesbare Farben wählen, prüfen dass Indikatoren die UI nicht verdecken.',
        'Layout in Bot-Lobby testen vor Live. Einfache Config schlägt alles auf einmal.',
      ],
      comments: [{ body: 'Bei vollem Bildschirm Indikatoren reduzieren, bevor Größe/Position.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como configurar o overlay de mapa pela primeira vez?',
      excerpt: 'Opções básicas, teste em treino, ajuste um por vez.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia setup ESP wallhack Modern Warfare',
      body: [
        'Ative o overlay, cores legíveis, confira que indicadores não cobrem a UI.',
        'Teste em lobby de bots antes do live. Config simples > ligar tudo de uma vez.',
      ],
      comments: [{ body: 'Tela cheia? Reduza indicadores antes de tamanho/posição.', age: 'Do guia' }],
    },
    th: {
      title: 'ตั้ง overlay แผนที่ครั้งแรกอย่างไร?',
      excerpt: 'เปิดพื้นฐาน ทดสอบใน training ปรับทีละอย่าง',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ ESP wallhack Modern Warfare',
      body: [
        'เปิด overlay เลือกสีอ่านง่าย ตรวจว่าไม่บัง UI สำคัญ',
        'ทดสอบในบอทก่อนแมตช์จริง config ง่ายดีกว่าเปิดทุกอย่างพร้อมกัน',
      ],
      comments: [{ body: 'จอแน่นให้ลดจำนวนตัวชี้ก่อนปรับขนาด/ตำแหน่ง', age: 'จากคู่มือ' }],
    },
    ja: {
      title: '初めてマップオーバーレイを設定するには？',
      excerpt: '基本表示→トレーニング確認→一項目ずつ調整。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare ESP ウォールハック設定',
      body: [
        'ガイドでオーバーレイを有効化、読みやすい色、UI を隠さないか確認。',
        'ライブ前にボットロビーでテスト。全オプション一括よりシンプル構成。',
      ],
      comments: [{ body: '画面が混雑したらサイズより表示数を減らす。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Cómo configuro el overlay de mapa por primera vez?',
      excerpt: 'Opciones básicas, prueba en entrenamiento, ajusta de a uno.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía setup ESP wallhack Modern Warfare',
      body: [
        'Activa overlay, colores legibles, verifica que no tape la UI importante.',
        'Prueba en lobby bots antes de live. Config simple mejor que todo a la vez.',
      ],
      comments: [{ body: 'Si saturado, reduce indicadores antes de tamaño/posición.', age: 'Del guía' }],
    },
    fr: {
      title: 'Comment configurer l’overlay carte la première fois ?',
      excerpt: 'Affichage de base, test entraînement, réglages un par un.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide setup ESP wallhack Modern Warfare',
      body: [
        'Activez l’overlay, couleurs lisibles, vérifiez qu’il ne cache pas l’UI.',
        'Testez en lobby bots avant le live. Config simple > tout d’un coup.',
      ],
      comments: [{ body: 'Écran chargé : moins d’indicateurs avant taille/position.', age: 'Depuis le guide' }],
    },
  },
  'what-zoom-settings-are-comfortable': {
    ko: {
      title: '편한 카메라 줌 설정은?',
      excerpt: '맵 맥락은 살리되 조작이 어렵지 않은 시야 찾기.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 레이더 해킹 가이드',
      body: [
        '모든 플레이어에게 이상적인 줌 값은 없습니다. 점진적으로 조정하며 플레이어, 사거리, 근처 교전을 추적할 수 있는지 확인하세요.',
        '기본 시야로 빠르게 리셋해 넓은 화면과 비교할 수 있게 하세요.',
      ],
      comments: [{ body: '한 단계씩 바꾸고 짧은 트레이닝 후 새 거리에 익숙해지세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '什麼鏡頭縮放玩起來舒服？',
      excerpt: '兼顧地圖資訊又不難操控的視野。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 雷達外掛指南',
      body: [
        '沒有 universal 理想縮放。逐步調整並確認仍能追蹤自己、武器距離與附近交火。',
        '保留快速恢復預設視角以便比較廣角畫面。',
      ],
      comments: [{ body: '一次改一步，短訓練後再定新距離。', age: '摘自指南' }],
    },
    de: {
      title: 'Welche Kamera-Zoom-Werte sind angenehm?',
      excerpt: 'Mehr Map-Kontext ohne die Steuerung zu erschweren.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Radar-Hack-Guide',
      body: [
        'Kein idealer Zoom für alle. Schrittweise anpassen und Spieler, Reichweiten und Kämpfe tracken können.',
        'Schnellen Reset auf Standardblick behalten zum Vergleich.',
      ],
      comments: [{ body: 'Einen Schritt pro Mal, kurzes Training vor neuer Distanz.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Quais zooms de câmera são confortáveis?',
      excerpt: 'Contexto de mapa sem perder controle do jogador.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia radar hack Modern Warfare',
      body: [
        'Não há zoom ideal universal. Ajuste gradualmente e confira tracking, alcances e fights.',
        'Mantenha reset rápido ao padrão para comparar visão ampla.',
      ],
      comments: [{ body: 'Um passo de cada vez e sessão curta de treino.', age: 'Do guia' }],
    },
    th: {
      title: 'ซูมกล้องแบบไหนเล่นสบาย?',
      excerpt: 'ได้บริบทแผนที่โดยไม่คุมตัวละครยาก',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ radar hack Modern Warfare',
      body: [
        'ไม่มีค่าซูม ideal เดียว ปรับทีละน้อยและเช็คว่ายังตามผู้เล่น ระยะ และไฟต์ใกล้ได้',
        'มี reset กลับมุมมอง default เพื่อเทียบภาพกว้าง',
      ],
      comments: [{ body: 'เปลี่ยนทีละขั้น ฝึกสั้นๆ ก่อนตัดสินระยะใหม่', age: 'จากคู่มือ' }],
    },
    ja: {
      title: '快適なカメラズーム設定は？',
      excerpt: 'マップ把握と操作感のバランス。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare レーダーハックガイド',
      body: [
        '万能のズーム値はありません。段階的に調整し、自機・射程・近接戦闘を追えるか確認。',
        'デフォルト視点へ素早く戻し広角と比較できるように。',
      ],
      comments: [{ body: '一ステップずつ変更し短いトレーニング後に決める。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué zoom de cámara es cómodo?',
      excerpt: 'Contexto de mapa sin perder control.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía radar hack Modern Warfare',
      body: [
        'No hay zoom ideal universal. Ajusta poco a poco y verifica tracking, alcances y peleas cercanas.',
        'Mantén reset rápido a vista por defecto para comparar.',
      ],
      comments: [{ body: 'Un paso cada vez y sesión corta de entrenamiento.', age: 'Del guía' }],
    },
    fr: {
      title: 'Quels réglages de zoom caméra sont confortables ?',
      excerpt: 'Contexte carte sans perdre le contrôle.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide radar hack Modern Warfare',
      body: [
        'Pas de zoom idéal universel. Ajustez progressivement et suivez joueur, portées et fights.',
        'Gardez un reset rapide vers la vue par défaut.',
      ],
      comments: [{ body: 'Un cran à la fois, session d’entraînement courte.', age: 'Depuis le guide' }],
    },
  },
  'how-to-tune-script-delay-settings': {
    ko: {
      title: '딜레이 설정은 에임봇에 어떻게 영향을 주나요?',
      excerpt: '타이밍, 콤보 가독성, 보수적 튜닝을 권장하는 이유.',
      flair: '가이드 Q&A',
      sourceTitle: '랭크용 Modern Warfare 에임봇',
      body: [
        '딜레이는 자동 동작 사이 간격을 조절합니다. 가이드는 느린 타이밍부터 시작해 연습 환경에서 테스트할 것을 권장합니다.',
        '여러 값을 동시에 바꾸기보다 일관된 시퀀스가 튜닝하기 쉽습니다.',
      ],
      comments: [{ body: '시도한 설정을 메모해 두면 예상대로 동작했던 마지막 값으로 돌아가기 쉽습니다.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '延遲設定如何影響玩家自瞄？',
      excerpt: '時序、連招可讀性與保守調參的原因。',
      flair: '指南 Q&A',
      sourceTitle: '排位 Modern Warfare 自瞄',
      body: [
        '延遲控制自動動作間隔。指南建議從較慢時序開始並在練習環境測試。',
        '一致序列比一次改多個數值更好調。',
      ],
      comments: [{ body: '記下每次配置，方便回到最後正常的那組。', age: '摘自指南' }],
    },
    de: {
      title: 'Wie beeinflussen Delay-Einstellungen den Aimbot?',
      excerpt: 'Timing, Combo-Lesbarkeit und konservatives Tuning.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Aimbot für Ranked',
      body: [
        'Delays steuern Abstände automatisierter Aktionen. Starte langsam und teste in Übungsumgebung.',
        'Konsistente Sequenz ist leichter zu tunen als mehrere Werte gleichzeitig.',
      ],
      comments: [{ body: 'Notiere Configs, um zur letzten stabilen zurückzukehren.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como delays afetam o aimbot?',
      excerpt: 'Timing, legibilidade de combo e tuning conservador.',
      flair: 'Q&A do guia',
      sourceTitle: 'Aimbot Modern Warfare para ranqueado',
      body: [
        'Delays controlam espaçamento entre ações automáticas. Comece mais lento e teste em prática.',
        'Sequência consistente é mais fácil de ajustar que vários valores de uma vez.',
      ],
      comments: [{ body: 'Anote cada config para voltar à última estável.', age: 'Do guia' }],
    },
    th: {
      title: 'การตั้ง delay กระทบ aimbot อย่างไร?',
      excerpt: 'จังหวะ ความอ่าน combo และการจูนแบบ conservative',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'Aimbot Modern Warfare สำหรับแรงค์',
      body: [
        'delay คุมช่วงระหว่าง action อัตโนมัติ เริ่มช้าและทดสอบในที่ฝึก',
        'ลำดับสม่ำเสมอจูนง่ายกว่าเปลี่ยนหลายค่าพร้อมกัน',
      ],
      comments: [{ body: 'จด config แต่ละครั้งเพื่อกลับ setup ที่เคยใช้ได้', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'ディレイ設定はエイムボットにどう効く？',
      excerpt: 'タイミング、コンボの読みやすさ、控えめチューニング。',
      flair: 'ガイド Q&A',
      sourceTitle: 'ランク向け Modern Warfare エイムボット',
      body: [
        'ディレイは自動動作の間隔を制御。遅めから始め練習環境でテストを推奨。',
        '複数値同時より一貫シーケンスが調整しやすい。',
      ],
      comments: [{ body: '試した設定をメモし最後に正常だった setup に戻る。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Cómo afectan los delays al aimbot?',
      excerpt: 'Timing, legibilidad de combo y tuning conservador.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Aimbot Modern Warfare para clasificado',
      body: [
        'Los delays controlan el espacio entre acciones automáticas. Empieza lento y prueba en entrenamiento.',
        'Secuencia consistente es más fácil de afinar que varios valores a la vez.',
      ],
      comments: [{ body: 'Anota configs para volver a la última estable.', age: 'Del guía' }],
    },
    fr: {
      title: 'Comment les délais affectent-ils l’aimbot ?',
      excerpt: 'Timing, lisibilité des combos, réglage conservateur.',
      flair: 'Q&R guide',
      sourceTitle: 'Aimbot Modern Warfare pour classé',
      body: [
        'Les délais espacent les actions auto. Commencez lent et testez en pratique.',
        'Séquence cohérente plus simple à tuner que plusieurs valeurs à la fois.',
      ],
      comments: [{ body: 'Notez chaque config pour revenir à la dernière stable.', age: 'Depuis le guide' }],
    },
  },
  'how-to-practice-auto-combos': {
    ko: {
      title: '에임봇 연습에 좋은 방법은?',
      excerpt: '반복 가능한 설정, 시퀀스 학습, 통제된 로비에서 타이밍 확인.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 에임봇 전투 가이드',
      body: [
        '한 번에 한 플레이어·한 콤보만 연습하세요. 가이드는 타깃 선택과 스킬 순서 예시를 설명합니다.',
        '커스텀 로비에서 시퀀스를 반복하며 라이브 압박 없이 조정할 부분을 확인하세요.',
      ],
      comments: [{ body: '수동 시퀀스를 먼저 익히면 설정이 어긋났을 때 바로 알아차립니다.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '如何練習自瞄較好？',
      excerpt: '可重複設定、學序列、在控管大廳查時序。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 自瞄戰鬥指南',
      body: [
        '一次練一個玩家與一組 combo。指南說明目標選擇與技能順序範例。',
        '自訂大廳重複序列，在無實戰壓力下調整。',
      ],
      comments: [{ body: '先手動記序列，才容易發現設定錯時序。', age: '摘自指南' }],
    },
    de: {
      title: 'Wie übt man Aimbot am besten?',
      excerpt: 'Wiederholbares Setup, Sequenz lernen, Timing in kontrollierter Lobby.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Aimbot-Kampf-Guide',
      body: [
        'Ein Spieler, ein Combo zur Zeit. Der Guide erklärt Target-Auswahl und Fähigkeiten-Reihenfolge.',
        'Custom-Lobby zum Wiederholen ohne Live-Druck.',
      ],
      comments: [{ body: 'Manuelle Sequenz zuerst – dann erkennst du Fehl-Timing.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como praticar aimbot da melhor forma?',
      excerpt: 'Setup repetível, aprender sequência, timing em lobby controlado.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia de combate aimbot Modern Warfare',
      body: [
        'Um jogador e um combo por vez. O guia explica seleção de alvo e ordem de habilidades.',
        'Lobby custom para repetir sem pressão de live.',
      ],
      comments: [{ body: 'Aprenda a sequência manual antes – detecta mistiming.', age: 'Do guia' }],
    },
    th: {
      title: 'ฝึก aimbot อย่างไรดี?',
      excerpt: 'setup ซ้ำได้ เรียนลำดับ เช็ค timing ในลobbies ควบคุม',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ combat aimbot Modern Warfare',
      body: [
        'ฝึกทีละผู้เล่นและ combo เดียว คู่มืออธิบายการเลือกเป้าและลำดับสkill',
        'ลobbies กำหนดเองซ้ำลำดับโดยไม่มีแรงกด live',
      ],
      comments: [{ body: 'จำลำดับมือก่อน จะรู้เมื่อ config ผิดจังหวะ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'エイムボットの良い練習法は？',
      excerpt: '再現可能な setup、シーケンス学習、管理ロビーでタイミング確認。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare エイムボット戦闘ガイド',
      body: [
        '一度に一人・一コンボ。ターゲット選択と能力順の例を解説。',
        'カスタムロビーでシーケンス反復、ライブ圧なしで調整。',
      ],
      comments: [{ body: '手動シーケンスを先に覚えるとミスタイミングに気づける。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Buena forma de practicar aimbot?',
      excerpt: 'Setup repetible, aprender secuencia, timing en lobby controlado.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía combate aimbot Modern Warfare',
      body: [
        'Un jugador y un combo a la vez. El guía explica selección de objetivo y orden de habilidades.',
        'Lobby custom para repetir sin presión live.',
      ],
      comments: [{ body: 'Aprende la secuencia manual primero para detectar mistiming.', age: 'Del guía' }],
    },
    fr: {
      title: 'Comment bien s’entraîner à l’aimbot ?',
      excerpt: 'Setup reproductible, apprendre la séquence, timing en lobby contrôlé.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide combat aimbot Modern Warfare',
      body: [
        'Un joueur et un combo à la fois. Le guide détaille cible et ordre des capacités.',
        'Lobby custom pour répéter sans pression live.',
      ],
      comments: [{ body: 'Séquence manuelle d’abord pour repérer un mauvais timing.', age: 'Depuis le guide' }],
    },
  },
  'what-is-in-the-elite-tier': {
    ko: {
      title: 'Elite 티어에 추가 도구는 무엇이 있나요?',
      excerpt: 'Lite·Pro 대비 Elite 추가 유틸 모듈 설명.',
      flair: '가이드 Q&A',
      sourceTitle: 'MW4 Elite 티어 가이드',
      body: [
        '가이드는 Elite가 Lite·Pro 기능에 Loot Assist, Auto finish, Auto plate break, Loadout Changer 등 유틸을 더 포함한다고 설명합니다.',
        '추가 모듈이 누구에게 맞는지, 기본 기능을 먼저 이해할 이유도 다룹니다.',
      ],
      comments: [{ body: '티어 선택 전 가이드의 전체 비교 링크로 필요 기능을 대조하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: 'Elite 方案還有哪些工具？',
      excerpt: '相較 Lite/Pro 的 Elite 額外模組。',
      flair: '指南 Q&A',
      sourceTitle: 'MW4 Elite tier 指南',
      body: [
        '指南說明 Elite 含 Lite/Pro 再加 Loot Assist、Auto finish、Auto plate break、Loadout Changer 等。',
        '也說明誰適合額外模組以及先掌握基礎功能的原因。',
      ],
      comments: [{ body: '選 tier 前用指南完整比較對照需求。', age: '摘自指南' }],
    },
    de: {
      title: 'Welche Extra-Tools hat die Elite-Stufe?',
      excerpt: 'Zusätzliche Utilities gegenüber Lite/Pro.',
      flair: 'Guide-Q&A',
      sourceTitle: 'MW4 Elite-Tier-Guide',
      body: [
        'Elite umfasst Lite/Pro plus Loot Assist, Auto Finish, Auto Plate Break, Loadout Changer u. a.',
        'Erklärt auch, wer profitiert und warum Basics zuerst.',
      ],
      comments: [{ body: 'Vor Tier-Wahl vollständigen Vergleich im Guide nutzen.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Quais ferramentas extras vêm no tier Elite?',
      excerpt: 'Utilitários Elite vs Lite/Pro.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia tier Elite MW4',
      body: [
        'Elite inclui Lite/Pro mais Loot Assist, Auto finish, Auto plate break, Loadout Changer etc.',
        'Também cobre quem se beneficia e por que entender o básico primeiro.',
      ],
      comments: [{ body: 'Compare recursos no guia completo antes de escolher.', age: 'Do guia' }],
    },
    th: {
      title: 'tier Elite มีเครื่องมือเพิ่มอะไร?',
      excerpt: 'โมดูล utility เทียบ Lite/Pro',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ tier Elite MW4',
      body: [
        'Elite มี Lite/Pro บวก Loot Assist Auto finish Auto plate break Loadout Changer ฯลฯ',
        'อธิบายว่าใครได้ประโยชน์และควรเข้าใจพื้นฐานก่อน',
      ],
      comments: [{ body: 'เทียบฟีเจอร์ในลิงก์เปรียบเทียบเต็มก่อนเลือก tier', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'Elite tier の追加ツールは？',
      excerpt: 'Lite/Pro 比の Elite 追加ユーティリティ。',
      flair: 'ガイド Q&A',
      sourceTitle: 'MW4 Elite tier ガイド',
      body: [
        'Elite は Lite/Pro に Loot Assist、Auto finish、Auto plate break、Loadout Changer 等を追加。',
        '追加モジュールの対象者と基礎理解の重要性も説明。',
      ],
      comments: [{ body: 'tier 選択前にガイドの全文比較で機能を照合。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué herramientas extra incluye Elite?',
      excerpt: 'Utilidades Elite frente a Lite/Pro.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía tier Elite MW4',
      body: [
        'Elite incluye Lite/Pro más Loot Assist, Auto finish, Auto plate break, Loadout Changer, etc.',
        'También quién se beneficia y por qué dominar lo básico primero.',
      ],
      comments: [{ body: 'Compara funciones en el enlace completo antes de elegir tier.', age: 'Del guía' }],
    },
    fr: {
      title: 'Quels outils supplémentaires dans le tier Elite ?',
      excerpt: 'Utilitaires Elite vs Lite/Pro.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide tier Elite MW4',
      body: [
        'Elite = Lite/Pro plus Loot Assist, Auto finish, Auto plate break, Loadout Changer, etc.',
        'Couvre aussi qui en profite et l’intérêt de maîtriser les bases.',
      ],
      comments: [{ body: 'Comparez via le lien complet avant de choisir le tier.', age: 'Depuis le guide' }],
    },
  },
  'how-do-lite-and-pro-differ': {
    ko: {
      title: 'Lite와 Pro는 실사용에서 어떻게 다르나요?',
      excerpt: 'Lite는 인식, Pro는 플레이어 스크립트 추가.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro: 어떤 티어가 맞나요',
      body: [
        '비교 가이드는 Lite를 ESP, 드롭/루트, 줌 등 인식 도구 중심으로 설명합니다. Pro는 그 위에 스킬 자동화를 추가합니다.',
        '맵 정보만 필요한지, 스크립트 모듈까지 필요한지에 따라 선택이 달라집니다.',
      ],
      comments: [{ body: '결정 전 나란히 비교에서 모듈을 확인하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: 'Lite 和 Pro 實際差在哪？',
      excerpt: 'Lite 偏 awareness，Pro 加玩家腳本。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro：哪個適合你',
      body: [
        'Lite 聚焦 ESP、掉落/戰利品、zoom 等。Pro 在此之上加技能自動化。',
        '取決於只要地圖資訊或也要腳本模組。',
      ],
      comments: [{ body: '決定前用並排比較查具體模組。', age: '摘自指南' }],
    },
    de: {
      title: 'Wie unterscheiden sich Lite und Pro praktisch?',
      excerpt: 'Lite Awareness, Pro plus Skripte.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro: welche Stufe passt',
      body: [
        'Lite: ESP, Drop/Loot, Zoom. Pro fügt Skill-Automation hinzu.',
        'Wahl hängt von Map-Info allein oder zusätzlichen Skriptmodulen ab.',
      ],
      comments: [{ body: 'Side-by-Side im Guide vor der Entscheidung prüfen.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como Lite e Pro diferem na prática?',
      excerpt: 'Lite awareness; Pro adiciona scripts.',
      flair: 'Q&A do guia',
      sourceTitle: 'Modern Warfare Lite vs Pro: qual tier',
      body: [
        'Lite foca ESP, drop/loot, zoom. Pro adiciona automação de skills.',
        'Depende se você só quer mapa ou também scripts.',
      ],
      comments: [{ body: 'Use a comparação lado a lado antes de decidir.', age: 'Do guia' }],
    },
    th: {
      title: 'Lite กับ Pro ต่างกันอย่างไรในทางปฏิบัติ?',
      excerpt: 'Lite เน้น awareness Pro เพิ่มสคริปต์',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'Modern Warfare Lite vs Pro: tier ไหนเหมาะ',
      body: [
        'Lite เน้น ESP drop/loot zoom Pro เพิ่ม automation skill',
        'เลือกตามว่าต้องการแค่ข้อมูลแผนหรือโมดูลสคริปต์ด้วย',
      ],
      comments: [{ body: 'ดูเปรียบเทียบคู่ขนานในคู่มือก่อนตัดสินใจ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'Lite と Pro の実際の違いは？',
      excerpt: 'Lite は認識、Pro はスクリプト追加。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare Lite vs Pro：どの tier',
      body: [
        'Lite は ESP、ドロップ/ルート、ズーム中心。Pro はスキル自動化を追加。',
        'マップ情報のみかスクリプトも必要かで選択。',
      ],
      comments: [{ body: '決定前に並列比較でモジュール確認。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Cómo difieren Lite y Pro en la práctica?',
      excerpt: 'Lite awareness; Pro añade scripts.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Modern Warfare Lite vs Pro: qué tier',
      body: [
        'Lite: ESP, drop/loot, zoom. Pro añade automatización de skills.',
        'Depende si solo quieres mapa o también scripts.',
      ],
      comments: [{ body: 'Revisa módulos en la comparación lado a lado.', age: 'Del guía' }],
    },
    fr: {
      title: 'Lite et Pro : différence concrète ?',
      excerpt: 'Lite = awareness ; Pro ajoute scripts.',
      flair: 'Q&R guide',
      sourceTitle: 'Modern Warfare Lite vs Pro : quel tier',
      body: [
        'Lite : ESP, drops/loot, zoom. Pro ajoute l’automation de skills.',
        'Selon map seule ou aussi modules script.',
      ],
      comments: [{ body: 'Vérifiez les modules dans la comparaison côte à côte.', age: 'Depuis le guide' }],
    },
  },
  'what-to-know-about-skin-changer': {
    ko: {
      title: 'Loadout Changer 유틸은 무엇을 알아두면 되나요?',
      excerpt: '코스메틱 미리보기 동작과 기대치.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare Loadout Changer 가이드',
      body: [
        '가이드는 Loadout Changer를 로컬 코스메틱 미리보기 유틸로 설명합니다. 설정, 지원 옵션, 기본 외형 복원 방법을 다룹니다.',
        '호환 메모를 읽고 최신 설정 안내를 따르세요.',
      ],
      comments: [{ body: '외형 변경은 로컬 미리보기입니다. 제한과 설정 단계는 가이드를 확인하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: 'Loadout Changer 工具該知道什麼？',
      excerpt: '外觀預覽如何運作與預期。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare Loadout Changer 指南',
      body: [
        '指南將 Loadout Changer 描述為本機外觀預覽工具，含設定、支援選項與還原預設。',
        '閱讀相容性說明並依最新設定步驟操作。',
      ],
      comments: [{ body: '外觀變更為本機預覽；限制與設定見指南。', age: '摘自指南' }],
    },
    de: {
      title: 'Was sollte ich über Loadout Changer wissen?',
      excerpt: 'Wie Cosmetic-Previews funktionieren.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Loadout Changer Guide',
      body: [
        'Loadout Changer als lokales Cosmetic-Preview-Tool mit Setup, Optionen und Restore.',
        'Kompatibilität lesen und aktuelle Setup-Schritte folgen.',
      ],
      comments: [{ body: 'Cosmetics sind lokale Previews – Limits im Guide.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'O que saber sobre Loadout Changer?',
      excerpt: 'Como funcionam previews cosméticos.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia Loadout Changer Modern Warfare',
      body: [
        'Utilitário de preview cosmético local: setup, opções e restaurar padrão.',
        'Leia compatibilidade e siga instruções atuais.',
      ],
      comments: [{ body: 'Mudanças são preview local; limites no guia.', age: 'Do guia' }],
    },
    th: {
      title: 'ควรรู้อะไรเกี่ยว Loadout Changer?',
      excerpt: 'พรีวิว cosmetic ทำงานอย่างไร',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ Loadout Changer Modern Warfare',
      body: [
        'อธิบายเป็น utility พรีวิว cosmetic ในเครื่อง มี setup ตัวเลือกและคืนค่าเริ่มต้น',
        'อ่านหมายเหตุความเข้ากันและทำตามขั้นตอนล่าสุด',
      ],
      comments: [{ body: 'การเปลี่ยนเป็น preview ในเครื่อง ดูข้อจำกัดในคู่มือ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'Loadout Changer ユーティリティで知っておくことは？',
      excerpt: 'コスメプレビューの動作と期待値。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare Loadout Changer ガイド',
      body: [
        'ローカルコスメプレビューユーティリティとして setup、オプション、デフォルト復元を説明。',
        '互換性メモを読み最新 setup に従う。',
      ],
      comments: [{ body: '外見変更はローカルプレビュー。制限はガイド参照。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué saber del Loadout Changer?',
      excerpt: 'Cómo funcionan las vistas previas cosméticas.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía Loadout Changer Modern Warfare',
      body: [
        'Utilidad de preview cosmético local: setup, opciones y restaurar default.',
        'Lee compatibilidad y sigue pasos actuales.',
      ],
      comments: [{ body: 'Cambios cosméticos son preview local; límites en el guía.', age: 'Del guía' }],
    },
    fr: {
      title: 'Que savoir sur Loadout Changer ?',
      excerpt: 'Fonctionnement des aperçus cosmétiques.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide Loadout Changer Modern Warfare',
      body: [
        'Utilitaire d’aperçu cosmétique local : setup, options, retour par défaut.',
        'Lisez la compatibilité et suivez le setup actuel.',
      ],
      comments: [{ body: 'Changements cosmétiques = preview local ; limites dans le guide.', age: 'Depuis le guide' }],
    },
  },
  'what-to-do-if-eac-cannot-verify': {
    ko: {
      title: 'Ricochet이 Modern Warfare 설치를 검증하지 못하면?',
      excerpt: 'Activision 파일 검증과 클린 재시작부터.',
      flair: '가이드 Q&A',
      sourceTitle: 'Ricochet이 Modern Warfare를 검증하지 못할 때',
      body: [
        '문제 해결 가이드는 게임 파일 또는 소프트웨어 충돌 때문일 수 있으며 항상 밴은 아니라고 합니다. Battle.net/Steam에서 파일 무결성 검사부터 하세요.',
        '클라이언트 완전 종료, PC 재시작, 충돌 오버레이 확인 후 더 disruptive한 단계를 시도하세요.',
      ],
      comments: [{ body: '원인 좁히려면 다른 소프트웨어 전에 정상 Activision 실행을 테스트하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: 'Ricochet 無法驗證 Modern Warfare 安裝怎麼辦？',
      excerpt: '先做 Activision 檔案驗證與乾淨重開。',
      flair: '指南 Q&A',
      sourceTitle: 'Ricochet 無法驗證 Modern Warfare',
      body: [
        '疑難排解指南：可能為遊戲檔或軟體衝突，不一定是帳號封禁。先透過 Battle.net/Steam 驗證檔案。',
        '完全退出客戶端、重開 PC、檢查衝突 overlay 後再試更激進步驟。',
      ],
      comments: [{ body: '先正常啟動 Activision 再開其他軟體以縮小原因。', age: '摘自指南' }],
    },
    de: {
      title: 'Was tun, wenn Ricochet Modern Warfare nicht verifiziert?',
      excerpt: 'Zuerst Datei-Verifikation und sauberer Neustart.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Ricochet kann Modern Warfare nicht verifizieren',
      body: [
        'Die Meldung kann an Game-Files oder Konflikten liegen – nicht immer Ban. Battle.net/Steam-Verifikation zuerst.',
        'Client beenden, PC neu starten, Overlay-Konflikte prüfen.',
      ],
      comments: [{ body: 'Normalen Activision-Start testen, bevor andere Software läuft.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'E se o Ricochet não verificar minha instalação?',
      excerpt: 'Verificação de arquivos Activision e reinício limpo.',
      flair: 'Q&A do guia',
      sourceTitle: 'Ricochet incapaz de verificar Modern Warfare',
      body: [
        'Pode ser arquivo do jogo ou conflito – nem sempre ban. Verifique arquivos via Battle.net/Steam.',
        'Feche o cliente, reinicie o PC, cheque overlays conflitantes.',
      ],
      comments: [{ body: 'Teste launch normal Activision antes de outras ferramentas.', age: 'Do guia' }],
    },
    th: {
      title: 'ถ้า Ricochet ตรวจสอบ Modern Warfare ไม่ได้?',
      excerpt: 'เริ่มจาก verify ไฟล์ Activision และรีสตาร์ทสะอาด',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'Ricochet ตรวจสอบ Modern Warfare ไม่ได้',
      body: [
        'อาจเป็นไฟล์เกมหรือซอฟต์แวร์ขัด ไม่ใช่แบนทุกครั้ง verify ผ่าน Battle.net/Steam ก่อน',
        'ปิด client รีสตาร์ท PC เช็ค overlay ที่ขัดก่อนขั้นตอนรุนแรง',
      ],
      comments: [{ body: 'ทดสอบเปิด Activision ปกติก่อนซอฟต์แวร์อื่นเพื่อแคบสาเหตุ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'Ricochet が Modern Warfare を検証できない場合は？',
      excerpt: 'Activision ファイル検証とクリーン再起動から。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Ricochet が Modern Warfare を検証できない',
      body: [
        'ゲームファイルやソフト競合の可能性があり、常に BAN ではありません。Battle.net/Steam でファイル検証を。',
        'クライアント完全終了、PC 再起動、競合 overlay 確認後に次の手順へ。',
      ],
      comments: [{ body: '他ソフト前に通常 Activision 起動をテストして原因を絞る。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué hacer si Ricochet no verifica Modern Warfare?',
      excerpt: 'Verificación de archivos Activision y reinicio limpio.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Ricochet no puede verificar Modern Warfare',
      body: [
        'Puede ser archivos o conflictos – no siempre ban. Verifica en Battle.net/Steam.',
        'Cierra cliente, reinicia PC, revisa overlays conflictivos.',
      ],
      comments: [{ body: 'Prueba launch normal Activision antes de otras herramientas.', age: 'Del guía' }],
    },
    fr: {
      title: 'Si Ricochet ne vérifie pas Modern Warfare ?',
      excerpt: 'Vérification fichiers Activision et redémarrage propre.',
      flair: 'Q&R guide',
      sourceTitle: 'Ricochet incapable de vérifier Modern Warfare',
      body: [
        'Peut venir des fichiers jeu ou conflits – pas toujours un ban. Vérifiez via Battle.net/Steam.',
        'Quittez le client, redémarrez le PC, vérifiez overlays conflictuels.',
      ],
      comments: [{ body: 'Testez un lancement Activision normal avant autre logiciel.', age: 'Depuis le guide' }],
    },
  },
  'how-does-an-external-loader-work': {
    ko: {
      title: '「external loader」는 무슨 뜻인가요?',
      excerpt: '외부 소프트웨어 가이드의 용어와 일반 setup.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 외부 치트 가이드',
      body: [
        '「external」은 Modern Warfare 프로세스와 별도로 실행되며 UI를 오버레이로 표시하는 소프트웨어를 뜻합니다.',
        '아키텍처 개요, setup, 패치 업데이트, external/internal 차이를 설명합니다.',
      ],
      comments: [{ body: 'Modern Warfare 업데이트 때마다 호환성과 상태 정보를 확인하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '「external loader」是什麼意思？',
      excerpt: '外部軟體指南的術語與一般設定。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 外部外掛指南',
      body: [
        '「external」指與 Modern Warfare 程序分離、以 overlay 呈現介面的軟體。',
        '概述架構、設定、更新與 external/internal 差異。',
      ],
      comments: [{ body: '每次 Modern Warfare 更新都查相容與狀態。', age: '摘自指南' }],
    },
    de: {
      title: 'Was bedeutet „external loader“?',
      excerpt: 'Begriff im External-Software-Guide und Setup.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare External-Cheat-Guide',
      body: [
        '„External“ = Software getrennt vom MW-Prozess mit Overlay-UI.',
        'Architektur, Setup, Patch-Updates, External vs Internal.',
      ],
      comments: [{ body: 'Bei MW-Updates Kompatibilität und Status prüfen.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'O que significa “external loader”?',
      excerpt: 'Termo no guia de software externo e setup geral.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia cheat externo Modern Warfare',
      body: [
        '“External” = roda separado do processo MW com UI em overlay.',
        'Arquitetura, setup, patches, diferenças external/internal.',
      ],
      comments: [{ body: 'Confira compatibilidade/status a cada update do jogo.', age: 'Do guia' }],
    },
    th: {
      title: '“external loader” หมายถึงอะไร?',
      excerpt: 'ศัพท์ในคู่มือซอฟต์แวร์ภายนอกและ setup ทั่วไป',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือ cheat ภายนอก Modern Warfare',
      body: [
        'external คือซอฟต์แวร์แยกจาก process Modern Warfare แสดง UI เป็น overlay',
        'อธิบายสถาปัตยกรรม setup อัปเดตแพตช์ และความต่าง external/internal',
      ],
      comments: [{ body: 'เช็คความเข้ากันและสถานะทุกครั้งที่เกมอัปเดต', age: 'จากคู่มือ' }],
    },
    ja: {
      title: '「external loader」とは？',
      excerpt: '外部ソフトガイドの用語と一般的 setup。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare 外部チートガイド',
      body: [
        'external = MW プロセス外で動き UI をオーバーレイ表示するソフト。',
        'アーキテクチャ、setup、パッチ、external/internal の違い。',
      ],
      comments: [{ body: 'MW 更新のたび互換とステータスを確認。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué significa “external loader”?',
      excerpt: 'Término en la guía de software externo.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía cheat externo Modern Warfare',
      body: [
        '“External” = software separado del proceso MW con UI overlay.',
        'Arquitectura, setup, parches, external vs internal.',
      ],
      comments: [{ body: 'Revisa compatibilidad/estado en cada update del juego.', age: 'Del guía' }],
    },
    fr: {
      title: 'Que signifie « external loader » ?',
      excerpt: 'Terme du guide logiciel externe.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide cheat externe Modern Warfare',
      body: [
        '« External » = logiciel séparé du processus MW, UI en overlay.',
        'Architecture, setup, mises à jour, external vs internal.',
      ],
      comments: [{ body: 'Vérifiez compatibilité/statut à chaque MAJ du jeu.', age: 'Depuis le guide' }],
    },
  },
  'how-to-check-stream-proof-capture': {
    ko: {
      title: 'OBS가 오버레이를 캡처하는지 어떻게 확인하나요?',
      excerpt: '짧은 테스트 녹화 후 재생 확인.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 스트림 프루프 오버레이 설정',
      body: [
        '스트림할 OBS 장면·캡처 모드로 짧게 녹화하고 재생에서 오버레이 요소가 보이는지 확인하세요.',
        '게임 캡처와 디스플레이 캡처를 각각 테스트하세요. 멀티 모니터에서 동작이 다를 수 있습니다.',
      ],
      comments: [{ body: '미리보기만 믿지 말고, 스트림할 장면과 같은 설정으로 저장본을 확인하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '如何確認 OBS 是否錄到 overlay？',
      excerpt: '建議短錄影後看回放。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 防錄影 overlay 設定',
      body: [
        '用將要直播的 OBS 場景與擷取模式短錄，回放檢查 overlay 元素。',
        '分別測試 game capture 與 display capture；多螢幕行為可能不同。',
      ],
      comments: [{ body: '別只看預覽；用相同場景的存檔回放確認。', age: '摘自指南' }],
    },
    de: {
      title: 'Prüfen, ob OBS ein Overlay mitcapturt?',
      excerpt: 'Kurz aufnehmen und Playback checken.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Stream-proof Overlay Setup Modern Warfare',
      body: [
        'Kurz mit geplanter OBS-Szene und Capture-Modus aufnehmen, Playback auf Overlay prüfen.',
        'Game Capture und Display Capture getrennt testen.',
      ],
      comments: [{ body: 'Nicht nur Preview – gespeicherte Aufnahme derselben Szene.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como saber se o OBS captura o overlay?',
      excerpt: 'Grave teste curto e revise a gravação.',
      flair: 'Q&A do guia',
      sourceTitle: 'Setup overlay stream-proof Modern Warfare',
      body: [
        'Grave curto com cena/modo exatos do OBS e revise overlay no playback.',
        'Teste game capture e display capture separadamente.',
      ],
      comments: [{ body: 'Não confie só no preview; revise gravação salva.', age: 'Do guia' }],
    },
    th: {
      title: 'เช็ค OBS จับ overlay ได้อย่างไร?',
      excerpt: 'อัดทดสอบสั้นแล้วดู playback',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'ตั้งค่า overlay stream-proof Modern Warfare',
      body: [
        'อัดสั้นด้วย scene และโหมด capture ที่จะสตรีม แล้วดู overlay ใน playback',
        'ทดสอบ game capture กับ display capture แยกกัน',
      ],
      comments: [{ body: 'อย่าเชื่อแค่ preview ดูไฟล์ที่บันทึกจาก scene เดียวกัน', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'OBS がオーバーレイをキャプチャするか確認するには？',
      excerpt: '短いテスト録画を再生確認。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare ストリームプルーフ overlay 設定',
      body: [
        '配信予定の OBS シーン・キャプチャモードで短録画し、再生で overlay 要素を確認。',
        'ゲームキャプチャとディスプレイキャプチャを別々にテスト。',
      ],
      comments: [{ body: 'プレビューだけでなく同シーンの保存録画を確認。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Cómo comprobar si OBS captura el overlay?',
      excerpt: 'Graba prueba corta y revisa playback.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Setup overlay stream-proof Modern Warfare',
      body: [
        'Graba corto con escena/modo OBS planificados y revisa overlay en playback.',
        'Prueba game capture y display capture por separado.',
      ],
      comments: [{ body: 'No solo preview; revisa grabación guardada de la misma escena.', age: 'Del guía' }],
    },
    fr: {
      title: 'Vérifier si OBS capture l’overlay ?',
      excerpt: 'Test court enregistré puis relecture.',
      flair: 'Q&R guide',
      sourceTitle: 'Setup overlay stream-proof Modern Warfare',
      body: [
        'Enregistrez court avec scène/mode OBS prévus, vérifiez l’overlay en relecture.',
        'Testez game capture et display capture séparément.',
      ],
      comments: [{ body: 'Pas seulement l’aperçu ; fichier enregistré de la même scène.', age: 'Depuis le guide' }],
    },
  },
  'what-to-do-after-hwid-change': {
    ko: {
      title: 'PC·하드웨어 변경 후 무엇을 확인하나요?',
      excerpt: 'HWID 가이드: setup 점검과 지원 연락 시점.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare HWID spoofer 밴 후',
      body: [
        '제품의 계정·기기 안내를 먼저 확인하세요. 가이드는 일반 HWID 질문과 리셋 요청 시점을 설명합니다.',
        '시스템 설정을 한꺼번에 바꾸지 마세요. 기기를 인식 못하면 오류 정보와 함께 지원에 문의하세요.',
      ],
      comments: [{ body: '기기 리셋은 공식 지원 경로를 사용하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '換 PC 或硬體後要檢查什麼？',
      excerpt: 'HWID 指南：setup 檢查與何時聯絡支援。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare HWID spoofer 封禁後',
      body: [
        '先查產品的帳號與裝置說明。指南說明常見 HWID 問題與重置請求時機。',
        '避免一次改多項系統設定；無法識別裝置時帶錯誤資訊聯絡支援。',
      ],
      comments: [{ body: '裝置重置請走官方支援，勿用無關工具。', age: '摘自指南' }],
    },
    de: {
      title: 'Was nach PC-/Hardware-Wechsel prüfen?',
      excerpt: 'HWID-Guide: Setup-Checks und Support.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare HWID Spoofer nach Ban',
      body: [
        'Konto-/Gerätehinweise des Produkts lesen. Guide zu HWID-Fragen und Reset-Anfragen.',
        'Nicht mehrere Systemeinstellungen auf einmal ändern; Support mit Fehlerdetails.',
      ],
      comments: [{ body: 'Geräte-Reset über offiziellen Support.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'O que verificar após trocar PC/hardware?',
      excerpt: 'Guia HWID: checks e quando contatar suporte.',
      flair: 'Q&A do guia',
      sourceTitle: 'HWID spoofer Modern Warfare após ban',
      body: [
        'Confira instruções de conta/dispositivo. O guia cobre HWID comum e pedidos de reset.',
        'Evite mudar várias configs de uma vez; suporte com detalhes do erro.',
      ],
      comments: [{ body: 'Reset de dispositivo pelo suporte oficial.', age: 'Do guia' }],
    },
    th: {
      title: 'เปลี่ยน PC/ฮาร์ดแวร์แล้วเช็คอะไร?',
      excerpt: 'คู่มือ HWID: การตรวจ setup และติดต่อซัพพอร์ต',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'HWID spoofer Modern Warfare หลังแบน',
      body: [
        'ดูคำแนะนำบัญชี/อุปกรณ์ของผลิตภัณฑ์ คู่มืออธิบาย HWID และเมื่อขอ reset',
        'อย่าเปลี่ยนหลายการตั้งค่าพร้อมกัน ติดต่อซัพพอร์ตพร้อมรายละเอียด error',
      ],
      comments: [{ body: 'reset อุปกรณ์ผ่านช่องทางซัพพอร์ตอย่างเป็นทางการ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'PC・ハードウェア変更後に確認することは？',
      excerpt: 'HWID ガイド：setup チェックとサポート連絡。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare HWID spoofer BAN 後',
      body: [
        '製品のアカウント・デバイス手順を確認。HWID の FAQ とリセット要請のタイミング。',
        '設定を一度に多数変更しない。認識されない場合はエラー詳細付きでサポートへ。',
      ],
      comments: [{ body: 'デバイスリセットは公式サポート経由で。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué revisar tras cambiar PC o hardware?',
      excerpt: 'Guía HWID: checks y contacto con soporte.',
      flair: 'Preguntas del guía',
      sourceTitle: 'HWID spoofer Modern Warfare tras ban',
      body: [
        'Revisa instrucciones de cuenta/dispositivo. Preguntas HWID y cuándo pedir reset.',
        'No cambies muchos ajustes a la vez; soporte con detalles del error.',
      ],
      comments: [{ body: 'Reset de dispositivo vía soporte oficial.', age: 'Del guía' }],
    },
    fr: {
      title: 'Que vérifier après changement PC/matériel ?',
      excerpt: 'Guide HWID : checks setup et support.',
      flair: 'Q&R guide',
      sourceTitle: 'HWID spoofer Modern Warfare après ban',
      body: [
        'Consultez les consignes compte/appareil. Questions HWID et demandes de reset.',
        'Évitez plusieurs changements système d’un coup ; support avec détails d’erreur.',
      ],
      comments: [{ body: 'Reset appareil via le support officiel.', age: 'Depuis le guide' }],
    },
  },
  'what-to-check-before-installing-tools': {
    ko: {
      title: '새 도구 설치 전에 무엇을 검토해야 하나요?',
      excerpt: '공식 setup, 호환 메모, 지원 정보 확인.',
      flair: '가이드 Q&A',
      sourceTitle: 'Modern Warfare 치트 기능 가이드',
      body: [
        '기능·setup 정보를 먼저 읽고 시스템과 맞는지, 최신 업데이트/상태 메모를 확인하세요.',
        '사이트 가이드는 기능 그룹과 모듈별 setup 글 링크를 제공합니다.',
      ],
      comments: [{ body: '현재 가용성·호환은 링크된 제품·지원 페이지를 기준으로 하세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '安裝新工具前要Review什麼？',
      excerpt: '官方 setup、相容說明與支援資訊。',
      flair: '指南 Q&A',
      sourceTitle: 'Modern Warfare 外掛功能指南',
      body: [
        '先讀功能與 setup，確認符合系統並查看更新/狀態。',
        '站方指南描述功能群並連到各模組 setup 文章。',
      ],
      comments: [{ body: '以連結的產品與支援頁為可用性與相容的依據。', age: '摘自指南' }],
    },
    de: {
      title: 'Was vor Installation eines neuen Tools prüfen?',
      excerpt: 'Offizielles Setup, Kompatibilität, Support.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Cheats Feature-Guide',
      body: [
        'Features/Setup lesen, System-Match und Status/Updates prüfen.',
        'Site-Guide listet Feature-Gruppen und Modul-Setup-Links.',
      ],
      comments: [{ body: 'Produkt-/Support-Seiten als Quelle für Verfügbarkeit.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'O que revisar antes de instalar uma ferramenta?',
      excerpt: 'Setup oficial, compatibilidade e suporte.',
      flair: 'Q&A do guia',
      sourceTitle: 'Guia de recursos cheats Modern Warfare',
      body: [
        'Leia features/setup, confirme sistema e notas de status/update.',
        'O guia do site liga a setups por módulo.',
      ],
      comments: [{ body: 'Use páginas de produto/suporte como fonte de disponibilidade.', age: 'Do guia' }],
    },
    th: {
      title: 'ก่อนติดตั้งเครื่องมือใหม่ควรอ่านอะไร?',
      excerpt: 'ขั้นตอน setup อย่างเป็นทางการ ความเข้ากัน และซัพพอร์ต',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'คู่มือฟีเจอร์ cheat Modern Warfare',
      body: [
        'อ่านฟีเจอร์และ setup ยืนยันระบบ และโน้ตสถานะ/อัปเดต',
        'คู่มือไซต์อธิบายกลุ่มฟีเจอร์และลิงก์ setup แต่ละโมดูล',
      ],
      comments: [{ body: 'ใช้หน้าผลิตภัณฑ์/ซัพพอร์ตเป็นที่มาของความพร้อมใช้', age: 'จากคู่มือ' }],
    },
    ja: {
      title: '新ツール導入前に確認することは？',
      excerpt: '公式 setup、互換メモ、サポート情報。',
      flair: 'ガイド Q&A',
      sourceTitle: 'Modern Warfare チート機能ガイド',
      body: [
        '機能・setup を読み、システム一致と更新/ステータスを確認。',
        'サイトガイドは機能群とモジュール別 setup リンク。',
      ],
      comments: [{ body: '可用性・互換はリンク先製品/サポートページが正。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Qué revisar antes de instalar una herramienta?',
      excerpt: 'Setup oficial, compatibilidad y soporte.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Guía funciones cheats Modern Warfare',
      body: [
        'Lee features/setup, confirma sistema y notas de estado/update.',
        'El guía del sitio enlaza setups por módulo.',
      ],
      comments: [{ body: 'Páginas producto/soporte como fuente de disponibilidad.', age: 'Del guía' }],
    },
    fr: {
      title: 'Que vérifier avant d’installer un outil ?',
      excerpt: 'Setup officiel, compatibilité, support.',
      flair: 'Q&R guide',
      sourceTitle: 'Guide fonctions cheats Modern Warfare',
      body: [
        'Lisez features/setup, compatibilité système et notes de statut.',
        'Le guide du site lie les setups par module.',
      ],
      comments: [{ body: 'Pages produit/support comme source de disponibilité.', age: 'Depuis le guide' }],
    },
  },
  'how-to-choose-mw4-2-product-tier': {
    ko: {
      title: 'Modern Warfare 제품 티어는 어떻게 고르나요?',
      excerpt: '기능 세트 비교 후 공식 checkout·setup.',
      flair: '가이드 Q&A',
      sourceTitle: '2026년 Modern Warfare 치트 구매 방법',
      body: [
        '구매 가이드는 포함 기능을 비교하고 필요에 맞는 티어를 고른 뒤 공식 checkout을 진행하라고 권장합니다.',
        '결제 흐름, 계정 접근, 최신 빌드 다운로드, 실행 전 setup 확인을 다룹니다.',
      ],
      comments: [{ body: '결제·계정 문의는 사이트 지원을 이용하고 구매 정보는 공개하지 마세요.', age: '가이드에서' }],
    },
    'zh-tw': {
      title: '如何選 Modern Warfare 產品 tier？',
      excerpt: '先比功能集，再走官方結帳與 setup。',
      flair: '指南 Q&A',
      sourceTitle: '2026 如何購買 Modern Warfare 外掛',
      body: [
        '購買指南建議比較功能後選 tier，再完成官方 checkout。',
        '涵蓋付款、帳號、下載最新 build、啟動前 setup。',
      ],
      comments: [{ body: '付款/帳號問題用站方支援，勿公開購買細節。', age: '摘自指南' }],
    },
    de: {
      title: 'Wie wähle ich die Modern-Warfare-Produktstufe?',
      excerpt: 'Feature-Sets vergleichen, offizieller Checkout/Setup.',
      flair: 'Guide-Q&A',
      sourceTitle: 'Modern Warfare Cheats kaufen 2026',
      body: [
        'Kauf-Guide empfiehlt Feature-Vergleich, passende Stufe, dann offizieller Checkout.',
        'Deckt Kauf, Account, Download, Setup vor Start.',
      ],
      comments: [{ body: 'Zahlungs-/Account-Fragen über Site-Support, keine Kauf-Details öffentlich.', age: 'Aus dem Guide' }],
    },
    'pt-br': {
      title: 'Como escolher o tier do produto Modern Warfare?',
      excerpt: 'Compare recursos, checkout e setup oficiais.',
      flair: 'Q&A do guia',
      sourceTitle: 'Como comprar cheats Modern Warfare em 2026',
      body: [
        'O guia recomenda comparar features, escolher tier e seguir checkout oficial.',
        'Cobre pagamento, conta, download do build e setup antes de abrir.',
      ],
      comments: [{ body: 'Dúvidas de pagamento/conta: suporte do site, sem detalhes públicos.', age: 'Do guia' }],
    },
    th: {
      title: 'เลือก tier ผลิตภัณฑ์ Modern Warfare อย่างไร?',
      excerpt: 'เปรียบเทียบฟีเจอร์ แล้ว checkout/setup อย่างเป็นทางการ',
      flair: 'Q&A จากคู่มือ',
      sourceTitle: 'วิธีซื้อ cheat Modern Warfare 2026',
      body: [
        'คู่มือซื้อแนะนำเทียบฟีเจอร์ เลือ tier แล้ว checkout อย่างเป็นทางการ',
        'ครอบคลุมการชำระ บัญชี ดาวน์โหลด build และ setup ก่อนเปิดเกม',
      ],
      comments: [{ body: 'เรื่องชำระ/บัญชีใช้ซัพพอร์ตไซต์ อย่าแชร์รายละเอียดการซื้อสาธารณะ', age: 'จากคู่มือ' }],
    },
    ja: {
      title: 'Modern Warfare 製品 tier の選び方は？',
      excerpt: '機能比較後、公式 checkout/setup。',
      flair: 'ガイド Q&A',
      sourceTitle: '2026年 Modern Warfare チート購入方法',
      body: [
        '購入ガイドは機能比較→tier 選択→公式 checkout を推奨。',
        '決済、アカウント、ビルド DL、起動前 setup を説明。',
      ],
      comments: [{ body: '支払い/アカウントはサイトサポートへ。購入詳細は公開しない。', age: 'ガイドより' }],
    },
    es: {
      title: '¿Cómo elegir el tier del producto Modern Warfare?',
      excerpt: 'Compara funciones y checkout/setup oficial.',
      flair: 'Preguntas del guía',
      sourceTitle: 'Cómo comprar cheats Modern Warfare en 2026',
      body: [
        'El guía recomienda comparar features, elegir tier y checkout oficial.',
        'Cubre pago, cuenta, descarga del build y setup previo.',
      ],
      comments: [{ body: 'Preguntas de pago/cuenta: soporte del sitio; no detalles públicos.', age: 'Del guía' }],
    },
    fr: {
      title: 'Comment choisir le tier produit Modern Warfare ?',
      excerpt: 'Comparez les fonctions, checkout/setup officiels.',
      flair: 'Q&R guide',
      sourceTitle: 'Acheter cheats Modern Warfare en 2026',
      body: [
        'Le guide achat : comparer les fonctions, choisir le tier, checkout officiel.',
        'Couvre paiement, compte, téléchargement du build et setup avant lancement.',
      ],
      comments: [{ body: 'Questions paiement/compte : support du site ; pas de détails publics.', age: 'Depuis le guide' }],
    },
  },
};

const LOCALES: Exclude<Locale, 'en'>[] = ['ko', 'zh-tw', 'de', 'pt-br', 'th', 'ja', 'es', 'fr'];

export const FORUM_POSTS: Partial<Record<Locale, Record<string, ForumPostTranslation>>> = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    Object.fromEntries(
      Object.entries(SLUG_I18N)
        .map(([slug, byLocale]) => [slug, byLocale[locale]])
        .filter((entry): entry is [string, ForumPostTranslation] => !!entry[1]),
    ),
  ]),
) as Partial<Record<Locale, Record<string, ForumPostTranslation>>>;
