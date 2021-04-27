let target = document.querySelector("#dynamic"); // 요소를 가져온다 문서 객체


function randomString(){
    let stringArr = ["Learn to HTML","Learn to javaScript","Learn to Python","Learn to Buby"];
    let selectString = stringArr[Math.floor( Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    
    return selectStringArr;
}

function resetTyping ()  {
    target.textContent = "";
    dynamic(randomString());

}

function dynamic(randomArr)
{
if(randomArr.length> 0)
{
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
    }, 80);
}else{
    setTimeout(resetTyping, 3000);
}
}

dynamic(randomString());
console.log(selectString);
console.log(selectStringArr);


function blink() // active함수를 사용
{
    target.classList.toggle("active");
}
setInterval(blink,500); // 반복 함수 