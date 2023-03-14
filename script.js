const tittle= document.getElementById("tittle");
const discription= document.getElementById("discription");
const email= document.getElementById("email");
const addbtn= document.getElementById("add");
const body= document.getElementById("body");
let counter=1;
addbtn.addEventListener("click",function(e){
    e.preventDefault();
    let innerHTML= "";
    innerHTML += `<tr>
    <th scope="row">${counter}</th>
            <td>${tittle.value}</td>
            <td>${discription.value}</td>
            <td>${email.value}</td>
    </tr>`;

    body.innerHTML += innerHTML;
    tittle.value="";
    discription.value="";
    email.value="";
    counter++
    console.log(innerHTML);
});