function sucesiones(indicaciones,repeticiones){

    const res = [1]
    let contador = 1
    while (contador <= repeticiones ) {
      

        indicaciones.forEach(element => {

            let N_P = null
            while (N_P != element ) {

                if(element === 0) break

                if (element > 0 ) {
                    res.push(res[res.length-1] + 1)
                    N_P ++
                 } else {
                    res.pop()
                    N_P --
                } 
            }
            console.log(element,res)
        });

        console.log(res)
        contador ++
    }




}

console.log(sucesiones([2,-1,0],2))
