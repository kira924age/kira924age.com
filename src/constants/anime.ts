import theRollingGirlsImgUrl from "@/assets/the-rolling-girls.webp";

export type Anime = {
  id: number;
  name: string;
  episode?: number;
  tags?: string[];
  impressions?: string;
  dAnimeUrl?: string;
  image?: string;
  pvUrl?: string;
  copyright?: string;
};

export const FAVORITE_ANIME_LIST: Anime[] = [
  {
    id: 25867,
    name: "ローリング☆ガールズ",
    tags: [
      "2015年冬アニメ",
      "アニメーション制作: WIT STUDIO",
      "SF/ファンタジー",
      "アクション/バトル",
      "コメディ/ギャグ",
      "ロードムービー",
    ],
    episode: 12,
    impressions: `In this anime, an ordinary protagonist with no special powers becomes caught up in incidents occurring in various places and struggles alongside their comrades.
    They never become the main character; nevertheless, they always play an important role in the story. Even without special powers, even if you can’t be the protagonist, you might still be able to do something. That idea has had a tremendous influence on my philosophy.
        Moreover, it was through this anime that I discovered THE BLUE HEARTS.`,
    image: theRollingGirlsImgUrl,
    pvUrl: "https://www.youtube.com/embed/OSu2mbjvDgk?si=oxJuOq-DyLqsm5ms",
    copyright: "© 2015 The Rolling Girls 製作委員会",
    dAnimeUrl: "https://animestore.docomo.ne.jp/animestore/ci_pc?workId=11601",
  },
  { id: 48553, name: "明日ちゃんのセーラー服 (Akebi-chan no Sailor-fuku)" },
  { id: 25835, name: "SHIROBAKO" },
  { id: 35838, name: "少女終末旅行 (Shoujo Shuumatsu Ryokou)" },
  { id: 10087, name: "Fate/Zero" },
  { id: 54722, name: "魔法少女にあこがれて (Mahou Shoujo ni Akogarete)" },
  { id: 2593, name: "空の境界 (Kara no Kyoukai)" },
  { id: 9756, name: "魔法少女まどか☆マギカ (Mahou Shoujo Madoka Magica)" },
  { id: 1575, name: "コードギアス (Code Geass)" },
  { id: 22297, name: "Fate/stay night" },
  { id: 24629, name: "幸腹グラフィティ (Koufuku Graffiti)" },
  { id: 6213, name: "とある科学の超電磁砲 (Toaru Kagaku no Railgun)" },
  { id: 5081, name: "物語シリーズ (Monogatari Series)" },
  { id: 5114, name: "鋼の錬金術師 FULLMETAL ALCHEMIST" },
  {
    id: 48542,
    name: "Do It Yourself!! -どぅー・いっと・ゆあせるふ- (Do It Yourself!! -Dou Itto Yuaserufu-)",
  },
  { id: 34599, name: "メイドインアビス (Made in Abyss)" },
  { id: 34798, name: "ゆるキャン△ (Yuru Camp)" },
  { id: 37976, name: "ゾンビランドサガ (Zombieland Saga)" },
  { id: 16918, name: "銀の匙 Silver Spoon (Gin no Saji Silver Spoon)" },
  { id: 12189, name: "氷菓 (Hyouka)" },
  { id: 9253, name: "STEINS;GATE" },
  { id: 37993, name: "私に天使が舞い降りた! (Watashi ni Tenshi ga Maiorita!)" },
  { id: 6594, name: "刀語 (Katanagatari)" },
  { id: 39071, name: "まちカドまぞく(Machikado Mazoku)" },
  { id: 32615, name: "幼女戦記 (Youjo Senki)" },
  { id: 27989, name: "響け！ユーフォニアム (Sound! Euphonium)" },
  { id: 44511, name: "チェンソーマン (Chainsaw Man)" },
  { id: 13759, name: "さくら荘のペットな彼女 (The Pet Girl of Sakurasou)" },
  { id: 856, name: "うたわれるもの (Utawarerumono)" },
  {
    id: 2661,
    name: "ドラえもん のび太と雲の王国 (Doraemon Movie 13: Nobita to Kumo no Oukoku)",
  },
  {
    id: 2450,
    name: "クレヨンしんちゃん 嵐を呼ぶ モーレツ!オトナ帝国の逆襲 (Eiga Crayon Shin-chan: Arashi wo Yobu Mouretsu! Otona Teikoku Gyakushuu)",
  },
  {
    id: 8360,
    name: "クレヨンしんちゃん 電撃!ブタのヒヅメ大作戦 (Eiga Crayon Shin-chan: Dengeki! Buta no Hizume Daisakusen)",
  },
  { id: 164, name: "もののけ姫 (Mononoke Hime)" },
  { id: 512, name: "魔女の宅急便 (Majo no Takkyuubin)" },
  { id: 43439, name: "シャドーハウス (Shadows House)" },
  { id: 19815, name: "ノーゲーム・ノーライフ (NO GAME NO LIFE)" },
  { id: 17549, name: "のんのんびより (Non Non Biyori)" },
  { id: 1210, name: "N・H・Kにようこそ！ (Welcome to the N.H.K.)" },
  {
    id: 10357,
    name: "人類は衰退しました (Jinrui wa Suitai Shimashita Specials)",
  },
  { id: 28851, name: "聲の形 (Koe no Katachi)" },
  { id: 14131, name: "ガールズ&パンツァー (Girls & Panzer)" },
  { id: 37259, name: "はねバド！ (Hanebado!)" },
  { id: 36094, name: "ハクメイとミコチ (Hakumei to Mikochi)" },
  {
    id: 9989,
    name: "あの日見た花の名前を僕達はまだ知らない。 (Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.)",
  },
  { id: 31953, name: "NEW GAME!" },
  {
    id: 1689,
    name: "秒速5センチメートル (5 Centimeters per Second a chain of short stories about their distance)",
  },
  { id: 17909, name: "有頂天家族 (Uchouten Kazoku)" },
  { id: 15227, name: "この世界の片隅に" },
  { id: 889, name: "BLACK LAGOON" },
  { id: 33589, name: "ViVid Strike!" },
  { id: 477, name: "ARIA The ANIMATION" },
  { id: 35078, name: "三ツ星カラーズ (Mitsuboshi Colors)" },
  { id: 11061, name: "HUNTER×HUNTER" },
  { id: 22789, name: "ばらかもん (Barakamon)" },
  {
    id: 22189,
    name: "普通の女子校生が【ろこどる】やってみた。 (Futsuu no Joshikousei ga [Locodol] Yattemita.)",
  },
  { id: 12413, name: "ヨルムンガンド (Jormungand)" },
  { id: 40685, name: "スーパーカブ (Super Cub)" },
  { id: 6211, name: "東京マグニチュード8.0 (Tokyo Magnitude 8.0)" },
  { id: 53356, name: "終末トレインどこへいく？" },
  { id: 2923, name: "しゅごキャラ！ (Shugo Chara!)" },
];
