function dangSanPham(){

let ten = document.getElementById("ten").value;
let gia = document.getElementById("gia").value;
let mota = document.getElementById("mota").value;
let sdt = document.getElementById("sdt").value;

let sp = {
ten:ten,
gia:gia,
mota:mota,
sdt:sdt
};

let ds = JSON.parse(localStorage.getItem("sanpham")) || [];

ds.push(sp);

localStorage.setItem("sanpham",JSON.stringify(ds));

alert("Đăng sản phẩm thành công");

}

function hienSanPham(){

let ds = JSON.parse(localStorage.getItem("sanpham")) || [];

let html="";

ds.forEach(function(sp){

html += `
<div class="product">
<h3>${sp.ten}</h3>
<p>Giá: ${sp.gia}</p>
<p>${sp.mota}</p>
<p>Liên hệ: ${sp.sdt}</p>
</div>
`;

});

document.getElementById("danhsach").innerHTML = html;

}
