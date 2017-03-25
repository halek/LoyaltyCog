
$( "#loginForm" ).submit(function( event ) {

  // Stop form from submitting normally
  event.preventDefault();

  // Get some values from elements on the page:
  var $form = $( this ),
    usuario = $form.find( "input[name='email']" ).val(),
    senha = $form.find( "input[name='senha']" ).val(),
    url = $form.attr( "action" );

  // Send the data using post
  var posting = $.post( url, { usuario: usuario, senha: senha } );

  // Put the results in a div
  posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    //$( "#result" ).empty().append( content );
    console.log(data);
  });
});
