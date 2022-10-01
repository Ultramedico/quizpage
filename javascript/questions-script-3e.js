let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let cron;


function start() {
  cron = setInterval(() => { timer(); }, 10);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);

}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

start() 

timer()



const HOST='just08-api34.actualtest.net'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const exam = urlParams.get('exam')

const fname = urlParams.get('fname');

const lname = urlParams.get('lname');
try {
  document.getElementById('examv').value =exam
} catch {

}
const questionLength=parseInt(lname)    
const firstQue=parseInt(fname)

// window.history.pushState({}, document.title, window.location.pathname);
function myFunction() {
//   document.getElementById("frm1").submit();



}


exam_type="quizjh"
//mycounts=[]
//exam='test'
initia_que=[]
last_que=''
highlighted_question_text=[]





// setTimeout(1000);
  let div0 = document.createElement("div0")
  let div1 = document.createElement("div1")
  let div2 = document.createElement("div2")
  let div3 = document.createElement("div3")
  

  fetchQuiz()
  async function fetchQuiz() {
      const response = await fetch(`https://${HOST}/?exam=${exam}`);
      // waits until the request completes...
      const allquiz = await response.json();
      
      return allquiz;
    }
  
    fetchQuiz().then(allquiz => {
      allquiz; // fetched allquiz
      data1=(allquiz.data)
  

    MAX_QUESTIONS=questionLength

    available_q=data1.length
    print_available=`
    Size [${available_q}]
    `
    document.getElementById("bank").innerHTML=print_available

for (k=0, len=data1.length; k<=data1.length; k++){
    
    div0.append(k,',')
}

ref_values=div0.textContent
ref_values=ref_values.split(',');
// console.log(ref_values, typeof(ref_values))

if (firstQue<=50)
numbers_of_question=firstQue
const a =ref_values


let ni;
var r=[];

for (ni=0; ni<=numbers_of_question; ++ni)
{
  var i = Math.floor((Math.random() * (data1.length-ni)) + 1);
  r.push(a[i]);
  a[i] = a[data1.length-ni];
 
}

// Make the script wait for 10 milisseconds for the loop above to complete
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
async function delay2() {
  await delay(10);
}

delay2();


for (j of r)
{   

  // console.log(j)
    ref=(data1[j].ref)
    category=( data1[j].category)
    question=(data1[j].question)
    question_image=(data1[j].question_image)
    wrong_answer_text=( data1[j].wrong_answer_text)
    right_answer_text=(data1[j].right_answer_text)
    question_hint=( data1[j].question_hint)
    explanation=( data1[j].explanation)
    user_explanation=(data1[j].user_explanation)
    type=(data1[j].type)
    published=( data1[j].published)
    not_influence_to_score=(data1[j].not_influence_to_score)
    weight=( data1[j].weight)     
    answers=('['+data1[j].answers+']')

    document.getElementById("category").innerHTML=category
    
   if (question_image == ''){question_image}
   else{ question_image=('"'+data1[j].question_image+'"')+("<img style='height: 30%; width: 30%; object-fit: contain'")}

    
answers=(JSON.parse(answers))


    for (kk in answers){
                pie=(answers[kk].correct)
                div3.append(pie)
 
            }
            div3.append('pie')
            pie=div3.textContent

  the_right_answer_text=`
  ${right_answer_text}
  `
  div2.append("specall-add-seperate"+the_right_answer_text)
  the_right_answer_text=div2.textContent


  question_text = `

    <img src=${question_image}>
   
         ${ question} <br>
     
`

div1.append("specall-add-seperate"+question_text)

alp=["A","B",'C','D','E','F','G','H','I','J','K','L']


for (i = 0 ,  len = answers.length; i < len; i++){
    answer=answers[i].answer
    image=answers[i].image
    correct=answers[i].correct
    ordering=answers[i].ordering
    weight=answers[i].weight
    placeholder=answers[i].placeholder

    if (image == ''){image}
    else{image=('"'+answers[i].image+'"')+("<img style='height: 30%; width: 30%; object-fit: contain'")}

    
    answer_text=''
if (exam_type=="quiz"){

    if (type=="checkbox"){
    answer_text = `
    <div> <input type="checkbox">
         ${answers[i].answer} 
    </div>
    `
    }
    else
    {
        answer_text = `
        <label>  <input type="radio" id="${ordering} value= "${answers[i].answer}" name= "${question}" >  </label>
            <label for="${ordering}" >${answers[i].answer}</label>  
     `
   
    }
}
else{
    if (type=="checkbox")
    
    {
        answer_text = `
        <br >    
      <label  class="correct${answers[i].correct}" id="test${alp[i]}${answers[i].correct}" >   <input type="checkbox" value= "${answers[i].correct}" class=" ${ordering}" id="${alp[i]}" name= "${question}" onclick="selectcheck(this.value, this.id)">${answers[i].answer}  </label>
         
        
            `
            // for="${ordering}"
    }
    
    
    
    // {    
    //     answer_text = ` 
    //     <br>
    //     <label class="correct${answers[i].correct}" id="test${alp[i]}${answers[i].correct}> <input type="checkbox" value= "${answers[i].correct}" class="${ordering}" id="${alp[i]}" name= "${question}" onclick="selectcheck(this.value, this.id) "> ${answers[i].answer} </label>
          
    //     `
    //     }
        else
        {
            answer_text = `
            <br >    
          <label  class="correct${answers[i].correct}" id="test${alp[i]}${answers[i].correct}" >   <input type="radio" value= "${answers[i].correct}" class=" ${ordering}" id="${alp[i]}" name= "${question}" onclick="selectradio(this.value, this.id)">${answers[i].answer}  </label>
             
            
                `
                // for="${ordering}"
        }
        
}
 
    div1.append(answer_text)
    question_text=div1.textContent
       
} 
// await delay(5000)
// }      

}

// makeALoopWait()

question_text=question_text.split("specall-add-seperate"); 
the_right_answer_text=the_right_answer_text.split("specall-add-seperate");


pie=pie.split("pie")




showNextSlide()

  
})

    
 function showNextSlide(){
if (click_count>0){
  highlight_correct()
  disableradio()
  appenstate() 
  click_count=0
  correct_click
}
    correct_click=0
    initia_que++;

    document.getElementById('explanation2').innerHTML = ''
    please=(pie[initia_que-1])


  try {
    display_due=(highlighted_question_text[initia_que])

   }
   finally{display_due=(question_text[initia_que])}
   document.getElementById('optionBodyA').innerHTML = (display_due)
   display_answer=(the_right_answer_text[initia_que])

ref=Number(numbers_of_question)  

the_que_num=`
<h3> Question : ${parseInt(initia_que)}</h3>`
document.getElementById('que').innerHTML = the_que_num

question_count=
`
${initia_que}/${ref} [Q]
`
document.getElementById("minutes").innerHTML=question_count

if (initia_que < ref){
  next_b=
`
<button href="#" id='next' class="next both " >Next</button><br>

`
document.getElementById("next").innerHTML=next_b
  }

  else{
    next_b=
    `<p href="#" id="previous"  >  </p>`
    
    document.getElementById("next").innerHTML=next_b
}

  if (initia_que>1){
  previous_b=
`<button href="#" class="previous both" id="previous"  > Previous </button>`

document.getElementById("previous").innerHTML=previous_b
  }

  if (initia_que<ref){
    previous_b=
  `<button href="#" class="next both" id="end"  > End </button>`
  
  document.getElementById("end").innerHTML=previous_b
    }

}
function showPreviousSlide(){
  if (click_count>0){
  highlight_correct()
    console.log("click_count= "+click_count)
    disableradio()
    appenstate() 
    click_count=0
   // highlight_correct()
    console.log("printing next line")
  }
  
    console.log("click_count= "+click_count)
    correct_click=0
    initia_que=initia_que-1;
    document.getElementById('explanation2').innerHTML = ''
    please=(pie[initia_que-1])

    
  try {
    display_due=(highlighted_question_text[initia_que])

   }
   finally{display_due=(question_text[initia_que])}
   document.getElementById('optionBodyA').innerHTML = (display_due)


    display_answer=(the_right_answer_text[initia_que])

    display_due=(question_text[initia_que])
    document.getElementById('optionBodyA').innerHTML = display_due
    if (initia_que>1){
        previous_b=
      `<button href="#" class="previous both" id="previous"  > Previous </button>`
      
      document.getElementById("previous").innerHTML=previous_b
        }

    else{
        previous_b=
        `<p href="#" id="previous"  >  </p>`
        
        document.getElementById("previous").innerHTML=previous_b
    }

    if (initia_que < ref){
      next_b=
    `
    <button href="#" id='next' class="next both " >Next</button>
    
    `
    document.getElementById("next").innerHTML=next_b
      }
    
      else{
        next_b=
        `<p href="#" id="previous"  >  </p>`
        
        document.getElementById("next").innerHTML=next_b
    }

    the_que_num=`
<h3> Question : ${parseInt(initia_que)}</h3>`
document.getElementById('que').innerHTML = the_que_num

question_count=
`
${initia_que}/${ref} [Q]
`
document.getElementById("minutes").innerHTML=question_count
}

function selectradio(value, ID ) {

    if (value =="1"){
        document.getElementById("test"+ID+"1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
    let    answer_display=(`<p class="${value}" id="test2${ID}" style="background-color: rgba(13, 211, 89, 0.39);">${display_answer}</p> `)     
        document.getElementById('explanation2').innerHTML=answer_display 
        disableradio()
        appenstate() 
        scores()
 
    }
    else{
      
        document.getElementById("test"+ID+"0").style.backgroundColor = "rgba(255, 0, 0, 0.377)";
        answer_display=(`<p class="${value}" id="test2${ID}" style="background-color: rgba(255, 0, 0, 0.377);">${display_answer}</p> `)     
        highlight_correct()
    
        document.getElementById('explanation2').innerHTML=answer_display 
        disableradio()
        appenstate()
    }
}

click_count=0
//correct_click=0
function selectcheck(value, ID ) {
    
    click_count++
    var   question_correct_numbers=please
      var question_correct_numbers = question_correct_numbers.toString().split(".");
    question_correct_numbers[0] = question_correct_numbers[0].replace(/\B(?=(\d{1})+(?!\d))/g, ",");
     question_correct_numbers=question_correct_numbers[0]
     question_correct_numbers=question_correct_numbers.split(",")        
     let correct_count = 0;
   
           question_correct_numbers.forEach(element => {
           if (element == '1') {
               correct_count += 1;
           }
       })
       
       if (click_count==correct_count)
       {
        //    console.log("touched last redcase")
        highlight_correct()
        disableradio()
        let    answer_display2=(`<p class="${value}" id="test2${ID}" style="background-color: rgba(13, 211, 89, 0.39);">${display_answer}</p> `)     
       document.getElementById('explanation2').innerHTML=(`<p class="${value}" id="test2${ID}" style="background-color: rgb(255, 0, 0, 0.377);">${display_answer}</p> `)     
       appenstate()
   }

    switch(value) {
        case '1':
            correct_click++
    
            document.getElementById("test"+ID+"1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
            document.getElementById(ID).disabled = true;
            if (correct_click==correct_count){
                document.getElementById('explanation2').innerHTML=(`<br><h3 class="${value}" id="test2${ID}" style="background-color: rgb(13, 211, 89, 0.39);">${display_answer}</h3> `)     
                scores()
                appenstate()
                disableradio()
            }
                
          break;
          
        case '0':
            if (click_count==correct_count)
            {
                
             highlight_correct()
             disableradio()
             let    answer_display2=(`<p class="${value}" id="test2${ID}" style="background-color: rgba(13, 211, 89, 0.39);">${display_answer}</p> `)     
            document.getElementById('explanation2').innerHTML=(`<p class="${value}" id="test2${ID}" style="background-color: rgb(255, 0, 0, 0.377);">${display_answer}</p> `)     
            appenstate()
        }
            document.getElementById("test"+ID+"0").style.backgroundColor = "rgba(255, 0, 0, 0.377)";
            document.getElementById(ID).disabled = true;
      }
}

function disableradio() {
    try { 
    document.getElementById('A').disabled = true; 
    document.getElementById('B').disabled = true; 
    document.getElementById('C').disabled = true; 
    document.getElementById('D').disabled = true;  
     document.getElementById('E').disabled = true; 
     document.getElementById('F').disabled = true; 
     document.getElementById('G').disabled = true; 
    }
    catch(err) {
    }
  }


  function appenstate(){
    text3=document.getElementById("optionBodyA").innerHTML+document.getElementById("explanation2").innerHTML
    question_text.splice([initia_que], 1, text3)
    highlighted_question_text=question_text
   // console.log(highlighted_question_text)
  }

  function appenstate2(){
    text4=document.getElementById("optionBodyA").innerHTML+document.getElementById("explanation2").innerHTML
    display_answer.splice([initia_que], 1, text4)
    highlighted_display_answer=display_answer
   
  }

  scoress=0
//  totalscores=0
  function scores(){
   
    totalscores=Math.round((scoress+1)/ref*100)
    scoress=scoress+1
    scoreid.innerHTML="Score "+totalscores
    console.log('totalscores',totalscores)

    if (totalscores<40){
     document.getElementById('scoreid').style.backgroundColor = "rgba(255, 0, 0, 0.377)";  
    }else if
     (totalscores>80){
     document.getElementById('scoreid').style.backgroundColor = "rgba(13, 211, 89, 0.39)"; 
   }
    else {
     document.getElementById('scoreid').style.backgroundColor = "rgba(255, 255, 0, 0.377)";  
    }
  }

function highlight_correct(){
  try{
    document.getElementById("testA1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testB1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testC1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testD1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testE1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testF1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testG1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}try{
    document.getElementById("testH1").style.backgroundColor = "rgba(13, 211, 89, 0.39)";
  }catch(err) {}
}

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");


previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);


const endButton = document.getElementById("end");
endButton.addEventListener("click", end);


totalscore=0
function end(){
    var a = document.createElement('a');
    try{
        totalscore=totalscores
    }
    catch(err) {
        console.log(err)
    }

  console.log ("totalscores =",totalscore)
  console.log("questions attempted =", firstQue)
  window.location.href = `summary.html?attempt_que=${firstQue}&exam=${exam}&totalscore=${totalscore}`

}