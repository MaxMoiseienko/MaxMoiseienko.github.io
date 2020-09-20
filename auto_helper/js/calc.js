//Функция для расчетов калькулятора
$(document).ready(function(){
    $('#calc').click(function(){
        var me = $(this);
        var fuel_consumption = $('input[name="fuel_consumption"]').val();
        var destination = $('input[name="destination"]').val();
        var fuel_cost = $('input[name="fuel_cost"]').val();
        var summa = $('input[name="summa"]').val();
        var currency = $('input[name="currency"]').val();
        var fuel_consumption_res = (fuel_consumption * destination)/100;
        var fuel_cost_res = Math.ceil(fuel_consumption_res * fuel_cost);
        var	destination_res = Math.round(((summa / fuel_cost) / fuel_consumption) * 100);
        if( !fuel_cost || !fuel_consumption ) destination_res=0;
        $('span.destination').text(destination);
        $('span.summa').text(summa);
        $('span.currency').text(currency);
        $('span.fuel_consumption_res').text(fuel_consumption_res);
        $('span.fuel_cost_res').text(fuel_cost_res);
        $('span.destination_res').text(destination_res);
        $('#results').show();
        $('#step2 .blue').css({'height':'430'});
        return false;
    });
    $('a.grey-select').click(function(){
        var me = $(this);
        $('.select-dialog').hide();
        var select_dialog = me.parents('.inp-area').find('.select-dialog');
        if( select_dialog.find('.select-dialog-items').children().length == 0 ) return false;
        select_dialog.toggle();
        return false;
    });
    
    $('a.grey-select').parent().has("input[readonly='']").click(function(){
        var me = $(this);
        $('.select-dialog').hide();
        var select_dialog = me.parents('.inp-area').find('.select-dialog');
        if( select_dialog.find('.select-dialog-items').children().length == 0 ) return false;
        select_dialog.toggle();
        return false;
    });
    $('.select-dialog-items div').live('click',function(){
        var me = $(this);
        var id = me.attr('rel');
        var name = me.find('span').text();
        me.parents('.select-dialog').find('.selected').removeClass('selected');
        me.addClass('selected');
        me.parents('.inp-area').find('input[type="hidden"]').val(id);
        me.parents('.inp-area').find('input[type="text"]').val(name);
        me.parents('.select-dialog').hide();
    });
    $.ajax({
        url: '/ajax.html',
        type: 'POST',
        data: {
            act: 'json-currencies-load'
        },
        dataType: 'json',
        success: function(data){
            $('#currency').empty();
              for(i=0;i<data.values.length;i++) {
                    if( data.values[i].id == 0 ) continue;
                    $('#currency').append('<div rel="'+data.values[i].id+'"><span>'+data.values[i].name+'</span></div>');
              }
          },
          complete: function(){
              currency_id = $("#step2 input[name='currency_id']").val();
              if(currency_id != "") {
                  text = $(".select-dialog-content-currency div[rel='" + currency_id + "']").text();
                  $(".select-dialog-content-currency div[rel='" + currency_id + "']").addClass("selected");
                  $("#step2 input[name='currency_id']").parent().find("input[type='text']").val(text);
              }
          }
    });
    });