// run with node

var authToken = "[dropbox auth token here]";

var baseFolder = "aero"

var Curl = require( 'node-libcurl' ).Curl,
    querystring = require( 'querystring' );

var curl = new Curl(),
    url  = 'https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings',
    data = {
        "path":"/chain1/a2.mp3",
        "settings":{
            "requested_visibility":"public"
        }
    };

curl.setOpt( Curl.option.URL, url );
curl.setOpt( Curl.option.HTTPHEADER, ['Authorization: Bearer '+authToken,'Content-Type: application/json'] );
curl.setOpt( Curl.option.VERBOSE, false );

// number, start at -1 because first path is fake
var i = -1;
// layer (a,b,c,d,e)
var l = 1;
// chain (1,2,3,4)
var c = 1;

curl.on( 'end', function( statusCode, body ) {

    // parse body to json and get url
    var url = JSON.parse(body).url;

    // if url exists print value to the console in nice format
    if(url != undefined)
        console.log('\t"'+url.substring(url.indexOf("/",url.indexOf(".com/s/")+8)+1,url.indexOf(".mp3"))+'":"'+url+'"'+(i == 15 && l == 4 ? "" : ","));

    // increment i
    i++;
    // is i is 16, resest to 0 and increment layer
    if(i == 16){
        i = 0;
        l++;
    }
    // if layer is 6, reset to 1 and increment chain
    if(l == 6){
        l = 1;
        c++;
        if(c != 5)
            console.log('},\nchain'+c+':{');
    }
    // chain equals 5, exit
    if(c == 5){
        console.log("}")
        this.close();
    }
    else{   // still iterating
        // construct next path to perform search on
        data["path"]="/"+baseFolder+"/chain"+c+"/"+(l == 1 ? "a" : l == 2 ? "b" : l == 3 ? "c" : l == 4 ? "d" : "e")+""+i+".mp3";

        curl.setOpt( Curl.option.POSTFIELDS, JSON.stringify(data) );

        // perform next search
        curl.perform();
    }
});

curl.on( 'error', curl.close.bind( curl ) );

// initial fake path so that all logic is in the same place
data["path"]="/fakepath.mp3";

console.log('chain1:{');

curl.setOpt( Curl.option.POSTFIELDS, JSON.stringify(data) );

// start querying
curl.perform();
