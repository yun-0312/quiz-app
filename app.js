const quiz = [
    {
        question: "ワンワンと鳴く動物はどれ？",
        answers: ["猫", "犬", "うさぎ", "にわとり"],
        correct: "犬",
    },
    {
        question: "世界で最も面積が大きい国はどれ？",
        answers: ["アメリカ", "カナダ", "中国", "ロシア"],
        correct: "ロシア",
    },
    {
        question: "水は摂氏何度で沸騰する？",
        answers: ["50度", "80度", "100度", "120度"],
        correct: "100度",
    },
    {
        question: "赤くて丸いフルーツはどれ？",
        answers: ["バナナ", "りんご", "メロン", "パイナップル"],
        correct: "りんご",
    },
    {
        question: "晴れた空の色はどれ？",
        answers: ["赤", "黒", "緑", "青"],
        correct: "青",
    },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

//ボタンをクリックしたら成語判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
};