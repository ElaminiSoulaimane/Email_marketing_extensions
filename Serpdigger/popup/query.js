
var log = new Log('query');

function storePatterns(str) {
    chrome.storage.local.set({
        patterns: str
    });
}

function storeFootprints(str) {
    chrome.storage.local.set({
        footprints: str
    });
}

function storeLocation(str) {
    chrome.storage.local.set({
        location: str
    })
}

function storeCSEAddress(str) {
    chrome.storage.local.set({
        cse: str
    })
}

function storeSecondTerms(str) {
    chrome.storage.local.set({
        secondTerms: str
    })
}

function storeDelay(n) {
    chrome.storage.local.set({
        delay: n
    });
}

function storeRemoveDuplicates(removeDuplicates) {
    chrome.storage.local.set({
        removeDuplicates: removeDuplicates
    });
}

function storeLocationExactMatch(exactMatch) {
    chrome.storage.local.set({
        locationExactMatch: exactMatch
    });
}

function storeTerm2ExactMatch(exactMatch) {
    log.i('store term 2', exactMatch);
    chrome.storage.local.set({
        term2ExactMatch: exactMatch
    });
}

function restoreDelay() {
    log.i('before restore : ', $('#delayInput').val());
    chrome.storage.local.get('delay', function (items) {
        log.i('stored : ', items.delay);
        if(((items.delay === undefined) || (items.delay === null))) {
            $('#delayInput').val(10);
            $('#delayInput').change();
            chrome.extension.getBackgroundPage().serpdigger.runner.current.delay = 10000;
        } else {
            $('#delayInput').val(items.delay);
            chrome.extension.getBackgroundPage().serpdigger.runner.current.delay = items.delay*1000;
        }
    });
}

function restoreRemoveDuplicates() {
    chrome.storage.local.get('removeDuplicates', function (items) {
        if((items.removeDuplicates === null) || (items.removeDuplicates === undefined)) {
            storeRemoveDuplicates(true);
            $('#removeDuplicates').get(0).checked = true;
        } else {
            $('#removeDuplicates').get(0).checked = items.removeDuplicates;   
        }
    });
}

function restoreLocationExactMatch() {
    chrome.storage.local.get('locationExactMatch', function (items) {
        if((items.locationExactMatch === null) || (items.locationExactMatch === undefined)) {
            storeLocationExactMatch(true);
            $('#location-exact-match-checkbox').get(0).checked = true;
        } else {
            $('#location-exact-match-checkbox').get(0).checked = items.locationExactMatch;   
        }
    });
}

function restoreTerm2ExactMatch() {
    chrome.storage.local.get('term2ExactMatch', function (items) {
        if((items.term2ExactMatch === null) || (items.term2ExactMatch === undefined)) {
            storeTerm2ExactMatch(true);
            $('#term2-exact-match-checkbox').get(0).checked = true;
        } else {
            $('#term2-exact-match-checkbox').get(0).checked = items.term2ExactMatch;   
        }
    });
}

function restoreFootprintsFromStorage() {
    chrome.storage.local.get('footprints', function (items) {
        $('#footprint-input').val(items.footprints ? items.footprints : '');
    });
}

function restorePatternsFromStorage() {
    chrome.storage.local.get('patterns', function (items) {
        $('#pattern-input').val(items.patterns ? items.patterns : '');
    });
}

function restoreLocationFromStorage() {
    chrome.storage.local.get('location', function (items) {
        $('#location-input').val(items.location ? items.location : '');
    });
}

function restoreCSEAddressFromStorage() {
    chrome.storage.local.get('cse', function (items) {
        $('#cse-address-input').val(items.cse ? items.cse : '');
    });
}

function restoreSecondTermsFromStorage() {
    chrome.storage.local.get('secondTerms', function (items) {
        $('#term2-input').val(items.secondTerms ? items.secondTerms : '');
    });
}

function cartesian() {
    var r = [], arg = arguments, max = arg.length-1;
    function helper(arr, i) {
        for (var j = 0, l = arg[i].length; j < l; j++) {
            var a = arr.slice(0);
            a.push(arg[i][j]);
            if(i === max) r.push(a);
            else helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}

function buildQueries(footprints, patterns, location, cse) {
    return cartesian(
        (footprints.length ? footprints : [null]),
        (patterns.length ? patterns : [null]),
        (location.length ? location : [null])
    );
}

function multilineSplit(str) {
    return str.split(/[\n]+/g);
}

function modifyExactMatch(exactMatch, str) {
    if(!str.trim().length) return '';
    if(exactMatch) {
        if(str.match(/"(.*)"/)) return str;
        else return '"'+str+'"';
    } else {
        return str;
    }
}

var EMAIL_PATTERN_CHECK = /^(?:[\s]+)?@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:[\s]+)?$/;

function getQueries() {
    var queries = buildQueries(
        $('#footprint-input').val().split(/[\n]+/g).filter(function (s) {return s.trim().length}),

        $('#pattern-input').val().split(/[\n]+/g).filter(function (p) {return EMAIL_PATTERN_CHECK.test(p)}).map(function (e) {return '"'+e+'"'}).map(modifyExactMatch.bind(void 0, true)),

        $('#location-input').val().split(/[\n]+/g).filter(function (s) {return s.trim().length}),

        $('#cse-address-input').val().split(/[\n]+/g).filter(function (s) {return s.trim().length})
    ).filter(function (query) {
        log.i('filter', query);
        return query.filter(function (s) {return s && s.trim().length}).length;
    });

    var queriesStr = queries.map(function (query) {
        log.i('map', query);
        return query.filter(function (s) {return s && s.trim().length}).join(' ');
    });
    
    var result = {
        str: queriesStr,
        obj: queries
    };
    return result;
}

_onInit(function () {
    
    log.i('before query : ', $('#delayInput').val());
    
    $('#pattern-input').on('change keyup', function () {
        storePatterns($(this).val());
    });
    
    $('#footprint-input').on('change keyup', function () {
        storeFootprints($(this).val());
    });
    
    $('#delayInput').on('input change keyup', function () {
        storeDelay((parseInt($(this).val(), 10)) ? (parseInt($(this).val(), 10)) : 0);
    });
    
    $('#location-input').on('change keyup', function () {
        storeLocation($(this).val());
    });
    
    $('#cse-address-input').on('change keyup', function () {
        storeCSEAddress($(this).val());
    });
    
    $('#term2-input').on('change keyup', function () {
        storeSecondTerms($(this).val());
    });
    
    $('#removeDuplicates').on('click', function () {
        storeRemoveDuplicates(this.checked);
    });
    
    $('#location-exact-match-checkbox').on('click', function () {
        storeLocationExactMatch(this.checked);
    });
    
    $('#term2-exact-match-checkbox').on('click', function () {
        storeTerm2ExactMatch(this.checked);
    });
    
    restorePatternsFromStorage();
    restoreFootprintsFromStorage();
    restoreLocationFromStorage();
    restoreCSEAddressFromStorage();
    restoreSecondTermsFromStorage();
    restoreDelay();
    restoreRemoveDuplicates();
    // restoreLocationExactMatch();
    // restoreTerm2ExactMatch();
    
    log.i('after query : ', $('#delayInput').val());
    
});