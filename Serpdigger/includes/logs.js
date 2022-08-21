
function Log(name) {
    this.enable = false;
    this.name = name;
    this.type = 'log';
}

Log.prototype.exec = function() {
    if (!this.enable) { return }
    
    var args = [this.name];
    
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }

    console[this.type].apply(null, args);
}

Log.prototype.i = function() {
    this.type = 'info';
    this.exec.apply(this, arguments);
}

Log.prototype.l = function() {
    this.type = 'log';
    this.exec.apply(this, arguments);
}

Log.prototype.w = function() {
    this.type = 'warn';
    this.exec.apply(this, arguments);
}

Log.prototype.e = function() {
    this.type = 'error';
    this.exec.apply(this, arguments);
}

