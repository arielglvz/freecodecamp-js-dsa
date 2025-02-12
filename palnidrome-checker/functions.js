const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// result.textContent = "I have changed!";

const cleanInputString = (str) => {
  // Correct regex pattern to remove non-alphanumeric characters
  const regex = /[^a-zA-Z0-9]+|\s+/g;
  console.log(str.replace(regex, ''));
  return str.replace(regex, '');
}

const isPalindrome = () => {
  let currInput = textInput.value;
  const inputVal = cleanInputString(textInput.value.toLowerCase());
  
  if(inputVal) {
    let reverseText = inputVal.split("").reverse().join('');
    
    if(inputVal === reverseText) {
      result.textContent = `${currInput} is a palindrome.`
      textInput.value = "";
    } else {
      result.textContent = `${currInput} is not a palindrome.`
      textInput.value = "";
    }

  } else {
    alert("Please input a value");
  }
}

checkBtn.addEventListener("click", isPalindrome)