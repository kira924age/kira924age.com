export type Manga = {
  id: number;
  name: string;
  tags?: string[];
  volume?: number;
};

export const FAVORITE_MANGA_LIST: Manga[] = [
  {
    id: 0,
    name: "NEW GAME!",
    tags: ["コメディ", "百合", "4コマ", "お仕事", "まんがタイムきらら"],
    volume: 13,
  },
  {
    id: 1,
    name: "魔法少女にあこがれて",
    tags: ["魔法少女", "百合", "バトル", "ブラック・コメディ"],
    volume: 11,
  },
  {
    id: 3,
    name: "明日ちゃんのセーラー服",
    tags: ["青春", "百合", "学園"],
    volume: 15,
  },
  { id: 18, name: "ゆゆ式 (Yuyushiki)" },
  { id: 4, name: "お兄ちゃんはおしまい！ (Oniichan wa Oshimai!" },
  { id: 5, name: "とある科学の超電磁砲 (Toaru Kagaku no Railgun)" },
  { id: 6, name: "はねバド！ (Hanebado!)" },
  { id: 7, name: "DEATH NOTE" },
  { id: 8, name: "げんしけん (Genshiken)" },
  { id: 9, name: "笑顔のたえない職場です。 (Egao no Taenai Shokuba desu." },
  { id: 10, name: "スクールゾーン (School Zone)" },
  { id: 11, name: "欠けた月とドーナッツ (Kaketa Tsuki to Doughnut)" },
  { id: 12, name: "少女終末旅行 (Shoujo Shuumatsu Ryokou)" },
  { id: 13, name: "千早さんはそのままでいい" },
  { id: 14, name: "まちカドまぞく(Machikado Mazoku)" },
  { id: 15, name: "ぼっち・ざ・ろっく！ (Bocchi the Rock!)" },
  { id: 16, name: "メイドインアビス (Made in Abyss)" },
  { id: 17, name: "瑠璃の宝石" },
];
