function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const lis = document
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    let temp = parseInt(lis[i].innerHTML)
    lis[i].innerHTML = (temp + n).toString();
  }
}

function deepestChild(){
  let thing = document.getElementById('grand-node')
  let nextThing = thing.children[0]
  while (nextThing){
    thing = nextThing
    nextThing = thing.children[0]
  }
  return thing
}
