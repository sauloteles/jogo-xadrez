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
let movimentoPeao = [];
let peaoId;
let torreId;
let cavaloId;
let bispoId;
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
let classesPecasPretas = [
    'peao-preto-1',
    'peao-preto-2',
    'peao-preto-3',
    'peao-preto-4',
    'peao-preto-5',
    'peao-preto-6',
    'peao-preto-7',
    'peao-preto-8',
    'torre-preta-1',
    'torre-preta-2',
    'cavalo-preto-1',
    'cavalo-preto-2'
]
let cavalosPretos = [
    'cavalo-preto-1',
    'cavalo-preto-2'
]
let bisposPretos = [
    'bispo-preto-1',
    'bispo-preto-2'
]
peaoBranco = {
    peca: 'peao-branco',
    cor: 'branca '
}

let moverPeao, moverTorre, moverCavalo,moverBispo  = false;

addEventListener('click',function(e){
    for(let index in peoesPretos){
        if(e.target.classList[2] == peoesPretos[index]){
            peaoId = e.target.id;
            moverTorre = false;
            moverCavalo  = false;
            moverPeao = true;
            moverBispo  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in torresPreta){
        if(e.target.classList[2] == torresPreta[index]){
            torreId = e.target.id;
            moverTorre = true;
            moverPeao = false;
            moverCavalo  = false;
            moverBispo  = false;
        }
    }
})
addEventListener('click',function(e){
    for(let index in cavalosPretos){
        if(e.target.classList[2] == cavalosPretos[index]){
            cavaloId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = true;
            moverBispo  = false;
        }
    }

})
addEventListener('click',function(e){
    for(let index in bisposPretos){
        if(e.target.classList[2] == bisposPretos[index]){
            bispoId = e.target.id;
            moverTorre = false;
            moverPeao = false;
            moverCavalo  = false;
            moverBispo  = true;
            console.log('bispo id',bispoId)

        }
    }
})


addEventListener('click',function(e){
    if(moverPeao){ 
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
            console.log(peaoId)
            console.log(movimentoPeao)
            for(let i in movimentoPeao){    
                if(movimentoPeao[i] == e.target.id){
                    console.log(e.target.id)
                    let casaProx = document.getElementById(movimentoPeao[i])
                    let peca = document.getElementById(peaoId);
                    casaProx.classList.add(peca.classList[2]);
                    peca.classList.remove(peca.classList[2]);
                    moverPeao = false;

                    movimentoPeao = []
                }
            }
        }
    }
    movimentoPeao = []


})

addEventListener('click',function(e){
    
    if(moverPeao){
        let diagonal1 =String(Number(peaoId[0])+1) + String(Number(peaoId[1])+1);
        let diagonal2 =String(Number(peaoId[0])+1) + String(Number(peaoId[1])-1);
        if(document.getElementById(diagonal1).classList[2]){
            if(e.target.id == diagonal1){
                document.getElementById(diagonal1).classList.remove('peao-branco');
                let casaProx = document.getElementById(diagonal1)
                let peca = document.getElementById(peaoId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverPeao = false;

            }
        
        }
        if(document.getElementById(diagonal2).classList[2]){
            if(e.target.id == diagonal2){
                document.getElementById(diagonal2).classList.remove('peao-branco');
                
                let casaProx = document.getElementById(diagonal2)
                let peca = document.getElementById(peaoId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverPeao = false;
            }
        }
    }
    
})




addEventListener('click',function(e){
    if(moverTorre){
        let movimentosDireitaHorizontal=[]
        let movimentosEsquerdaHorizontal=[]
        let movimentosCimaVertical=[]
        let movimentosBaixoVertical=[]
        let movimentosCaptura = []

        let i = Number(torreId[1])+1
        let x = 0;
        for(i; i<8; ++i){
            if(!document.getElementById(torreId[0]+String(i)).classList[2]){
                movimentosDireitaHorizontal.push(torreId[0] + String(i));
            
            }else{
                let x = 0
                for(let index in classesPecasPretas){
                    if(document.getElementById(torreId[0]+String(i)).classList[2] == classesPecasPretas[index]){
                        ++x;
                    }
                }
                if(x == 0){
                    movimentosCaptura.push(torreId[0]+String(i));
                }
                break;
            }
        }
        
        i = Number(torreId[1])-1
        x=0
        for( i ; i >=0; --i){
                if(!document.getElementById(torreId[0]+String(i)).classList[2]){
                    movimentosEsquerdaHorizontal.push(torreId[0]+String(i))
                }else{
                    let x = 0
                    for(let index in classesPecasPretas){
                        if(document.getElementById(torreId[0]+String(i)).classList[2] == classesPecasPretas[index]){
                            ++x;
                        }
                    }
                    if(x == 0){
                        movimentosCaptura.push(torreId[0]+String(i));

                    }
                    break;
                }
            }
        i = Number(torreId[0])+1;
    
        for(i; i < 8; ++i){
            if(!document.getElementById(String(i)+torreId[1]).classList[2]){
                movimentosCimaVertical.push(String(i)+torreId[1])
            }else{   
                let x = 0
                for(let index in classesPecasPretas){
                    if(document.getElementById(String(i)+torreId[1]).classList[2] == classesPecasPretas[index]){
                        ++x;
                    }
                }
                if(x == 0){
                    movimentosCaptura.push(String(i)+torreId[1]);

                }
                break;
            }
        }
        i = Number(torreId[0])-1;
        for(i; i>=0; --i){
            if(!document.getElementById(String(i)+torreId[1]).classList[2]){
                movimentosBaixoVertical.push(String(i)+torreId[1]);
            }else{
                let x = 0
                for(let index in classesPecasPretas){
                    if(document.getElementById(String(i)+torreId[1]).classList[2] == classesPecasPretas[index]){
                        ++x;
                    }
                }
                if(x == 0){
                    movimentosCaptura.push(String(i)+torreId[1]);

                }
                break;
            }
        }

        for(let n in movimentosDireitaHorizontal){ 
            if(torreId != e.target.id && String(movimentosDireitaHorizontal[n]) == e.target.id){ 
                let casaProx = document.getElementById(movimentosDireitaHorizontal[n])
                let peca = document.getElementById(torreId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
            }
        }
        for(let n in movimentosEsquerdaHorizontal){ 
            if(torreId != e.target.id && String(movimentosEsquerdaHorizontal[n]) == e.target.id){ 
                let casaProx = document.getElementById(movimentosEsquerdaHorizontal[n])
                let peca = document.getElementById(torreId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
            }
        }
        console.log(movimentosCimaVertical)
        for(let n in movimentosCimaVertical){ 
            if(torreId != e.target.id && String(movimentosCimaVertical[n]) == e.target.id){ 
                console.log()
                let casaProx = document.getElementById(movimentosCimaVertical[n])
                let peca = document.getElementById(torreId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
            }       
        }

        for(let n in movimentosBaixoVertical){ 
            if(torreId != e.target.id && String(movimentosBaixoVertical[n]) == e.target.id){ 
                let casaProx = document.getElementById(movimentosBaixoVertical[n])
                let peca = document.getElementById(torreId);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
            }       
        }
        for(let n in movimentosCaptura){
            if(torreId != e.target.id && String(movimentosCaptura[n]) == e.target.id){
                let casaProx = document.getElementById(movimentosCaptura[n])
                let peca = document.getElementById(torreId);
           
                casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverTorre = false;
                
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
            }
        }
        console.log(movimentosCavalo)
    }
})

addEventListener('click', function(e){
    if(moverBispo){
        let movimentosBispo = [];
        let i = Number(bispoId[0])+1;
        let max;
        let x = 1;
        if(bispoId[0] <=3){
            max =7 - Number(bispoId[1]) ;

        }else{
            max =7 - Number(bispoId[0]) ;
        }
         //diagonal direita avancar
        for(let k = 0 ; k < max; ++k){
            if(!document.getElementById(String(i)+String(x+Number(bispoId[1]))).classList[2]){
                movimentosBispo.push(String(i)+String(x+Number(bispoId[1])))  
                ++i;
                ++x;  
            }else{
                break;
            }
            // console.log(i,x+Number(bispoId[1]))
            // ++x
            // ++i
        }
        //diagonal direita retornar
        i = Number(bispoId[0])-1;
        max =Number(bispoId[0]) 
        x = Number(bispoId[1])-1;
        for(let k = 0 ; k < max; ++k){
            if(!document.getElementById(String(i) + String(Number((bispoId[1])-1)-k) ).classList[2]){
                movimentosBispo.push(String(i) + String(Number((bispoId[1])-1)-k));
                --i;
            }else{
                break;
            }
        }
         //diagonal esquerda avancar
        
        i = Number(bispoId[0])+1;
        max =Number(bispoId[1]) 
        x = Number(bispoId[1])-1;

        if(Number(bispoId[0]) >= 3){
            max = Number(bispoId[1]) -Number(bispoId[0]) 
        }
        for(let k =0 ; k < max;++k){
            console.log(String(i) + String(x))
            // if(!document.getElementById(String(i) + String(x)).classList[2]){
            //     movimentosBispo.push(String(i) + String(x));
            //     ++i;
            //     --x

            // }else{
            //     break;
            // }
        
            ++i;
            --x;
        }

        console.log(movimentosBispo)
        for(let n in movimentosBispo){
            if(e.target.id == movimentosBispo[n]){
                console.log(bispoId)
                let casaProx = document.getElementById(movimentosBispo[n])
                let peca = document.getElementById(bispoId);
                // casaProx.classList.remove(casaProx.classList[2]);
                casaProx.classList.add(peca.classList[2]);
                peca.classList.remove(peca.classList[2]);
                moverBispo = false;
            }
        }

    }
})