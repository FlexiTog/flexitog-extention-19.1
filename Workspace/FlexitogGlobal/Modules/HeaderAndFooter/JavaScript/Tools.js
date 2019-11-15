/**
 * Description : Reusable modal functions
 * @Author : Gordon Truslove
 * @Date   : 11/13/2019, 10:05:13 AM
 */

define('Tools', [
    'jQuery', 'Utils', 'underscore', 'SC.Configuration'
],
function (
    jQuery, Utils, _, Configuration
) {

    'use strict';

    function showErrorInModal(application, title, message) {

        var view = new Backbone.View({
            application: application
        });

        view.title = title;
        view.render = function () {
            this.$el.append('<p class="error-message">' + message + '</p><br /><div class="text-center"><button class="button-primary button-large" data-dismiss="modal">' + _('OK').translate() + '</button></div>');
        };
        view.showInModal();
    }

    function showSuccessInModal(application, title, message) {

        var view = new Backbone.View({
            application: application
        });

        view.title = title;
        view.render = function () {
            this.$el.append('<p class="success-message">' + message + '</p><br /><div class="text-center"><button class="button-primary button-large" data-dismiss="modal">' + _('OK').translate() + '</button></div>');
        };
        view.showInModal();
    }

    function showConfirmInModal(application, title, message,success) {

        var view = new Backbone.View({
            application: application
        });

        view.title = title;
        view.render = function () {
            this.$el.append('<p class="success-message">' + message + '</p><br /><div class="text-center"><button class="button-primary button-large confirm" data-dismiss="modal" >' + _('Confirm').translate() + '</button></div>');

            this.$el.find(".confirm").click(success);
        };
        view.showInModal();
    }

    
    // Make Tools module available globally
    var Tools = SC.Tools = {
        showErrorInModal: showErrorInModal,
        showSuccessInModal: showSuccessInModal,
        showConfirmInModal:showConfirmInModal
    }
    return Tools;
});