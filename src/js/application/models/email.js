define([
    'jquery',
    'backbone',
    './base'],
    function ($, Backbone, BaseModel) {
        "use strict";
        var EmailModel = BaseModel.extend({
            url: function () {
                return this.baseUrl + 'interact/email';
            },
            validateAddress: function () {
                var x = this.get('address');
                var atpos = x.indexOf("@");
                var dotpos = x.lastIndexOf(".");
                if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
                    return false;
                } else {
                    return true;
                }
            }
        });
        return EmailModel;
    });