 function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "犬"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "犬";
            } else if (colour === "黒" && number === 1) {
                result = "たぬき";
            } else if (colour === "黒" && number === 2) {
                result = "猫";
            } else if (colour === "白" && number === 0) {
                result = "きつね";
            } else if (colour === "白" && number === 1) {
                result = "くま";
            } else if (colour === "白" && number === 2) {
                result = "ペンギン";
            } else if (colour === "オレンジ" && number === 0) {
                result = "カワウソ";
            } else if (colour === "オレンジ" && number === 1) {
                result = "キリン";
            } else if (colour === "オレンジ" && number === 2) {
                result = "ラクダ";
            }

            document.getElementById('result-output').innerText = "あなたのラッキー動物は【" + result + "】です";
        }
