$(document).ready(function () {
    loadData();
})

//load employee data

function loadData() {
    $.ajax({
        url: "http://api.manhnv.net/api/employees",
        method: "GET"
    }).done(function (res) {
        data = res;
        $.each(data, function (item, index) {
            var tr = $(`<tr>
                            <td>${item.EmployeeId}</td>
                            <td>Vũ Mạnh Hùng</td>
                            <td>Nam</td>
                            <td>04/10/2000</td>
                            <td>V.I.P</td>
                            <td>0359732866</td>
                            <td>Hungvugl123@gmail.com</td>
                            <td>Hải Dương</td>
                            <td>0đ</td>
                            <td>12345678</td>
                        </tr>`);
            $("table tbody").append(tr);
        })
    }).fail(function (err) {

    })
}