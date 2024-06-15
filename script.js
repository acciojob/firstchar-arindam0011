function firstChar(text) {
  // your code here
	let t=text.trim();

	if(t==""){
		return '';
	}
	else{
		return t.charAt(0);
	}
}
// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
