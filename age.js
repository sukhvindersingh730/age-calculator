const inputage= document.getElementById("age-input")

const calculatebtn= document.getElementById("age-button")
// console.log(calculatebtn)
const result= document.getElementById("result")
// console.log(result)
calculatebtn.addEventListener("click", () => {
    console.log()
    if(inputage.value === ""){
    alert("PLEASE ENTER YOUR DATE OF BIRTH");
    }

    else{
        console.log(inputage.value)
           const a=new Date(inputage.value)
           console.log("a",a)
           const b=a.getFullYear();
           console.log(b)
           
           const now=new Date();
           console.log(now)
           const now_year=now.getFullYear()
           console.log(now_year)
const age=now_year-b
console.log(age)
result.innerHTML=` YOUR AGE IS :${age}`
    }
});