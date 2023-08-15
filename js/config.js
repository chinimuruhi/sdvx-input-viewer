(function (){
    const configData = localStorage.getItem("config");
    const keyConfigData = localStorage.getItem("key-config");
    try {
        if(configData){
            setConfig(JSON.parse(configData));
        }else{
            setDefaultConfig();
        }
        if(keyConfigData){
            setConfig(JSON.parse(keyConfigData));
        }
    } catch(e) {
        setDefaultConfig();
    }
})();

// フォーム書き換え（テキスト）
function setFormValue(id, value){
    if(typeof(value) === "boolean"){
        $("#" + id).prop("checked", value);
    }else{
        $("#" + id).val(value);
    }
}

// Configのフォームへの反映
function setConfig(configData){
    for(const key1 in configData){
        if(Array.isArray(configData[key1])){
            for(let i = 0; i < configData[key1].length; i++){
                for(const key2 in configData[key1][i]){
                    for(const key3 in configData[key1][i][key2]){
                        setFormValue(key1 + "\\[" + i + "\\]" + "\\[" + key2 + "\\]" + "\\[" + key3 + "\\]", configData[key1][i][key2][key3]);
                    }
                }
            }
        }else{
            setFormValue(key1, configData[key1]);
        }
    }
}

// Key Configのフォームへの反映
function setKeyConfig(keyConfigData){
    for(const key1 in keyConfigData){
        if(Array.isArray(keyConfigData[key1])){
            for(let i = 0; i < keyConfigData[key1].length; i++){
                setFormValue(key1 + "\\[" + i + "\\]", keyConfigData[key1][i]);
            }
        }else{
            setFormValue(key1, keyConfigData[key1]);
        }
    }
}

// デフォルト設定の反映
function setDefaultConfig(){
    $("#key-config").trigger("reset");
    fetch("../js/default-config.json")
        .then( response => response.json())
        .then( data => setConfig(data));
}

// Generateボタン押下時
$("button#generate").on("click", function() {
    const config = $("form#options").serializeJSON();
    localStorage.setItem("config", config);
    let urlQuery = 'config=' + encodeURIComponent(btoa(window.RawDeflate.deflate(encodeURIComponent(config))));
    let keyConfig = {
        "buttons":[],
        "axis":[],
    };
    for(let i = 0; i <= 6; i++){
        let val = $("#buttons\\[" + String(i) + "\\]").val()
        if(val){
            keyConfig["buttons"][i] = val;
        }else{
            keyConfig["buttons"][i] = String(i); 
        }
    }
    for(let i = 0; i <= 1; i++){
        let val = $("#axis\\[" + String(i) + "\\]").val()
        if(val){
            keyConfig["axis"][i] = val;
        }else{
            keyConfig["axis"][i] = String(i); 
        }
    }
    keyConfig = JSON.stringify(keyConfig);
    localStorage.setItem("key-config", keyConfig);
    urlQuery += '&key=' + encodeURIComponent(btoa(window.RawDeflate.deflate(encodeURIComponent(keyConfig)))); 
    window.open("/sdvx-input-viewer/Viewer/?" + urlQuery);
});

// Resetボタン押下時
$("button#reset").on("click", function() {
    setDefaultConfig();
});