    /* функция добавления ведущих нулей */
    /* (если число меньше десяти, перед числом добавляем ноль) */
    function zero_first_format(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }
    /* функция получения текущей даты и времени */
    function current_date() {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth() + 1);
        var year = current_datetime.getFullYear();
        return year + "-" + month + "-" + day;
    }

    /* функция получения текущей даты и времени + 50 лет*/
    function current_date_plus_50() {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth() + 1);
        var year = current_datetime.getFullYear() + 50;
        return year + "-" + month + "-" + day;
    }

    /* функция получения текущей даты и времени - 50 лет*/
    function current_date_minus_50() {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth() + 1);
        var year = current_datetime.getFullYear() - 50;        
        return year + "-" + month + "-" + day;
    }
    var nameInputDebt = document.getElementsByClassName('dateDebt');
    nameInputDebt[0].min = current_date();
    nameInputDebt[0].max = current_date_plus_50();
    var nameInputOffer = document.getElementsByClassName('dateOffer');
    nameInputOffer[0].min = current_date();
    nameInputOffer[0].max = current_date_plus_50();
    var nameInputStartDebt = document.getElementsByClassName('startDateDebt');
    nameInputStartDebt[0].min = current_date_minus_50();
    nameInputStartDebt[0].max = current_date();
    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
// document.getElementById('current_date_time_block').innerHTML = date_time();