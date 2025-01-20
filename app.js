// 結果を計算して表示する関数
function checkFortune() {
   // HTMLから選択された値を取得
   const season = document.getElementById('season-select').value;
   const type = document.getElementById('type-select').value;
   let result = "結果なし"; // デフォルト値
   // 条件に応じて結果を設定
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
   // 結果を画面に表示
   document.getElementById('result-output').innerText = "あなたの今日の運勢は【" + result + "】です";
}
// ボタンのクリックイベントに関数を紐付け
document.getElementById('check-result').addEventListener('click', checkFortune);
