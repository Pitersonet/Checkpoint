
//Microondas
/*Alimentos e seus respectivos tempos em segundos:
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);*/
function microondas(opcao, tempo){
    console.log("\nSelecione a opção em seguida o tempo:\n")
    console.log("1 - Pipoca: 10 segundos")
    console.log("2 - Macarrão: 8 segundos")
    console.log("3 - Carne: 15 segundos")
    console.log("4 - Feijão: 12 segundos")
    console.log("5 - Brigadeiro: 8 segundos\n")
    switch(opcao){
        case 1: //Pipoca-10s
            if(tempo > 20){
                console.log("A comida queimou!!!")
            }else if(tempo < 10){
                console.log("Tempo insuficiente")
            }else if(tempo > 30){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Ok prato selecionado (Pipoca)-Prato pronto, bom apetite")
            }
            break;
            case 2: //Macarrao-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Ok prato selecionado (Macarrão)-Prato pronto, bom apetite")
            }
            break;
        case 3: //Carne-15s
            if(tempo > 30){
                console.log("A comida queimou!!!")
            }else if(tempo < 15){
                console.log("Tempo insuficiente")
            }else if(tempo > 45){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Ok prato selecionado (Carne)-Prato pronto, bom apetite")
            }
            break;
        case 4: //Feijao-12s
            if(tempo > 24){
                console.log("A comida queimou!!!")
            }else if(tempo < 12){
                console.log("Tempo insuficiente")
            }else if(tempo > 36){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Ok prato selecionado (Feijão)-Prato pronto, bom apetite")
            }
            break;
        case 5: //Brigadeiro-8s
            if(tempo > 16){
                console.log("A comida queimou!!!")
            }else if(tempo < 8){
                console.log("Tempo insuficiente")
            }else if(tempo > 24){
                console.log("Kabuummmm!!!!!")
            }else{
                console.log("Ok prato selecionado (Brigadeiro)-Prato pronto, bom apetite")
            }
            break;
            default: //Nenhuma das opções
            console.log("Opção inválida!!!")
            break;
            }
            }
      
        // Teste de prato selecione a opção e o tempo.
        microondas(3, 31)



