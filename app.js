 function checkFortune() {
  console.log("checkFortune 関数が呼び出されました");
            var colour = document.getElementById('season-select').value;
            var number = parseInt(document.getElementById('type-input').value, 10);
            var result = "結果なし"; // デフォルトの値



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
    document.getElemenById('result-output').innerText = "あなたの今日の運勢は【" + result + "】です";
 }
