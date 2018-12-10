var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var gameOver2 = (function (_super) {
    __extends(gameOver2, _super);
    function gameOver2() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/skin/gameOver.exml';
        _this.init();
        return _this;
    }
    gameOver2.Shared = function () {
        if (gameOver2.shared == null) {
            gameOver2.shared = new gameOver2();
        }
        return gameOver2.shared;
    };
    gameOver2.prototype.init = function () {
        this.yes_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.yesFn, this);
        console.log(SceneBegin2.score_num_end);
        if (SceneBegin2.score_num_end > 190 && SceneBegin2.score_num_end < 200) {
            this.a_group.visible = true;
        }
        else if (SceneBegin2.score_num_end > 199 && SceneBegin2.score_num_end < 210) {
            this.b_group.visible = true;
        }
        else if (SceneBegin2.score_num_end > 219 && SceneBegin2.score_num_end < 220) {
            this.c_group.visible = true;
        }
        else {
            this.d_group.visible = true;
        }
    };
    gameOver2.prototype.yesFn = function () {
        console.log(this.parent);
        this.parent.addChild(new SceneBegin2());
        this.parent.removeChild(this);
        //    this.parent.Init()
    };
    return gameOver2;
}(eui.Component));
__reflect(gameOver2.prototype, "gameOver2");
