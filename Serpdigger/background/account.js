serpdigger.account = {
    STORAGE_KEY_USERNAME: "username",
    STORAGE_KEY_PASSWORD: "password"
};

serpdigger.account.saved = function (callback) {
    chrome.storage.local.get([serpdigger.account.STORAGE_KEY_USERNAME, serpdigger.account.STORAGE_KEY_PASSWORD], function (items) {
        callback(
            (items[serpdigger.account.STORAGE_KEY_USERNAME] && items[serpdigger.account.STORAGE_KEY_PASSWORD]) ? {
                username: items[serpdigger.account.STORAGE_KEY_USERNAME],
                password: items[serpdigger.account.STORAGE_KEY_PASSWORD]
            } : null
        );
    });
};

serpdigger.account.save = function (username, password, callback) {
    var s = {};
    s[serpdigger.account.STORAGE_KEY_USERNAME] = username;
    s[serpdigger.account.STORAGE_KEY_PASSWORD] = password;
    chrome.storage.local.set(s, function () {
        callback();
    });
};

serpdigger.account.clear = function (callback) {
    chrome.storage.local.remove([serpdigger.account.STORAGE_KEY_USERNAME, serpdigger.account.STORAGE_KEY_PASSWORD], function () {
        callback();
    });
};