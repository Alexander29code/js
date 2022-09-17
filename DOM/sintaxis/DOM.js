//MIS NOTAS


console.log(window.document);
console.log(document); // CON TODO Y EL !DOCTYPE
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); // SELECCIONA SOLO EL HTML
console.log(document.doctype);// !DOCTYPE
console.log(document.charset);
console.log(document.title);
console.log(document.links); // >> HTMLCollection(7) [a, a, a, a, a, a.link-dom.cardas, a]
console.log(document.images);// >> HTMLCollection(7) [img, img, img, img, img, img]
console.log(document.forms); // >> HTMLCollection []
console.log(document.styleSheets); // >> StyleSheetList {0: CSSStyleSheet, length: 1}
console.log(document.scripts); // >> HTMLCollection [script]



// MOSTRAR DESPUES 5 LLEGUNDOS QUE CARGUE LA PAGINA EL TEXTO SELECCIONADO
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 5000);
// document.write("<h2>Hola Mundo desde el DOM</h2>");


//SELECTORES *USAR SELECCDOR CSS VALIDO*

// *CADA ETIQUETA QUE SE SELECCIONA NO SOLO ES LA ETIQUETA COMO TAL SINO LA PARTE DEL ARBOL DEL DOCUMENTO*
                      //<figure class="card" id="ultima">
      //EJEMPLO       //      <img alt="Nature">
                      //      <figcaption>Nature</figcaption>
                      //</figure>

                      
// POR LO MISMO LO MISMO ESE RAMA DEL ARBOL QUE SE HA SELECCIONADO SE PUEDE GUARDAR EN UNA VARIABLE Y SE MODIFICADA Y ESO MODIFICARIA AL ARBOL ORIGINAL(AL DOCUMENT)
//EJEMPLO ---->
//  const $imagen = document.querySelector("#ultima img")
//  $imagen.alt = "People" // modificamos su atributo alt
//  console.log($imagen)


// console.log(document.getElementById("menu"))
// console.log(document.querySelectorAll("#menu ul li")) //>>NodeList(5) [li, li, li, li, li] / puede acceder a las descendencias que quieras dentro del arbol de esa etiqueta *COMO SELECTOR VALIDO SELECCIONA UNICAMENETE LA ETITA/AS (ETIQUETAS EN ESTE CASO) NO LOS ATRIBUTOS COMO EL STYLE*
// console.log(document.querySelectorAll("a").length); // coleccion de elementos tiene length
// document.querySelectorAll("a").forEach((el) => console.log(el)); // recorremos la coleccion con todos los elementos encontrados
// console.log(document.querySelector("input").type) // accedemos a los atributos con el . de la primera etiqueta encontrada ELEMENTO.NAMETRIBUTO


//selecciona todas las etiquetas que coindidan con el selector // podemos acceder a cada una de ellas por el indice  $elements[1] o recorrerlo
// $elements = document.querySelectorAll("#menu ul li")
// console.log($elements)  //>>NodeList(5) [li, li, li, li, li]
//                         // 0: li
//                         // 1: li
//                         // 2: li
//                         // 3: li
//                         // 4: li
//                         // length: 5



// const $Ulimagen = document.querySelector("#ultima")

// console.log($Ulimagen) //>> <figure class="card" id="ultima">
//                       //      <img alt="Nature">
//                       //      <figcaption>Nature</figcaption>
//                       //    </figure>


// console.log($Ulimagen.children) // >> coleccion html con todos sus hijos directos que tenga el elemento
//                                 // HTMLCollection(2) [img, figcaption]
//                                 // 0: img
//                                 // 1: figcaption
//                                 // length: 2
//                                 // [[Prototype]]: HTMLCollection

// console.log($Ulimagen.children[0]) // accedemos al hijo por el indice
// console.log($Ulimagen.children[0].src) // accedemos al atributo tal (si no esta definido no muestra nada)
// $Ulimagen.children[0].src = "https://placeimg.com/200/200/nature" // ASIGNAMOS O REEMPLAZAMOS(EN CASO QUE YA TENGA VALOR) VALOR DEL ATRIBUTO
// console.log($Ulimagen.children[0])


// Atributos y Data-Attributes:

/* SIMILAR A ACCEDER A LOS ATRIBUTOS DE UN OBJETO 

.nameatributo >> mostrar valor 
.nameatributo = nuevo valor >> crear nuevo atrbuto a reemplazar el valor del que ya existia

ACCEMOS NADA MAS PARA OBTENER EL VALOR O PARA REEMPLAZARLO EN ESE MISMO MOMENTO 
*es decir si se guarda en una variable y luego modificamos la variable no modificaremos
 el atributo en el elemento*
 EJEMPLO >> 
 */
   // >> ejemplo

//  const $img = document.querySelector("#ultima img")
//  let atributodeimg = $img.alt // obtenemos valor del atributo
//  console.log("antes",$img, atributodeimg)
//  atributodeimg = "People"    // actualizamos valor de la varible
//  console.log("despues",$img,atributodeimg)

 // PARA QUE FUNCCIONE EL CODIGO ANTERIOR PARA PODER AGREGAR NUEVO ATRIBUTO O MODIFICARLO(DE LOS QUE SEAN VALIDOS PARA LA ETIQUETA OBVIO) TENEMOS QUE HACERLO AL MOMENTO
 // EJEMPLO ->

//  const $IMG = document.querySelector("#ultima img")
//  console.log($IMG)
//  $IMG.alt = "People"

// RESUMEN DE LAS FORMAS DISTINTAS OBTENER Y  REEMPLAZAR O SETEAR VALOR A LOS ATRIBUTOS  :
//
// .atrbuto   es igual  getAttribute("atributo")
                    
// .atributo = "valor" es igual a .setAttribute("atributo", "valor");

// etiqueta.hasAttribute("rel") //LO TIENE ? >> true / false

// etiqueta.removeAttribute("rel"); // QUITAR ATRIB...



// console.log(document.documentElement.lang); // ACCEDEMOS CON EL PUNTO
// console.log(document.documentElement.getAttribute("lang")); // FUNCION PARA ACCEDER
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));
// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);
// document.documentElement.setAttribute("lang", "es-MX"); // FUNCION PARA SEATERA VALOR
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom");
// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener"); // PODEMOS SEATER VALOR QUE AUN NO TENIA NINGUNO
// $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

// console.log($linkDOM.hasAttribute("rel")); // LO TIENE ?
// $linkDOM.removeAttribute("rel"); // QUITAR ATRIB...
// console.log($linkDOM.hasAttribute("rel"));

// //Data-Attributes****




 // dataset es un obejto con todos los data atributos creados por eso mismo se accede por el nombre del data atribut
 // LA DINAMICA DE OBTENER Y REEMPLAZAR VALOR DE UN ATRIBUTO ES EL MISMO UNICAMENTRE QUE
 // PRIMERO ACCEDEMOS AL OBJETO  elemento.dataset >> DOMStringMap {nombredelatributo: 'Suscríbete a mi canal y comparte'} 
// Y LUEGO VIENE LA MISMA DINAMICA QUE PARA LOS ATRIBUTOS NORMALES *NOTACION DEL PUNTO*
// O METODOS ($linkDOM.dataset.description) 

//setAttribute y  getAttribute pueden acceder directamante al data atributo sin antes acceder al dataset


//const $linkDOM = document.querySelector(".link-dom");

//$linkDOM.setAttribute("data-description", "MODELO DE CAJA"); // $linkDOM.dataset.description ="MODELO DE CAJA"  * AL ATRIBUTO TAL | DALE TAL VALOR*  console.log($linkDOM.dataset)
  // console.log($linkDOM.dataset.description);

// $linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
// console.log($linkDOM.dataset.description);
// console.log($linkDOM.hasAttribute("data-id")); // ya esta creado el atributo tal en el elemento?

// $linkDOM.removeAttribute("data-id");
// console.log($linkDOM.hasAttribute("data-id"));

// // dataset es un obejto con todos los data atributos creados por eso mismo se accede por el nombre del data atribut
// console.log($linkDOM.dataset); // >> DOMStringMap {description: 'Suscríbete a mi canal y comparte'}



//ESTILOS Y VARIABLES CSS

//  const $linkDOM = document.querySelector(".link-dom");
// console.log($linkDOM.style) //>> CSSStyleDeclaration {0: 'background-color', 1: 'color', accentColor: '',
//                   additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

//propiedad del style en linea de un atributo
//ESTE OBJETO TIENE TODAS pripiedades aplicadas y todas las
//propiedades vacias(a las que no les hemos seteado algun valor)

//una vez accediento a este objeto buscamos propidades ccs (.nombreatributo o metodos)


// RESUMEN --->
//ACCEDMOS AL ATRUBUTO STYLE COMO A CUALQUIER ATRIBUTO

//elemento.style -igual a-> elemento.getAttribute("style") // accemos al atributo style

//ACCEDIENTO A CSSStyleDeclaration ACCEDEMOS A LAS PROPIEDADES POR.nombreatributo(sin el - esto si esque originamente en css ai es)
// ACCEDIENTO A CSSStyleDeclaration ACCEDEMOS A LAS PROPIEDADES POR.getPropertyValue(con el - esto si esque originamente en css ai es)


// UNA VEZ ACCEDEMOS A LOS ESTILOS ENTONCES ACCEDEMOS A LOS ATRIBUTOS Y SUS VALORES(notacion de punto o getPropertyValue ~~ setProperty )

//console.log($linkDOM.style.backgroundColor) // -igual a-> linkDOM.style.getPropertyValue("background-Color")
//elemento.style.textAlign = "center"; -igual a-> elemento.style.setProperty("text-decoration", "none")
//

//const $linkDOM = document.querySelector(".link-dom");
 
 

// console.log($linkDOM.style); // o --> console.log($linkDOM.getAttribute("style"));
// console.log($linkDOM.style.getPropertyValue("background-color")); // o --> console.log($linkDOM.style.backgroundColor)
// .style(en linea).propiedad del estyle
// console.log($linkDOM.style.color);


// $linkDOM.style.setProperty("text-decoration", "none"); // .style(en linea).propiedad del estyle
// $linkDOM.style.setProperty("display", "block");
// $linkDOM.style.width = "50%"; // .style(en linea).propiedad del estyle
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log(getComputedStyle($linkDOM));

// // PROPIEDADES COMPUTALIZADAS
// //todas las propiedades con valor por defecto dados por la computadora y a las que ya les asignamos valor-por lo mismo los valores que ya se asignaron por el progamador se muestran posiblemente en otro formato rgb a exadecimal
// console.log(window.getComputedStyle($linkDOM)); 
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));



// //Variables CSS - Custom Properties CSS

// const $html = document.documentElement, // accedemos al html
//   $body = document.body;

// LAS VARIABLES SE ENCENTRAN EN EL CSSStyleDeclaration DEL $HTML(ya sea en computalizadas o en el .style) 

//EJEMPLO
    // $html.style O getComputedStyle($html)

// UNA VEZ SE ACCEDE AL CSSStyleDeclaration SIGUE ACCEDER A LA VARIABLE,ESO ES UNICAMENTE CON LOS METODOS (getPropertyValue,setProperty)
   // (no se puede acceder a las variables por la notacion de punto como normalmente accedemos a un atributo despues de .style (element.style.color))

//                    // accedemos a tods los estilos/obtenemos valores de las variables css       
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), 
//   varYellowColor = $html.style.getPropertyValue("--yellow-color");

// console.log(varDarkColor, varYellowColor);

// //asignamos a elementos cierto estilo
// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// //cambiamos el valor de la varibale css ()
// $html.style.setProperty("--dark-color", "#000");//  getComputedStyle($html).setProperty("--dark-color", "#000")
// varDarkColor =$html.style.getPropertyValue("--dark-color")// O getComputedStyle($html).getPropertyValue("--dark-color");
// console.log(varDarkColor)


// $body.style.setProperty("background-color", varDarkColor);


// CLASES CSS

// const $card = document.querySelector(".card");

// console.log($card);
// console.log($card.className); // nombres de las clases que tiene el elemento en el class
// console.log($card.classList); // coleccion de clases que tiene el elemento // MANEJAMOS LA COLECCION PARA la manipuacion
//                               // DOMTokenList ['card', value: 'card']
//                               // 0: "card"
//                               // 1: "rotate-135"
//                               // 2: "opacity-80"
//                               // length: 3
//                               // value: "card rotate-135 opacity-80"


// console.log($card.classList.contains("rotate-45")); // tiene la clase ?
// $card.classList.add("rotate-45"); // agregar

// $card.classList.remove("rotate-45"); // quiiitar

// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45"); // si lo tiene lo quita y viceversa
// console.log($card.classList.contains("rotate-45"));

// $card.classList.replace("rotate-45", "rotate-135"); // remplazado | remplazador
// $card.classList.add("opacity-80", "sepia"); // se puede agregar mas de una clase al mismo tiempo

// $card.classList.remove("opacity-80", "sepia"); //se puede remover mas de uno a la vez
// $card.classList.toggle("opacity-80", "sepia"); //se puede usar toggle con mas de una clase

// TEXTO Y TEXTO HTML


// const $whatIsDOM = document.getElementById("que-es");
// let text = `
//     <p>
//       El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//     </p>
//     <p>
//       Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//       <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
//   `;

// $whatIsDOM.innerText = text; // AGREGA COMO TEXTO - RESPETA SALTOS DE LINEA DEL ``
// console.log($whatIsDOM)

// $whatIsDOM.textContent = text; // AGREGA COMO TEXTO - NO RESPETA SALTOS DE LINEA DEL ``
// console.log($whatIsDOM)

// $whatIsDOM.innerHTML = text; // RECONOCE HTML , LO AGREGA COMO TAL
// console.log($whatIsDOM)

// $whatIsDOM.outerHTML = text; // RECONOCE HTML , LOS MISMO QUE innerHTML
// console.log($whatIsDOM)


// DOM Traversing - Recorriendo el DOM:

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children); //.COLECCCION HTML DE HIJOS DIRECTOS
// console.log($cards.children[2]); // ACCEDER A LA ETIQUETA TAL POR INDICE
// console.log($cards.parentElement); // ETIQUETAENCUESTION.QUIEN ES EL PADRE(DENTRO DE QUIEN ESTA)
// console.log($cards.firstElementChild); //  ETIQUETAENCUESTION.QUIEN ES EL PRIMER HIJO(PRIMER ELEMENTO HTM DENTRO DE LA ETIQUETA EN CUESTION)
// console.log($cards.lastElementChild); // ETIQUETAENCUESTION.QUIEN ES EL ULTIMO HIJO(ULTIMO ELEMENTO HTM DENTRO DE LA ETIQUETA EN CUESTION)
// console.log($cards.previousElementSibling); //ETIQUETAENCUESTION.HERMANO ANTERIOR
// console.log($cards.nextElementSibling); //ETIQUETAENCUESTION.HERMANO POSTERIOR
// console.log($cards.closest("div")); //.(PADRE O TIO(PASADO COMO ARGUMENTO) MAS CERCANO)
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section")); //la misma card es el descendiente mas cercano .(PADRE O TIO(PASADO COMO ARGUMENTO) MAS CERCANO)

/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */

//  const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals"),
//   $cards = document.querySelector(".cards"),
//   $figure2 = document.createElement("figure");

//   $img.setAttribute("src", "https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);

// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/people" alt="People">
// <figcaption>People</figcaption>

// `;
// $figure2.classList.add("card");
// $cards.appendChild($figure2);

// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],

// $ul = document.createElement("ul");
// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);

// estaciones.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul.appendChild($li);

// });



// const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
//   $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";

// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
//   ],
//   $ul3 = document.createElement("ul"),
//   $fragment = document.createDocumentFragment(); //crea un document-fragmen y se guaradara en la variable
 
//   console.log("fragmen antes")
//   console.log($fragment)
//   meses.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $fragment.appendChild($li);
// });
// console.log("fragmen despues")
// console.log($fragment)


// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3); 



/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */

//template que es una etiqueta que se crea en el html de manera manual sera invisible e intangible dentro del dom, como si 
//tiviera display :none pero en realidad nunca podra existir dentro la pagina, este crea un fragmento en su contenido(en este caso figure y todo lo demas esta dentro de ese fragmento > ver html), este funcionara 
//como una etiqueta tipo esqueleto donde una vez modificada se accede a una copia de este fragmento *que sera en este caso figure*

//EN ESTE EJEMPLO CREAREMOS UN FRAGMENTO($fragment) PARA SER MODIFICADO AGREGANDOLE COMO HIJO UNA COPIA DEL CONTENIDO(POR CADA ITERACION) DEL FRAGMENTO QUE CREA EL TEMPLATE ($template)
// PARA FINALMEMTE AGREGARLO  AGREGARLO A DONDE SE NECESITA EN EL DOM ($cards)

//  const $cards = document.querySelector(".cards"),
//   $template = document.getElementById("template-card").content, // accede al document-fragmen de la etiqueta template
//   $fragment = document.createDocumentFragment(),

//   cardsContent = [
//     {
//       title: "Tecnología",
//       img: "https://placeimg.com/200/200/tech",
//     },
//     {
//       title: "Animales",
//       img: "https://placeimg.com/200/200/animals",
//     },
//     {
//       title: "Arquitectura",
//       img: "https://placeimg.com/200/200/arch",
//     },
//     {
//       title: "Gente",
//       img: "https://placeimg.com/200/200/people",
//     },
//     {
//       title: "Naturaleza",
//       img: "https://placeimg.com/200/200/nature",
//     },
//   ];

  

// cardsContent.forEach((el) => {
//   $template.querySelector("img").setAttribute("src", el.img);
//   $template.querySelector("img").setAttribute("alt", el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//   let $clone = document.importNode($template, true); // creamos una copia del contenido del template ya modificado(en este caso sera figure > ver htmm) para luego se usado o agregado donde se requiera
//   $fragment.appendChild($clone);
  
  
//   console.log("template",$template)
//   console.log("clone del template",$clone)
//   console.log("!!!!!!!!!!!!!!!!!!")   
// });

// console.log("fragment",$fragment) //FRAGMENTO COMPLETO Y LISTO PARA SER AGREGADO DONDE SE NECESITE

// $cards.appendChild($fragment); 


/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */

//const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure"),
//   $cloneCards = $cards.cloneNode(true);
// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");
// //$cards.replaceChild($newCard, $cards.children[2]);
// //$cards.removeChild($cards.lastElementChild);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// document.body.appendChild($cloneCards); 


/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */

// .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)
// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)

// const $cards = document.querySelector(".cards"),
//   $newCard = document.createElement("figure");
// let $contenCard = `
//   <img src="https://placeimg.com/200/200/any" alt="Any">
//   <figcaption></figcaption>
// `;
// $newCard.classList.add("card");
// $newCard.insertAdjacentHTML("afterbegin", $contenCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); 

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
// $cards.after($newCard);


/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.
Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).
https://developer.mozilla.org/en-US/docs/Web/Events
*/
/* function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}
function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}
const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semántico");
  console.log(e);
  console.log(event);
};
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Jon");
});
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick); */


//FLUJO DE EVENTOS


// Flujo de Eventos (Burbuja y Captura):

// El método addEventListener() tiene un tercer párametro que puede ser de tipo boolean, si no se especifica, el valor por defecto es false.

// Si el parámetro es false se ejecuta la fase de burbuja (ir del elemento más interno al más externo):
// Si el parámetro es true se ejecuta la fase de captura (ir del elemento más externo al más interno).

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");
// const $body = document.querySelector(".body")



// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
// }


//$body.addEventListener("click",flujoEventos) // LA PROPAGACION ACTIVARA EL EVENTO A LOS DECEDIENTES QUE TENGAS ASIGNADO EL MISMO AVENTO APARTIR DE DONDE SE ACTIVE(en el caso de la burbuja) 
                                            // Y EN EL CASO DE CAPTURA A LOS HIJOS DE LOS HIJOS DE SUS HIJOS QUE TENGAN EL MISMO EVENTO
// console.log($divsEventos);

//$divsEventos.forEach((div) => {
  //Fase de burbuja
 // div.addEventListener("click", flujoEventos);
// div.addEventListener("click", flujoEventos, false);
// Fase de captura
//  div.addEventListener("click", flujoEventos, true);
//  div.addEventListener("click", flujoEventos, {
//     capture: false, // false=burbuja ,true=capura
//     once: true, // ejecutar sola una vez el manejedor de de eventos
//   });
//});

//stopPropagation & preventDefault:

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//   $linkEventos = document.querySelector(".eventos-flujo a");

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
//   );
//   e.stopPropagation(); //EL QUE TENGA EL STOP NO DETONARA NADA PERO SI DENTRO DE EL HAY OTRO EVENTO CLICK DETONORA POR LO MISMO HAY QUE ASIGNARLO A TODOS LOS QUE TENGA EL MISMO EL EVENTO(CLICK)
// }

// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//   //Fase de burbuja
//   div.addEventListener("click", flujoEventos);
//   //div.addEventListener("click", flujoEventos, false);
//   //Fase de captura
//   //div.addEventListener("click", flujoEventos, true);
//   //div.addEventListener("click", flujoEventos, {
//   //capture: false,
//   //once: true,
//   //});
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital... Jonathan MirCha"); // programar lo que vaya hacer antes de detener lo wue haga por defecto el elemento
//   e.preventDefault(); //EVITARA QUE EL ELEMENTO HAGA LO QUE NORMALMENTE POR DEFAULT
//   e.stopPropagation(); //EL QUE TENGA EL STOP NO DETONARA NADA PERO SI DENTRO DE EL HAY OTRO EVENTO CLICK DETONORA POR LO MISMO HAY QUE ASIGNARLO A TODOS LOS QUE TENGA EL MISMO EL EVENTO(CLICK)
// });


//Delegación de Eventos:

// function flujoEventos(e) {
//   console.log(
//     `Hola te saluda ${this} el click lo originó ${e.target.className}`
//   );
//   //e.stopPropagation();
// }

// document.addEventListener("click", (e) => {
//   console.log(e.target) // IMPRIMIRA TODOS CUALQUIER ELEMENTO AL QUE LE DE CLICK YA QUE ASIGNE EL EVENTO AL CLICK
//   if (e.target.matches(".eventos-flujo div")) { // VALIDA SI EL EVENTO QUE LO ORIGINO PERTENECE AL SELECTOR CSS (EN ESTE CASO A CUALQUIER DE TODAS LAS DIV EN .eventos-flujo)
//     flujoEventos(e);
//   }

//   if (e.target.matches(".eventos-flujo a")) {
//     alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
//     e.preventDefault();
//     //e.stopPropagation();
//   }
// });




//Propiedades y Eventos del BOM:

// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("********** Evento Resize **********");

//  //VIEWPORT LO QUE VEMOS
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);

//   //VENTANA -CHROM

//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("********** Evento Scroll **********");
//   // X:ORIZONTAL,Y:VERTICAL
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
//   console.log("********** Evento Load **********");
//   //LEFT Y TOP

//   //a cuantos px de distancia esta el window respecto a su contenedor(pantalla de la compu)//(cuantos pixeles a su derecha del contendedor)
//   console.log(window.screenX);
//   //a cuantos px de distancia esta el window respecto a su contenedor(pantalla de la compu)//(cuantos pixeles a arriba del contendedor)
//   console.log(window.screenY);

//   console.log(e);
// });


//LO MISMO QUE laod pero mas rapido debido a que se dispara antes de cargar todo

//  document.addEventListener("DOMContentLoaded", (e) => {
//    console.log("********** Evento DOMContentLoaded **********");
//    console.log(window.screenX);
//    console.log(window.screenY);
//    console.log(e);
//  });

// Métodos del BOM:

// window.alert("Alerta");
// window.confirm("Confirmación");
// window.prompt("Aviso");

// const $btnAbrir = document.getElementById("abrir-ventana"),
//   $btnCerrar = document.getElementById("cerrar-ventana"),
//   $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click",
//   // guardar referencia
//   (e) => (ventana = window.open("https://jonmircha.com")) //en nueva ventana;

// $btnCerrar.addEventListener("click", (e) => {
//   //window.close();
//   ventana.close();
// });

// $btnImprimir.addEventListener("click", (e) => window.print()); // opciones de acceder a impresion o guardar pdf de ventana


//Objetos: URL, Historial y Navegador:

// console.log("********** Objeto URL (location) **********");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);
// //location.reload();

// console.log("********** Objeto Historial (history) **********");
// console.log(history);
// console.log(history.length); // lobgitud de paginas visitadas
// //history.forward(1); // hacia alante
// //history.back(2);  hacia atras
// //history.go(-3); // signo - : hacia atras signo positivo(ejem 2) hacia alente

// console.log("********** Objeto Navegador (navigator) **********");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);

//const $temlate = document.querySelector("#template-card").content, // content solo para template
//     $frag = document.createDocumentFragment(),
//     $cards = document.querySelector(".cards"),
//     $sets = [
//         {
//             tittle:"animals",
//             src:"https://placeimg.com/200/200/animals"
//         },
//         {
//             tittle:"tech",
//             src:"https://placeimg.com/200/200/tech"
//         }


//     ]



// console.log($temlate.querySelector("img"))

// $sets.forEach(element => {


//     $temlate.querySelector("img").src = element.src
//     $temlate.querySelector("img").setAttribute("alt",element.tittle);
//     $temlate.querySelector("figcaption").textContent = element.tittle;

//     let clone = document.importNode($temlate, true);
//     console.log(clone.querySelector("img"));
//     $frag.appendChild(clone.querySelector("img"));
//     $frag.appendChild(clone.querySelector("figcaption"));


// });
// console.log($frag)

// $cards.appendChild($frag)

// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);

// PRUEBA DEL PORQUE SE IMPRIMERE SOLO Windows NT Y NO TODA LA CADENA COMPLETA

// let agent = navigator.userAgent
// objagent = {
//   ag:() => agent.match(/Windows NT/i),
//   any:function () {
//     return this.ag() || false
//   }
// }
// console.log(objagent.any())
// console.log(`${objagent.any()}`) // EL ${} HACE QUE ACCEDA SOLO AL CONTENTENIDO PRINCIPAL DE LA COLECCION QUE SE LE PASE
// console.log(`${[H="HOLA",O="O"]}`)



//elemento.elemento solo funciona con forms, con cualquier otro con la notacion de punto selecciona atributos del mismo elemento en cuestion(/elemento.atributo)
// console.log(document.querySelector(".caja").texto)