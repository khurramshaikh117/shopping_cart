<!DOCTYPE html>
<html>
<head>
  <title>Shopping Cart</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <main class="page">
    <section class="shopping-cart dark">
      <div class="container">
            <div class="block-heading">
              <h1>Item List</h1>
            </div>
            <div class="content">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="items" id="itemList">
               
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="summary">
                <h3>Summary ( € )</h3> 
                <div class="summary-item"><span class="text">Subtotal</span><span class="price price_subtotal">0.00</span></div>
                <div class="summary-item"><span class="text">Discount</span><span class="price price_discount">0.00</span></div>
                <div class="summary-item"><span class="text">Shipping</span><span class="price price_shipping">0.00</span></div>
                <div class="summary-item"><span class="text">Total</span><span class="price price_total">0.00</span></div>
                <button type="button" class="btn btn-primary btn-lg btn-block" id="checkout">Checkout</button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  </main>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>
