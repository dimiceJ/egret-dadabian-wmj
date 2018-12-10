
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = undefined;generateEUI.paths['resource/eui_skins/skin/dishu.exml'] = window.dishu = (function (_super) {
	__extends(dishu, _super);
	function dishu() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 130;
		this.width = 116;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = dishu.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.source = "ds_png";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return dishu;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/gameOver.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = ["a_group","b_group","c_group","d_group","yes_btn"];
		
		this.height = 580;
		this.width = 960;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.a_group_i(),this.b_group_i(),this.c_group_i(),this.d_group_i(),this.yes_btn_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.height = 580;
		t.width = 960;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x04870e;
		t.height = 375;
		t.width = 548;
		t.x = 219;
		t.y = 83;
		return t;
	};
	_proto.a_group_i = function () {
		var t = new eui.Group();
		this.a_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.visible = false;
		t.width = 463;
		t.x = 276.5;
		t.y = 123;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.source = "1_png";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "一等奖：";
		t.x = 131.5;
		t.y = 45.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "温泉全免！！！";
		t.textColor = 0xdb1111;
		t.x = 231;
		t.y = 45.5;
		return t;
	};
	_proto.b_group_i = function () {
		var t = new eui.Group();
		this.b_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.visible = false;
		t.width = 463;
		t.x = 276.5;
		t.y = 123;
		t.elementsContent = [this._Image2_i(),this._Label3_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.source = "2_png";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "一等奖：";
		t.x = 131.5;
		t.y = 45.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.text = "粉饼报销！！";
		t.textColor = 0x821414;
		t.x = 231;
		t.y = 45.5;
		return t;
	};
	_proto.c_group_i = function () {
		var t = new eui.Group();
		this.c_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.visible = false;
		t.width = 463;
		t.x = 276.5;
		t.y = 123;
		t.elementsContent = [this._Image3_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.source = "3_png";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.text = "一等奖：";
		t.x = 131.5;
		t.y = 45.5;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.text = "外出吃饭一次！";
		t.textColor = 0xe57b7b;
		t.x = 231;
		t.y = 45.5;
		return t;
	};
	_proto.d_group_i = function () {
		var t = new eui.Group();
		this.d_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 274;
		t.visible = false;
		t.width = 463;
		t.x = 286.5;
		t.y = 133;
		t.elementsContent = [this._Image4_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121;
		t.source = "shit_img_png";
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.text = "垃圾奖：";
		t.x = 106;
		t.y = 45.5;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "温泉由你全包！！！";
		t.textColor = 0xE57B7B;
		t.width = 290;
		t.x = 221;
		t.y = 45.5;
		return t;
	};
	_proto.yes_btn_i = function () {
		var t = new eui.Image();
		this.yes_btn = t;
		t.source = "YesBtn_jpg";
		t.x = 429.5;
		t.y = 328;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skin/SceneBegin.exml'] = window.SceneBegin = (function (_super) {
	__extends(SceneBegin, _super);
	function SceneBegin() {
		_super.call(this);
		this.skinParts = ["time_label","score_label","group_1","group_2","group_3","group_4","group_5","group_6","group_7","group_8","group_9","e_group"];
		
		this.height = 580;
		this.width = 960;
		this.elementsContent = [this._Image1_i(),this.time_label_i(),this.score_label_i(),this.e_group_i()];
	}
	var _proto = SceneBegin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 580;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_bgc_png";
		t.width = 960;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.time_label_i = function () {
		var t = new eui.Label();
		this.time_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 96;
		t.x = 849;
		t.y = 45;
		return t;
	};
	_proto.score_label_i = function () {
		var t = new eui.Label();
		this.score_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.text = "锤死了0个大便";
		t.width = 442;
		t.x = 345.5;
		t.y = 25;
		return t;
	};
	_proto.e_group_i = function () {
		var t = new eui.Group();
		this.e_group = t;
		t.bottom = 0;
		t.top = 0;
		t.width = 960;
		t.x = 0;
		t.elementsContent = [this.group_1_i(),this.group_2_i(),this.group_3_i(),this.group_4_i(),this.group_5_i(),this.group_6_i(),this.group_7_i(),this.group_8_i(),this.group_9_i()];
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 103;
		t.y = 104;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 30;
		t.y = -26;
		t.elementsContent = [this._Rect2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_2_i = function () {
		var t = new eui.Group();
		this.group_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 369;
		t.y = 104;
		t.elementsContent = [this._Rect3_i(),this._Group2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 34;
		t.y = -24;
		t.elementsContent = [this._Rect4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_3_i = function () {
		var t = new eui.Group();
		this.group_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 646;
		t.y = 104;
		t.elementsContent = [this._Rect5_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 33;
		t.y = -24;
		t.elementsContent = [this._Rect6_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_4_i = function () {
		var t = new eui.Group();
		this.group_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 103;
		t.y = 270;
		t.elementsContent = [this._Rect7_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 31;
		t.y = -24;
		t.elementsContent = [this._Rect8_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_5_i = function () {
		var t = new eui.Group();
		this.group_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 367;
		t.y = 270;
		t.elementsContent = [this._Rect9_i(),this._Group5_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 33;
		t.y = -24;
		t.elementsContent = [this._Rect10_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_6_i = function () {
		var t = new eui.Group();
		this.group_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 645;
		t.y = 270;
		t.elementsContent = [this._Rect11_i(),this._Group6_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 32;
		t.y = -24;
		t.elementsContent = [this._Rect12_i()];
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_7_i = function () {
		var t = new eui.Group();
		this.group_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 103;
		t.y = 433;
		t.elementsContent = [this._Rect13_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 31;
		t.y = -24;
		t.elementsContent = [this._Rect14_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_8_i = function () {
		var t = new eui.Group();
		this.group_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 369;
		t.y = 433;
		t.elementsContent = [this._Rect15_i(),this._Group8_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 32;
		t.y = -24;
		t.elementsContent = [this._Rect16_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_9_i = function () {
		var t = new eui.Group();
		this.group_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 162;
		t.x = 646;
		t.y = 433;
		t.elementsContent = [this._Rect17_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 189;
		t.fillColor = 0x5B1919;
		t.height = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 130;
		t.width = 100;
		t.x = 680;
		t.y = 410;
		t.elementsContent = [this._Rect18_i()];
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.height = 130;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 116;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return SceneBegin;
})(eui.Skin);