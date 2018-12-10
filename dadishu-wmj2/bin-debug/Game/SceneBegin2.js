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
var SceneBegin2 = (function (_super) {
    __extends(SceneBegin2, _super);
    function SceneBegin2() {
        var _this = _super.call(this) || this;
        _this.time = 120;
        _this.score_num = 0;
        _this.count = 0;
        _this.speed = 1;
        _this.skinName = 'resource/eui_skins/skin/SceneBegin.exml';
        _this.Init();
        return _this;
    }
    SceneBegin2.prototype.Init = function () {
        var _this = this;
        // this.score_label.text = '锤死了' + this.score_num.toString() + '个大便'
        egret.startTick(this.Update, this);
        var s = setInterval(function () {
            _this.time--;
            if (_this.time > 0) {
                _this.time_label.text = _this.time.toString();
            }
            else {
                clearTimeout(s);
            }
        }, 1000);
    };
    SceneBegin2.prototype.Update = function () {
        this.count++;
        if (this.count == Math.floor(120 / this.speed)) {
            this.dsFn();
            this.count = 0;
            // if (this.speed >= 2.5) {
            //     return
            // }
            this.speed += 0.05;
        }
        if (this.time <= 0) {
            console.log('stop');
            egret.stopTick(this.Update, this);
            this.time_label.text = '时间到';
            SceneBegin2.score_num_end = this.score_num;
            this.parent.addChild(new gameOver2());
            this.parent.removeChild(this);
        }
        return false;
    };
    SceneBegin2.prototype.dsFn = function () {
        var _this = this;
        var holeNum = Math.floor(this.e_group.numChildren * Math.random());
        var g = this.e_group.getChildAt(holeNum);
        var g_children_group = g.$children[1];
        var _loop_1 = function () {
            if (g_children_group.numChildren >= 2) {
                return { value: void 0 };
            }
            if (holeNum == i) {
                img = new egret.Bitmap(RES.getRes('shit_png'));
                g_children_group.getChildAt(0).visible = true;
                g_children_group.mask = g_children_group.getChildAt(0);
                g_children_group.addChild(img);
                img.width = 100;
                img.height = 130;
                img.y = img.height;
                img.x = 0;
                var tw_1 = egret.Tween.get(img).to({ y: 30 }, 200).call(function () {
                    tw_1.setPaused(true);
                    setTimeout(function () {
                        var _this = this;
                        egret.Tween.get(img).to({ y: 130 }, 200).call(function () {
                            g_children_group.removeChild(img);
                            g_children_group.removeEventListener(egret.TouchEvent.TOUCH_TAP, function () { }, _this);
                            egret.Tween.removeTweens(img);
                        });
                    }, 1200);
                });
                img.touchEnabled = true;
                img.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    tw_1.setPaused(false);
                    img.touchEnabled = false;
                    _this.score_num = _this.score_num + 1;
                    _this.score_label.text = '锤死了' + _this.score_num.toString() + '个大便';
                    img.texture = RES.getRes('shit2_png');
                    setTimeout(function () {
                        tw_1.setPaused(true);
                    }, 800);
                }, this_1);
            }
        };
        var this_1 = this, img;
        for (var i = 0; i < this.e_group.numChildren; i++) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    SceneBegin2.score_num_end = 0;
    return SceneBegin2;
}(eui.Component));
__reflect(SceneBegin2.prototype, "SceneBegin2");
