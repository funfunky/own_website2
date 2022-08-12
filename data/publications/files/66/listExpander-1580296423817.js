class listExpander_es6{constructor(name,selector,step,offset){this.name=name;this.itemSelector=selector;this.visible=step;this.step=step;this.moreId='view-more-'+name;this.hideId='hide-'+name;this.allId='view-all-'+name;this.offset=offset;this.debug=false;}
setDebug(toggle){this.debug=toggle;}
moreSelector(){return '#'+this.moreId;}
hideSelector(){return '#'+this.hideId;}
allSelector(){return '#'+this.allId;}
toggleButtons(){let allItems=$(this.itemSelector).length;if(this.debug)
console.debug(this.name+" -> Toggle Buttons:  Visible "+this.visible+"/"+allItems+" items");if(this.visible<allItems){$(this.moreSelector()).show();$(this.hideSelector()).hide();if(this.visible>=2*this.step){$(this.allSelector()).show();$(this.moreSelector()).parent().addClass('blueGrayButton');$(this.moreSelector()).parent().removeClass('redButton');}
else{$(this.allSelector()).hide();$(this.moreSelector()).parent().addClass('redButton');$(this.moreSelector()).parent().removeClass('blueGrayButton');}}
else if(allItems<=this.step){$(this.moreSelector()).hide();$(this.allSelector()).hide();$(this.hideSelector()).hide();}
else{$(this.moreSelector()).hide();$(this.allSelector()).hide();$(this.hideSelector()).show();}}
toggleItems(itemCount){if(this.debug)
console.debug(this.name+" -> Visible("+this.visible+"), Toggling items: "+itemCount);let oldVisible=this.visible;if(itemCount===0)
this.visible=this.step;else
this.visible+=itemCount;if(this.debug){console.debug(this.name+" Display=none :");console.debug($(this.itemSelector+":nth-child(n+"+(this.visible+this.offset)+")"));console.debug(this.name+" Display=block :");console.debug($(this.itemSelector+":nth-child(-n+"+(this.visible+this.offset)+")"));}
$(this.itemSelector).css("display","block");$(this.itemSelector+":nth-child(n+"+(this.visible+this.offset)+")").addClass('not-show-important');$(this.itemSelector+":nth-child(-n+"+(this.visible+this.offset)+")").removeClass('not-show-important');$(this).blur();this.toggleButtons();if(itemCount===0){if($(this.moreSelector()).length){$(this.moreSelector())[0].focus();srSpeak($(this.moreSelector()).text());}}
else{let $firstAnchor=$(this.itemSelector+":nth-child("+(oldVisible+this.offset+1)+") a:first-of-type");if($firstAnchor.length>0){$firstAnchor[0].focus();srSpeak($($firstAnchor[0]).text());}}}
makeExpandable(insertSelector){$(insertSelector).after('<div class="mediumButton grayButton" style="width:98%;margin:0;"><a id="'+this.hideId+'" tabindex="0" style="cursor:pointer;margin-top:-10px;"><span>Hide</span></a></div>');$(insertSelector).append('<div class="centeredRow"> \
		<div class="mediumButton redButton"><a id="'+this.moreId+'" tabindex="0" style="cursor:pointer"><span>Load More</span></a></div> \
		<div class="spacer"></div>\
		<div class="mediumButton redButton"><a id="'+this.allId+'" tabindex="0" style="cursor:pointer"><span>Load All ('+$(this.itemSelector).length+')</span></a></div>\
		</div>');let parent=this;$(this.moreSelector()).click(function(){parent.toggleItems(4);});$(this.hideSelector()).click(function(){parent.toggleItems(0);});$(this.allSelector()).click(function(){parent.toggleItems(5000);});$(this.moreSelector()+", "+this.hideSelector()+", "+this.allSelector()).keyup(function(e){if(e.keyCode===13){$(this).trigger('click');}});this.toggleItems(0);this.toggleButtons();if($(this.moreSelector()).length)
$(this.moreSelector())[0].blur();$('body')[0].tabIndex=-1;$('body')[0].focus();window.scrollTo(0,0);}}
var listExpander=listExpander_es6;