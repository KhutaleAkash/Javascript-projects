 const resultElmt=document.querySelector("RenderProjects")
 function fecthAPI(){
    fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      renderProject()
   })
    
    .then(err=>console.log(err))
 }
 function renderProject(){
   resultElmt.innerHTML=`
   <tr>

   </tr>
   `
 }