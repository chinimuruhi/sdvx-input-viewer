(function (){
    const localStorageData = localStorage.getItem('config');
    try {
        if(localStorageData){
            setConfig(JSON.parse(localStorageData));
        }else{
            setDefaultConfig();
        }
    } catch(e) {
        setDefaultConfig();
    }
})();

// フォーム書き換え（テキスト）
function setFormValue(id, value){
    console.log(id + ":" + value);
    if(typeof(value) === "boolean"){
        $('#' + id).val('checked', true);
    }else{
        $('#' + id).val(value);
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

// デフォルト設定の反映
function setDefaultConfig(){
    fetch("../js/default-config.json")
        .then( response => response.json())
        .then( data => setConfig(data));
}

// Generateボタン押下時
$('button#generate').on('click', function() {
    localStorage.setItem('config', $('form#options').serializeJSON());
    window.open('/sdvx-input-viewer/Viewer/');
});

// Resetボタン押下時
$('button#reset').on('click', function() {
    setDefaultConfig();
});