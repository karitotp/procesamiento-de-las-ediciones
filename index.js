
var download = require('./download');
var exec = require('child_process').exec;

var num_dir= 0;

for (var i = 1; i <=4; i++) {

  download([0,i], function(status){
       if(status){
        
            exec('osmfilter /tmp/'+i+'.osc --keep="@user=Rub21 or "@user=busdoc" or @user=ediyes or @user=samely" -o=process-'+i+'.osm', 
                function(error, stdout, stderr) {
                console.log('stdout: ', stdout);
                console.log('stderr: ', stderr);
                if (error !== null) {
                    console.log('exec error: ', error);

                }
                    
            }

            );
       }

    })
        
}



