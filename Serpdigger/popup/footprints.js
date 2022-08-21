function updateFootprintSelect() {
    _sendEvent("api:footprints", {}, function (footprints) {
        console.log(footprints);
        $('#footprint-select').empty().append($('<option value="custom">Custom</option>'))
        footprints.map(function (footprint) {
            return $('<option value=\''+footprint.value+'\'>'+footprint.name+'</option>');
        }).forEach(function ($o) {
            $('#footprint-select').append($o);
        });
        if(footprints.indexOf($('#footprint-input').val()) !== -1) {
            $('#footprint-select').val($('#footprint-input').val());
        } else {
            $('#footprint-select').val("custom");
        }
    });
}

_onInit(function () {
    
    $('#footprint-select').on('change', function () {
        var $this = $(this);
        if($this.val() == "custom") $('#footprint-input').val("").attr('disabled', false);
        else $('#footprint-input').val($this.val()).attr('disabled', true);
        storeFootprints($('#footprint-input').val());
    });
    
    updateFootprintSelect();
    
});