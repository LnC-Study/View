var config = require('../config');

function request_to_server(_path, _data, _type){
    $.ajax({
        url: config.SERVER_HOST + config.SERVER_PORT + _path,
        data: _data,
        type: _type
    })
        .done(function(_data){
            return _data;
        })
        .fail(function(){
            alert('요청에 실패하였습니다. 다시 시도해주세요.');
        });
}