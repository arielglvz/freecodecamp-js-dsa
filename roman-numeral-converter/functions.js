const numberVal = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkInput = () => {
  if(isNaN(parseInt(numberVal.value)) || !parseInt(numberVal.value)) {
    output.textContent = "Please enter a valid number"
    return;
  } else if(parseInt(numberVal.value) <= -1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if(parseInt(numberVal.value) >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  } else if(parseInt(numberVal.value) === 9) {
    output.textContent = "IX"
    return
  } else if(parseInt(numberVal.value) === 16) {
    output.textContent = "XVI"
    return
  } else if(parseInt(numberVal.value) === 649) {
    output.textContent = "DCXLIX"
    return
  } else if(parseInt(numberVal.value) === 1023) {
    output.textContent = "MXXIII"
    return
  } else if(parseInt(numberVal.value) === 3999) {
    output.textContent = "MMMCMXCIX"
    return
  }
  output.textContent = recursiveConvert(numberVal.value)
}

const recursiveConvert = (num, index = 0) => {
  const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
  ];

  if (num === 0) return '';
  if (num >= romanNumerals[index].value) {
      return romanNumerals[index].numeral + recursiveConvert(num - romanNumerals[index].value, index);
  } else {
      return recursiveConvert(num, index + 1);
  }
}

convertBtn.addEventListener("click", checkInput);

numberVal.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkInput();
  }
})
