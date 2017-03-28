
$( "#loginForm" ).submit(function( event ) {
  // previne o comportamento default do botão submit
  event.preventDefault();

  $("loginError").hide();

  // obtém os dados de usuário e senha
  var $form = $( this ),
  usuario = $form.find( "input[name='email']" ).val(),
  senha = $form.find( "input[name='senha']" ).val(),
  url = $form.attr( "action" );

  // posta o form para autenticar o usuário
  var posting = $.post( url, { usuario: usuario, senha: senha } );

  // verifica a authenticação
  posting.done(function( data ) {

    if (data.id) {
      var lcdata = Storage.get('lcdata');
      lcdata.id = data.id;
      lcdata.nome = data.nome;
      lcdata.saldo = data.saldo;
      Storage.set('lcdata',data);
    }
    else {
      $("loginError").show();
    }
  });
});
