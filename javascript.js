var mainProduct = callElement(".main_product")
var listProduct = [
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Laptop",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-laptop.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Điện Thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
];

function callElement(id) {
    return document.querySelector(id)
}
// ----------Function product-----
function showProduct() {
    var contentProduct = ``;
    listProduct.map((item, index) => {
        var nameProduct = item.name;
        var imgProduct = item.img;

        contentProduct += `
        <div class="product_card">
            <div class="card_info">
                <img src="${imgProduct}"
                 alt="" style="width: 60px; height: 60px;">
                <p class="card_des">${nameProduct}</p>
            </div>
        </div>
        `
    });
    mainProduct.innerHTML = contentProduct;
}
showProduct();