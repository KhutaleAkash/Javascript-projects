str='Batch81'
localStorage.setItem('Batch', str)
str2=localStorage.getItem('batch')
console.log(str2)

objBatch={
    id:243,
    name:'Batch81'
}
localStorage.setItem('b', JSON.stringify(objBatch))
newObj= JSON.parse(localStorage.getItem('b'))
console.log(newObj)
console.log(typeof(newObj))