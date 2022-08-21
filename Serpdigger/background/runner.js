
var log = new Log('background');

serpdigger.runner = {
    current: {
        running: false,
        complete: false,
        stopped: false,
        tab: null,
        currentQuery: 0,
        allQueries: [],
        emailsFound: [],
        removeDuplicates: true,
        delay: 5000
    } 
};

chrome.storage.local.get('delay', function (items) {
    if((items.delay !== undefined) && (items.delay !== null)) {
        serpdigger.runner.current.delay = items.delay * 1000;
    }
})

chrome.runtime.onMessage.addListener(
    function (request, sender) {
        log.i('runtime.onMessage', request.eventName, sender);
        if(request.eventName === 'runner:update') {
            request.eventData.emails.forEach(function (email) {
                if(serpdigger.runner.current.emailsFound.indexOf(email) === -1) {
                    serpdigger.runner.current.emailsFound.push(email);
                }
            });
            
            var popup = chrome.extension.getViews({type: 'popup'})[0];
            popup && popup.updateNumberOfEmailsFound(serpdigger.runner.current.emailsFound.length);
        } else if (request.eventName === 'runner:finish') {
            var delay = (0.5 + Math.random()) * serpdigger.runner.current.delay;
            
            log.w('runtime.onMessage', serpdigger.runner.current.currentQuery);

            var currentQuery = serpdigger.runner.current.currentQuery;
            var allQueries = serpdigger.runner.current.allQueries;

            if(currentQuery + 1 >= allQueries.length) {
                _onRunnerFinish();
                return;
            }

            serpdigger.runner.current.currentQuery++;
            
            setTimeout(_nextRunner, delay);
        } else if (request.eventName === 'download') {
            serpdigger.download();
        }
    }
)

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // log.w('onUpdated', tabId, changeInfo, tab);
        
    if(!serpdigger.runner.current.running) return;
    if(tabId != serpdigger.runner.current.tab.id) return;
    // if(changeInfo.status != 'complete') return;

    if (tab.status === 'complete') {
        var current = serpdigger.runner.current;
        chrome.tabs.sendMessage(tabId, {
            eventName: 'run',
            eventData: {
                removeDuplicates: current.removeDuplicates,
                delay: current.currentQueryDelay,
                foundEmails: current.emailsFound.length,
                queryNumber: current.currentQuery + 1,
                totalQueries: current.allQueries.length,
                queryString: current.allQueries[current.currentQuery],
                queryObject: current.queries[current.currentQuery]
            }
        });

        var popup = chrome.extension.getViews({type: 'popup'})[0];
        if(popup) {
            popup.updateTotalNumberOfQueries(serpdigger.runner.current.allQueries.length);
            popup.updateCurrentQueryNumber(serpdigger.runner.current.currentQuery + 1);
            popup.updateCurrentQueryString(serpdigger.runner.current.allQueries[serpdigger.runner.current.currentQuery]);
            popup.updateButtons();
        }
    }
})

function _nextRunner() {
    var currentQuery = serpdigger.runner.current.currentQuery;
    var allQueries = serpdigger.runner.current.allQueries;
    log.i('_nextRunner()', currentQuery, allQueries.length);

    if(serpdigger.runner.current.stopped) {
        return;
    }

    chrome.storage.local.get('cse', function (items) {

        var url = items.cse;
        if (!url) { return }

        url += '&q=' + encodeURIComponent(allQueries[currentQuery]) + '&ia=web';

        log.i('_nextRunner()', url);

        chrome.tabs.update(serpdigger.runner.current.tab.id, {
            url: url
        });
    });
}

function _onRunnerStopped() {
    log.i('_onRunnerStopped()');
    serpdigger.runner.current.stopped = true;
    serpdigger.runner.current.running = false;
    serpdigger.runner.current.complete = false;
    var popup = chrome.extension.getViews({type: 'popup'})[0];
    if(popup) {
        popup.updateButtons();
    }
    chrome.tabs.sendMessage(serpdigger.runner.current.tab.id, {
        eventName: 'stopped'
    });
    serpdigger.runner.current.tab = null;
}

function _onRunnerFinish() {
    log.i('_onRunnerFinish()');
    serpdigger.runner.current.running = false;
    serpdigger.runner.current.complete = true;
    var popup = chrome.extension.getViews({type: 'popup'})[0];
    if(popup) {
        popup.hideCurrentQueryString();
        popup.showCompleteStatus();
        popup.updateButtons();
    }
    serpdigger.runner.current.tab = null;
};

serpdigger.run = function (queries) {
    log.i('run', queries);

    serpdigger.runner.current.running = true;
    serpdigger.runner.current.complete = false;
    serpdigger.runner.current.stopped = false;
    serpdigger.runner.current.currentQuery = 0;
    serpdigger.runner.current.allQueries = queries.str;
    serpdigger.runner.current.queries = queries.obj;
    serpdigger.runner.current.emailsFound = [];

    var popup = chrome.extension.getViews({type: 'popup'})[0];

    log.i('run', !!popup);

    if(popup) {
        popup.updateNumberOfEmailsFound(0);
        popup.updateTotalNumberOfQueries(queries.length);
        popup.updateCurrentQueryNumber(1);
        popup.updateCurrentQueryString(queries[0]);
        popup.showCurrentQueryString();
        popup.hideCompleteStatus();
        popup.updateButtons();
    }

    chrome.tabs.query({active: true}, function (tabs) {
        serpdigger.runner.current.tab = tabs[0];
        _nextRunner();
    });
};

serpdigger.stop = function () {
    _onRunnerStopped();
};

serpdigger.download = function () {
    var date = new Date;
    var dateString = (date.getDate()) + '-' + (date.getMonth()+1) + '-' + (date.getFullYear());
    var timeString = date.getHours() + '-' + date.getMinutes();
    var emails = serpdigger.runner.current.emailsFound
    emails = serpdigger.paid ? emails : emails
    chrome.downloads.download({
        url: 'data:text/plain;base64,' + btoa(emails.join("\r\n")),
        filename: 'serpdigger_'+dateString+'_'+timeString+'.txt',
        saveAs: true
    });
};