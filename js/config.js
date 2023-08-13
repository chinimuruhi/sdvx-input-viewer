(function (){
    const localStorageData = localStorage.getItem('config');
    try {
        if(localStorageData){
            initialize(JSON.parse(localStorageData));
        }else{
            console.log("fetch");
            fetch("../js/default-config.json")
                .then( response => response.json())
                .then( data => initialize(data));
        }
    } catch(e) {
        fetch("../js/default-config.json")
            .then( response => response.json())
            .then( data => initialize(data));
    }
})();

// フォーム書き換え（テキスト）
function setFormValue(id, value){
    if(typeof(value) === "boolean"){
        $('#' + id).val('checked', true);
    }else{
        $('#' + id).val(value);
    }
}

// デフォルト設定読み込み後
function initialize(configData){
    for(const key1 in configData){
        if(Array.isArray(configData[key1])){
            for(let i = 0; i < configData[key1].length; i++){
                for(const key2 in configData[key1][i]){
                    for(const key3 in configData[key1][i][key2]){
                        setFormValue(key1 + "[" + i + "]" + "[" + key2 + "]" + "[" + key3 + "]", configData[key1][i][key2][key3]);
                    }
                }
            }
        }else{
            setFormValue(key1, configData[key1]);
        }
    }
}

// フォーム送信時
$('form#options').submit(function () {
    localStorage.setItem('config', $('form#options').serializeJSON());
    window.open('/sdvx-input-viewer/Viewer');
});