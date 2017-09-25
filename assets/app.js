$(function() {
    miasta = "";
    $("#wykresTemperatury").hide();
    $("#wykresCisnienia").hide();

    $('input, select').on('change', function(event) {
        var $element = $(event.target),
            $container = $element.closest('.example');

        if (!$element.data('tagsinput'))
            return;

        var val = $element.val();
        if (val === null)
            val = "null";
        $('code', $('pre.val', $container)).html(($.isArray(val) ? JSON.stringify(val) : "\"" + val.replace('"', '\\"') + "\""));
        $('code', $('pre.items', $container)).html(JSON.stringify($element.tagsinput('items')));
        miasta = $element.val();
        console.log(miasta)


    }).trigger('change');




    $("#generuj").on('click', function(event) {

        $("#temperatura").attr('src', 'http://127.0.0.1:3000/temperaturePlot?cities=' + miasta);
        $("#cisnienie").attr('src', 'http://127.0.0.1:3000/pressurePlot?cities=' + miasta);
        $('#miastaTekst span').text(miasta.replace(/,/g, ", "));


        if ($("#tempSwitchOptionSuccess").is(":checked")) {
            $("#wykresTemperatury").show();
            console.log("checked")
        } else {
            console.log("unchecked");
            $("#wykresTemperatury").hide();
        }



        if ($("#pressureSwitchOptionInfo").is(":checked")) {
            $("#wykresCisnienia").show();
            console.log("checked")
        } else {
            console.log("unchecked");
            $("#wykresCisnienia").hide();
        }

        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');


    })

});