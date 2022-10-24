let ad = document.getElementById("floatingInput");
let soyad = document.getElementById("floatingPassword");
let tesdiqle = document.getElementById("tesdiqle");
let tbody = document.getElementById("tbody");
let index =3;
let redakte = document.getElementsByClassName("redakte");
let sil = document.getElementsByClassName("sil");
let dsv = document.getElementById("dsv");
let yazi = document.getElementById("yazi");

tesdiqle.addEventListener("click",()=>{
  
    if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
        ad.style.borderColor="red";
        soyad.style.borderColor="red";
    }
    
    else{
        
        ad.style.borderColor="rgb(196, 196, 196)";
        soyad.style.borderColor="rgb(196, 196, 196)";
        
        index= tbody.children.length+1;
        tbody.innerHTML +=`
        <tr>
        <th scope="row"></th>
        <td>${ad.value}</td>
        <td>${soyad.value}</td>
        <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
        </tr>`;

        for (const item of sil) {
            item.addEventListener("click",()=>{
                item.parentElement.parentElement.remove();
                
            });
        }
        if (tbody.children.length==0) {
            index=0;
        }


        for (const item of redakte) {
            item.addEventListener("click",()=>{
        
        
               
                yazi.style.display="block";
                
        
        
        
                if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                    ad.style.borderColor="red";
                    soyad.style.borderColor="red";
                }
                else{
                    ad.style.borderColor="rgb(196, 196, 196)";
                    soyad.style.borderColor="rgb(196, 196, 196)";
        
                    
                    item.parentElement.parentElement.innerHTML =`
                    <tr>
                    <th scope="row"></th>
                    <td>${ad.value}</td>
                    <td>${soyad.value}</td>
                    <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                    </tr>`;
                    
                    yazi.style.display="none";

                    for (const item of sil) {
                        item.addEventListener("click",()=>{
                            item.parentElement.parentElement.remove();
                            if (tbody.children.length==0) {
                                index=0;
                            }
                        });
                    }
                    
                    
                    for (const item of redakte) {
                        item.addEventListener("click",()=>{
                         
                    
                           
                            yazi.style.display="block";
                            
                    
                    
                            
                             
                            if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                                ad.style.borderColor="red";
                                soyad.style.borderColor="red";
                            }
                            else{
                                ad.style.borderColor="rgb(196, 196, 196)";
                                soyad.style.borderColor="rgb(196, 196, 196)";
                    
                               
                                item.parentElement.parentElement.innerHTML =`
                                <tr>
                                <th scope="row"></th>
                                <td>${ad.value}</td>
                                <td>${soyad.value}</td>
                                <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                                </tr>`;
                                
                                yazi.style.display="none";
                    
                    
                                for (const item of redakte) {
                                    item.addEventListener("click",()=>{
                                     
                                
                                       
                                        yazi.style.display="block";
                                        
                                
                                
                                        
                                         
                                        if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                                            ad.style.borderColor="red";
                                            soyad.style.borderColor="red";
                                        }
                                        else{
                                            ad.style.borderColor="rgb(196, 196, 196)";
                                            soyad.style.borderColor="rgb(196, 196, 196)";
                                
                                           
                                            item.parentElement.parentElement.innerHTML =`
                                            <tr>
                                            <th scope="row"></th>
                                            <td>${ad.value}</td>
                                            <td>${soyad.value}</td>
                                            <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                                            </tr>`;
                                            
                                            yazi.style.display="none";
                    
                                            for (const item of redakte) {
                                                item.addEventListener("click",()=>{
                                                 
                                            
                                                   
                                                    yazi.style.display="block";
                                                    
                                            
                                            
                                               
                                                     
                                                    if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                                                        ad.style.borderColor="red";
                                                        soyad.style.borderColor="red";
                                                    }
                                                    else{
                                                        ad.style.borderColor="rgb(196, 196, 196)";
                                                        soyad.style.borderColor="rgb(196, 196, 196)";
                                            
                                                       
                                                        item.parentElement.parentElement.innerHTML =`
                                                        <tr>
                                                        <th scope="row"></th>
                                                        <td>${ad.value}</td>
                                                        <td>${soyad.value}</td>
                                                        <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                                                        </tr>`;
                                                        
                                                        yazi.style.display="none";
                                                    }
                                            
                                                    
                                                    for (const item of sil) {
                                                        item.addEventListener("click",()=>{
                                                            item.parentElement.parentElement.remove();
                                                            if (tbody.children.length==0) {
                                                                index=0;
                                                            }
                                                        });
                                                    }
                                                    
                                                   
                                                  
                                                    
                                                })
                                            }
                                        }
                                
                                        
                                        for (const item of sil) {
                                            item.addEventListener("click",()=>{
                                                item.parentElement.parentElement.remove();
                                                if (tbody.children.length==0) {
                                                    index=0;
                                                }
                                            });
                                        }
                                        
                                       
                                      
                                        
                                    })
                                }
                            }
                    
                            
                            for (const item of sil) {
                                item.addEventListener("click",()=>{
                                    item.parentElement.parentElement.remove();
                                    if (tbody.children.length==0) {
                                        index=0;
                                    }
                                });
                            }
                            
                           
                          
                            
                        })
                    }
                }
        
                
               
              
                
            })
        }
        

       
    }
    
})

for (const item of sil) {
    item.addEventListener("click",()=>{
        item.parentElement.parentElement.remove();
        if (tbody.children.length==0) {
            index=0;
        }
    });
}


for (const item of redakte) {
    item.addEventListener("click",()=>{
     

       
        yazi.style.display="block";
        


        
         
        if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
            ad.style.borderColor="red";
            soyad.style.borderColor="red";
        }
        else{
            ad.style.borderColor="rgb(196, 196, 196)";
            soyad.style.borderColor="rgb(196, 196, 196)";

           
            item.parentElement.parentElement.innerHTML =`
            <tr>
            <th scope="row"></th>
            <td>${ad.value}</td>
            <td>${soyad.value}</td>
            <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
            </tr>`;
            
            yazi.style.display="none";


            for (const item of redakte) {
                item.addEventListener("click",()=>{
                 
            
                   
                    yazi.style.display="block";
                    
            
            
                    
                     
                    if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                        ad.style.borderColor="red";
                        soyad.style.borderColor="red";
                    }
                    else{
                        ad.style.borderColor="rgb(196, 196, 196)";
                        soyad.style.borderColor="rgb(196, 196, 196)";
            
                       
                        item.parentElement.parentElement.innerHTML =`
                        <tr>
                        <th scope="row"></th>
                        <td>${ad.value}</td>
                        <td>${soyad.value}</td>
                        <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                        </tr>`;
                        
                        yazi.style.display="none";

                        for (const item of redakte) {
                            item.addEventListener("click",()=>{
                             
                        
                               
                                yazi.style.display="block";
                                
                        
                        
                           
                                 
                                if (ad.value.trim().length === 0 || soyad.value.trim().length ===0 || ad.value.length<3 || soyad.value.length<3) {
                                    ad.style.borderColor="red";
                                    soyad.style.borderColor="red";
                                }
                                else{
                                    ad.style.borderColor="rgb(196, 196, 196)";
                                    soyad.style.borderColor="rgb(196, 196, 196)";
                        
                                   
                                    item.parentElement.parentElement.innerHTML =`
                                    <tr>
                                    <th scope="row"></th>
                                    <td>${ad.value}</td>
                                    <td>${soyad.value}</td>
                                    <td><button type="button" class="btn btn-success succes-button-range redakte">Redakte et</button><button type="button" class="btn btn-danger danger-button-range sil">Sil</button></td>
                                    </tr>`;
                                    
                                    yazi.style.display="none";
                                }
                        
                                
                                for (const item of sil) {
                                    item.addEventListener("click",()=>{
                                        item.parentElement.parentElement.remove();
                                        if (tbody.children.length==0) {
                                            index=0;
                                        }
                                    });
                                }
                                
                               
                              
                                
                            })
                        }
                    }
            
                    
                    for (const item of sil) {
                        item.addEventListener("click",()=>{
                            item.parentElement.parentElement.remove();
                            if (tbody.children.length==0) {
                                index=0;
                            }
                        });
                    }
                    
                   
                  
                    
                })
            }
        }

        
        for (const item of sil) {
            item.addEventListener("click",()=>{
                item.parentElement.parentElement.remove();
                if (tbody.children.length==0) {
                    index=0;
                }
            });
        }
        
       
      
        
    })
}
   
    
  

    

   




