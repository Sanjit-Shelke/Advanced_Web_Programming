let l=0
function like() {
    let l1 = document.querySelector('#like');
    l ++;
    let l2 = "Like" + " "+l;

    document.querySelector('#like').innerHTML = l2;

}

let d = 0;
function dislike() {
    let d1 = document.querySelector('#dislike');
    d++;

    let d2 = "Dislike" + " " + d;

    document.querySelector("#dislike").innerHTML = d2;

}

function readComment() {
    

    
    let readValue = document.querySelector('#readComment').value;
    
    let clone = document.querySelector('#id1').cloneNode(true);
    clone.children[0].innerHTML = readValue;

    clone.removeAttribute('id');

    let x = document.querySelector('#commentBox');

    x.insertBefore(clone, commentBox.firstchild);

    document.querySelector('#readComment').value = "";

    // let commentBox = document.querySelector('#readComment').parentElement.parentElement.nextElementSibling.children[0].children[0].children[0].innerText;


    // //clone.children[0].innerHTML = readValue.value;
    // //document.querySelector('#commentBox').children[0].children[0].children[0].innerText;
    
    // clone.children[0].children[0].children[0].innerHTML = readValue.value;

    // console.log(clone);
    
    // commentBox.insertBefore(clone, commentBox.firstchild);
    // //commentBox.insertBefore(newElement, commentBox.firstChild);

}

function del(a)
{
    a.parentElement.parentElement.remove();

}
