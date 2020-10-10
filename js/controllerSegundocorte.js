const btnsave = document.getElementById("save_activity");
const miStorage = window.localStorage;



btnsave.addEventListener("click",(event)=>{
    const miStorage = window.localStorage;
    const activitysEx = JSON.parse(miStorage.getItem('actividadessegundocorte'));

    event.preventDefault();
    let  descripcion = document.getElementById("descripcion").value;
    let porcentaje =  document.getElementById("porcentaje").value;
    let actividades = [
        {descripcion: descripcion, porcentaje: porcentaje}
             
  
    ]

    if(activitysEx!=null){
      miStorage.removeItem('actividadessegundocorte');
     let porcentajeviejo =  miStorage.getItem('porcentaje');
    
     


    activitysEx.push({descripcion: descripcion, porcentaje: porcentaje});
    miStorage.setItem("actividadessegundocorte", JSON.stringify(activitysEx));
    if(porcentajeviejo==null){
      miStorage.setItem('porcentaje',porcentaje);
    }else{
      miStorage.setItem('porcentaje', parseInt(porcentajeviejo) + parseInt(porcentaje));
    }
   
    alert("guardado correctamente");
    location.reload()
     
     
    }else{

      let porcentajeviejo =  miStorage.getItem('porcentaje');
      
     
      miStorage.setItem("actividadessegundocorte", JSON.stringify(actividades));
      if(porcentajeviejo==null){
        miStorage.setItem('porcentaje',porcentaje);
      }else{
        miStorage.setItem('porcentaje', parseInt(porcentajeviejo) + parseInt(porcentaje));
      }
      alert("guardado correctamente");
      location.reload();
      
    }

  
   

  
  
    
})




const cargaractividades = () =>{
    const miStorage = window.localStorage;
    const actividades = JSON.parse(miStorage.getItem('actividadessegundocorte'));
    const listaactividades = document.getElementById("lista_activity_corte_2");
    const porcentajeactual = miStorage.getItem('porcentaje');
    

    actividades.map((activity)=>{
        const {descripcion, porcentaje} = activity;
        listaactividades.innerHTML += `  <div class="col-sm">
        <div style="width: 40%;" class="card custom-card">
        <img class="card-img-top"  width="10px" src="https://1.bp.blogspot.com/_EM5MbI3xUIY/S_7T2FyoCDI/AAAAAAAAABI/pakYScyhVtc/s1600/actividades.png" alt="Card image cap">      
          <div class="card-body">
            <h5 class="card-title">${descripcion}</h5>
            <p class="card-text">${porcentaje} %</p>
          </div>
        </div>
      </div>`;
    })
  

    let porcentajehtml = document.getElementById('porcentajsegundocorte');
    porcentajehtml.innerHTML = `${porcentajeactual} %`;
    
  
}


cargaractividades();