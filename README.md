Clearcode Form Validation Service
=========

Service for adding custom errors to error array - to print them when user tries to send form.
Installation
--------------
TODO


Usage
------

Add ``` formValidate.service ``` module to your app module list :


```
angular
    .module('yourAwesomeApp', [
        'formValidate.service'
    ]);
```
and you are ready to go!

How to use service:

*validateForm.validateForm*

```
validateForm.validateForm(form); // -> adds pretty errors to error array

```

Author
------

Roman Sek


License
----

LGPL

