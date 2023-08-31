var mainProduct = callElement(".main_product")
var inputProductName = callElement(".add_name")
var inputProductImg = callElement(".add_img")
var inputProductButton = callElement(".add_btn")
var showPS = callElement(".main_banner_deal")
var inputPSName = callElement(".add_name_ps")
var inputPSPriceO = callElement(".add_price_ps")
var inputPSDiscount = callElement(".add_discount_ps")
var inputPSImg = callElement(".add_img_ps")
var selectPSvalue = callElement(".select_ps")
var inputProductSaleButton = callElement(".add_btn_productsale")

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
        name: "PC",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-pc.png"
    },
    {
        name: "Máy Tính Bảng",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/icon-mtb-desk.png"
    },
    {
        name: "Thiết Bị Thông Minh",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smart.png"
    },
    {
        name: "Gia Dụng",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-houseware.png"
    },
    {
        name: "Apple",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-apple-desk.png"
    },
    {
        name: "Samsung",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/destop-ic-samsung.png"
    },
    {
        name: "Đồng hồ thông minh",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-smartwatch.png"
    },
    {
        name: "Phụ kiện",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2015/img-dienthoai-desk.png"
    },
    {
        name: "Màn hình",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-screen.png"
    },
    {
        name: "Máy cũ",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/fptshop.com.vn/Uploads/images/2022/iconcate/icon-tcdm.png"
    },
];
var listProductSale = [
    {
        name: "Asus TUF Gaming FX706HC-HX579W i5 11400H",
        priceOriginal: 26490000,
        discount: 36,
        borderImg: "1",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/5/637979643267415257_asus-tuf-gaming-fx706hc-hx579w-i5-11400h-xam-1.jpg"
    },
    {
        name: "Asus Gaming ROG Strix G15 G513RW-HQ152W R9-6900HX",
        priceOriginal: 62990000,
        discount: 44,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/26/637655727924518755_asus-rog-gaming-g513-rgb4-xam-1.jpg"
    },
    {
        name: "Laptop ASUS Gaming ROG Strix G533ZS-LN036W/i9-12900H",
        priceOriginal: 79990000,
        discount: 43,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/3/638266729055599003_asus-gaming-rog-strix-g533zs-ln036w-i9-12900h-den-5.jpg"
    },
    {
        name: "Acer Nitro Gaming AN515-45-R86D R7 5800H",
        priceOriginal: 32490000,
        discount: 32,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/15/637961789064693741_acer-nitro-gaming-5-an515-45-den-1.jpg"
    },
];

inputProductButton.addEventListener('click', addProduct);

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

function addProduct() {
    var newProductName = inputProductName.value;
    var newProductImg = inputProductImg.value;

    if (newProductImg && newProductName) {
        var isCheck = false
        // Tạo biến check để kiểm tra giá trị có trùng tên hay không
        // Gọi danh sách array để kiểm tra tên các sản phẩm
        listProduct.map((item, index) => {
            //Kiểm tra tên dữ liệu
            console.log("item:", item.name)
            //So sánh tên các sản phẩm với tên dữ liệu nhập
            //Nếu giá trị nhập === với từng sản phẩm trong danh sách thì sẽ cập nhật biến isCheck
            if (newProductName === item.name) {
                isCheck = true;
            }
        })

        if (isCheck) {
            alert("san pham da ton tai")
        } else {
            var newProduct = {
                name: newProductName,
                img: newProductImg
            };

            listProduct.push(newProduct);
            showProduct();
        }
    } else {
        alert("không điền gì vào sao mà add hả ba")
    }
}

// --------ShowProduct Banner Sale-----

function showProductSale() {
    var contentProductSale = ``;
    listProductSale.map((item, index) => {
        var namePS = item.name;
        var priceOriginalPS = item.priceOriginal.toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
        });
        var discountPS = item.discount;
        var borderImgPS = item.borderImg;
        var imgPS = item.img;
        var pricePS = (Number(item.priceOriginal) * Number(discountPS) / 100);
        var finalPrice = (item.priceOriginal - pricePS).toLocaleString('vi', {
            style: 'currency',
            currency: 'VND',
        });;;

        if (borderImgPS === "1") {
            borderImgPS = "https://fptshop.com.vn/Content/v5d/sale-special/images/product-border2.png";
        } else if (borderImgPS === "2") {
            borderImgPS = "https://fptshop.com.vn/Content/v5d/sale-special/images/product-border1.png"
        } else {
            alert("chọn hot hoặc không hot đi ba")
        }

        contentProductSale += `
        <div class="mbd_card" style="background: white;">
            <div class="card_top bg-red-500">
                <div class="card_top_img bg-white" style="background-image: url(${borderImgPS}) ;">
                    <img src="${imgPS}" alt="">
                </div>
                <div class="card_top_text" style="padding-bottom: 10px;">
                    <h4 style="width: 70%; margin: 0 auto;">${namePS}</h4>
                    <h3>${finalPrice}<span class="discount_top" style="margin-left:5px">-${discountPS}%</span></h3>
                    <h5>${priceOriginalPS}</h5>
                    <p>Đã bán 0/5 suất</p>
                </div>
            </div>

            <div class="card_bottom">
                <span>MUA GIÁ SỐC</span>
                <p style="color: #156df9; font-weight: 500;">Xem sản phẩm</p>
            </div>
        </div>
        `
    });
    showPS.innerHTML = contentProductSale;
}
showProductSale();

function addProduct() {
    var newPSName = inputPSName.value;
    var newPSPriceO = inputPSPriceO.value;
    var newPSDiscount = Number(inputPSDiscount.value);
    var newPSImg = inputPSImg.value;
    var newPSBorder = selectPSvalue.value;

    if (newPSName && newPSPriceO && newPSDiscount && newPSImg && newPSBorder) {
        var isCheckPS = false
        listProductSale.map((item, index) => {
            if (newPSName === item.name) {
                isCheckPS = true;
            }
        })
        if (isCheckPS) {
            alert("Sản phẩm này có rồi ba")
        } else {
            var newProductSale = {
                name: newPSName,
                priceOriginal: Number(newPSPriceO),
                discount: newPSDiscount,
                borderImg: newPSBorder,
                img: newPSImg
            }

            listProductSale.push(newProductSale);
            showProductSale()

        }
    } else {
        alert("điền cho đầy đủ đi rồi còn thêm sản phẩm")
    }
}

inputProductSaleButton.addEventListener("click", addProduct)
