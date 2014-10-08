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

describe('Service: validateForm', function() {

    // load the controller's module
    beforeEach(module('shoppeApp'));

    var window_, timeout, form, result;

    // Initialize the controller and a mock scope
    beforeEach(function() {
        window_ = jasmine.createSpyObj('window', ['open']);
        timeout = jasmine.createSpy('timeout');
        form = {'$error': {'required': false,
                           'email': false}};
    });

    describe('when form is valid', function() {
        beforeEach(inject(function(validateForm) {
            result = validateForm(form);
        }));

        it('should return empty Array', function() {
            expect(result).toEqual([]);
        });
    });

    describe('when form login is missing', function() {
        beforeEach(inject(function(validateForm) {
            form.$error.required = [{'$name': 'login'}];
            result = validateForm(form);
        }));

        it('should return Array with one element', function() {
            expect(result).toEqual(['Enter login']);
        });
    });

    describe('when form password is missing', function() {
        beforeEach(inject(function(validateForm) {
            form.$error.required = [{'$name': 'password'}];
            result = validateForm(form);
        }));

        it('should return Array with one element', function() {
            expect(result).toEqual(['Enter password']);
        });
    });

    describe('when form login and password is missing', function() {
        beforeEach(inject(function(validateForm) {
            form.$error.required = [{'$name': 'login'}, {'$name': 'password'}];
            result = validateForm(form);
        }));

        it('should return Array with one element', function() {
            expect(result).toEqual(['Enter login', 'Enter password']);
        });
    });

    describe('when form login is not email', function() {
        beforeEach(inject(function(validateForm) {
            form.$error.email = [{'$name': 'login'}];
            result = validateForm(form);
        }));

        it('should return Array with one element', function() {
            expect(result).toEqual(['Enter email address in login field']);
        });
    });

    describe('when form login is not unexpected_validation', function() {
        beforeEach(inject(function(validateForm) {
            form.$error.unexpected_validation = [{'$name': 'login'}];
            result = validateForm(form);
        }));

        it('should return Array with one element', function() {
            expect(result).toEqual(['Invalid login field']);
        });
    });
});