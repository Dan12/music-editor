// full jquery import here (not needed elsewhere)
import * as $ from "jquery";

// import global varialbes into all modules
import "./testGlobals"

// import test functions
import { testAudio } from "./testAudio";
import { testUI } from "./testJQ";

$(document).ready(function(){
    
    // call test functions
    testAudio();
    testUI();
    
})