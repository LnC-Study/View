function showWriteFreetalkForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeFreetalk');

    $(writeForm).collapse('show');
    $(board).collapse('hide');

    return true;
}

function hideWriteFreetalkForm(boardId)
{
    var board = document.getElementById(boardId);
    var writeForm = document.getElementById('writeFreetalk');

    $(board).collapse('show');
    $(writeForm).collapse('hide');

    return true;
}