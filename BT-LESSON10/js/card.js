var listProduct = [
    {
        id : 1,
        title : "Sản phẩm 1",
        price : 2000000,
        priceView : "2.000.000",
        quantity : 1,
        img : "",
        limit: 5,
    },
]

function sumPrice(){
    var sum = 0 ;
    var price = 0;
    var quantity =0;
    var total = 0;

    for(let i =1 ; i <= 2; i++){
        // array[i-1]
        price = $('#product-price-' + i).attr("data-price");
        quantity = $('#product-quantity-'  + i).text();
        total = parseInt(price) * parseInt(quantity);
        sum = sum + total;
    }
    $('.total-price').text(sum);
}
function sumProduct(){
    var quantity = 0;
    var total = 0;
    let i = 0;
    for(i = 1; i <= 2; i++){
        quantity = $('#product-quantity-' + i).text();
        total = total + parseInt(quantity);
    }
    if( total > 10){
        alert('Số lượng sản phẩm đạt giới hạn, vui lòng bớt một vài sản phẩm trong giỏ hàng');
    }
    $('.total-products').text(total);
}

$('.add-1').click(function(){
    var quantity = $(this).siblings('span').text();
    quantity = parseInt(quantity) + 1;
    $(this).siblings('span').text(quantity);
    sumPrice();
    sumProduct();
})
$('.sub-1').click(function(){
    var quantity = $(this).siblings('span').text(); // quantity = 0
    quantity = (parseInt(quantity) < 1) ? 0 : (parseInt(quantity) - 1) ;
    $(this).siblings('span').text(quantity);
    sumPrice();
    sumProduct();
})

function removeProduct(productId) {
    $('#product-' + productId).remove();
    products = listProduct.filter(function(p) {
      return p.id != productId;
    });
    sumPrice();
  }

// btvn: xây dựng giỏ hàng dựa theo data có sẵn
// chức năng: tính tổng sp, tăng giảm số lượng theo từng sản phẩm được
//            chặn trên (không được thêm quá số lượng sp limit)
//            khi hiển thị tổng tiền: format giá về dạng 1.000; 2.000.000
//            xóa sản phẩm khỏi giỏ hàng: gợi ý dùng hàm removeHtml()
//            *) đảm bảo sau khi tính tiền thì giá phải khớp với 
                //giao diện hiện tại
