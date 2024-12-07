export function getRandomCharOrWord(): string {
  const words = [
    'DM', 'BtoB', 'BtoC', 'データベース', 'クレンジング', 'マーケティング',
    'テレマーケティング', 'プロモーション', 'メディアミックス', 'ターゲティング',
    'Web分析', 'CRM'
  ];
  return words[Math.floor(Math.random() * words.length)];
}

