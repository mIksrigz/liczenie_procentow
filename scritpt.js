const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');
const answerArea = document.getElementById('answer');

checkBtn.addEventListener('click', () =>{
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const answer = (value1 / value2) * 100;
    answerArea.textContent = `${Math.round(answer)}%`;
});
