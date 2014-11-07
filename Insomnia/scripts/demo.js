(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        stayAwake: function () {
            if (!this.checkSimulator()) {
                window.plugins.insomnia.keepAwake(
                    // optional callback
                    function(msg) {alert(msg)}
                );
            }
        },

        allowSleepAgain: function () {
                window.plugins.insomnia.allowSleepAgain(
                    // optional callback
                    function(msg) {alert(msg)}
                );
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.plugins.insomnia === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);