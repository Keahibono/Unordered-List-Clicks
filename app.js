console.log("it works!");

const handler = (event) => 
{
    let li = document.getElementsByTagName('li');

    for( let i = 0; i<li.length; i++)
    {
        li[i].addEventListener('click', handler2)

    }

};

function handler2 (e)
{
    console.log(this.innerHTML)
}

//unordered list
let ul = document.getElementById('unorderList')
ul.addEventListener('click', handler)

