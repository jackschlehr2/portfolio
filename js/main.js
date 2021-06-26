const height = document.querySelector( '#about' ).offsetHeight
const width  = document.querySelector( '#about' ).offsetWidth
NUM_ROWS = 50
var WIDTH_CELL = Math.floor( width / NUM_ROWS )
var HEIGHT_CELL = WIDTH_CELL
var WIDTH = WIDTH_CELL.toString() + 'px'
var HEIGHT = HEIGHT_CELL.toString() + 'px'

console.log( HEIGHT )



let swiper = new Swiper( '.portfolio-container', {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: false,
        keyboard: true,
      });



function inSet( ){




}



function generateTableHead(table){
  let thead = table.createTHead();
  let row = thead.insertRow();
  for( let i = 0; i < NUM_COLS; i ++ ){
    let th = document.createElement( "th" );
    th.style.width = WIDTH
    th.style.height = HEIGHT
    let text = document.createTextNode( 1  );
    th.appendChild( text );
    row.appendChild( th );
  }
}

function generateTable(table) {
  for( let i = 0; i < NUM_ROWS; i++ )  {
    let row = table.insertRow();
    for( let j = 0; i < NUM_COLS; i++ ) {
      let cell = row.insertCell();
      cell.style.width = WIDTH
      cell.style.height = HEIGHT
      let text = document.createTextNode(1);
      cell.appendChild(text);
    }
  }
}



let table = document.querySelector("table");
// generateTableHead(table);
// generateTable(table);
