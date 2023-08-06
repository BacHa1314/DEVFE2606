var listData = [
    {
        id : 1,
        tinh_tp : "Hà Nội",
        quan : [{
            id : 1,
            ten_quan: "Đống Đa",
            phuong: ["Ngã Tư Sở", "Láng Hạ", "Phương Mai"]
        },{
            id : 2,
            ten_quan: "Thanh Xuân",
            phuong: ["Phương Liệt", "Khương Đình", "Nhân Chính"]
        },{
            id : 3,
            ten_quan: "Hoàn Kiếm",
            phuong: ["Hàng Trống", "Đồng Xuân", "Chương Dương"]
        }]
    },
    {
        id : 2,
        tinh_tp : "Đà Nẵng",
        quan : [{
            id : 1,
            ten_quan: "Hải Châu",
            phuong: ["Bình Hiên", "Bình Châu",  "Thanh Bình"]
        },{
            id : 2,
            ten_quan: "Thanh Khê",
            phuong: ["An Khê","Chính Gián", "Khê Đông"]
        },{
            id : 3,
            ten_quan: "Cẩm Lệ",
            phuong: ["Hòa An", "Hòa Phát", "Khuê Trung"]
        }]
    },
    {
        id : 3,
        tinh_tp : "Hải Phòng",
        quan : [{
            id : 1,
            ten_quan: "Hồng Bàng",
            phuong: ["Hạ Lý", "Hoàng Văn Thụ", "Minh Khai"]
        },{
            id : 2,
            ten_quan: "Ngô Quyền",
            phuong: ["Cầu Đất", "Cầu Tre", "Đông Khê"]
        },{
            id : 3,
            ten_quan: "Đồ Sơn",
            phuong: ["Bàng La", "Hải Sơn", "Hợp Đức"]
        }]
    }
];

function findAddress(address){
    for(var i = 0; i < listData.length; i++){
        var listCity = listData[i];
        for(j = 0; j < listCity.quan.length; j++){
            var quan = listCity.quan[j];
            if(quan.phuong.includes(address)){
                console.log("Quận: ", quan.ten_quan);
                console.log("Thành Phố: ", listCity.tinh_tp);
                console.log("Phường: ", address);
                return;
            }
        }
    }
    console.log("Không tìm thấy thông tin phường tương ứng", address);
}

findAddress("Bàng Lai");

// var listData = [
//     {
//         tinh_tp : "Hà Nội",
//         quan : [{
//             ten_quan: "Đống Đa",
//             phuong: ["Ngã Tư Sở", "Láng Hạ", "Phương Mai"]
//         },{
//             ten_quan: "Thanh Xuân",
//             phuong: ["Phương Liệt", "Khương Đình", "Nhân Chính"]
//         },{
//             ten_quan: "Hoàn Kiếm",
//             phuong: ["Hàng Trống", "Đồng Xuân", "Chương Dương"]
//         }]
//     },
//     {
//         tinh_tp : "Đà Nẵng",
//         quan : [{
//             ten_quan: "Hải Châu",
//             phuong: ["Bình Hiên", "Bình Châu",  "Thanh Bình"]
//         },{
//             ten_quan: "Thanh Khê",
//             phuong: ["An Khê","Chính Gián", "Khê Đông"]
//         },{
//             ten_quan: "Cẩm Lệ",
//             phuong: ["Hòa An", "Hòa Phát", "Khuê Trung"]
//         }]
//     },
//     {
//         tinh_tp : "Hải Phòng",
//         quan : [{
//             ten_quan: "Hồng Bàng",
//             phuong: ["Hạ Lý", "Hoàng Văn Thụ", "Minh Khai"]
//         },{
//             ten_quan: "Ngô Quyền",
//             phuong: ["Cầu Đất", "Cầu Tre", "Đông Khê"]
//         },{
//             ten_quan: "Đồ Sơn",
//             phuong: ["Bàng La", "Hải Sơn", "Hợp Đức"]
//         }]
//     }
// ];

var listTemp = [];
var objTemp = {};
objTemp.tinh_tp = " ";
objTemp.ten_quan = " ";
objTemp.phuong = " ";

for(let index = 0; index < listData.length; index++){
    objTemp.tinh_tp = listData[index].tinh_tp;
    for(let i = 0; i < listData[index].quan.length; i++){
        objTemp.ten_quan = listData[index].quan[i].ten_quan;
        for(let j = 0; j < listData[index].quan.length; i++){
            objTemp.ten_quan = listData[index].quan[i].ten_quan;

        }
    }
}