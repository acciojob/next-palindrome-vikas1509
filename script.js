function nextPalindrome(num) {
  //your JS code here.
	function palindrome(number){
		return  num.toString()===num.toString().split('').reverse().join('');
		
	}
 
	while (true) {
		num++;
		if(palindrome(num)){
			alert(num);
			break;
		}
		
	}
	
}

const input = prompt("Enter a palindrome number");
const inputNumber = parseInt(input);
if(input>0 && input<100000){
	nextPalindrome(inputNumber);
	
}

