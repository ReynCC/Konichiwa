function ConvertirNombre(texto) {

    let nuevotexto = "" ;

    for (let i = 0; i < texto.length; i++) {

        let letraActual = texto.charAt(i) ;

        let esConsonanteDistintaDeN = "bcdfghjklmnpqrstvwxyz".includes(letraActual.toLowerCase()) ;

        let VocalSiguiente = i + 1 < texto.length && "aeiou".includes(texto.charAt(i + 1).toLowerCase()) ;

        if (esConsonanteDistintaDeN && !VocalSiguiente) {

            nuevotexto += letraActual + "u" ;

        } else {

            nuevotexto += letraActual ;
            
        }

    }
    
    return nuevotexto ;

}   