function showWriteNoticeForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeNotice');

    $(writeForm).collapse('show');
    $(board).collapse('hide');

    return true;
}

function hideWriteNoticeForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeNotice');

    $(board).collapse('show');
    $(writeForm).collapse('hide');

    return true;
}