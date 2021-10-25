// função JQuery com seletor TAG
$('h1').html('Olá mundo !!!')

// seletores
// TAG
// console.log($('h1'))
// ID 
// console.log($('#exemploID'))
// exemploClasse
// console.log($('.classeItem'))

// manipulação dos elementos html
// $().attr(<atributo>, <valor>)
// console.log($('img').attr('border'))

// $('img').attr('border', '30')

// console.log($('img').attr('border'))

// $('#exemploID').attr('style', 'height: 200px; width: 200px; background-color: green;')

// console.log($('#exemploID').html())

// $('#exemploID').html('<h4> Alterando conteúdo HTML </h4>')

// console.log($('#nome').val())
// $('#nome').val('Paulo Mariano')

// console.log($('#pais').val())

// console.log($('.genero:checked').val())

// atalhos de seleção
// :first; :last; :even; :odd;
// console.log($('.exemploClasse li:odd'))

// console.log($('.interesse:checked'))

// $.each($('.interesse:checked'), function(indice, elemento){
//   console.log(indice, elemento.value)
// })

// Manipulação de CSS 
// adicionar um classe ao elemento
$('#exemploID').addClass('fonte')
// testar se existe uma classe
console.log($('#exemploID').hasClass('fonte2'))
// remover uma classe
$('#exemploID').removeClass('fonte')

 // EVENTOS 
 // $('#exemploID').click(function(){
 //   alert('Ocorreu o click na DIV')
 // })
 // $('#exemploID').dblclick(function(){
 //   alert('ocorreu o duplo clique')
 // })