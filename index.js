window.addEventListener('DOMContentLoaded', inicio, false);

    var jugador = 'X';

    function inicio() {
      for (var x = 1; x <= 9; x++) {
        document.getElementById('boton' + x).addEventListener('click', presion, false);
      }
    }

    function presion(evt) {
      evt.target.value = jugador;
      if (jugador == 'X')
        jugador = 'O';
      else
        jugador = 'X';
    }
    
    

var tateti=[];
    tateti[0]=[null, null, null];
    tateti[1]=[null, null, null];
    tateti[2]=[null, null, null];

    