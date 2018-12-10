class SceneBegin2 extends eui.Component {


    private thisObj: egret.DisplayObjectContainer;
    public bgc:eui.Image
    constructor() {
        super()
        this.skinName = 'resource/eui_skins/skin/SceneBegin.exml';
        this.Init()

   
    }


    private time: number = 120
    private time_label: eui.Label
    private score_label: eui.Label
    private score_num: number = 0
    public static score_num_end:number = 0
    private Init() {
        // this.score_label.text = '锤死了' + this.score_num.toString() + '个大便'
        egret.startTick(this.Update, this)

        var s = setInterval(() => {
            this.time--
            if (this.time > 0) {
                this.time_label.text = this.time.toString()
            } else {
                clearTimeout(s)
            }
        }, 1000)
    }

    private count: number = 0;
    private speed: number = 1;
    private Update() {

        this.count++
        if (this.count == Math.floor(120 / this.speed)) {
            this.dsFn();
            this.count = 0;
            // if (this.speed >= 2.5) {
            //     return
            // }
            this.speed += 0.05
        }
        if (this.time <= 0) {
            console.log('stop')
            egret.stopTick(this.Update, this)
            this.time_label.text = '时间到'
            SceneBegin2.score_num_end = this.score_num;
            this.parent.addChild(new gameOver2())
            this.parent.removeChild(this)
        }

        return false
    }

    private e_group: eui.Group

    private dsFn() {

        var holeNum = Math.floor(this.e_group.numChildren * Math.random());
        var g: eui.Group = <eui.Group>this.e_group.getChildAt(holeNum);

        var g_children_group: eui.Group = <eui.Group>g.$children[1];

        for (var i = 0; i < this.e_group.numChildren; i++) {
            if (g_children_group.numChildren >= 2) {
                return
            }

            if (holeNum == i) {
                var img: egret.Bitmap = new egret.Bitmap(RES.getRes('shit_png'));
                g_children_group.getChildAt(0).visible = true
                g_children_group.mask = g_children_group.getChildAt(0)
                g_children_group.addChild(img);

                img.width = 100
                img.height = 130
                img.y = img.height;
                img.x = 0;

                let tw = egret.Tween.get(img).to({ y: 30 }, 200).call(() => {
                    tw.setPaused(true)
                    setTimeout(function () {
                        egret.Tween.get(img).to({ y: 130 }, 200).call(() => {
                            g_children_group.removeChild(img);
                            g_children_group.removeEventListener(egret.TouchEvent.TOUCH_TAP, () => { }, this)
                            egret.Tween.removeTweens(img);
                        })
                    }, 1200);
                })

                img.touchEnabled = true;

                img.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
                    tw.setPaused(false);
                    img.touchEnabled = false;

                    this.score_num = this.score_num + 1;
               
                    this.score_label.text = '锤死了' + this.score_num.toString() + '个大便'

                    img.texture = RES.getRes('shit2_png')
                    setTimeout(function () {

                        tw.setPaused(true)

                    }, 800);
                }, this)

            }
        }


    }

}