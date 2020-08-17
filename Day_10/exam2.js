function valid1() {
    
    let user = document.getElementById('un').value;
    let pass = document.getElementById('ps').value;

    let u = /^[A-Za-z0-9]{5,20}$/
    let p = /^([A-Za-z0-9]{6,})([#@]{1,1})$/

    if (u.test(user)) {
        alert("Welcome!");
    }
    else {
        alert("Invalid! Please follow capatche= [A-Za-z9-0@]");
    }

    if (p.test(pass)) {
        
        alert("Valid");
    }
    else {
        alert("Invalid");
    }
}

function readWrite() {
    
    let readValue = document.querySelector('#readtext').value;

    let clone = document.querySelector('#box2').cloneNode(true);
    clone.children[0].innerHTML = readValue;

    clone.removeAttribute('id');

    let x = document.querySelector('#box');

    x.insertBefore(clone, box.firstChild);

    document.querySelector('#readtext').value = "";

}

function del(d)
{
    d.parentElement.parentElement.remove();
}