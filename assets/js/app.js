var api_url        = 'api/main.php';
var selected_items = [];
var sum            = 0;
function getItemList(){

       var data  = {};
       data.type = 'get_list';
       $.ajax({
            type: "POST",
            url: api_url,
            data: data,
            //if received a response from the server
            success: function(resp) {
                var datas = JSON.parse(resp);
                if(datas.status){
                    var data = datas.data;
                    var html = '';
                    $.each(data, function (i,val) {
                        val.offer = val.offer ? val.offer : 'NA';
                        html+='<div class="product">';
                        html+='<div class="row">';
                        html+='<div class="col-md-3" style="margin: 10px;">';
                        html+='<img class="img-fluid mx-auto d-block image" src="assets/images/product.png">';
                        html+='</div>';
                        html+='<div class="col-md-8">';
                        html+='<div class="info">';
                        html+='<div class="row">';
                        html+='<div class="col-md-5 product-name">';
                        html+='<div class="product-name">';
                        html+='<a href="#">'+val.item_name+'</a>';
                        html+='<div class="product-info">';
                        html+='<div>Offer: <span class="value">'+val.offer+'</span></div>';
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';
                        html+='<div class="col-md-4 quantity">';
                        html+='<label for="quantity">Quantity:</label>';
                        html+='<input id="quantity_'+val.id+'" type="number" value ="0" class="form-control quantity-input" current_price="'+val.price+'">';
                        html+='</div>';
                        html+='<div class="col-md-3 price">';
                        html+='<span>'+val.price+' €</span>';
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';
                        html+='</div>';

                    });
                    $('#itemList').html(html);
                }
                // console.log(data);
            },

            //If there was no resonse from the server
            error: function(jqXHR, textStatus, errorThrown){

            },

            //capture the request before it was sent to server
            beforeSend: function(jqXHR, settings){

            },

            //this is called after the response or error functions are finished
            //so that we can take some action
            complete: function(jqXHR, textStatus){

            }

        }); 
}
function calcPricesWithSelectedItems(){
    $.each($('.quantity-input'), function (i,inp) {
        if(inp.value>0){
            var itemsVal;
            itemsVal  = inp.value * $(inp).attr('current_price');
            selected_items.push(itemsVal);
        }
    });
    sum = selected_items.reduce((a, b) => a + b, 0);
    // console.log(sum);
    selected_items = []; 
    $('.price_subtotal').text(sum);
    $('.price_total').text(sum);

}
$(document).ready(function(){
	getItemList();
    $(document).on('keyup','.quantity-input',function(){
        calcPricesWithSelectedItems();
        // console.log(this.value,$(this).attr('current_price'));
    });
    $('#checkout').on('click',function(){
        if(sum == 0){
            alert('Please select items to checkout first');
            return;
        }
        alert('Checkout Successful!');
        window.location.reload();
    })
});