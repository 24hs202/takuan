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
// イベントリスナーを設定
document.getElementById("check-result").addEventListener("click", function () {
   const season = document.getElementById("season-select").value;
   const type = document.getElementById("type-select").value;
   // 選択肢が未選択の場合のチェック
   if (!season || !type) {
       document.getElementById("result-output").innerText = "すべての選択肢を選んでください。";
       return;
   }
   // 結果を取得して表示
   const luckyResult = checkLucky(season, type);
   document.getElementById("result-output").innerText = luckyResult;
});
