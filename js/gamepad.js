'use strict';

(function (){
    const configData = {
        "backGroundTransparent": true,
        "backGroundColor": "#FFFFFF",
        "analogData":[
            {
                "offData":{
                    "leftImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_left.png",
                    "leftColorChange": true,
                    "leftColor":"#DDDDDD",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#DDDDDD",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#DDDDDD"
                },
                "onData":{
                    "leftImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_left.png",
                    "leftColorChange": true,
                    "leftColor":"#FFFFFF",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#FFFFFF",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#FFFFFF"
                }
            },
            {
                "offData":{
                    "leftImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_left.png",
                    "leftColorChange": true,
                    "leftColor":"#DDDDDD",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#DDDDDD",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#DDDDDD"
                },
                "onData":{
                    "leftImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_left.png",
                    "leftColorChange": true,
                    "leftColor":"#FFFFFF",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#FFFFFF",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#FFFFFF"
                }
            }
        ],
        "buttonData": [
            {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/start.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/start.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },
            {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },        {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },        {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },        {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/button.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },        {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/fx.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/fx.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            },        {
                "offData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/fx.png",
                    "colorChange": "true",
                    "color": "#DDDDDD"
                },
                "onData":{
                    "imagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/fx.png",
                    "colorChange": "true",
                    "color": "#FFFFFF"
                }
            }
        ]
    }

    // 各ボタンのセレクタ
    const ButtonSelectors = [
        "#starts .start",
        "#buttons .a",
        "#buttons .b",
        "#buttons .c",
        "#buttons .d",
        "#fxs .left",
        "#fxs .right"
    ]

    // アナログデバイスのセレクタ
    const AnalogSelectors = [
        {
            "left": "#analogs .blue .left",
            "right": "#analogs .blue .right",
            "center": "#analogs .blue .center"
        },
        {
            "left": "#analogs .red .left",
            "right": "#analogs .red .right",
            "center": "#analogs .red .center"
        }
    ]

    // 色の変換(RGB→filter)
    for(let i = 0; i < configData["analogData"].length; i++){
        configData["analogData"][i]["offData"]["leftColor"] = hexToFilter(configData["analogData"][i]["offData"]["leftColor"]);
        configData["analogData"][i]["offData"]["rightColor"] = hexToFilter(configData["analogData"][i]["offData"]["rightColor"]);
        configData["analogData"][i]["offData"]["centerColor"] = hexToFilter(configData["analogData"][i]["offData"]["centerColor"]);
        configData["analogData"][i]["onData"]["leftColor"] = hexToFilter(configData["analogData"][i]["onData"]["leftColor"]);
        configData["analogData"][i]["onData"]["rightColor"] = hexToFilter(configData["analogData"][i]["onData"]["rightColor"]);
        configData["analogData"][i]["onData"]["centerColor"] = hexToFilter(configData["analogData"][i]["onData"]["centerColor"]);
    }
    for(let i = 0; i < configData["buttonData"].length; i++){
        configData["buttonData"][i]["offData"]["color"] = hexToFilter(configData["buttonData"][i]["offData"]["color"]);
        configData["buttonData"][i]["onData"]["color"] = hexToFilter(configData["buttonData"][i]["onData"]["color"]);
    }

	// サポートチェック
	if(!(window.Gamepad)){
		$("error-message").text("Gamepad API に未対応");
		return;
	}
	// ゲームパッドを接続時
	window.addEventListener("gamepadconnected",function(e){
		let gamepad = e.gamepad;
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index)
	});

	// ゲームパッドの接続を解除時
	window.addEventListener("gamepaddisconnected",function(e){
		let gamepad = e.gamepad;
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index)
	});

	// 繰り返し実行される関数(120回/秒)
	setInterval(function(){
        //gamepad情報の取得
		let gamepads = navigator.getGamepads();
        //Playerの取得
        let url = new URL(window.location.href);
        let playerNum = Number(url.searchParams.get("p"));

        // Gamepad オブジェクトが存在する
        if(gamepads[playerNum]){
            //ボタン表示
            for(let i = 0; i < ButtonSelectors.length; i++){
                if(gamepads[playerNum].buttons[i].pressed){
                    let cssData = {"backGround": 'url(' + configData["buttonData"][i]["onData"]["imagePath"] + ')'}
                    if(configData["buttonData"][i]["onData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["onData"]["color"]
                    } 
                    $(ButtonSelectors[i]).css(cssData)
                }else{
                    let cssData = {"backGround": 'url(' + configData["buttonData"][i]["offData"]["imagePath"] + ')'}
                    if(configData["buttonData"][i]["offData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["offData"]["color"]
                    } 
                    $(ButtonSelectors[i]).css(cssData)
                }
            }

            // 軸情報
            //var axes = gamepad.axes;
            //var j;
            //var n = axes.length;
            //a.push("axes: {");
            //for(j=0;j<n;j++){
            //    a.push("  \"" + j + "\": " + (axes[j]));
            //}
            //a.push("}");

        // Gamepad オブジェクトが存在しない
        }else{
            $("error-message").text("PLAYER" + String(playerNum) + "のコントローラが見つかりません。接続して何らかのボタンを押してください。");
        }
	},1000/120);

})();