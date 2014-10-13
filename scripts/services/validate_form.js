/*

    Copyright (C) 2012-2013 by Clearcode <http://clearcode.cc>
    and associates (see AUTHORS).

    This file is part of cc-formValidate-service.

    cc-formValidate-service is free software: you can redistribute it and/or modify
    it under the terms of the Lesser GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    cc-formValidate-service is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with cc-formValidate-service.  If not, see <http://www.gnu.org/licenses/>.

*/
'use strict';

angular.module('cc.formValidate.service', []).factory('validateForm', function () {
    var validation_messages = {
        'required': function(field_name) {
            return 'Enter ' + field_name;
        },
        'email': function(field_name) {
            return 'Enter email address in ' + field_name +' field';
        },
        'default': function(field_name) {
            return 'Invalid ' + field_name + ' field';
        }
    };

    return function validateForm(form) {
        var i, formatter, error, result = [];
        for(error in form.$error) {
            if(form.$error[error]) {
                for(i = 0; i < form.$error[error].length; i += 1) {
                    formatter = validation_messages[error];
                    if(!angular.isFunction(formatter)) {
                        formatter = validation_messages['default'];
                    }
                    result.push(formatter(form.$error[error][i]['$name']));
                }
            }
        }
        return result;
    };
});
