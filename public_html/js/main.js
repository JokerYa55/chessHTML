/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var board = {};
function init() {

    var i;
    console.log('init');

    board['a1'] = {fig: 'lad', color: 'black'};
    board['h1'] = {fig: 'lad', color: 'black'};
    board['a8'] = {fig: 'lad', color: 'white'};
    board['h8'] = {fig: 'lad', color: 'white'};

    board['b1'] = {fig: 'kon', color: 'black'};
    board['g1'] = {fig: 'kon', color: 'black'};
    board['b8'] = {fig: 'kon', color: 'white'};
    board['g8'] = {fig: 'kon', color: 'white'};

    board['c1'] = {fig: 'of', color: 'black'};
    board['f1'] = {fig: 'of', color: 'black'};
    board['c8'] = {fig: 'of', color: 'white'};
    board['f8'] = {fig: 'of', color: 'white'};

    board['d1'] = {fig: 'ferz', color: 'black'};
    board['e1'] = {fig: 'korol', color: 'black'};
    board['d8'] = {fig: 'ferz', color: 'white'};
    board['e8'] = {fig: 'korol', color: 'white'};

    for (let item in board) {
        console.info(board[item]['color']);
        $("#" + item).html('<div class="idDiv"></div>');
        if (board[item]['color'] === 'black')
        {
            //console.info('1');
            $("#" + item + ">div").css('background', '#000');
        } else {
            //console.info('2');
            $("#" + item + ">div").css('background', 'black');
        }
    }

}

$(document).ready(
        function () {
            init();
            //console.log(board);
            $("#idChessBoard td").click(function (eventObject) {
                var keyId = eventObject.target.id + '';
            });

            var divArr = $("#idChessBoard td > div");
            //console.info(divArr);

            divArr.click(function (eventObject) {
                console.info(this);
                // var keyId = eventObject.target.id + '';
                console.group('Parent');
                console.group(eventObject);
                var parentItem = $(eventObject.target.id).parent();
                console.info(parentItem.length);
                parentItem.click();
                console.groupEnd();
            });
        }
);
