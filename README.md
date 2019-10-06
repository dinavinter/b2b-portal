# b2b-test
 
**Site config**
* Go to "Site Settings" in CDC and add .*/github.io/* and .*/localhost/* to trusted urls
* Enable site under "Organization management"
  

**Working remotely**
if you don't use assets simply browse test https://dinavinter.github.io/b2b-portal/index.html

if you do, to avoid CORS errors launch chrome with disable-web-security command:

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp  https://dinavinter.github.io/b2b-portal/index.html

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
    
    
    
** delgated admin flow **  
*Invite new user to organization and assoiate with delgated admin role using plainId console.
*Go to test page and login with the password you got through invitation email
*Press on organization managment 
*You should be redirected to plain id console in organization scop

** view assets **  
*Invite new user to organization and assoiate with role that linked to a policy using plainId console.
*Go to test page and login with the password you got through invitation email
*Press on get assets
*You view user assets 



