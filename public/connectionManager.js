var config = require('../config');

function get_requestObject(){
    // return request object according to browser
    if( window.XMLHttpRequest)
        return new XMLHttpRequest();
    else // window.ActiveXObject
        return new ActiveXObject("Microsoft.XMLHTTP");
};

function request_to_server( _path, _data, _type, _handlerFunction){
    httpRequest = connectionManager.get_request_object();

    if (!httpRequest){/
        alert('Cannot request to server...');
        return false;
    }

    httpRequest.onreadystatechange = _handlerFunction;
    httpRequest.open(_type, config.SERVER_HOST + config.SERVER_PORT + _path);
    if( _type == 'POST' || _type == 'post'){
        httpRequest.setRequestHeader('Content-type', 'application/json');
        httpRequest.send( _data);
    }
    else
        httpRequest.send();
};