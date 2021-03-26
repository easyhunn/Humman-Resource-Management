class base {
    constructor(url) {
        this.url = url;
        
    }

    

    //load Data
    loadData() {
        
        $.ajax({
            url: this.url,
            method: "GET"
        }).done(function (res) {
            var data = res;
            
            $.each(data, function (i, item) {
             //load employees data   
                var tr = $(`<tr></tr>`);
               
                $.each($("th"), function (index, d) {
                    //load data of each employee

                    var fieldName = $(d).attr("fieldName");
                    var dataType = $(d).attr("type");
                    var dataContent = item[fieldName];
                    var td = $(`<td></td>`);

                    switch (dataType) {
                        //check type of data to format

                        case "datetime":
                            dataContent = formatDate(dataContent);
                            td.addClass("text-align-center");
                            break;
                        case "currency":
                            dataContent = formatCurrency(parseInt(dataContent));
                            td.addClass("text-align-right");
                            break;
                        default:
                            break;
                    }

                    //fix gender 1 0 to male and female
                    if (fieldName === "Gender")
                        dataContent = dataContent ? "male" : dataContent == 0 ? "female": "unDef";
                    td.append(dataContent);
                    tr.append(td);
                })
                var selectCell = $(`<td>
                            <div class="group-icon">
                                <div class="d-icon icon-pencil">
                                </div>
                                <div class="d-icon icon-duplicate">
                                </div>
                                <div class="d-icon icon-delete"></div>
                            </div>
                        </td>`);
                tr.append(selectCell);
                $("table tbody").append(tr);
            })
        }).fail(function (err) {

        })
    }
    InsertCustomer(serializedData) {
        console.log(serializedData);
        $.ajax({
            url: this.url,
            type: "post",
            data: serializedData
        });
    }
}