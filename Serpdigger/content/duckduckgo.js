
(function() {



var $body = $(document.body);
var EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*\s{0,2}@\s{0,2}(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\s{0,2}\.\s{0,2})+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
var runner;
var newPage = 2;
var log = new Log('duckduckgo');

function Runner(options) {
    log.i('Runner/init');
    this.options = options;
    this.lastId = -1;
    this.emails = [];
    this.stopped = true;
}

Runner.prototype.setOptions = function (options) {
    log.i('Runner/setOptions', options);
    this.options = options;
};

Runner.prototype.run = function (callback) {
    log.i('Runner/run', callback);
    
    this.stopped = false;
    
    callback = callback || function () {};
    this.start(callback);
};

Runner.prototype.start = function (originalCallback) {
    log.i('Runner/start');
    
    var _runner = this;
    var callback = function () {
        log.i('Finished');
        _runner._finish();
        originalCallback.apply(undefined, arguments);
    };
    
    window.scrollTo(0, 0);
    
    function nextPage(callback) {
        log.i('Runner/start/nextPage');
        if(_runner.stopped) {
            log.i('Stopped');
            callback(false);
            return;
        }

        var isNoResults = $('.gsc-result .gs-no-results-result').size() > 0;

        if(isNoResults) {
            log.i('Runner/start/nextPage/Finished');
            _runner._update();
            _runner._finish();
            // callback(true);
            return;
        }

        var currentPage = $('.gsc-cursor .gsc-cursor-page.gsc-cursor-current-page');

        if (currentPage.is(':last-child')) {
            log.w('Runner/start/nextPage/last page', currentPage.text());
            _runner._update();
            _runner._finish();
        } else {
            log.w('Runner/start/nextPage/next page', currentPage.text(), currentPage.next().text());
            _runner._update();
            
            setTimeout(function() {
                if (!$('.gsc-webResult').hasClass('gsc-loading-resultsRoot')) {
                    currentPage.next().click();

                    var newPageLoadingInterval = setInterval(function() {
                        if (!$('.gsc-webResult').hasClass('gsc-loading-resultsRoot')) {
                            clearInterval(newPageLoadingInterval);
                            helper(callback);
                        }
                    }, 1000);
                }
            }, 1000);
        }
    }
    
    function helper(callback) {
        log.i('Runner/start/helper');

        if (runner.stopped) { return }

        var timeout = runner.emails.length * 1.25;
        
        if (timeout < 1500) {
            timeout = 1500;
        }

        setTimeout(function() {
            log.i('Runner/start/helper/scroll');
            window.scrollTo(0, document.body.scrollHeight);

            _runner.extract();

            nextPage(function (finished) {
                log.i('Runner/start/helper/nextPage', finished);

                if(finished === true) {
                    callback();
                } else if (finished === false) {
                    callback();
                }
            });
        }, timeout);
    }
    
    helper(callback);
}

// Runner.prototype.waitForLoadFinish = function (callback) {
//     log.i('Runner/waitForLoadFinish');
    
//     function i() {
//         var results = document.getElementsByClassName('gsc-result').length;
//         var noResults = document.getElementsByClassName('gs-no-results-result').length;

//         log.i('Runner/waitForLoadFinish/i', results, noResults);
        
//         clearInterval(interval);
//         if(noResults) {
//             callback();
//         } else if (results) {
//             callback();
//         }
//     }
//     var interval = setInterval(i, 1000);
//     i();
// }

Runner.prototype.stop = function () {
    log.i('Runner/stop');
    this.stopped = true;
};

Runner.prototype.extract = function () {
    var _runner = this;
    log.i('Runner/extract', runner);
    
    $('.gsc-result').each(function () {
        var $this = $(this);
        var emails = ($this.find('.gs-snippet').text().match(EMAIL_REGEXP) || []);
        emails.forEach(function (email) {
            var emailObject = runner.options.queryObject[1].replace(/"/g, '');
            var emailParsed = email.toLowerCase().replace(/\s{1,}/gi, '');
            var emailResult = emailParsed.split(emailObject);
            
            if (emailResult[0].search('@') > -1) { return }
            
            emailResult = emailResult[0] + emailObject;

            if(!runner.options.removeDuplicates || (runner.emails.indexOf(email) === -1)) {
                runner.emails.push(emailResult);
            }
        });
    });
};

Runner.prototype._start = function () {
    log.i('Runner/_start');
};

Runner.prototype._finish = function () {
    log.i('Runner/_finish', runner.emails);

    chrome.runtime.sendMessage({
        eventName: 'runner:finish',
        eventData: {
            emails: runner.emails
        }
    });
};

Runner.prototype._update = function () {
    log.i('Runner/_update', runner.emails.length);
    
    chrome.runtime.sendMessage({
        eventName: 'runner:update',
        eventData: {
            emails: runner.emails
        }
    })
};

runner = runner || new Runner();

chrome.runtime.onMessage.addListener(function (request, sender) {
    log.i('runtime.onMessage', request, sender);
    
    if(request.eventName === 'run') {
        runner.setOptions(request.eventData);
        runner.run();
    } else if (request.eventName === 'stopped') {
        runner.stop();
    }
});

})()
