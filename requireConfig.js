requirejs.config({
    // base url of source files
    baseUrl: 'lib',
    // define libraries here
    paths:{
        "jquery":'libraries/jquery.min',
        "howler":'libraries/howler.min'
    }
});

// load test file
requirejs(['test/test-main']);
