//Comando para comunicación con server
var socket = io();

var label = $('#lbNuevoTicket');

socket.on('connect', function(){
    console.log('Usuario conectado')
})

socket.on('disconnect', function(){
    console.log('Usuario desconectado')
})

socket.emit('estadoActual', null, function(ultimo){
    console.log(ultimo)
    $('#lblNuevoTicket').text(ultimo.actual)
})


$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function(nextTicket){
        console.log(nextTicket)
        $('#lblNuevoTicket').text(nextTicket)
    })

})