let classRoom = [
    "nguyễn tiến duẩn",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "đoàn Minh Tùng",
    "Hồ Sỹ Hưng",
    "Lê Trung Hiếu",
    "đoàn vua dep trai vua hoc gioi Hữu Quý"
];

// Câu 1: Tách tên và họ riêng
function splitName() {
    classRoom = classRoom.map(function (fullName) {
        let parts = fullName.split(' ');
        return { firstName: parts.pop(), lastName: parts.join(' ') };
    });

    console.log(classRoom);
}

// Câu 2: Thêm sinh viên vào vị trí bất kỳ trong mảng
function addStudent(student, position) {
    classRoom.splice(position, 0, student);
    console.log(classRoom);
}

// Câu 3: Xoá sinh viên khỏi mảng
function deleteStudent(studentName) {
    classRoom = classRoom.filter(function (name) {
        return name !== studentName;
    });

    console.log(classRoom);
}

// Câu 4: Tìm kiếm theo tên, không chứa dấu
function searchByName(name) {
    let searchResult = classRoom.filter(function (fullName) {
        return fullName.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '') === name.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    });

    console.log(searchResult);
}

// Ví dụ sử dụng các hàm
splitName(); // Câu 1
addStudent("Nguyễn Văn A", 2); // Câu 2: Thêm "Nguyễn Văn A" vào vị trí thứ 2
deleteStudent("Hồ Sỹ Hưng"); // Câu 3: Xoá "Hồ Sỹ Hưng" khỏi mảng
searchByName("Le Trung Hieu"); // Câu 4: Tìm kiếm theo tên (không chứa dấu)
