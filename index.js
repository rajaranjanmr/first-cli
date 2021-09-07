var questions = [
    {
      question: "Whats his full name? ",
      answer: "Raja Ranjan"
    },
    {
      question: "Where does he work? ",
      answer: "Nagarro"
    },
    {
      question: "which is his favourite sport? ",
      answer: "cricket"
    },
    {
      question: "Where does he stay? ",
      answer: "Ranchi"
    },
    {
      question: "do you know his faviourite movie? ",
      answer: "idiots"
    },
    {
      question: "His favourite song? ",
      answer: "gallan"
    }
  
  ];
  var score = 0;
  readlineSync = require('readline-sync');
  var uName = "";
  var uKnow = "";
  function quesAns() {
    uName = readlineSync.question("What's Your Name?");
    console.log("Welcome ", uName, " !");
    uKnow = readlineSync.question("Do You know Raja Ranjan?(yes/no)");
    if (uKnow.toUpperCase() === "YES") {
      console.log("Let's see how much you know Raja Ranjan !");
      console.log("-----------------");
      console.log("-----------------");
  
  
      var ans = "";
      for (var i = 0; i < questions.length; i++) {
        ans = readlineSync.question(questions[i].question);
        console.log(ans);
        if (ans.toUpperCase() === questions[i].answer.toUpperCase()) {
          console.log("-----------------");
          console.log("its correct");
          score++;
          console.log("current score", score);
          console.log("-----------------");
        }
        else {
          console.log("-----------------");
          console.log("You are wrong !");
          console.log("-----------------");
        }
      }
    }
    else {
      console.log("Thank You ", uName, " for your time !");
    }
  }
  quesAns();
  console.log("-----------------");
  console.log("-----------------");
  console.log("Total Score : ", score, " Out of ", questions.length);
  console.log("-----------------");
  console.log("-----------------");
  
