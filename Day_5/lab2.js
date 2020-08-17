var countl = 0;
var countd = 0;
function like() {
    
    let likeCount = document.querySelector('#like');
    countl++;
    likeCount.innerHTML = countl;
}

function dislike() {
    
    let dislikeCount = document.querySelector('#dislike');
    countd++;
    dislikeCount.innerHTML = countd;
}

function comment()
{
    let inputValue = document.querySelector('#inp').value;
    let cloneValue = document.querySelector('#placeComment').cloneNode(true);
    cloneValue.innerHTML = inputValue;

    let commentDiv = document.querySelector("#commentDiv");

    commentDiv.insertBefore(cloneValue, commentDiv.firstChild);

}