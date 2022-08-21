
var log = new Log('popupRunner');

function updateNumberOfEmailsFound(n) {
    $('#collected-emails').text(n);   
}

function updateCurrentQueryNumber(n) {
    $('#current-query').text(n);
}

function updateCurrentQueryString(s) {
    $('#current-query-string').text(s);
}

function showCurrentQueryString() {
    $('#runner-status').show();
}

function hideCurrentQueryString() {
    $('#runner-status').hide();
}

function updateTotalNumberOfQueries(n) {
    $('#total-queries').text(n);
}

function showCompleteStatus() {
    $('#progress-complete-indicator').show();
    $('#progress-running, #progress-stopped-indicator').hide();
}

function hideCompleteStatus() {
    $('#progress-complete-indicator, #progress-stopped-indicator').hide();
    $('#progress-running').show();
}

function showStoppedStatus() {
    $('#progress-stopped-indicator').show();
    $('#progress-complete-indicator, #progress-running').hide();
}

function hideStoppedStatus() {
    $('#progress-stopped-indicator, #progress-complete-indicator').hide();
    $('#progress-running').show();
}

function updateButtons() {
    var current = chrome.extension.getBackgroundPage().serpdigger.runner.current;
    if(current.running) {
        $('#toggle').text('STOP').data('status', 'stop');
        $('#download').attr('disabled', true);
    } else {
        if(current.complete) {
            $('#toggle').text('START').data('status', 'start');
            $('#download').attr('disabled', false);
        } else {
            $('#toggle').text('START').data('status', 'start');
            if (current.emailsFound.length > 0) {
                $('#download').attr('disabled', false);
            } else {
                $('#download').attr('disabled', true);
            }
        }
    }
}

_onInit(function () {
    
    var runner = chrome.extension.getBackgroundPage().serpdigger.runner.current;
    updateNumberOfEmailsFound(runner.emailsFound.length);

    var currentQuery = runner.allQueries.length > 0 ? runner.currentQuery + 1 : 0;

    updateCurrentQueryNumber(currentQuery);
    updateTotalNumberOfQueries(runner.allQueries.length);
    
    if(runner.running) {
        showCurrentQueryString();
        updateCurrentQueryString(runner.allQueries[runner.currentQuery]);
    } else {
        hideCurrentQueryString();
    }
    
    
    runner.complete ? showCompleteStatus() : hideCompleteStatus();
    
    log.i('before runner : ', $('#delayInput').val(), chrome.extension.getBackgroundPage().serpdigger.runner.current.delay);
    
    $('#delayInput').on('change keyup input', function () {
        chrome.extension.getBackgroundPage().serpdigger.runner.current.delay = (parseInt($(this).val(), 10)*1000) ? (parseInt($(this).val(), 10)*1000) : 0;
    });
    
    $('#removeDuplicates').change(function () {
        chrome.extension.getBackgroundPage().serpdigger.runner.current.removeDuplicates = this.checked;
    });
        
    log.i('after runner : ', $('#delayInput').val(), chrome.extension.getBackgroundPage().serpdigger.runner.current.delay);
    
    updateButtons();
    
    $('#toggle').click(function () {
        log.i('start:', $(this).data('status'));
        if($(this).data('status') === 'stop') {
            showStoppedStatus();
            chrome.extension.getBackgroundPage().serpdigger.stop();
            $('#download').attr('disabled', false);
        }  else {
            hideStoppedStatus();
            chrome.extension.getBackgroundPage().serpdigger.run(getQueries());
        }
    });
    
    $('#download').click(function () {
        chrome.extension.getBackgroundPage().serpdigger.download();
    });
    
});