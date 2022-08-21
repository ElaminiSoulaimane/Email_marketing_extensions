function _sendEvent(name, data, response) {
    chrome.runtime.sendMessage({eventName: name, eventData: data}, response);
}

var initCallbacks = [];

function _onInit(callback) {
    initCallbacks.push(callback);
}

function init() {
    console.log('init');
    
    $.getJSON('../manifest.json', function(manifest) {
        $('#version').html(manifest.version);
    });
    initCallbacks.forEach(function (c) {
        c();
    });
};

$(init);