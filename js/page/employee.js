$(document).ready(function () {
    var data = new loadEmployees("https://localhost:44364/api/customer");
    var pr = new Promise(function (res, rej) {
        data.loadData();
        
    })
    $("#delete").click(function () {
        alert("??");
    })
    //thêm mới 1 customer
    $("form").submit(function (event) {
        event.preventDefault();
        var $form = $(this);


        // Serialize the data in the form
        var serializedData = $form.serializeArray();
        var indexed_array = {};

        $.map(serializedData, function (n, i) {
            indexed_array[n['name']] = n['value'];
        });
        data.InsertCustomer(indexed_array);
    })
    
});

class loadEmployees extends base {
  constructor(url) {
    super(url);
    $(".m-dialog").hide();

    //display dialog
    $("#addEmployees").click(function () {
      $(".m-dialog").show();
    });

    //hide dialog
    $("#dialog-cancel-btn").click(function () {
      $(".m-dialog").hide();
    });

  }
}
//load employee data

//function loadData() {
//    $.ajax({
//        url: "http://api.manhnv.net/api/employees",
//        method: "GET"
//    }).done(function (res) {
//        data = res;
//        $.each(data, function (i, item) {
//            var tr = $(`<tr></tr>`);
//            $.each($("th"), function (index, d) {
//                var fieldName = $(d).attr("fieldName");
//                var dataContent = item[fieldName];
//                if (fieldName == "DateOfBirth") dataContent = formatDate(dataContent);
//                var td = $(`<td>${dataContent}</td>`);
//                tr.append(td);
//            })
//            $("table tbody").append(tr);
//        })
//    }).fail(function (err) {

//    })
//}
