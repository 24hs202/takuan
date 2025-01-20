// ラッキー結果をチェックする関数
function checkLucky(season, type) {
   let result = "ラッキーな結果なし"; // デフォルト値
   // 条件に基づいて結果を決定
   if (season === "春" && type === "山") {
       result = "桜";
   } else if (season === "春" && type === "海") {
       result = "潮風";
   } else if (season === "春" && type === "食べ物") {
       result = "たけのこ";
   } else if (season === "夏" && type === "山") {
       result = "避暑地";
   } else if (season === "夏" && type === "海") {
       result = "ビーチ";
   } else if (season === "夏" && type === "食べ物") {
       result = "かき氷";
   } else if (season === "秋" && type === "山") {
       result = "紅葉";
   } else if (season === "秋" && type === "海") {
       result = "秋刀魚";
   } else if (season === "秋" && type === "食べ物") {
       result = "栗";
   } else if (season === "冬" && type === "山") {
       result = "雪景色";
   } else if (season === "冬" && type === "海") {
       result = "波の音";
   } else if (season === "冬" && type === "食べ物") {
       result = "鍋料理";
   }
   return `あなたのラッキーなものは【${result}】です`;
}
// 使用例（ここに選択肢を入力）
const season = ""; // 季節を入力（例: "春", "夏", "秋", "冬"）
const type = ""; // タイプを入力（例: "山", "海", "食べ物"）
// 結果を取得して表示
const luckyResult = checkLucky(season, type);
console.log(luckyResult);
