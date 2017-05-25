function getFirstSelector(selector){
  const lis = document.querySelector(selector)
  return lis  
}

function nestedTarget(){
  const lis = document.querySelector('div#nested div.target')
  return lis
}