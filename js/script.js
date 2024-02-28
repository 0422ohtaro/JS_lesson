// jsを記述する際は大文字や小文字の違いでもエラーが出るので、しっかりと確認すること。
console.log(document.querySelector('#colorpicker').value);

// どこの、何を、どう変えたいのかを指定する
// 今回はどこの=＃colorText、何を=taxtcontent、どう変えたい=document.querySelector('colorpicker').value;
// textContentに「document.querySelector('colorpicker').value;」を代入(=)する
// document.querySelector('#colorText').textContent = `カラーコード: ${document.querySelector('#colorpicker').value}`;
// 記述したコードに文字列を加えたいときはテンプレート文字列を使う
// まずは表示したいにようをバックティック``で囲む、こうすることで囲まれた記述が全て文字列と認識される
// ただこのままだとコードもそのまま文字列として表示されるので、コードの部分は${}で囲む

const name = 'mana';
console.log(name);

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorpicker')

// カラーピッカーを操作した時の一連の動作
const colorBg = () => {
    // 選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;

    // カラーコードを表示
    if(color.value === '#ffffff') {
    text.textContent = `カラーコード:${color.value}(white)`;
    } else {
        text.textContent = `カラーコード:${color.value}`;
    }
}

// カラーピッカーが変更されたら colorBg を発動させる
color.addEventListener('input',colorBg);

// 関数を定義しないで記述する方法もある
// color.addEventListener('input',()=>{text.textContent=`カラーコード:${color.value}`;});

const message = (name,weather) => {return`${name}さん、こんにちは！今日は${weather}です。`;}

console.log(message('Mana','いい天気'));
alert(message('達也','雨'));

