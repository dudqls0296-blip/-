/* ASHEN THRONE 발표 데이터 — 수치는 YB_S 프로젝트 소스 기준
   (BossController.cs, PlayerController.cs, PlayerInputHandler.cs, StaminaSystem.cs, BossEntranceUI.cs) */
window.AT = {};

AT.scenes = [
  { id: 's-title', key: 'HOME', ko: '게임 타이틀', nav: 'HOME' },
  { id: 's-world', key: 'WORLD', ko: '작품 및 세계관', nav: 'WORLD' },
  { id: 's-research', key: 'RESEARCH', ko: '선정 이유 및 조사', nav: 'WORLD' },
  { id: 's-direction', key: 'DIRECTION', ko: '게임 방향 및 구현', nav: 'WORLD' },
  { id: 's-arsenal', key: 'ARMORY', ko: '실제 모델링 도감', nav: 'ARMORY' },
  { id: 's-start', key: 'GAME START', ko: '게임 실행', nav: 'GAMEPLAY' },
  { id: 's-loading', key: 'LOADING', ko: '로딩', nav: 'GAMEPLAY' },
  { id: 's-tutorial', key: 'TUTORIAL', ko: '인게임 튜토리얼', nav: 'GAMEPLAY' },
  { id: 's-system', key: 'GAME SYSTEM', ko: '인게임 시스템', nav: 'GAMEPLAY' },
  { id: 's-encounter', key: 'BOSS ENCOUNTER', ko: '보스전 진입', nav: 'BOSS' },
  { id: 's-bestiary', key: 'BOSS PATTERN', ko: '보스 패턴 도감', nav: 'BOSS' },
  { id: 's-prompt', key: 'AI & PROTOTYPE', ko: '프롬프트 및 시연영상', nav: 'DEVELOPMENT' },
  { id: 's-dev', key: 'DEVELOPMENT', ko: '제작 성과 및 계획', nav: 'DEVELOPMENT' },
  { id: 's-ending', key: 'CREDITS', ko: '발표 마무리', nav: 'CREDITS' }
];

/* 모델 이미지: media/ 에 아래 파일명으로 넣으면 자동으로 표시됩니다. */
AT.armory = {
  CHARACTER: [
    { name: '철갑 기사', en: 'THE WANDERER', bg: 'THE WANDERER', img: 'media/knight_render.png', status: ['done', 'IN GAME'],
      lead: '폐허가 된 왕국을 떠도는 기사. 플레이어가 조작하는 주인공입니다.',
      desc: '판금과 사슬 갑옷, 가죽 벨트로 무게감 있는 실루엣을 만들고 Unity HDRP 머티리얼로 적용했습니다. 양손 대검 전투 모션에 맞춰 리깅했습니다.',
      stats: [['CLASS', 'KNIGHT'], ['WEAPON', 'GREATSWORD'], ['POLYGONS', '≈ 19,400'], ['TEXTURES', 'PBR 2K × 4']],
      shots: [['media/player_castle.jpg', 'IN-GAME'], ['media/tut_attack.jpg', 'IN-GAME']] }
  ],
  WEAPON: [
    { name: '그레이트 소드', en: 'GREATSWORD', bg: 'GREATSWORD', img: 'media/greatsword_render.png', status: ['done', 'IN GAME'],
      lead: '기사의 주무기. 양손으로 휘두르는 대검입니다.',
      desc: '오른손 소켓에 1.25배 크기로 장착해 위압감을 살렸습니다. 적중하는 순간 히트박스와 함께 짧은 타격 역경직이 발동합니다.',
      stats: [['TYPE', 'TWO-HANDED'], ['SCALE', '× 1.25'], ['POLYGONS', '≈ 59,600'], ['TEXTURES', 'PBR × 4']],
      shots: [['media/approach_corridor.jpg', 'IN-GAME'], ['media/boss_fight.jpg', 'IN-GAME']] }
  ],
  ENVIRONMENT: [
    { name: '잿빛 회랑', en: 'THE ASHEN PASS', bg: 'THE ASHEN PASS', img: 'media/env_wide.jpg', wide: true, status: ['done', 'IN GAME'],
      lead: '결투장으로 향하는 길. 돌벽과 돌바닥 모듈로 이어지는 협곡 회랑입니다.',
      desc: '모듈형 돌벽과 석재 바닥 파츠를 반복 배치해 길게 이어지는 진입로를 만들고, 조명으로 끝에 보이는 목적지를 강조했습니다.',
      stats: [['MODULES', 'STONE WALL · STONE FLOOR'], ['WALL', '≈ 56,700 TRIS'], ['FLOOR', '≈ 21,000 TRIS'], ['TEXTURES', 'COLOR · NORMAL · ROUGH']],
      shots: [['media/env_wall_closeup.jpg', 'WALL'], ['media/env_floor.jpg', 'FLOOR']] }
  ]
};

AT.features = [
  ['DARK FANTASY', '잿빛으로 무너진 왕국에서 펼쳐지는 1:1 결투'],
  ['3D MODELING', '철갑 기사와 그레이트 소드를 PBR로 제작 · 적용'],
  ['ENVIRONMENT', '모듈형 돌벽 · 돌바닥으로 진입 회랑과 결투장 구성'],
  ['UNITY 6 HDRP', '타이틀부터 보스전까지 끊김 없는 플레이 흐름'],
  ['BOSS COMBAT', '5단 콤보 · 회피 · 패링 · 12패턴 보스 AI']
];

AT.research = [
  {
    tag: 'LAYER I · COMBAT TEMPO & STAMINA',
    en: 'DARK SOULS SERIES',
    ko: '다크 소울 시리즈 — 정밀 공방과 스태미나 수싸움',
    desc: '공격·회피·질주가 모두 하나의 스태미나 자원을 공유하는 리소스 관리 구조와, 0.44초 무적 판정(i-Frame) 구르기 및 보스를 정면으로 응시한 채 8방향으로 이동하는 락온 전투 호흡을 분석했습니다.',
    points: [['자원 규칙', '공격 15 · 구르기 25 · 탈진 시 20까지 행동 불가'], ['무적 회피', '0.44초 i-Frame 지면 밀착 구르기 & 백스텝']]
  },
  {
    tag: 'LAYER II · PHASE GATES & TELLS',
    en: 'ELDEN RING',
    ko: '엘든 링 — 체력 구간별 패턴 해금과 엇박 심리전',
    desc: '보스의 남은 체력(100% · 70% · 50% · 30%)에 따라 새로운 패턴이 열리고, 플레이어의 성급한 구르기를 유도하는 지연 엇박 베기와 2페이즈 난무·공중 도약 필살기로 전투의 긴장감을 단계적으로 끌어올리는 구조를 조사했습니다.',
    points: [['해금 게이트', 'HP 100 / 70 / 50(2페이즈) / 30%(필살기)'], ['패턴 설계', '모든 공격을 전조(Tell) → 판정 → 후딜로 분리']]
  },
  {
    tag: 'LAYER III · HEAVY WEAPON IMPACT',
    en: 'MONSTER HUNTER',
    ko: '몬스터 헌터 — 양손 대검의 무게감과 타격 역경직',
    desc: '거대한 양손 대검(×1.25 스케일)을 휘두를 때 느껴지는 묵직한 관성과, 적중하는 순간 0.068~0.088초간 프레임을 멈추는 타격 역경직(Hit-Stop), 공격 도중 피격되어도 모션이 끊기지 않는 슈퍼아머 메커니즘을 벤치마킹했습니다.',
    points: [['타격 피드백', '역경직 0.068~0.088초 + 카메라 셰이크'], ['슈퍼아머', '공격 시전 중 피격 모션 캔슬 원천 방지']]
  }
];

AT.directions = [
  {
    num: '01',
    tag: 'DIRECTION · 게임 디렉션 설정',
    en: 'Seamless Boss Duel Experience',
    ko: '끊김 없는 1:1 보스 결투 경험으로의 집중',
    lead: '방대한 오픈월드의 이동 피로감을 덜어내고, 세 가지 핵심 재미(모델링의 시각적 무게감 · 스태미나 수싸움 · 12패턴 파훼)를 하나의 결투 흐름에 응축했습니다.',
    items: [
      '타이틀 → 로딩 → 잿빛 회랑 튜토리얼 → 보스전 진입 → 심연의 기사 결투까지 단절 없는 진행',
      '직접 제작한 철갑 기사·그레이트 소드·돌벽/돌바닥 모듈을 인게임과 쇼케이스에 1:1로 통합',
      '전조를 읽고 피한 뒤 후딜에 반격하는 정통 소울라이크 1:1 공방의 밀도 극대화'
    ]
  },
  {
    num: '02',
    tag: 'DETAIL · 게임 디테일 설정',
    en: '5-Hit Combo & 12-Pattern Boss FSM',
    ko: '플레이어 공방 시스템과 12패턴 보스 AI',
    lead: '플레이어의 조작 깊이와 보스 AI의 상태 머신(FSM)을 수치 단위로 정밀하게 맞물리도록 설계했습니다.',
    items: [
      '플레이어: 좌클릭 5단 연계 · E 회전 강공격 · 0.44초 무적 구르기 · 가드(80% 경감) 및 패링',
      '스태미나: 최대 100, 초당 25 회복(0.8초 딜레이), 0 도달 시 탈진(1.2초 지연 후 20까지 행동 불가)',
      '보스 AI: 거리와 체력(70/50/30%)에 반응하는 12종 패턴, 2페이즈 6연타 난무 및 급강하 필살기'
    ]
  },
  {
    num: '03',
    tag: 'IMPLEMENTATION · 게임 구현 설정',
    en: 'Code-First Chunks & Prefab Modularization',
    ko: '프로토타입 선구현 후 에셋 업그레이드 아키텍처',
    lead: '안티그래비티 AI와 협업하여 프로토타입을 먼저 완성하고, 이후 프리팹만 교체해 에셋을 고도화할 수 있는 구조로 구현했습니다.',
    items: [
      '코드-퍼스트 청크 분리: 단일 스크립트 비대화를 막기 위해 PlayerController · BossController · StaminaSystem 등 역할별 분리',
      '프리팹 폴더 분리 & HDRP 호환: 캐릭터·무기·환경 프리팹을 별도 폴더로 모아 머티리얼 깨짐 없이 교체 가능',
      '피드백 루프 검증: 슈퍼아머 적용, 왼팔/몸체 본 꼬임 제거, 지면 밀착 구르기(-0.22m) 보정 및 로그 자동 기록'
    ]
  }
];

AT.prompts = [
  '다크 판타지 세계관의 몰락한 왕국을 배경으로, 잡몹 구간을 배제하고 1:1 보스 결투에 모든 밀도를 압축한 정통 소울라이크 프로토타입을 기획하려고 해. 묵직한 대검 액션과 긴장감 있는 공방 호흡을 중심으로 기본 기획안을 도출해줘.',
  'Unity 6 HDRP 환경에서 스크립트 비대화로 인한 AI 컨텍스트 한계를 방지하기 위해, PlayerController, PlayerInputHandler, StaminaSystem, BossController로 기능별 청크 스크립트를 엄격히 분리해줘.',
  '다크 판타지 특유의 묵직한 대검 5단 연계와 회전 강공격을 구현해줘. 공격 도중 보스에게 피격되더라도 콤보가 취소되지 않도록 AnyState 피격 전이를 차단하는 슈퍼아머(Super Armor) 메커니즘을 적용해줘.',
  'DoubleL 양손 대검 애니메이션 연동 시 발생하는 왼팔/몸체 뒤틀림 버그(LateUpdate 강제 회전)를 원천 제거하고, 공중으로 뜨지 않는 지면 밀착형(-0.22m) 0.44초 i-Frame 무적 구르기를 완성해줘.',
  '보스 \'심연의 기사\' AI를 FSM으로 구축해줘. 거리와 체력 구간(100%, 70%, 50%, 30%)에 따라 12가지 패턴이 순차 해금되고, 50% 이하 2페이즈에서는 포효와 함께 6연타 난무 및 대지 강타 필살기가 발동되도록 전조(Tell)-판정-후딜 구조를 짜줘.',
  '프로토타입 이후 모델링과 텍스처를 손쉽게 교체할 수 있도록 철갑 기사, 대검, 성채 돌벽/돌바닥 모듈을 Prefabs/ 폴더에 독립 프리팹으로 정리하고, Unity 6 HDRP에서 핑크색 머티리얼 깨짐이 없도록 PBR 프로퍼티를 검증해줘.',
  '기능을 구현할 때마다 컴파일 에러 0개 달성 여부와 인게임 정상 동작을 피드백 루프로 직접 테스트하고, 작업 내역과 남은 과제를 마크다운 개발 일지(TODAY_WORK_LOG.md)에 실시간으로 업데이트해줘.'
];

AT.tutorial = [
  { t: 'MOVE', ko: '캐릭터 이동', keys: [['W A S D', '이동'], ['SHIFT', '질주']], text: '카메라 방향 기준으로 이동합니다. 기본은 무게감 있는 보행이고, Shift를 누르는 동안 질주합니다.', facts: [['보행 속도', '2.65 m/s'], ['질주 속도', '5.4 m/s'], ['질주 소모', '스태미나 12 / 초']], img: 'media/tut_move.jpg', video: 'media/tutorial_move.mp4', cap: '인게임 튜토리얼: 잿빛 왕국을 탐험하라' },
  { t: 'CAMERA', ko: '카메라 조작', keys: [['MOUSE', '시점 회전'], ['Q', '락온'], ['TAB', '락온 (보조)']], text: '마우스로 시점을 돌리고, Q로 보스를 고정하면 보스를 바라본 채 8방향으로 걷고 물러날 수 있습니다.', facts: [['락온 이동', '8방향 스트레이프'], ['후진', '보스 응시 유지']], img: 'media/tut_move.jpg', video: 'media/tutorial_camera.mp4', cap: '인게임: 마우스 시점 조작' },
  { t: 'ATTACK', ko: '기본 공격', keys: [['LMB', '내려찍기'], ['J / F', '보조 키']], text: '양손으로 대검을 들어 내려찍습니다. 공격 중에 피격되어도 동작이 끊기지 않습니다(슈퍼아머).', facts: [['소모', '스태미나 15'], ['적중 시', '역경직 0.068~0.088초'], ['연출', '카메라 셰이크']], img: 'media/tut_attack.jpg', video: 'media/tutorial_attack.mp4', cap: '인게임 튜토리얼: 검을 휘둘러 적을 공격하라' },
  { t: 'COMBO', ko: '연속 공격', keys: [['LMB 연타', '1타 → 2타 → 3타'], ['E', '회전 강공격']], text: '공격 후반의 입력 구간에 다시 누르면 다음 타로 이어집니다. 코드상 최대 5타까지 연계되며, 어느 타에서든 구르기로 캔슬할 수 있습니다.', facts: [['연계', '최대 5타'], ['타당 소모', '스태미나 15'], ['강공격', '스태미나 25']], img: 'media/boss_fight.jpg', video: 'media/tutorial_combo.mp4', cap: '인게임: 보스전 근접 전투' },
  { t: 'DODGE', ko: '회피', keys: [['SPACE', '구르기'], ['C', '보조 키']], text: '바닥에 바짝 붙어 구르며 공격을 피합니다. 락온 중 정지하거나 뒤로 이동하면 백스텝이 나갑니다.', facts: [['소모', '스태미나 25'], ['무적 시간', '0.44초'], ['락온 + 정지', '백스텝']], img: 'media/tut_dodge.jpg', video: 'media/tutorial_dodge.mp4', cap: '인게임 튜토리얼: 적의 공격을 구르기로 회피하라' },
  { t: 'STAMINA', ko: '스태미나 관리', keys: [['RMB', '가드 (홀드)'], ['G / CTRL', '보조 키']], text: '공격, 회피, 질주에 모두 스태미나가 듭니다. 바닥나면 탈진 상태가 되어 20까지 회복될 때까지 행동할 수 없습니다.', facts: [['최대', '100'], ['회복', '초당 25'], ['탈진', '20까지 행동 불가'], ['가드', '피해 80% 경감']], img: 'media/tut_stamina.jpg', video: 'media/tutorial_stamina.mp4', cap: '인게임 튜토리얼: 스태미나를 관리하며 전투하라' }
];

AT.systems = [
  { name: 'CHARACTER CONTROL', text: '마우스 + 키보드, 키보드 단독, 게임패드를 모두 지원합니다.', items: ['카메라 기준 360도 이동 · 보행/질주 분리', 'Q 락온 시 8방향 스트레이프와 후진 이동', '대기 · 보행 · 달리기 · 질주 블렌드 트리'] },
  { name: 'COMBAT SYSTEM', text: '대검의 무게감을 살린 근접 전투입니다. 입력을 미리 받아 두어 연계가 끊기지 않습니다.', items: ['좌클릭 연타 최대 5단 연계 · E 회전 강공격', '적중 시 타격 역경직과 카메라 셰이크', '공격 중 피격되어도 끊기지 않는 슈퍼아머'] },
  { name: 'DODGE SYSTEM', text: '공격 도중에도 구르기로 캔슬할 수 있어, 보스의 전조를 보고 반응하는 플레이가 가능합니다.', items: ['지면에 밀착하는 낮은 구르기', '0.44초 무적 판정', '락온 중 정지 · 후진 시 백스텝'] },
  { name: 'STAMINA SYSTEM', text: '왼쪽 버튼을 누르면 게임과 같은 규칙으로 스태미나가 소모되고 회복됩니다.', items: ['공격 15 · 강공격 25 · 구르기 25 · 질주 12/초', '0.8초 후 초당 25 회복', '0이 되면 탈진: 1.2초 후 회복, 20 미만 행동 불가'] },
  { name: 'BOSS AI', text: '거리와 남은 체력에 따라 쓸 수 있는 패턴을 고릅니다. 모든 패턴은 전조 → 판정 → 후딜로 나뉩니다.', items: ['12개 패턴 · 체력 70 / 50 / 30%에서 새 패턴 해금', '50% 이하 2페이즈: 포효 연출과 BGM 전환', '패턴 시전 시 화면 상단에 패턴명 안내'] }
];

AT.gates = [
  { at: 1, tab: 'ALWAYS', label: '항상 사용' },
  { at: .7, tab: 'HP 70%', label: '체력 70% 이하 해금' },
  { at: .5, tab: 'HP 50%', label: '체력 50% 이하 · 2페이즈' },
  { at: .3, tab: 'HP 30%', label: '체력 30% 이하 · 필살기' }
];

AT.patterns = [
  { n: 1, id: 'BasicSlash', name: '기본 베기', dmg: '15', range: '0 ~ 4.5m', w: .6, a: .2, r: .5, parry: true, gate: 1, desc: '전방을 가볍게 베어내는 기본 횡베기입니다.', tell: '검을 오른쪽으로 당기며 반 걸음 전진', counter: '검을 당기는 순간 보스 왼편으로 구르거나 패링합니다. 후딜 0.5초에 한 번 반격할 수 있습니다.' },
  { n: 2, id: 'DoubleSlash', name: '2연격', dmg: '12 + 15', range: '0 ~ 4.5m', w: .5, a: .2, r: .6, parry: true, gate: 1, shot: 'media/pat_double.jpg', desc: '좌우로 빠르게 이어지는 2연속 베기입니다.', tell: '기본 베기와 같은 시작, 첫 타 이후 몸을 반대로 비틂', counter: '첫 타만 보고 반격하지 말고, 두 번째 베기까지 피한 뒤 후딜 0.6초에 공격합니다.' },
  { n: 3, id: 'TripleSlash', name: '3연격', dmg: '12 + 12 + 20', range: '0 ~ 4.5m', w: .6, a: .2, r: .8, parry: true, gate: 1, shot: 'media/pat_parry.jpg', desc: '횡베기 두 번 뒤 대검을 들어 내려치는 3단 콤보입니다.', tell: '두 번째 베기 후 검을 머리 위로 들어 올림', counter: '마지막 내려치기가 가장 아픕니다. 검을 들어 올릴 때 옆으로 구르면 0.8초 반격 기회가 생깁니다.' },
  { n: 4, id: 'Thrust', name: '전진 찌르기', sub: '백스텝 롤캐치', dmg: '20', range: '2 ~ 6m', w: .5, a: .25, r: .7, parry: true, gate: 1, shot: 'media/pat_thrust.jpg', desc: '백스텝으로 거리를 벌린 뒤 3.5m를 파고드는 찌르기입니다. 일찍 구른 플레이어를 잡아냅니다.', tell: '뒤로 물러서며 검끝을 겨눔', counter: '백스텝을 보자마자 구르면 걸립니다. 보스가 앞으로 튀어나오는 순간 옆으로 구르세요.' },
  { n: 5, id: 'HeavyOverhead', name: '강 내려찍기', sub: '처형 강타', dmg: '35', range: '0 ~ 4.5m', w: 1.0, a: .3, r: 1.2, parry: false, gate: 1, desc: '대검을 머리 위로 치켜들어 지면을 분쇄하는 강타입니다. 패링이 통하지 않습니다.', tell: '1초 동안 검을 높이 들고 멈춤', counter: '가드 대신 반드시 구릅니다. 검이 바닥에 박힌 1.2초가 가장 큰 공격 기회입니다.' },
  { n: 6, id: 'DashSlash', name: '돌진 베기', dmg: '25', range: '3.5 ~ 10m', w: .6, a: .3, r: .8, parry: true, gate: .7, desc: '낮은 자세로 힘을 모았다가 6m를 순식간에 좁히며 베어 넘깁니다.', tell: '멀리서 자세를 낮추고 검을 뒤로 뺌', counter: '거리를 벌리면 오히려 이 패턴을 부릅니다. 돌진 방향 옆으로 구릅니다.' },
  { n: 7, id: 'SpinSlash', name: '회전 베기', sub: '360도 선풍', dmg: '20', range: '0 ~ 4m', w: .6, a: .35, r: .8, parry: true, gate: .7, desc: '몸을 웅크렸다가 360도로 휩쓰는 회전 참격입니다.', tell: '몸을 웅크리며 검을 허리 옆으로 붙임', counter: '등 뒤도 안전하지 않습니다. 웅크리는 순간 4m 밖으로 물러납니다.' },
  { n: 8, id: 'DelayedSlash', name: '지연 엇박 베기', dmg: '22', range: '0 ~ 4.5m', w: 1.0, a: .2, r: .6, parry: true, gate: .7, desc: '팔을 든 채 멈춰 성급한 구르기를 유도한 뒤 번개처럼 벱니다.', tell: '검을 든 채 비정상적으로 오래 정지', counter: '멈췄을 때 구르지 말고 한 박자 기다렸다가, 검이 내려오기 시작할 때 구릅니다.' },
  { n: 9, id: 'Counter', name: '반격 태세', sub: '가드 & 리포스트', dmg: '25', range: '0 ~ 3.5m', w: .2, a: 1.5, r: .5, parry: false, gate: .7, desc: '1.5초간 가드 자세를 취하고, 그 사이 공격받으면 즉시 반격합니다.', tell: '대검을 몸 앞에 세워 막는 자세', counter: '가드 자세를 보면 공격을 멈추고 거리를 둡니다. 자세가 풀린 뒤 들어갑니다.' },
  { n: 10, id: 'FourCombo', name: '4연계 콤보', dmg: '12 + 12 + 18 + 20', range: '0 ~ 4.5m', w: .5, a: .2, r: 1.3, parry: true, gate: .7, desc: '좌우 연격, 찌르기, 내려찍기로 이어지는 4단 연계입니다. 마지막 타는 패링할 수 없습니다.', tell: '2연격과 같은 시작에서 찌르기로 이어짐', counter: '네 번째 내려찍기까지 끝까지 피하면 1.3초 무방비 시간이 생깁니다.' },
  { n: 11, id: 'RageCombo', name: '심연의 분노 난무', sub: '6연격', dmg: '총 77', range: '0 ~ 10m', w: .7, a: .3, r: 1.5, parry: false, gate: .5, desc: '2페이즈 전용. 돌진, 좌베기, 우베기, 찌르기, 회전, 대지 강타의 6연타 난무입니다.', tell: '페이즈 전환 포효 이후 멀리서 돌진으로 시작', counter: '스태미나를 50 이상 남겨 두세요. 마지막 강타 이후 1.5초가 반격 기회입니다.' },
  { n: 12, id: 'UltimateAshenRuin', name: '필살 잿빛 대파쇄', sub: 'Ashen Ruin', dmg: '50', range: '0 ~ 12m', w: 1.5, a: .4, r: 1.5, parry: false, gate: .3, desc: '공중으로 도약해 플레이어를 향해 급강하하고, 착지하며 대지를 분쇄하는 2단 필살기입니다.', tell: '1.5초 동안 힘을 모은 뒤 높이 도약', counter: '도약하는 순간이 아니라 내려오는 순간에 구릅니다. 대검이 박힌 1.5초 동안 최대 피해를 넣으세요.' }
];

AT.ledger = [
  ['캐릭터 모델링', 'done', '철갑 기사 · PBR 텍스처 · 휴머노이드 리깅'],
  ['무기 모델링', 'done', '그레이트 소드 · 손 소켓 정렬'],
  ['성 주변 구조물', 'done', '돌벽 · 돌바닥 모듈과 프리팹'],
  ['Unity 엔진 적용', 'done', 'HDRP 머티리얼 · 플레이어/보스 프리팹 · 씬 구성'],
  ['인게임 플레이 환경', 'wip', '진입 회랑 · 결투장 배치, 레벨 아트 보완 중'],
  ['전투 · 애니메이션', 'done', '5단 콤보 · 강공격 · 구르기 · 가드/패링 · 락온'],
  ['보스 패턴 AI', 'done', '12개 패턴 · 체력 구간 해금 · 2페이즈'],
  ['보스 전용 모델', 'plan', '현재 프로토타입 외형 · 전용 모델 제작 예정'],
  ['UI · 진행 구조', 'done', '타이틀 · 로딩 · 튜토리얼 · 보스 진입 · HUD'],
  ['사운드', 'done', '발소리 · 타격음 · 보스 대검음 · 페이즈 BGM']
];

AT.roadmap = [
  ['전투 시스템 안정화', '피격 판정과 히트박스 타이밍 검증'],
  ['콤보 · 회피 애니메이션 연계 개선', '캔슬 구간과 입력 버퍼 다듬기'],
  ['스태미나 밸런스 조정', '플레이 테스트로 소모량과 탈진 구간 조정'],
  ['보스 전용 모델과 패턴 밸런스', '임시 메시 교체 · 12패턴 난이도 조정'],
  ['환경과 레벨 구성 보완', '결투장 레벨 아트와 조명'],
  ['UI · 사운드 · 완성도', '처형 연출 · 효과음 추가 · 빌드 최적화']
];
