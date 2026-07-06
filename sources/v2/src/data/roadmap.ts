/**
 * Internal sprint roadmap — bilingual (RU default, EN toggle).
 * Ported verbatim from the studio's methodology document.
 */

export type Lang = 'ru' | 'en';
export type L10n = Record<Lang, string>;

export type CellType = 'concept' | 'assets' | 'dev' | 'polish' | 'mkt' | 'rel' | 'buf';

export const UI: Record<string, L10n> = {
  eyebrow: { ru: 'Дорожная карта спринта · v2', en: 'Sprint roadmap · v2' },
  title: { ru: 'Дорожная карта', en: 'Sprint roadmap' },
  lede: {
    ru: '4 недели, 20 рабочих дней, одна методика. От идеи до релиза в магазинах с готовыми рекламными видео.',
    en: 'Four weeks, twenty working days, one methodology. From concept to live release on the stores with ready-to-ship ad videos.',
  },
  statDays: { ru: 'рабочих дней', en: 'working days' },
  statWeeks: { ru: 'недели', en: 'weeks' },
  statCheckpoints: { ru: 'чекпоинтов', en: 'checkpoints' },
  scrollHint: { ru: '⇄ таблицу можно проматывать горизонтально', en: '⇄ scroll the timeline horizontally' },
  checkpointsLabel: { ru: 'Чекпоинты', en: 'Checkpoints' },
  flowIdx: { ru: '02 · Процесс', en: '02 · Workflow' },
  flowTitleA: { ru: 'Флоу', en: 'Artist' },
  flowTitleB: { ru: 'художника', en: 'workflow' },
  iosStrong: { ru: 'Художник', en: 'Artist' },
  iosText: {
    ru: ' — iPhone у него в команде. Тест в субботу-воскресенье после дня 15, без потери рабочих дней.',
    en: ' — owns the iPhone on the team. Weekend testing (Sat–Sun) after day 15, no working days lost.',
  },
  rulesIdx: { ru: '03 · Правила', en: '03 · Rules' },
  rulesTitleA: { ru: 'Ключевые', en: 'Core' },
  rulesTitleB: { ru: 'правила', en: 'rules' },
  roleWord: { ru: 'роль', en: 'role' },
  footerMain: { ru: '© Taratorkin Official · Методика студии', en: '© Taratorkin Official · Studio methodology' },
  footerSig: { ru: 'обновляется в начале каждого спринта', en: 'refreshed at the start of every sprint' },
};

export const WEEKS: { num: L10n; title: L10n; colorVar: string }[] = [
  { num: { ru: 'Неделя 01', en: 'Week 01' }, title: { ru: 'Фундамент', en: 'Foundation' }, colorVar: '--ph-polish' },
  { num: { ru: 'Неделя 02', en: 'Week 02' }, title: { ru: 'Наполнение', en: 'Build phase' }, colorVar: '--ph-dev' },
  { num: { ru: 'Неделя 03', en: 'Week 03' }, title: { ru: 'Полировка + маркетинг', en: 'Polish + marketing' }, colorVar: '--ph-assets' },
  { num: { ru: 'Неделя 04', en: 'Week 04' }, title: { ru: 'Буфер + релиз', en: 'Buffer + release' }, colorVar: '--ph-rel' },
];

export const DAYS: Record<Lang, [string, string][]> = {
  ru: [['Пн','1'],['Вт','2'],['Ср','3'],['Чт','4'],['Пт','5'],['Пн','6'],['Вт','7'],['Ср','8'],['Чт','9'],['Пт','10'],['Пн','11'],['Вт','12'],['Ср','13'],['Чт','14'],['Пт','15'],['Пн','16'],['Вт','17'],['Ср','18'],['Чт','19'],['Пт','20']],
  en: [['Mon','1'],['Tue','2'],['Wed','3'],['Thu','4'],['Fri','5'],['Mon','6'],['Tue','7'],['Wed','8'],['Thu','9'],['Fri','10'],['Mon','11'],['Tue','12'],['Wed','13'],['Thu','14'],['Fri','15'],['Mon','16'],['Tue','17'],['Wed','18'],['Thu','19'],['Fri','20']],
};

export interface RowItem {
  span: number;
  type: CellType;
  strong?: boolean;
  title: L10n;
  sub?: L10n;
}

export interface Row {
  key: 'founder' | 'lead' | 'third' | 'artist';
  tag: string;
  name: L10n;
  sub: L10n;
  items: RowItem[];
}

export const ROWS: Row[] = [
  {
    key: 'founder',
    tag: '01',
    name: { ru: 'ОСНОВАТЕЛЬ', en: 'FOUNDER' },
    sub: { ru: 'архитектор', en: 'architect' },
    items: [
      { span: 1, type: 'concept', strong: true, title: { ru: 'Концепт', en: 'Concept' }, sub: { ru: 'dev-план', en: 'dev-plan' } },
      { span: 1, type: 'dev', strong: true, title: { ru: 'Кор', en: 'Core' }, sub: { ru: '+ Claude', en: '+ Claude' } },
      { span: 3, type: 'dev', title: { ru: 'Ревью · архитектор', en: 'Review · architect' }, sub: { ru: 'помощь в сложных задачах', en: 'helping on tough problems' } },
      { span: 5, type: 'dev', title: { ru: 'Ревью PR · тюнинг', en: 'PR review · tuning' }, sub: { ru: 'поддержка', en: 'support' } },
      { span: 3, type: 'polish', title: { ru: 'Полировка', en: 'Polish' }, sub: { ru: 'ощущения · баланс', en: 'juice · balancing' } },
      { span: 1, type: 'mkt', title: { ru: 'Тексты', en: 'Store' }, sub: { ru: 'магазинов', en: 'copy' } },
      { span: 1, type: 'rel', strong: true, title: { ru: 'Сборки', en: 'Builds' }, sub: { ru: 'раздача', en: 'distribution' } },
      { span: 1, type: 'rel', strong: true, title: { ru: 'Google', en: 'Google' }, sub: { ru: 'публикация', en: 'submit' } },
      { span: 1, type: 'rel', strong: true, title: { ru: 'Apple', en: 'Apple' }, sub: { ru: 'публикация', en: 'submit' } },
      { span: 2, type: 'rel', title: { ru: 'Ожидание ревью', en: 'Awaiting review' }, sub: { ru: 'подготовка к релизу', en: 'release prep' } },
      { span: 1, type: 'rel', strong: true, title: { ru: 'Релиз', en: 'Release' }, sub: { ru: 'передача', en: 'handoff' } },
    ],
  },
  {
    key: 'lead',
    tag: '02',
    name: { ru: 'ВЕДУЩИЙ', en: 'LEAD' },
    sub: { ru: 'разработчик', en: 'developer' },
    items: [
      { span: 1, type: 'concept', title: { ru: 'Мозговой', en: 'Brain-' }, sub: { ru: 'штурм', en: 'storm' } },
      { span: 1, type: 'concept', title: { ru: 'Разбор', en: 'Task' }, sub: { ru: 'задач', en: 'alignment' } },
      { span: 1, type: 'dev', title: { ru: 'Вспом.', en: 'Helper' }, sub: { ru: 'системы', en: 'systems' } },
      { span: 7, type: 'dev', title: { ru: 'Основная разработка', en: 'Core development' }, sub: { ru: 'приём кора · внедрение ассетов · фичи', en: 'taking over core · asset integration · features' } },
      { span: 3, type: 'polish', title: { ru: 'Полировка · баги', en: 'Polish · bugs' }, sub: { ru: 'ощущения · оптимизация', en: 'juice · optimization' } },
      { span: 1, type: 'polish', title: { ru: 'Полировка', en: 'Polish' }, sub: { ru: 'финальная', en: 'final' } },
      { span: 1, type: 'polish', strong: true, title: { ru: 'QA', en: 'QA' }, sub: { ru: 'Android', en: 'Android' } },
      { span: 3, type: 'buf', title: { ru: 'Фиксы по тестам', en: 'Test fixes' }, sub: { ru: 'финальные правки', en: 'final tweaks' } },
      { span: 1, type: 'rel', title: { ru: 'Помощь', en: 'Build' }, sub: { ru: 'со сборкой', en: 'support' } },
      { span: 1, type: 'rel', title: { ru: 'Релиз', en: 'Release' }, sub: { ru: 'поддержка', en: 'support' } },
    ],
  },
  {
    key: 'third',
    tag: '03',
    name: { ru: 'ПОМОЩНИК', en: 'SUPPORT' },
    sub: { ru: 'разработчик', en: 'developer' },
    items: [
      { span: 1, type: 'concept', title: { ru: 'Мозговой', en: 'Brain-' }, sub: { ru: 'штурм', en: 'storm' } },
      { span: 1, type: 'concept', title: { ru: 'Разбор', en: 'Task' }, sub: { ru: 'задач', en: 'alignment' } },
      { span: 1, type: 'mkt', title: { ru: 'Поиск', en: 'Sound' }, sub: { ru: 'звуков', en: 'sourcing' } },
      { span: 4, type: 'dev', title: { ru: 'Узкие задачи · фиксы', en: 'Narrow tasks · fixes' }, sub: { ru: 'тест Android · события аналитики', en: 'Android tests · analytics events' } },
      { span: 3, type: 'dev', title: { ru: 'SDK · реклама', en: 'SDK · ads' }, sub: { ru: 'аналитика · интеграции', en: 'analytics · integrations' } },
      { span: 2, type: 'polish', title: { ru: 'Баги', en: 'Bugs' }, sub: { ru: 'туториал', en: 'tutorial' } },
      { span: 2, type: 'mkt', strong: true, title: { ru: 'Запись', en: 'Gameplay' }, sub: { ru: 'геймплея + скрины', en: 'capture + screenshots' } },
      { span: 1, type: 'polish', title: { ru: 'QA', en: 'QA' }, sub: { ru: 'Android', en: 'Android' } },
      { span: 3, type: 'buf', title: { ru: 'Финальное QA', en: 'Final QA' }, sub: { ru: 'фиксы по тестам', en: 'test fixes' } },
      { span: 1, type: 'rel', title: { ru: 'Помощь', en: 'Build' }, sub: { ru: 'со сборкой', en: 'support' } },
      { span: 1, type: 'rel', title: { ru: 'Релиз', en: 'Release' }, sub: { ru: 'поддержка', en: 'support' } },
    ],
  },
  {
    key: 'artist',
    tag: '04',
    name: { ru: 'ХУДОЖНИК', en: 'ARTIST' },
    sub: { ru: 'арт · iOS-QA', en: 'art · iOS QA' },
    items: [
      { span: 1, type: 'concept', strong: true, title: { ru: 'Мудборд', en: 'Moodboard' }, sub: { ru: 'референсы', en: 'references' } },
      { span: 3, type: 'assets', title: { ru: 'Ассеты + иконки', en: 'Assets + icons' }, sub: { ru: 'черновые → финальные', en: 'drafts → finals' } },
      { span: 1, type: 'assets', strong: true, title: { ru: 'Стиль', en: 'Style' }, sub: { ru: 'фриз', en: 'freeze' } },
      { span: 3, type: 'assets', title: { ru: 'Финальные ассеты + UI', en: 'Final assets + UI' }, sub: { ru: 'волнами в репозиторий', en: 'committed in waves' } },
      { span: 1, type: 'mkt', title: { ru: 'Звук · эмодзи', en: 'Sound · emojis' }, sub: { ru: 'идеи для хуков', en: 'hook ideas' } },
      { span: 1, type: 'mkt', title: { ru: 'Статика', en: 'Stills' }, sub: { ru: 'игры', en: 'game' } },
      { span: 4, type: 'mkt', title: { ru: 'Динамика · хуки', en: 'Motion · hooks' }, sub: { ru: 'рендер видео', en: 'video rendering' } },
      { span: 1, type: 'polish', strong: true, title: { ru: 'QA', en: 'QA' }, sub: { ru: 'iOS', en: 'iOS' } },
      { span: 3, type: 'mkt', strong: true, title: { ru: 'Склейка', en: 'Stitch' }, sub: { ru: 'роликов', en: 'final cuts' } },
      { span: 1, type: 'rel', title: { ru: 'Помощь', en: 'Build' }, sub: { ru: 'со сборкой', en: 'support' } },
      { span: 1, type: 'rel', title: { ru: 'Релиз', en: 'Release' }, sub: { ru: 'поддержка', en: 'support' } },
    ],
  },
];

export interface Checkpoint {
  day: number;
  text: L10n;
  dayLabel: L10n;
  release?: boolean;
}

export const CHECKPOINTS: Checkpoint[] = [
  { day: 2, text: { ru: 'РЕВЬЮ КОРА', en: 'CORE REVIEW' }, dayLabel: { ru: 'день 2', en: 'day 2' } },
  { day: 5, text: { ru: 'СТИЛЬ-ФРИЗ', en: 'STYLE FREEZE' }, dayLabel: { ru: 'день 5', en: 'day 5' } },
  { day: 10, text: { ru: 'ФИЧА-ФРИЗ', en: 'FEATURE FREEZE' }, dayLabel: { ru: 'день 10', en: 'day 10' } },
  { day: 15, text: { ru: 'СБОРКИ', en: 'BUILDS' }, dayLabel: { ru: 'день 15', en: 'day 15' } },
  { day: 18, text: { ru: 'ОЖИДАНИЕ', en: 'AWAITING' }, dayLabel: { ru: 'день 18', en: 'day 18' } },
  { day: 20, text: { ru: 'РЕЛИЗ', en: 'RELEASE' }, dayLabel: { ru: 'день 20', en: 'day 20' }, release: true },
];

export const FLOW: { lbl: L10n; desc: L10n }[] = [
  { lbl: { ru: 'Ассеты + иконки', en: 'Assets + icons' }, desc: { ru: 'черновые → финал, волнами в репо', en: 'drafts → finals, committed in waves' } },
  { lbl: { ru: 'Звук · эмодзи', en: 'Sound · emojis' }, desc: { ru: 'стикеры, подписи, нотификации', en: 'stickers, captions, fake notifications' } },
  { lbl: { ru: 'Статика скринов', en: 'Static shots' }, desc: { ru: 'постановка кадров, концепты хуков', en: 'store screenshots, hook concepts' } },
  { lbl: { ru: 'Динамика · хуки', en: 'Motion · hooks' }, desc: { ru: 'анимация зацепов для рекламы', en: 'animating the ad grabbers' } },
  { lbl: { ru: 'Рендер видео', en: 'Hook renders' }, desc: { ru: 'хуки в форматах площадок', en: 'ad-platform formats and ratios' } },
  { lbl: { ru: 'Склейка → финал', en: 'Stitch → final cuts' }, desc: { ru: 'хук + геймплей = 5–6 роликов', en: 'hook + gameplay = 5–6 ad videos' } },
];

export const RULES: { num: string; h3: L10n; p: L10n }[] = [
  {
    num: '01',
    h3: { ru: 'Стиль-фриз', en: 'Style freeze' },
    p: {
      ru: 'Пятница 1-й недели — визуал зафиксирован. После этой точки переделки визуального стиля запрещены.',
      en: 'Friday of week 1 — visual direction is locked. No style re-works allowed after this point.',
    },
  },
  {
    num: '02',
    h3: { ru: 'Фича-фриз', en: 'Feature freeze' },
    p: {
      ru: 'Пятница 2-й недели — фичи зафиксированы. Новое не добавляется, только фиксы и полировка.',
      en: 'Friday of week 2 — feature set is locked. Nothing new added, only fixes and polish from here.',
    },
  },
  {
    num: '03',
    h3: { ru: 'iOS-QA на выходных', en: 'Weekend iOS QA' },
    p: {
      ru: 'iPhone у художника. Тест на сб/вс после дня 15, без потери рабочих дней команды.',
      en: 'The artist owns the iPhone. Sat–Sun testing after day 15, no working days burned.',
    },
  },
  {
    num: '04',
    h3: { ru: 'Релизная неделя', en: 'Release week' },
    p: {
      ru: 'Пн — отправка Google, вт — отправка Apple, ср-чт — ожидание ревью, пт — релиз. Неделя не для доделки, а для релизной логистики.',
      en: 'Mon — Google submit, Tue — Apple submit, Wed–Thu — review wait, Fri — release. Not a week for finishing work.',
    },
  },
  {
    num: '05',
    h3: { ru: 'Готовность 99%', en: '99% ready by week 4' },
    p: {
      ru: 'Входим в 4-ю неделю с почти готовым проектом. Если остались незавершённые фичи — методика сбоит.',
      en: 'We enter week 4 with a near-complete build. Unfinished features at this point mean the methodology has slipped.',
    },
  },
  {
    num: '06',
    h3: { ru: 'Стендап 15 минут', en: '15-minute standup' },
    p: {
      ru: 'Утром, Trello-дисциплина. Помощник — узкие изолированные задачи, работает во второй половине дня.',
      en: 'Morning sync, strict Trello discipline. The support dev takes narrow, isolated tasks — working the afternoon shift.',
    },
  },
];

export const LEGEND: { type: CellType | 'checkpoint'; label: L10n }[] = [
  { type: 'concept', label: { ru: 'Концепт', en: 'Concept' } },
  { type: 'assets', label: { ru: 'Ассеты', en: 'Assets' } },
  { type: 'dev', label: { ru: 'Разработка', en: 'Development' } },
  { type: 'polish', label: { ru: 'Полировка / QA', en: 'Polish / QA' } },
  { type: 'mkt', label: { ru: 'Маркетинг', en: 'Marketing' } },
  { type: 'rel', label: { ru: 'Релиз', en: 'Release' } },
  { type: 'buf', label: { ru: 'Буфер / фиксы', en: 'Buffer / fixes' } },
  { type: 'checkpoint', label: { ru: 'Чекпоинт', en: 'Checkpoint' } },
];
