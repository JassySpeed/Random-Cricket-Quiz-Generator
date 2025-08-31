const questionBank = [
    {
        question: "Who has the most centuries in international cricket?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket history?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Who holds the record for the highest individual score in a Test innings?",
        options: ["Brian Lara", "Don Bradman", "Matthew Hayden", "Virender Sehwag"],
        answer: "Brian Lara"
    },
    {
        question: "Which team won the inaugural T20 World Cup in 2007?",
        options: ["Australia", "Pakistan", "India", "South Africa"],
        answer: "India"
    },
    {
        question: "Who is the only player to have scored a century and taken a hat-trick in the same ODI match?",
        options: ["Shane Watson", "Paul Collingwood", "Kapil Dev", "Dale Steyn"],
        answer: "Paul Collingwood"
    },
    {
        question: "Who was the first player to score a double-century in an ODI?",
        options: ["Virender Sehwag", "Chris Gayle", "Rohit Sharma", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country has won the most Cricket World Cups?",
        options: ["India", "West Indies", "Australia", "England"],
        answer: "Australia"
    },
    {
        question: "Who holds the record for the fastest century in Test cricket?",
        options: ["Brendon McCullum", "Viv Richards", "Adam Gilchrist", "Misbah-ul-Haq"],
        answer: "Brendon McCullum"
    },
    {
        question: "Which batsman is known as 'The Wall'?",
        options: ["Rahul Dravid", "Steve Waugh", "Cheteshwar Pujara", "Hashim Amla"],
        answer: "Rahul Dravid"
    },
    {
        question: "Who has the most stumpings in international cricket?",
        options: ["MS Dhoni", "Kumar Sangakkara", "Adam Gilchrist", "Mark Boucher"],
        answer: "MS Dhoni"
    },
    {
        question: "Who was the 'Man of the Tournament' in the 2011 Cricket World Cup?",
        options: ["Yuvraj Singh", "Sachin Tendulkar", "Kumar Sangakkara", "Tillakaratne Dilshan"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which bowler has taken all 10 wickets in a single Test innings?",
        options: ["Anil Kumble", "Jim Laker", "Both of the above", "None of the above"],
        answer: "Both of the above"
    },
    {
        question: "Who has the highest batting average in Test cricket history?",
        options: ["Don Bradman", "Kumar Sangakkara", "Sachin Tendulkar", "Adam Gilchrist"],
        answer: "Don Bradman"
    },
    {
        question: "Which player has scored the most runs in T20 Internationals?",
        options: ["Virat Kohli", "Martin Guptill", "Rohit Sharma", "Babar Azam"],
        answer: "Virat Kohli"
    },
    {
        question: "What is the term for a bowler who takes three wickets in three consecutive deliveries?",
        options: ["A five-for", "A hat-trick", "A maiden over", "A perfect delivery"],
        answer: "A hat-trick"
    },
    {
        question: "Who is the first bowler to take 600 wickets in Test cricket?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Which team holds the record for the highest team total in ODIs?",
        options: ["England", "Australia", "South Africa", "India"],
        answer: "England"
    },
    {
        question: "Who is the first player to score a century in all three formats of international cricket?",
        options: ["Chris Gayle", "Suresh Raina", "Brendon McCullum", "Virat Kohli"],
        answer: "Suresh Raina"
    },
    {
        question: "Who is the only player to have scored a century against all nine Test-playing nations?",
        options: ["Virat Kohli", "Ricky Ponting", "Gary Kirsten", "Alastair Cook"],
        answer: "Ricky Ponting"
    },
    {
        question: "In which year did the first-ever Cricket World Cup take place?",
        options: ["1971", "1975", "1983", "1992"],
        answer: "1975"
    }
];

function randomQuestions()
{
// time complexity o(n)

//    // use set for unique objects
//    const data=new Set();
//    while(data.size!=5)
//    {
//       const index=Math.floor(Math.random()*questionBank.length);
//       data.add(questionBank[index]);
//    }

//    // convert set into data
//    return [...data];

//////////////////////////////////
// sort method
// time complexity nlog(n)
    // questionBank.sort(()=>Math.random()-0.5);
    // return questionBank.slice(0,5);


/////////////////////////////////////
// more optimized solution
    let size=questionBank.length;
    let i=0;
    const arr=[];
    while(i<5)
    {
        let index=Math.floor(Math.random()*size);
        arr.push(questionBank[index]);

        [questionBank[index],questionBank[size-1]]=[questionBank[size-1],questionBank[index]];
        i++;
        size--;
    }

    return arr;
}



// Select the form and add all elements to it

const form=document.querySelector('form');

const problem=randomQuestions();  

const original_answer={};

problem.forEach((obj,index)=>{
    const div_element=document.createElement('div');
    div_element.className="question";

    original_answer[`q${index+1}`]=obj['answer'];
    
    const para=document.createElement('p');
    para.textContent=`${index+1}. ${obj['question']}`;
    div_element.appendChild(para);

    // create 4 options
    obj['options'].forEach((names)=>{
        
        const label=document.createElement('label');
        const input=document.createElement('input');
        input.type="radio";
        input.name=`q${index+1}`;
        input.value=names;
        
        label.appendChild(input);
        label.appendChild(document.createTextNode(names));

        div_element.appendChild(label);
        div_element.appendChild(document.createElement('br'));
    })

    form.appendChild(div_element);
})

const submitbtn=document.createElement('button');
submitbtn.type="submit";
submitbtn.className="submit-btn reset-btn";
submitbtn.textContent="Submit";

const refreshbtn=document.createElement('button');
refreshbtn.className="submit-btn";
refreshbtn.textContent="Generate Quiz";

form.appendChild(submitbtn);
form.appendChild(refreshbtn);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data=new FormData(form);
    let result=0;

    for(let [key,value] of data.entries())
    {
        if(value===original_answer[key])
            result++;
    }

    const out=document.getElementById('out');
    out.textContent=`${result} out of ${problem.length} is correct.`;

    // form.reset();
})


// reload page
refreshbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    location.reload();
    const out=document.getElementById('out');
    out.textContent=``;
})
