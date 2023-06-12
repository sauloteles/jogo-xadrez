const tabuleiro = document.getElementsByClassName('main__tabuleiro')[0]
const casas = document.getElementsByClassName('tabuleiro-casa');
let linha = 0;
let k = 0; 
for(let x = 0; x < casas.length; ++x){
    let id = String(linha)+String(k)
    casas[x].setAttribute('id',id)
    ++k;
    if(k == 8){
        k = 0;
        linha +=1
    }
}

function verificarXeque(array){
    if(document.getElementById(array[array.length-1]).classList[2] == 'rei-branco' || document.getElementById(array[array.length-1]).classList[2] == 'rei-preto'){
        moverTorre = false;
        moverCavalo  = false;
        moverRei = true;
        moverPeao = false;
        moverBispo  = false;
        moverRainha  = false;
    }
}
let matrizId = [[]]
k = 0
for(let x = 0;x < 64; ++x){
    if(k == 8){
        k = 0;
        matrizId.push([])
    }
    ++k
    matrizId[matrizId.length-1].push(casas[x].id)
}
console.log(matrizId)

let movimentoPeao = [];
let peaoId, torreId, cavaloId, bispoId,reiId,rainhaId;
let peoesPretos = [
'peao-preto-1', 
'peao-preto-2',
'peao-preto-2',
'peao-preto-3',
'peao-preto-4',
'peao-preto-5',
'peao-preto-6',
'peao-preto-7',
'peao-preto-8',
]
let torresPreta =[
    'torre-preta-1',
    'torre-preta-2'
]

let cavalosPretos = [
    'cavalo-preto-1',
    'cavalo-preto-2'
]
let bisposPretos = [
    'bispo-preto-1',
    'bispo-preto-2'
]


let peoesBrancos = [
'peao-branco-1',
'peao-branco-2',
'peao-branco-3',
'peao-branco-4',
'peao-branco-5',
'peao-branco-6',
'peao-branco-7',
'peao-branco-8'
];
let torresBrancas = [
    'torre-branca-1',
'torre-branca-2'
];
let cavalosBrancos = ['cavalo-branco-1','cavalo-branco-2'];
let bisposBranco = ['bispo-branco-1','bispo-branco-2'];

let moverPeao, moverTorre, moverCavalo,moverBispo,moverRei,moverRainha  = false;
let jogadorPreto = false;
let jogadorBranco = true;

addEventListener('click',function(e){
    for(let index in peoesPretos){
        if(e.target.classList[2] == peoesPretos[index] && jogadorPreto){
            peaoId = e.target.id;
            moverTorre = false;
            moverCavalo  = false;
            moverRei = false;
            moverPeao = true;
            moverBispo  = false;
            moverRainha  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in torresPreta){
        if(e.target.classList[2] == torresPreta[index] && jogadorPreto){
            torreId = e.target.id;
            moverTorre = true;
            moverPeao = false;
            moverCavalo  = false;
            moverRei = false;
            moverBispo  = false;
            moverRainha  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in cavalosPretos){
        if(e.target.classList[2] == cavalosPretos[index] && jogadorPreto){
            cavaloId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = true;
            moverRei = false;
            moverBispo  = false;
            moverRainha  = false;
        }
    }

})
addEventListener('click',function(e){
    for(let index in bisposPretos){
        if(e.target.classList[2] == bisposPretos[index] && jogadorPreto){
            bispoId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = false;
            moverBispo  = true;
            moverRei = false;
            moverRainha  = false;
        }
    }

            
})

addEventListener('click',function(e){
    if(e.target.classList[2] == 'rei-preto' && jogadorPreto){
        reiId = e.target.id;
        moverTorre = false;
        moverPeao = false;
        moverCavalo  = false;
        moverBispo  = false;
        moverRei = true;
        moverRainha  = false;
    }

})

addEventListener('click',function(e){
    if(e.target.classList[2] == 'rainha-preta' && jogadorPreto){
        rainhaId = e.target.id;
        moverTorre = false;
        moverPeao = false;
        moverCavalo  = false;
        moverBispo  = false;
        moverRei = false;
        moverRainha  = true;
        console.log('rainha selecionada')

    }

})

addEventListener('click',function(e){
    for(let index in peoesBrancos){
        if(e.target.classList[2] == peoesBrancos[index] && jogadorBranco){
            peaoId = e.target.id;
            moverTorre = false;
            moverCavalo  = false;
            moverRei = false;
            moverPeao = true;
            moverBispo  = false;
            moverRainha  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in torresBrancas){
        if(e.target.classList[2] == torresBrancas[index] && jogadorBranco){
            torreId = e.target.id;
            moverTorre = true;
            moverPeao = false;
            moverCavalo  = false;
            moverRei = false;
            moverBispo  = false;
            moverRainha  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in cavalosBrancos){
        if(e.target.classList[2] == cavalosBrancos[index] && jogadorBranco){
            cavaloId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = true;
            moverRei = false;
            moverBispo  = false;
            moverRainha  = false;
        }
    }

})
addEventListener('click',function(e){
    for(let index in bisposBranco){
        if(e.target.classList[2] == bisposBranco[index] && jogadorBranco){
            bispoId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = false;
            moverBispo  = true;
            moverRei = false;
            moverRainha  = false;
        }
    }

            
})

addEventListener('click',function(e){
    if(e.target.classList[2] == 'rei-branco' && jogadorBranco){
        reiId = e.target.id;
        moverTorre = false;
        moverPeao = false;
        moverCavalo  = false;
        moverBispo  = false;
        moverRei = true;
        moverRainha  = false;
    }

})

addEventListener('click',function(e){
    if(e.target.classList[2] == 'rainha-branca' && jogadorBranco){
        rainhaId = e.target.id;
        moverTorre = false;
        moverPeao = false;
        moverCavalo  = false;
        moverBispo  = false;
        moverRei = false;
        moverRainha  = true;
        console.log('rainha selecionada')

    }
})


addEventListener('click',function(e){
    if(moverPeao){ 
        
        console.log(e.target.id)
        
        if( document.getElementById(peaoId).classList[2].split('-')[1] == 'preto'){ 
            let x = Number(peaoId[0])+1
            x = String(x) + peaoId[1]
            if(!document.getElementById(x).classList[2]){ 
                if( Number(peaoId[0]) ==   '1'){
                    movimentoPeao.push(Number(peaoId[0])+1);
                    movimentoPeao.push(Number(peaoId[0])+2);
                    movimentoPeao[0] = String(movimentoPeao[0]) + peaoId[1];
                    movimentoPeao[1] = String(movimentoPeao[1]) + peaoId[1]
                }
                if( Number(peaoId[0]) !=   '1'){
                    movimentoPeao.push(Number(peaoId[0])+1);
                    movimentoPeao[0] = String(movimentoPeao[0]) + peaoId[1];            
                }
            }
        }if( document.getElementById(peaoId).classList[2].split('-')[1] == 'branco'){
            let x = Number(peaoId[0])-1
            x = String(x) + peaoId[1]
            if(!document.getElementById(x).classList[2]){ 
                if( Number(peaoId[0]) ==   '6'){
                    movimentoPeao.push(Number(peaoId[0])-1);
                    movimentoPeao.push(Number(peaoId[0])-2);
                    movimentoPeao[0] = String(movimentoPeao[0]) + peaoId[1];
                    movimentoPeao[1] = String(movimentoPeao[1]) + peaoId[1]
                }
                if( Number(peaoId[0]) !=   '6'){
                    movimentoPeao.push(Number(peaoId[0])-1);
                    movimentoPeao[0] = String(movimentoPeao[0]) + peaoId[1];            
                }
            }
        }
            for(let i in movimentoPeao){    
                if(movimentoPeao[i] == e.target.id){
                   
                    let casaProx = document.getElementById(movimentoPeao[i])
                    let peca = document.getElementById(peaoId);
                    casaProx.classList.add(peca.classList[2]);
                    peca.classList.remove(peca.classList[2]);
                    moverPeao = false;
                    if(jogadorBranco){
                        jogadorBranco = false;
                        jogadorPreto = true
                    }else{
                        jogadorBranco = true
                        jogadorPreto = false
                    }

                    movimentoPeao = []
                }
            }
        
    }
    movimentoPeao = []


})

addEventListener('click',function(e){
    
    if(moverPeao){
        let diagononais = []
        let corPeca;
        if( document.getElementById(peaoId).classList[2].split('-')[1] == 'preto'){
            if(Number(peaoId[1]) >= 1 && Number(peaoId[1]) <= 6  ){
                diagononais.push( (String(Number(peaoId[0])+1))+(String(Number(peaoId[1])+1) ))
                diagononais.push( (String(Number(peaoId[0])+1))+(String(Number(peaoId[1])-1) ))

            }
            if(Number(peaoId[1]) ==0){
                diagononais.push( (String(Number(peaoId[0])+1))+(String(Number(peaoId[1])+1) ))
            }
            if(Number(peaoId[1]) == 7){
                diagononais.push( (String(Number(peaoId[0])+1))+(String(Number(peaoId[1])-1) ))
            }
        }else{
            if(Number(peaoId[1]) >= 1 && Number(peaoId[1]) <= 6  ){
                diagononais.push( (String(Number(peaoId[0])-1))+(String(Number(peaoId[1])+1) ))
                diagononais.push( (String(Number(peaoId[0])-1))+(String(Number(peaoId[1])-1) ))

            }
            if(Number(peaoId[1]) ==0){
                diagononais.push( (String(Number(peaoId[0])-1))+(String(Number(peaoId[1])+1) ))
            }
            if(Number(peaoId[1]) == 7){
                diagononais.push( (String(Number(peaoId[0])-1))+(String(Number(peaoId[1])-1) ))
            }

        }
        for(let n in diagononais){

            if(e.target.id == diagononais[n] && document.getElementById(peaoId).classList[2].split('-')[1] != document.getElementById(diagononais[n]).classList[2].split('-')[1] ){
                let casaProx = document.getElementById(diagononais[n])
                let peca = document.getElementById(peaoId);
                casaProx.classList.remove(casaProx.classList[2])
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverPeao = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }

                
            }
        }
    }
    
})




addEventListener('click',function(e){
    if(moverTorre){
        let movimentosTorre=[]

        let i = Number(torreId[1])+1
        let x = 0;
     
        for(i; i<8; ++i){
            if(!document.getElementById(torreId[0]+String(i)).classList[2]){
                movimentosTorre.push(torreId[0] + String(i));
            
            }else{
                let corPeca = document.getElementById(torreId[0] + String(i)).classList[2].split('-')[1]
                if(document.getElementById(torreId).classList[2].split('-')[1] != corPeca){
                    movimentosTorre.push(torreId[0] + String(i));       
                }
                break;
            
            }
        }
        
        i = Number(torreId[1])-1
        x=0
        for( i ; i >=0; --i){
                if(!document.getElementById(torreId[0]+String(i)).classList[2]){
                    movimentosTorre.push(torreId[0]+String(i))
                }else{
                   
                    let corPeca = document.getElementById(torreId[0] + String(i)).classList[2].split('-')[1]
                    if(document.getElementById(torreId).classList[2].split('-')[1] != corPeca){
                        movimentosTorre.push(torreId[0]+String(i));       
                    }
                    break;
                
                }
            }
        i = Number(torreId[0])+1;
    
        for(i; i < 8; ++i){
            if(!document.getElementById(String(i)+torreId[1]).classList[2]){
                movimentosTorre.push(String(i)+torreId[1])
            }else{   
                let corPeca = document.getElementById(String(i)+torreId[1]).classList[2].split('-')[1]
                if(document.getElementById(torreId).classList[2].split('-')[1] != corPeca){
                    movimentosTorre.push(String(i)+torreId[1]);       
                }
                break;
            
            
            }
        }
        i = Number(torreId[0])-1;
        for(i; i>=0; --i){
            if(!document.getElementById(String(i)+torreId[1]).classList[2]){
                movimentosTorre.push(String(i)+torreId[1]);
            }else{
                let corPeca = document.getElementById(String(i)+torreId[1]).classList[2].split('-')[1]
                if(document.getElementById(torreId).classList[2].split('-')[1] != corPeca){
                    movimentosTorre.push(String(i)+torreId[1]);       
                }
                break;
            
            }
        }

        for(let n in movimentosTorre){ 
            if(rainhaId != e.target.id && String(movimentosTorre[n]) == e.target.id){ 
                let casaProx = document.getElementById(movimentosTorre[n])
                let peca = document.getElementById(torreId);
                
                casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }

            }
        }
      
    }

})

addEventListener('click',function(e){
    if(moverCavalo){
        console.log('moveu')
        let movimentosCavalo =  [];
        let movimentoL
        if(Number(cavaloId[0])<6){
            movimentoL = String(Number(cavaloId[0])+2) + String(Number(cavaloId[1])+1)
            movimentosCavalo.push(movimentoL)
            movimentoL = String(Number(cavaloId[0])+2) + String(Number(cavaloId[1])-1)
            movimentosCavalo.push(movimentoL)
        }
        if(Number(cavaloId[0])>=2){
            console.log('teste')
            movimentoL = String(Number(cavaloId[0])-2) + String(Number(cavaloId[1])+1)
            movimentosCavalo.push(movimentoL)
            movimentoL = String(Number(cavaloId[0])-2) + String(Number(cavaloId[1])-1)
            movimentosCavalo.push(movimentoL)
        }
        if(Number(cavaloId[1]) < 6){
            movimentoL = String(Number(cavaloId[0])-1) + String(Number(cavaloId[1])+2)
            movimentosCavalo.push(movimentoL)
            movimentoL = String(Number(cavaloId[0])+1) + String(Number(cavaloId[1])+2)
            movimentosCavalo.push(movimentoL)
        }
        if(Number(cavaloId[1]) >1){
            movimentoL = String(Number(cavaloId[0])-1) + String(Number(cavaloId[1])-2)
            movimentosCavalo.push(movimentoL)
            movimentoL = String(Number(cavaloId[0])+1) + String(Number(cavaloId[1])-2)
            movimentosCavalo.push(movimentoL)
        }

        for(let n in movimentosCavalo){
            if(e.target.id == movimentosCavalo[n]){
                let casaProx = document.getElementById(movimentosCavalo[n])
                let peca = document.getElementById(cavaloId);
                casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverCavalo = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }

            }
        }
        console.log(movimentosCavalo)
    }
})

addEventListener('click', function(e){
    if(moverBispo){
        let movimentosBispo = [];
       

        // console.log(bispoId)

        let linha= Number(bispoId[0]);
        let coluna = Number(bispoId[1]);
        //diagol princial avancar
        while(true){
            ++linha;
            ++coluna;
            if(linha == 8 || coluna == 8){
                break;
            }
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(bispoId).classList[2].split('-')[1] != corPeca){
                    movimentosBispo.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosBispo.push(movimento)
        }
        linha= Number(bispoId[0]);
        coluna = Number(bispoId[1]);
        //diagol princial retonar  
        while(true){
            --linha;
            --coluna;
            if(linha == -1 || coluna == -1){
                break;
            } 
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(bispoId).classList[2].split('-')[1] != corPeca){
                    movimentosBispo.push(matrizId[linha][coluna]);       
                }
                break;
            } 
            let movimento = matrizId[linha][coluna];
            movimentosBispo.push(movimento)
        }
        linha= Number(bispoId[0]);
        coluna = Number(bispoId[1]);
        //diagonal secundaria avacar
        while(true){
            ++linha;
            --coluna;
            if(linha == 8 || coluna == -1){
                break;
            }  
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(bispoId).classList[2].split('-')[1] != corPeca){
                    movimentosBispo.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosBispo.push(movimento)
        }
        linha= Number(bispoId[0]);
        coluna = Number(bispoId[1]);
        //diagonal secundaria retonar
        while(true){
            --linha;
            ++coluna;
            if(linha == -1 || coluna == 8){
                break;
            }  
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(bispoId).classList[2].split('-')[1] != corPeca){
                    movimentosBispo.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosBispo.push(movimento)
        }
        console.log(movimentosBispo);         
        for(let n in movimentosBispo){
            if(e.target.id == movimentosBispo[n] && e.target.id != bispoId ){
                console.log(bispoId)
                let casaProx = document.getElementById(movimentosBispo[n])
                let peca = document.getElementById(bispoId);
                casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverBispo = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }
                verificarXeque(movimentosBispo)

            }
        }

    }
})

addEventListener('click',function(e){
    if(moverRei){
        let movimentosRei = [];
        let movimento =reiId[0] + String(Number(reiId[1])+1);
        movimentosRei.push(movimento)
        movimento =reiId[0] + String(Number(reiId[1])-1);
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])-1)+reiId[1];
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])+1)+reiId[1];
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])+1) + String(Number(reiId[1])+1);
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])+1) + String(Number(reiId[1])-1);
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])-1) + String(Number(reiId[1])+1);
        movimentosRei.push(movimento)
        movimento = String(Number(reiId[0])-1) + String(Number(reiId[1])-1);
        movimentosRei.push(movimento)
        for(let n in movimentosRei){
            if(e.target.id == movimentosRei[n]){
                let casaProx = document.getElementById(movimentosRei[n])
                let peca = document.getElementById(reiId);
               casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverRei = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }


            }
        }
    }
})

addEventListener('click',function(e){
    if(moverRainha){
        let movimentosRainha=[]

        let i = Number(rainhaId[1])+1
        let x = 0;
        for(i; i<8; ++i){
            if(!document.getElementById(rainhaId[0]+String(i)).classList[2]){
                movimentosRainha.push(rainhaId[0] + String(i));
            
            }else{
                let corPeca = document.getElementById(rainhaId[0]+String(i)).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(rainhaId[0]+String(i));       
                }
                break;
            }
        }
        
        i = Number(rainhaId[1])-1
        x=0
        for( i ; i >=0; --i){
                if(!document.getElementById(rainhaId[0]+String(i)).classList[2]){
                    movimentosRainha.push(rainhaId[0]+String(i))
                }else{
                    let corPeca = document.getElementById(rainhaId[0]+String(i)).classList[2].split('-')[1]
                    if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(rainhaId[0]+String(i));       
                    }
                    break;
                }
            }
        i = Number(rainhaId[0])+1;
    
        for(i; i < 8; ++i){
            if(!document.getElementById(String(i)+rainhaId[1]).classList[2]){
                movimentosRainha.push(String(i)+rainhaId[1])
            }else{   
                let corPeca = document.getElementById(String(i)+rainhaId[1]).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(String(i)+rainhaId[1]);       
                }
                break;
            }
        }
        i = Number(rainhaId[0])-1;
        for(i; i>=0; --i){
            if(!document.getElementById(String(i)+rainhaId[1]).classList[2]){
                movimentosRainha.push(String(i)+rainhaId[1]);
            }else{
                let corPeca = document.getElementById(String(i)+rainhaId[1]).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(String(i)+rainhaId[1])       
                }
                break;
            }
        }

        let linha= Number(rainhaId[0]);
        let coluna = Number(rainhaId[1]);
        //diagol princial avancar
        while(true){
            let movimento 
            ++linha;
            ++coluna;
            if(linha == 8 || coluna == 8){    
                break;   
            }  
            movimento  = matrizId[linha][coluna];
            movimentosRainha.push(movimento);
        }
        linha= Number(rainhaId[0]);
        coluna = Number(rainhaId[1]);
        //diagol princial retonar  
        while(true){
            --linha;
            --coluna;
            if(linha == -1 || coluna == -1){
                break;
            }  
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosRainha.push(movimento)
        }
        linha= Number(rainhaId[0]);
        coluna = Number(rainhaId[1]);
        //diagonal secundaria avacar
        while(true){
            ++linha;
            --coluna;
            if(linha == 8 || coluna == -1){
                break;
            }  
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosRainha.push(movimento)
        }
        linha= Number(rainhaId[0]);
        coluna = Number(rainhaId[1]);
        //diagonal secundaria retonar
        while(true){
            --linha;
            ++coluna;
            if(linha == -1 || coluna == 8){
                break;
            }  
            if(document.getElementById(matrizId[linha][coluna]).classList.length == 3){
                let corPeca = document.getElementById(matrizId[linha][coluna]).classList[2].split('-')[1]
                if(document.getElementById(rainhaId).classList[2].split('-')[1] != corPeca){
                    movimentosRainha.push(matrizId[linha][coluna]);       
                }
                break;
            }
            let movimento = matrizId[linha][coluna];
            movimentosRainha.push(movimento)
        }
        console.log(movimentosRainha)
        for(let n in movimentosRainha){
            if(e.target.id == movimentosRainha[n] && e.target.id != rainhaId){
                let casaProx = document.getElementById(movimentosRainha[n])
                let peca = document.getElementById(rainhaId);
                casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverRainha = false;
                if(jogadorBranco){
                    jogadorBranco = false;
                    jogadorPreto = true
                }else{
                    jogadorBranco = true
                    jogadorPreto = false
                }

            }
        }
     
        
    }
})