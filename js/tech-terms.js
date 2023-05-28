


function myFunction() {


    const tectTerms = {
        words: { 
            word: "Asynchronous",
            meaning: "Asynchronous programming is a technique that enables your program to start a\
                       potentially long-running task and still be able to be responsive to other events while that\
                       task runs, rather than having to wait until that task has finished. Once that task has finished,\
                       your program is presented with the result.\
                    ",
            } 
    };




  // Get the value of the input field with id="numb"
  let x = document.querySelector(".my-word").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (x == tectTerms.words.word) {
    text = tectTerms.words.word;
  } else {
    text = "Input don't match";
  }
  document.querySelector(".my-meaning").innerHTML = text;
}




const tectTerms = {
    asyncWord: { 
        word: "Asynchronous",
        meaning: "Asynchronous programming is a technique that enables your program to start a\
                   potentially long-running task and still be able to be responsive to other events while that\
                   task runs, rather than having to wait until that task has finished. Once that task has finished,\
                   your program is presented with the result.\
                ",
        } 
};

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 



const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 