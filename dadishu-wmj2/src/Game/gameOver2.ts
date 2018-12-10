class gameOver2 extends eui.Component {
    private static shared: gameOver2;
	public static Shared() {
		if (gameOver2.shared == null) {
			gameOver2.shared = new gameOver2()
		}
		return gameOver2.shared
	}


    constructor(){
        super()
        this.skinName = 'resource/eui_skins/skin/gameOver.exml'
        this.init()
    }

    private yes_btn:eui.Image
    private a_group:eui.Group
    private b_group:eui.Group
    private c_group:eui.Group
    private d_group:eui.Group
    

    private init(){
        this.yes_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.yesFn,this)
        console.log(SceneBegin2.score_num_end)
        if(SceneBegin2.score_num_end > 190 && SceneBegin2.score_num_end<200){
            this.a_group.visible = true
        }else if(SceneBegin2.score_num_end > 199 && SceneBegin2.score_num_end<210){
             this.b_group.visible = true
        }else if(SceneBegin2.score_num_end > 219 && SceneBegin2.score_num_end<220){
             this.c_group.visible = true
        }else{
             this.d_group.visible = true
        }
    }

    private yesFn(){
        console.log(this.parent)
        this.parent.addChild(new SceneBegin2())
        this.parent.removeChild(this)
       
    //    this.parent.Init()

    }
    
}