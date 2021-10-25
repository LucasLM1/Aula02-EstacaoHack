//mostrando e ocultando elementos com jquery + animações
$('#mostar').click(function(){
    $('div').show('slow') //mostra + slow para gerar uma transição
})

$('#ocultar').click(function(){
    $('div').hide(500) //oculta + tempo para gerar a ação
})


//fadeOut vs. fadeIn
$('#mostarFade').click(function(){
    $('div').fadeIn('slow') //mostra + slow para gerar uma transição
})

$('#ocultarFade').click(function(){
    $('div').fadeOut(500) //oculta + tempo para gerar a ação
})

//slideUp vs. slideDown
$('#mostarSlide').click(function(){
    $('div').slideDown('slow') //mostra + slow para gerar uma transição
})

$('#ocultarSlide').click(function(){
    $('div').slideUp(500) //oculta + tempo para gerar a ação
})


//toggle faz a alternancia
$('#mostarSlide').click(function(){
    $('div').slideDown(500) //mostra + slow para gerar uma transição
})

$('#ocultarSlide').click(function(){
    $('div').slideUp(500) //oculta + tempo para gerar a ação
})

$('#alternar').click(function(){
    $('div').slideToggle(500) //oculta + tempo para gerar a ação
})


//animação
$('#lancar').click(function(){
    $('#bola').animate({'left': '320px'}, {
        duration: 'slow',
        start:function(){console.log('animação iniciada')},
        complete:function(){
            $('#bola').animate({'left': '0'}, 2000)
            console.log('animação completa')}
    })
})