function request(_method, _params, _success, _fail){
    $.jsonRPC.request(_method, {
        params : _params,
        success: function(data){
            alert('Success!');
            _success( data);
        },
        error: function(){
            alert('Receive error response...');
            _fail();
        }
    });
}

function client_rpc_setUp(){
    $.jsonRPC.setup({
        endPoint: 'http://localhost:4000/rpc',
        namespace: ''
    })
}

$(document).ready(function(){
    $.jsonRPC.setup({
        endPoint : 'http://localhost:4000/rpc',
        namespace : ''
    });

    $('#select_box').hide();
});