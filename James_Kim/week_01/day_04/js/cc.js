const validator = function (cardNum) {
  console.log(cardNum);

  cardNum = cardNum.replace(/-/g, "")
  console.log(cardNum);

  if (cardNum.length !== 16) {
    return false
  }

  if (isNaN(cardNum)) {
    return false
  }

  if (cardNum[15]) % 2 !== 0) {
    return false
  }

  const arr = cardNum.split('');
  for (var i = 0; i < arr.length; i++) {
    sum = sum + +arr[i]
  }

if (sum < 17) {
  return false
}

return true

}

const passFail = validator("1111-1111-1111-1111")
console.log(passFail);
