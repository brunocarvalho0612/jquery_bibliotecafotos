$(document).ready(function(){
  $('header button').click(function(e){
    $('form').slideDown()
  })
  $('#button-cancel').click(function(e){
    $('form').slideUp()
  })


  $('form').on('submit', function(e){
    e.preventDefault()
    const enderecoNovaImagem = $('#endereco-imagem-nova').val()
    const novoItem = $('<li style="display: none"></li>')
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
    $(`
      <div class="overlay-img-link">
        <a href="${enderecoNovaImagem}" target="_blank">Veja a foto em tamanho real</a>
      </div>
      `).appendTo(novoItem)
      $(novoItem).appendTo('ul')
      $(novoItem).fadeIn(1000)
      $('#endereco-imagem-nova').val('')
  })
})