var connectionManager = require('../connectionManager');

function showWriteNoticeForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeNotice');

    $(writeForm).collapse('show');
    $(board).collapse('hide');
}

function show_write_noticeForm(){
    $("#notice").collapse('hide');
    $("#writeNotice").collapse('show');
}

function submit_notice_to_server(){
    // request to server
    $('#notice').collapse('show');
    $('#writeNotice').collapse('hide');
    connectionManager.request_to_server( _path, _data, 'post');
}

function hideWriteNoticeForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeNotice');

    $(board).collapse('show');
    $(writeForm).collapse('hide');
}