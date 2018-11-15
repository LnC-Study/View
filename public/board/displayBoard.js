function displayBoard(cardId)
{
    var notice = document.getElementById('notice');
    var freetalk = document.getElementById('freetalk');

    if(notice.className.includes('show'))
        if(notice.id != cardId)
            notice.classList.remove('show');
    else
        if(notice.id == cardId)
            notice.classList.remove('hide');

    if(freetalk.className.includes('show'))
        if(freetalk.id != cardId)
            freetalk.classList.remove('show');
    else
        if(freetalk.id == cardId)
            freetalk.classList.remove('hide');

    return true;
}