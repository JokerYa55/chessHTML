/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = {};
function init() {

    var i;
    var selectBoxID = '';
    var selectDivID;
    console.log('init');

    board['a1'] = {id: '1', fig: 'lad', color: 'white'};
    board['h1'] = {id: '2', fig: 'lad', color: 'white'};
    board['a8'] = {id: '3', fig: 'lad', color: 'black'};
    board['h8'] = {id: '4', fig: 'lad', color: 'black'};

    board['b1'] = {id: '5', fig: 'kon', color: 'white'};
    board['g1'] = {id: '6', fig: 'kon', color: 'white'};
    board['b8'] = {id: '7', fig: 'kon', color: 'black'};
    board['g8'] = {id: '8', fig: 'kon', color: 'black'};

    board['c1'] = {id: '9', fig: 'of', color: 'white'};
    board['f1'] = {id: '10', fig: 'of', color: 'white'};
    board['c8'] = {id: '11', fig: 'of', color: 'black'};
    board['f8'] = {id: '12', fig: 'of', color: 'black'};

    board['d1'] = {id: '13', fig: 'ferz', color: 'white'};
    board['e1'] = {id: '14', fig: 'korol', color: 'white'};
    board['d8'] = {id: '15', fig: 'ferz', color: 'black'};
    board['e8'] = {id: '16', fig: 'korol', color: 'black'};

    for (let item in board) {
        //console.info(board[item]['color']);
        console.info(board[item]);
        $("#" + item).data(board[item]);
        var divID = "idDiv_" + board[item]['id'];
        console.info("divID = " + divID);
        $("#" + item).html('<div id="' + divID + '" class="idDiv"></div>');
        if (board[item]['color'] === 'black')
        {
            console.info('1');
            $("#" + divID).css({'background': '#fff', 'border': '2px solid #000'});
        } else {
            console.info('2');
            $("#" + divID).css({'background': '#000', 'border': '2px solid #fff'});
        }
    }

}

$(document).ready(
        function () {
            init();
            //console.log(board);
            $("#idChessBoard td").click(function (eventObject) {
                var keyId = eventObject.target.id + '';
                console.info('keyID => ' + keyId);
                selectBoxID = keyId;
                return false;
                //console.info($("#"+keyId).data());
            });

            var divArr = $("#idChessBoard td > div");
            //console.info(divArr);

            divArr.click(function (eventObject) {
                console.info(this);
                // var keyId = eventObject.target.id + '';
                //console.group('Parent');
                //console.group(eventObject.target.id);
                
                var parentItem = $("#" + eventObject.target.id).parent();
                selectDivID = eventObject.target.id;
                //console.info(parentItem);

                console.info('selectBoxId = ' + selectBoxID);
                // Возвращаем старое значение фона для ранее выделеной ячейки
                if (selectBoxID !== '')
                {
                    $('#' + selectBoxID).css({'background-color': 'blue'});
                    
                }

                parentItem.css({'background-color': 'red'});
                parentItem.trigger('click');
                console.info('selectBoxId = ' + selectBoxID);
                console.info('selectDivId = ' + selectDivID);
                
                return false;
                //console.groupEnd();
            });
        }
);
