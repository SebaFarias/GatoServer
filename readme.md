# GatoServer

REST API to handle online Tic*tac*toe matchs

## API To-Dos

* [x] Connection:
  * [x] Create a Match
  * [x] Join to a created Match
  * [x] Disconnect from a created Match
    * [x] Disconnect from my created Match and change host to the guest
    * [x] Disconnect from my created Match and close Match

* [x] Moves:
  * [x] Send a move
  * [x] listen to other player's move
  * [x] Clean the Board
  * [ ] Request a new game
  * [ ] Request a marks change

  [ ] Seguir el recorrido de los waiting
  [ ] Eliminar los playing
  [ ] Si un jugador pide el reinicio de tablero, solo dejarlo en espera: waiting = el id q viene en el body
  [ ] Reiniciar el tablero cuando un jugador lo pide y waiting != '', setear el waiting en ''


Http requets Codes:
https://www.restapitutorial.com/httpstatuscodes.html

Project Structure based on:
https://www.youtube.com/watch?v=lV7mxivGX_I

Handle disconnect:
Research the Window.onbeforeunload propety

