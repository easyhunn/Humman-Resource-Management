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
        $.each(data, function (i, item) {
            var tr = $(`<tr></tr>`);
            $.each($("th"), function (index, d) {
                var filedName = $(d).attr("fieldName");
                var td = $(`<td>${item[filedName]}</td>`);
                tr.append(td);
            })
            $("table tbody").append(tr);
        })
    }).fail(function (err) {

    })
}