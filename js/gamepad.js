'use strict';

(function (){
    // 各ボタンのセレクタ
    const buttonSelectors = [
        "#starts .start",
        "#buttons .a",
        "#buttons .b",
        "#buttons .c",
        "#buttons .d",
        "#fxs .left",
        "#fxs .right"
    ]

    // アナログデバイスのセレクタ
    const analogSelectors = [
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
    const url = new URL(window.location.href);
    const paramData = url.searchParams.get('config');
    let configData;
    if(paramData){
        try{
            configData = window.atob(paramData);
            configData = window.RawDeflate.inflate(configData);
            configData = decodeURIComponent(configData);
            configData = JSON.parse(configData);
            if(typeof(configData) != "object"){
                $("#error-message").text("設定データが壊れています。");
                return;
            }
        }catch(e){
            $("#error-message").text("設定データが壊れています。");
            return;
        }
    }else{
        $("#error-message").text("設定データが存在しません。");
        return;
    }

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

    // つまみ設定の適用
    axisManager.setReleaseTime(configData["analogReleaseTime"]);
    axisManager.setSensitivity(configData["analogSensitivity"]);

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
		$("#error-message").text("Gamepad API に未対応");
		return;
	}
	// ゲームパッドを接続時
	window.addEventListener("gamepadconnected",function(e){
		const gamepad = e.gamepad;
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index);
	});

	// ゲームパッドの接続を解除時
	window.addEventListener("gamepaddisconnected",function(e){
		const gamepad = e.gamepad;
        console.log(e.type + " timestamp:" + e.timeStamp + " index:" + gamepad.index);
	});

	// 繰り返し実行される関数(120回/秒)
	setInterval(function(){
        //gamepad情報の取得
		let gamepads = navigator.getGamepads();

        // Gamepad オブジェクトが存在する
        if(gamepads[configData["playerNum"]]){
            //ボタン表示
            for(let i = 0; i < buttonSelectors.length; i++){
                if(gamepads[configData["playerNum"]].buttons[i].pressed){
                    let cssData = {"background": "url(" + configData["buttonData"][i]["onData"]["imagePath"] + ")", "filter": "none"};
                    if(configData["buttonData"][i]["onData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["onData"]["color"];
                    }else{}
                    $(buttonSelectors[i]).css(cssData);
                }else{
                    let cssData = {"background": "url(" + configData["buttonData"][i]["offData"]["imagePath"] + ")"};
                    if(configData["buttonData"][i]["offData"]["colorChange"]){
                        cssData["filter"] = configData["buttonData"][i]["offData"]["color"];
                    } 
                    $(buttonSelectors[i]).css(cssData);
                }
            }

            //アナログデバイス表示
            axisManager.setCurrentAngle(gamepads[configData["playerNum"]].axes, Date.now());
            for(let i = 0; i < analogSelectors.length; i++){
                let centerCssData = {"filter": "none"};
                let leftCssData = {"filter": "none"};
                let rightCssData = {"filter": "none"};
                if(axisManager.isMoveFixed(i)){
                    centerCssData["background"] = "url(" + configData["analogData"][i]["onData"]["centerImagePath"] + ")";
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
                centerCssData["transform"] = "rotate(" + String(axisManager.getFixedAngle(i) * 180) + "deg)";
                $(analogSelectors[i]["center"]).css(centerCssData);
                $(analogSelectors[i]["left"]).css(leftCssData);
                $(analogSelectors[i]["right"]).css(rightCssData);
            }
            axisManager.goNextFrame();
            $("#error-message").text("");
        }else{
            $("#error-message").text("コントローラを接続して任意のボタンを押してください。");
        }
	},1000/120);

})();