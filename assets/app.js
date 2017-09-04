$(function() {
 miasta = "";
  $('input, select').on('change', function(event) {
    var $element = $(event.target),
      $container = $element.closest('.example');

    if (!$element.data('tagsinput'))
      return;

    var val = $element.val();
    if (val === null)
      val = "null";
    $('code', $('pre.val', $container)).html( ($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\"") );
    $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));
    miasta = $element.val();
    console.log(miasta)


  }).trigger('change');


$("#someSwitchOptionSuccess").on('change', function(event){
  if($("#someSwitchOptionSuccess").is(":checked")){
  console.log("checked")};
})

$("#generuj").on('click', function(event)
{ $("#temperatura").attr('src','http://127.0.0.1:3000/temperaturePlot?cities='+miasta);
 $('#miastaTekst span').text(miasta);

})

});     
