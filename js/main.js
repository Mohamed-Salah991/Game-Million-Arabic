let start_btn = document.querySelector(".start_btn button");
let game_box = document.querySelector(".game_box");
let next_btn = document.querySelector(".game_box .text button");
let result_box = document.querySelector(".result_box");
let restart_btn = document.querySelector(".result_box .text button");
let progress_list = document.querySelectorAll(" nav .progress ol li");


console.log(progress_list);
let que_count = 0;
let prog_number = questions.length - 1;
let pre_porg = questions.length;



start_btn.onclick = () => {
    console.log(game_box);
    game_box.classList.add("gameActive");
    start_btn.classList.add("hide");
    next_btn.style.display = "none";
    showQuestions(0);
}

restart_btn.onclick = () => {
    result_box.classList.remove("result_boxActive");
    game_box.classList.add("gameActive");
    que_count = 0;
    prog_number = questions.length - 1;
    pre_porg = questions.length;
    showQuestions(que_count);
    options.style.pointerEvents = "";
    next_btn.style.display = "none";
}

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        next_btn.style.display = "none";
        options.style.pointerEvents = "";
        showQuestions(que_count);

    }
    else {
        game_box.classList.remove("gameActive");
        result_box.classList.add("result_boxActive");
        // progress_list[pre_porg += 2].classList.remove("prog");
        progress_list[pre_porg].classList.remove("prog");
        console.log(pre_porg);
        console.log(prog_number);
    }

}

let options = document.querySelector(".answer_list");
console.log(options);


function showQuestions(index) {
    const question_text = document.querySelector(".question .text");
    let question_tag = `<span>${questions[index].question}</span>`;
    question_text.innerHTML = question_tag;

    let options_tag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
    `;
    options.innerHTML = options_tag;

    const Option = document.querySelectorAll(".option");

    for (let i = 0; i < Option.length; i++) {
        Option[i].setAttribute("onclick", "optionSelected(this)");
    }
}



function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let AllOption = options.childElementCount;
    console.log(correctAnswer);
    next_btn.style.display = "";

    if (userAnswer === correctAnswer) {
        console.log("Correct Answer");
        answer.classList.add("correct");
        options.style.pointerEvents = "none";
        // progress_list[prog_number].style.backgroundColor = "#8eafdb";
        progress_list[prog_number--].classList.add("prog");
        progress_list[pre_porg--].classList.remove("prog");
    }
    else {
        console.log("Not Correct Answer");
        answer.classList.add("incorrect");
        options.style.pointerEvents = "none";

        let myVar = document.querySelectorAll(".option");
        for (let i = 0; i < AllOption; i++) {
            if (myVar[i].textContent === correctAnswer)
                myVar[i].classList.add("correct");
        }
    }


}
