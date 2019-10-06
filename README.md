# b2b-test
 
**Site config**
* Go to "Site Settings" in CDC and add .*/github.io/* and .*/localhost/* to trusted urls
* Enable site under "Organization management"
  

**Working on remote site**
browse test https://dinavinter.github.io/b2b-portal/index.html

To avoid CORS errors (auth token call) launch chrome with the following command:

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp  https://dinavinter.github.io/b2b-training-demo

********** **Config** **********
* Go to 'Auth Service Config' 
    * set 'use athorization service' to false
    * set clientId and clientSecret from site settings in plainId 
* Go to "Client config"
    * set your apiKey and domain  

********** **Working local** **********

* Clone repository or create your own using "template repository"
* Run server\install.bat
* In powershell:
    * cd  .\server
    * py .\server.py

* Browse https:\\localhost:4580\index.html
 
**Config**
* Go to 'Auth Service Config' 
    * set 'use athorization service' to true
    * set clientId and clientSecret from site settings in plainId 
    * press "save"
* Go to "Client config"
    * set your apiKey and domain 
    * press "save" 


