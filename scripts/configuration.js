export let APP_NAMES = ["portal", "eCommerce", "eLearning", "Orders"]; 

export function get_cfg_var(varname) {
	return localStorage.getItem(varname);  
}
 	
export let clientCfg = {} ;

function load_all_cfg() {
	clientCfg.domain = get_cfg_var("domain");
    clientCfg.apiKey = get_cfg_var("apiKey");
    clientCfg.portal = get_cfg_var("portal");
    clientCfg.serviceUrl = get_cfg_var("serviceUrl");
    clientCfg.clientId = get_cfg_var("clientId");
    clientCfg.clientSecret = get_cfg_var("clientSecret");
    clientCfg.plainId = get_cfg_var("plainId"); 
    //var apps = {};
    //
	// clientCfg.apps = apps;
	// for (var i = 0; i < APP_NAMES.length; i++) {
	// 	apps[APP_NAMES[i]] = get_cfg_var("apps." + APP_NAMES[i]);
    // }
    
    var apps = {};

	for (var i = 0; i < APP_NAMES.length; i++) {
        apps[APP_NAMES[i]] = get_cfg_var("app." + APP_NAMES[i]);
	}

    clientCfg.apps = apps;

    clientCfg.getApp = function (name) {
	    return JSON.parse(app[name]);

    }
}

export function load_config(cfg) {  
     Object.keys(cfg).forEach(x=>{
        localStorage.setItem(x, cfg[x]);

    });

    load_all_cfg();

}
 
// load_default();
load_all_cfg();
