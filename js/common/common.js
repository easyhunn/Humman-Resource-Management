
//format date 
function formatDate(date) {
    var d = new Date(date);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    return day + "/" + month + "/" + year; 
}

function formatCurrency(currency) {
    if (!currency) return "";
    return (currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}