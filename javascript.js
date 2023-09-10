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

//-------------DOM Search
var productSearchInputValue = callElement("#main_product_search")
var productSearchBtn = callElement("#main_product_btn")
var mainBannerSearchValue = callElement("#main_banner_search")
var mainBannerSearchBtn = callElement("#main_banner_btn")

var listProduct = [
    {
        name: "iPhone X",
        img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
    },
    {
        name: "iPhone 11",
        img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg"
    },
    {
        name: "iPhone 12",
        img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg"
    },

    {
        name: "iPhone 13",
        img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/452166194.jpeg"
    },
    {
        name: "iPhone 14",
        img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png"
    },
    {
        name: "iPhone 15",
        img: "https://laptopdell.com.vn/wp-content/uploads/2023/01/iPhone-15-Plus-1.jpg"
    },
    {
        name: "Samsung Z Fold 3",
        img: "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-green-1-600x600.jpg"
    },
    {
        name: "Samsung Z Fold 4",
        img: "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg"
    },
    {
        name: "Samsung Z Fold 5",
        img: "https://thetekcoffee.com/wp-content/uploads/2023/07/samsung-galaxy-z-fold5-5g.webp"
    },

    {
        name: "Samsung Z Flip 3",
        img: "https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-violet-1-600x600.jpg"
    },
    {
        name: "Samsung Z Flip 4",
        img: "https://cdn.tgdd.vn/Products/Images/42/258047/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"
    },
    {
        name: "Samsung Z Flip 5",
        img: "https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg"
    },
];
var listProductSale = [
    {
        name: "Laptop Asus",
        priceOriginal: 26490000,
        discount: 36,
        borderImg: "1",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/5/637979643267415257_asus-tuf-gaming-fx706hc-hx579w-i5-11400h-xam-1.jpg"
    },
    {
        name: "Laptop Acer",
        priceOriginal: 62990000,
        discount: 44,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/26/637655727924518755_asus-rog-gaming-g513-rgb4-xam-1.jpg"
    },
    {
        name: "Laptop ROG",
        priceOriginal: 79990000,
        discount: 43,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/3/638266729055599003_asus-gaming-rog-strix-g533zs-ln036w-i9-12900h-den-5.jpg"
    },
    {
        name: "Laptop Nitro",
        priceOriginal: 32490000,
        discount: 32,
        borderImg: "2",
        img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/15/637961789064693741_acer-nitro-gaming-5-an515-45-den-1.jpg"
    },
];

inputProductButton.addEventListener('click', addProduct);
productSearchInputValue.addEventListener("keyup", handleSearch)
productSearchBtn.addEventListener("click", handleSearch)

mainBannerSearchValue.addEventListener("keyup", mainBannerSearch)
mainBannerSearchBtn.addEventListener("click", mainBannerSearch)

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
            // console.log("item:", item.name)
            //So sánh tên các sản phẩm với tên dữ liệu nhập
            //Nếu giá trị nhập === với từng sản phẩm trong danh sách thì sẽ cập nhật biến isCheck
            if (newProductName === item.name) {
                isCheck = true;
            }
        })

        if (isCheck) {
            alert("Sản phẩm này có rồi ba")
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
        });

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

function addProductSale() {
    var newPSName = inputPSName.value.toLowerCase();
    var newPSPriceO = inputPSPriceO.value;
    var newPSDiscount = Number(inputPSDiscount.value);
    var newPSImg = inputPSImg.value;
    var newPSBorder = selectPSvalue.value;
    var newPSNameFirstLetter = newPSName[0].toUpperCase() + newPSName.slice(1);


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
                name: newPSNameFirstLetter,
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

inputProductSaleButton.addEventListener("click", addProductSale)
//-----------Fuction Search-----
function handleSearch() {
    var searchInput = productSearchInputValue.value;
    searchInput = searchInput.replace(/\s/g, '').toLowerCase();

    var viTri = listProduct.findIndex((item, index) => {
        nameSanPhamUpdate = (item.name).replace(/\s/g, '').toLowerCase();
        if (searchInput === "iphone10") {
            searchInput = "iphonex"
        } else { }
        var find = nameSanPhamUpdate === searchInput;
        return find;
    })

    if (viTri !== -1) {
        var listProductUpdate = [];
        listProductUpdate.push(listProduct[viTri]);
        listProduct = listProductUpdate;
        showProduct();
    } else {
        listProduct = [
            {
                name: "iPhone X",
                img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
            },
            {
                name: "iPhone 11",
                img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg"
            },
            {
                name: "iPhone 12",
                img: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg"
            },

            {
                name: "iPhone 13",
                img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/452166194.jpeg"
            },
            {
                name: "iPhone 14",
                img: "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png"
            },
            {
                name: "iPhone 15",
                img: "https://laptopdell.com.vn/wp-content/uploads/2023/01/iPhone-15-Plus-1.jpg"
            },
            {
                name: "Samsung Z Fold 3",
                img: "https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-green-1-600x600.jpg"
            },
            {
                name: "Samsung Z Fold 4",
                img: "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg"
            },
            {
                name: "Samsung Z Fold 5",
                img: "https://thetekcoffee.com/wp-content/uploads/2023/07/samsung-galaxy-z-fold5-5g.webp"
            },

            {
                name: "Samsung Z Flip 3",
                img: "https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-violet-1-600x600.jpg"
            },
            {
                name: "Samsung Z Flip 4",
                img: "https://cdn.tgdd.vn/Products/Images/42/258047/samsung-galaxy-z-flip4-5g-128gb-thumb-tim-600x600.jpg"
            },
            {
                name: "Samsung Z Flip 5",
                img: "https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg"
            },
        ];
        showProduct();
    }

}
// -----------Fuction Search 2----
function mainBannerSearch() {
    var userSearch = mainBannerSearchValue.value;
    userSearch = userSearch.replace(/\s/g, '').toLowerCase();

    var mainViTri = listProductSale.findIndex((item, index) => {
        var nameMain = (item.name).replace(/\s/g, '').toLowerCase();
        var findMain = nameMain === userSearch;
        return findMain;
    })

    console.log("tìm main:", mainViTri)

    if (mainViTri !== -1) {
        var listProductSaleUpdate = [];
        listProductSaleUpdate.push(listProductSale[mainViTri]);
        listProductSale = listProductSaleUpdate;

        showProductSale()
    } else {
        listProductSale = [
            {
                name: "Laptop Asus",
                priceOriginal: 26490000,
                discount: 36,
                borderImg: "1",
                img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/9/5/637979643267415257_asus-tuf-gaming-fx706hc-hx579w-i5-11400h-xam-1.jpg"
            },
            {
                name: "Laptop Acer",
                priceOriginal: 62990000,
                discount: 44,
                borderImg: "2",
                img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/26/637655727924518755_asus-rog-gaming-g513-rgb4-xam-1.jpg"
            },
            {
                name: "Laptop ROG",
                priceOriginal: 79990000,
                discount: 43,
                borderImg: "2",
                img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/3/638266729055599003_asus-gaming-rog-strix-g533zs-ln036w-i9-12900h-den-5.jpg"
            },
            {
                name: "Laptop Nitro",
                priceOriginal: 32490000,
                discount: 32,
                borderImg: "2",
                img: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/8/15/637961789064693741_acer-nitro-gaming-5-an515-45-den-1.jpg"
            },
        ];
        showProductSale()
    }

}
// replace(/\s/g, '').toLowerCase();








