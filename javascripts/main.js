console.log('This would be the main JS file.');

function run()
{
	// Instantiate the Shell object and invoke its execute method.
    var oShell = new ActiveXObject("Shell.Application");
	var inputparms=""
    var commandtoRun = "C:\\Users\\KinGover\\Desktop\\print\\test.bat";
    if (inputparms != "") {
      var commandParms = document.Form1.filename.value;
    }

 // Invoke the execute method.  
    oShell.ShellExecute(commandtoRun, commandParms, "", "open", "1");
	
}
