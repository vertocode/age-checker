function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")   
    if(fano.value == 0 || Number(fano.value) > ano){
       window.alert("[ERRO]Verifique os dados e tente novamente!")
    }
    else  {
       var fsex = document.getElementsByName("radsex")
       var idade = Number(ano) - Number(fano.value)
       var genero = ""
       var img = document.createElement("img")
       img.setAttribute("img", "foto")
       res.style.textAlign = "center"  }
 
         if (fsex[0].checked){
           document.body.style.background = "#0000ff"   

              if( idade >= 0 && idade < 2)  { 
                var genero = "Bebe"
                res.innerHTML = "<p>Detectamos um " + genero + " com " + idade + " ano.</p>"
                 img.setAttribute("src", "bebemasc.jpeg")
             }  
                else if (idade == 2) {
                    var genero = "Bebe"
                res.innerHTML = "<p>Detectamos um " + genero + " com " + idade + " anos.</p>"
                 img.setAttribute("src", "bebemasc.jpeg")
                }
                 else if (idade > 2 && idade <= 13 ){
                    var genero = "Criança"
                    res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>"
                    img.setAttribute("src", "criançamasc.jpeg") 
                }
                         else if (idade > 13 && idade < 18) {  
                            var genero = "Adolescente"
                            res.innerHTML = "<p>Detectamos um " + genero + " com " + idade + " anos.</p>"
                             img.setAttribute("src", "adomasc.jpeg")
                        }  
                            else if (idade >= 18 && idade < 60)
                            {var genero = "Homem"
                            res.innerHTML = "<p>Detectamos um " + genero + " com " + idade + " anos.</p>"
                                img.setAttribute("src", "adultomasc.jpeg")}
                                else {
                                    var genero = "Idoso"
                res.innerHTML = "<p>Detectamos um " + genero + " com " + idade + " anos.</p>"
                                    img.setAttribute("src", "idoso.jpeg")
                                } }
                                  
         
         if (fsex[1].checked) { 
            document.body.style.background = " #ffcbdb"
             if( idade >= 0 && idade < 2){
                var genero = "Bebe"
                res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " ano.</p>"
                img.setAttribute("src", "bebefem.jpeg")
                
            }
            else if (idade == 2) {
                var genero = "Bebe"
                res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>"
                img.setAttribute("src", "bebefem.jpeg")
            }
            
                else if(idade > 2 && idade <= 13){ 
                         var genero = "Criança"
                         res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>" 
                         img.setAttribute("src", "criançafem.jpeg")
                         
                }
           
                    else if(idade > 13 && idade < 18){
                          var genero = "Adolescente"
                          res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>"
                          img.setAttribute("src", "jovemfem.jpeg")
                          
                    }
                  
                        else if(idade >= 18 && idade < 60){
                            var genero = "Mulher"
                            res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>"
                            img.setAttribute("src", "adultofem.jpeg")
                            
                        }
                        
                            else  {
                                var genero = "Sra"
                                res.innerHTML = "<p>Detectamos uma " + genero + " com " + idade + " anos.</p>"
                                img.setAttribute("src", "idosa.jpeg")}
                                }
                                 
                               
                             
    

                            res.style.textAlign = "center"
                            
                            res.appendChild(img)}
