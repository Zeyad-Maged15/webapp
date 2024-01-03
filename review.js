 function check()
{
    var yes = 0;
    var no = 0;
    let ans = document.querySelectorAll(".answer");
    for(i=0;i<ans.length;i++)
    {
        if(ans[i].checked&&ans[i].value=="yes")
        {
            yes++;
        }
        else if(ans[i].checked&&ans[i].value=="no")
        {
            no++;
        }
    }
    alert(yes + " Yes " + no + " No");
}






/*function check()
{
    const answers=[{a:"yes",b:"no"},{a:"yes",b:"no"},{a:"yes",b:"no"}]
    for(i=0;i<answers.length;i++)
    {
    answers.forEach(x=>{if(x.checked)
    {let answer=x.id;}return answer;})
    
    if(answer == quizdata[num].yes){
        yes++
    }
    else if(answer == quizdata[num].no){
        no++
    }
    }
    alert("Your Score is " + yes + " Yes " + no +" No");
}*/







/*const quizdata=[{a:"yes",b:"no"},{a:"yes",b:"no"},{a:"yes",b:"no"}]

function check()
{
const answers =document.querySelectorAll('.answer');
const submit =document.getElementById('submit');
let yes=0;
let no=0;
let answer;
let num = 0;

for(i=0;num<quizdata.length;i++)
{
answers.forEach(x=>{if(x.checked)
    {answer=x.id;}})
    return answer;

    if(answer == quizdata[num].yes){
        yes++
    }
    else if(answer == quizdata[num].no){
        no++
    }
    num++
    }
    alert("Your Score is " + yes + " Yes " + no +" No");
}*/