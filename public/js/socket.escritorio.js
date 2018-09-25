//Comando para comunicación con server
var socket = io();
var label = $('small')
var searchParams = new URLSearchParams(window.location.search)

if(!searchParams.has('escritorio')){
    window.location = 'index.html'
    throw new Error('El escritorio es necesario')
}
socket.on('connect', function(){
    console.log('Usuario conectado')
})

socket.on('disconnect', function(){
    console.log('Usuario desconectado')
})


var escritorio = searchParams.get('escritorio')
console.log(escritorio)
$('h1').text('Escritorio ' + escritorio)

$('button').on('click', function(){
    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
        console.log(resp)

        if(resp === 'No hay tickets'){
            label.text(resp)
        }else{
            label.text(resp.numero)
        }
    })
})