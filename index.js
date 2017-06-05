function getFirstSelector(selector){
  const lis = document.querySelector(selector)
  return lis
}

function nestedTarget(){
  const lis = document.querySelector('div#nested div.target')
  return lis
}

function deepestChild(n){
  


}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list')
  for (var i=0; i < lis.length; i++){
    lis[i].innerHTML = (i + n).toString()
  }
  return lis
}
