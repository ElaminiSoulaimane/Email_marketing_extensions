serpdigger.api = {};

serpdigger.api.registration = {
    PAID: "paid",
    TRIAL: "trial"
};

serpdigger.api.registration.status = function (username, password, callback) {
    
    var data = {};
    data[serpdigger.config.api.registration.status.keys.username] = username;
    data[serpdigger.config.api.registration.status.keys.password] = password;
    
    $.ajax({
        url: serpdigger.config.api.registration.status.url,
        method: serpdigger.config.api.registration.status.method,
        data: data,
        headers: {"Authorization": "Basic " + btoa(serpdigger.config.api.httpuser + ":" + serpdigger.config.api.httppass)},
        success: function(data) { callback((data == "VALID|PAID") ? serpdigger.api.registration.PAID : serpdigger.api.registration.TRIAL); },
        error: function() { callback(serpdigger.api.registration.TRIAL); }
    });
    
};

serpdigger.api.footprints = {};

function _parseFootprints(str) {
    return str.split(/[\n]+/g).slice(0, -1).map(function (s) {
        var s = s.split(/\*/g);
        return {
            name: s[0],
            value: s[1]
        };
    });
}

serpdigger.api.footprints.get = function (callback) {
    $.ajax({
        url: serpdigger.config.api.footprints.url,
        method: serpdigger.config.api.footprints.method,
        cache: false,
        success: function (data) {
            callback(_parseFootprints(data));
        }
    });
};