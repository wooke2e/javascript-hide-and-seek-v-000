function getFirstSelector(selector){
  const lis = document.querySelector(selector)
  return lis
}

function nestedTarget(){
  const lis = document.querySelector('div#nested div.target')
  return lis
}

function deepestChild(){
  let current = document.querySelector('div#grand-node');
  let child = current.querySelector('div');
  while (child){
    current = child;
    child = current.querySelector('div');
  }
  return current
}


//use .firstchild
// function deepestChild(){
//   let lis = document.querySelectorAll('div#grand-node')
//
//   while (lis[0].children === []){
//     if(lis[0].children === []){
//       return lis[0].innerHTML
//     } else {
//       lis = lis[0].children
//     }
//   }
// }

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list')
  for (var i=0; i < lis.length; i++){
    lis[i].innerHTML = (i + n).toString()
  }
  return lis
}
