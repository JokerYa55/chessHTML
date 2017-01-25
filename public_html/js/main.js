/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var board = {};

var selectBoxID = '';

var selectDivID = '';
var dataSource;

var figureItem = {};

function initDB() {
    // Проверить на поддержку объекта localStorage
    if (!window.localStorage) {
        console.log('Браузер не поддерживает localStorage!');
    }
    return window.localStorage;
}

function newFigure(id, pos, type, color) {
    var Item = new Object();
    Item.id = id;
    Item.pos = pos;
    Item.type = type;
    Item.color = color;
    Item.onClick = function () {
        console.log(this);
    }
    return Item;
}

function initFigure() {
    //Заполняем массив фигур объектами

    var fList = [];
    var item = {};

    item = newFigure('1', 'a1', 'lad', 'white');
    fList.push(item);
    item = newFigure('2', 'h1', 'lad', 'white');
    fList.push(item);
    item = newFigure('3', 'a8', 'lad', 'black');
    fList.push(item);
    item = newFigure('4', 'h8', 'lad', 'black');
    fList.push(item);

    item = newFigure('5', 'b1', 'kon', 'white');
    fList.push(item);
    item = newFigure('6', 'g1', 'kon', 'white');
    fList.push(item);
    item = newFigure('7', 'b8', 'kon', 'black');
    fList.push(item);
    item = newFigure('8', 'g8', 'kon', 'black');
    fList.push(item);

    item = newFigure('9', 'c1', 'of', 'white');
    fList.push(item);
    item = newFigure('10', 'f1', 'of', 'white');
    fList.push(item);
    item = newFigure('11', 'c8', 'of', 'black');
    fList.push(item);
    item = newFigure('12', 'f8', 'of', 'black');
    fList.push(item);

    item = newFigure('13', 'd1', 'ferz', 'white');
    fList.push(item);
    item = newFigure('14', 'e1', 'korol', 'white');
    fList.push(item);
    item = newFigure('15', 'd8', 'ferz', 'black');
    fList.push(item);
    item = newFigure('16', 'e8', 'korol', 'black');
    fList.push(item);

    return fList;
}

function init() {


    var i;

    console.log('init');


    var List = initFigure();
    //console.log(List);

    for (i = 0; i < List.length; i++) {
        //console.log(List[i].pos);

        var boardItem = $('#' + List[i].pos);
        //console.info(boardItem);

        boardItem.data(List[i]);

        var divID = "idDiv_" + List[i].id;
        var divItem = $('#' + divID);

        boardItem.html('<div id="' + divID + '" class="idDiv"></div>');

        $('#' + divID).data(List[i]);

        if (List[i].color === 'black') {
            $('#' + divID).css({'background': '#fff', 'border': '2px solid #000'});
        } else {
            $('#' + divID).css({'background': '#000', 'border': '2px solid #fff'});
        }
    }

}

$(document).ready(
        function () {
            init();


            $("#idChessBoard td").click(function (eventObject) {
                console.log('TD click ');

                var keyID = eventObject.target.id + '';

                var parentItem = $('#' + keyID).parent().filter('td');

                console.log(parentItem.length);
                if (parentItem.length !== 0) {
                    selectBoxID = parentItem.attr('id');
                    selectDivID = keyID;
                } else {
                    selectBoxID = keyID;
                }


                $('#' + selectBoxID).append($('#' + selectDivID));

                var dataDiv = $('#' + selectDivID).data();
                dataDiv.pos = selectBoxID;
                $('#' + selectDivID).data(dataDiv);

                console.info($('#' + selectDivID).data());
                console.info('selectDivID = ' + selectDivID);
                console.info('selectBoxID = ' + selectBoxID);

                return false;
            });


        }
);
