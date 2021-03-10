$(document).ready(function () {
  var data = new loadEmployees("http://api.manhnv.net/api/employees");
  data.loadData();
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
