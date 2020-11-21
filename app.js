function decryptMessage(message) {
  // write code here
let string = '';

for (i = message.length - 1; i >= 0; i--){

string+= message[i];
}

return string;
}




