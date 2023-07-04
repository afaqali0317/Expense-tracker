function adddata() {
    var name =document.getElementById("name").value;
    var date =document.getElementById("date").value;
    var amount =document.getElementById("amount").value;

    writ(name,date,amount);
    }
  

 function writ(name,date,amount){

        let tbodyel=document.getElementById("t-body");
        
        let nrow =document.createElement('tr');
        let td1 =document.createElement('td');
        let td2 =document.createElement('td');
        let td3 =document.createElement('td');
        let td4 =document.createElement('td');


        td1.innerHTML=name;
        td2.innerHTML=date;
        td3.innerHTML=amount;
        td4.innerHTML= "<input type='button' onclick='remo(this)' value='X' name='add' > ";

        
        nrow.appendChild(td1);
        nrow.appendChild(td2);
        nrow.appendChild(td3);
        nrow.appendChild(td4);
    

        tbodyel.appendChild(nrow);
    }

function remo(thisrow){
            let s = thisrow.parentNode.parentNode;
            s.parentNode.removeChild(s);
}