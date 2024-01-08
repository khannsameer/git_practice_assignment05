let str="naman";
function reverse(string){
let empty="";
for(let i=string.length-1; i>=0; i--){
empty+=string[i];
}
return empty;
}
let reversed=reverse("str");
if(string===reversed){
console.log(string,"palindrome");
}else{
console.log(string,"NA");
}