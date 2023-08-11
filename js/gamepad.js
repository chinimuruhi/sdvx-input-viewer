'use strict';

(function (){
    const configData = {
        "backGroundTransparent": false,
        "backGroundColor": "#DDDDDD",
        "analogReleaseTime": 0.05,
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
                    "leftColor":"#0000FF",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#0000FF",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#0000FF"
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
                    "leftColor":"#0000FF",
                    "rightImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_right.png",
                    "rightColorChange": true,
                    "rightColor":"#0000FF",
                    "centerImagePath":"https://chinimuruhi.github.io/sdvx-input-viewer/img/analog_center.png",
                    "centerColorChange": true,
                    "centerColor":"#0000FF"
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

    // configの読み込み

    // 背景色の変更
    if(configData["backGroundTransparent"]){
        $("body").css({
            "background": "transparent !important"
        });
    }else{
        $("body").css({
            "background-color": configData["backGroundColor"]
        });
    }

    //releaseTimeの適用
    axisManager.setReleaseTime(configData["analogReleaseTime"]);

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
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index);
	});

	// ゲームパッドの接続を解除時
	window.addEventListener("gamepaddisconnected",function(e){
		let gamepad = e.gamepad;
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index);
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
                    let cssData = {"background": "url(" + configData["buttonData"][i]["onData"]["imagePath"] + ")"};
                    if(configData["buttonData"][i]["onData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["onData"]["color"];
                    } 
                    $(ButtonSelectors[i]).css(cssData);
                }else{
                    let cssData = {"background": "url(" + configData["buttonData"][i]["offData"]["imagePath"] + ")"};
                    if(configData["buttonData"][i]["offData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["offData"]["color"];
                    } 
                    $(ButtonSelectors[i]).css(cssData);
                }
            }

            //アナログデバイス表示
            axisManager.setCurrentAngle(gamepads[playerNum].axes, Date.now());
            for(let i = 0; i < AnalogSelectors.length; i++){
                let centerCssData;
                let leftCssData;
                let rightCssData;
                if(axisManager.isMoveFixed(i)){
                    centerCssData = {"background": "url(" + configData["analogData"][i]["onData"]["centerImagePath"] + ")"};
                    if(configData["analogData"][i]["onData"]["centerColorChange"]){
                        centerCssData["filter"] = configData["analogData"][i]["onData"]["centerColor"];
                    }
                    if(axisManager.getFixedMoveDirection(i) < 0){
                        leftCssData = {"background": "url(" + configData["analogData"][i]["onData"]["leftImagePath"] + ")"};
                        if(configData["analogData"][i]["onData"]["leftColorChange"]){
                            leftCssData["filter"] = configData["analogData"][i]["onData"]["leftColor"];
                        }
                        rightCssData = {"background": "url(" + configData["analogData"][i]["offData"]["rightImagePath"] + ")"};
                        if(configData["analogData"][i]["offData"]["rightColorChange"]){
                            rightCssData["filter"] = configData["analogData"][i]["offData"]["rightColor"];
                        }
                    }else{
                        leftCssData = {"background": "url(" + configData["analogData"][i]["offData"]["leftImagePath"] + ")"};
                        if(configData["analogData"][i]["offData"]["leftColorChange"]){
                            leftCssData["filter"] = configData["analogData"][i]["offData"]["leftColor"];
                        }
                        rightCssData = {"background": "url(" + configData["analogData"][i]["onData"]["rightImagePath"] + ")"};
                        if(configData["analogData"][i]["onData"]["rightColorChange"]){
                            rightCssData["filter"] = configData["analogData"][i]["onData"]["rightColor"];
                        }
                    }

                }else{
                    centerCssData = {"background": "url(" + configData["analogData"][i]["offData"]["centerImagePath"] + ")"};
                    leftCssData = {"background": "url(" + configData["analogData"][i]["offData"]["leftImagePath"] + ")"};
                    rightCssData = {"background": "url(" + configData["analogData"][i]["offData"]["rightImagePath"] + ")"};
                    if(configData["analogData"][i]["offData"]["centerColorChange"]){
                        centerCssData["filter"] = configData["analogData"][i]["offData"]["centerColor"];
                    }
                    if(configData["analogData"][i]["offData"]["leftColorChange"]){
                        leftCssData["filter"] = configData["analogData"][i]["offData"]["leftColor"];
                    }
                    if(configData["analogData"][i]["offData"]["rightColorChange"]){
                        rightCssData["filter"] = configData["analogData"][i]["offData"]["rightColor"];
                    }
                }
                centerCssData["transform"] = "rotate(" + String(axisManager.getCurrentAngle(i) * 180) + "deg)";
                $(AnalogSelectors[i]["center"]).css(centerCssData);
                $(AnalogSelectors[i]["left"]).css(leftCssData);
                $(AnalogSelectors[i]["right"]).css(rightCssData);
            }
            axisManager.goNextFrame();
        }
	},1000/120);

})();