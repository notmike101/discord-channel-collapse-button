//META{"name":"channelCollapseButton"}*//
function channelCollapseButton(){};
channelCollapseButton.prototype.addToolbarItem = function(){
    if(document.querySelectorAll('.show-channels-button').length == 0) {
	    var newToolbarItem = document.createElement('span');
                    newToolbarItem.classList.add('show-channels-button');
                    newToolbarItem.classList.add('active');
                    newToolbarItem.classList.add(document.querySelector('[class*="toolbar"]').classList[0])
                    newToolbarItem.style.width = '26px'
                    newToolbarItem.style.position = 'relative'
                    newToolbarItem.style.top = '-2px'
                    newToolbarItem.style.display = 'flex'
                    newToolbarItem.style.flexDirection = 'column'
                    newToolbarItem.style.justifyContent = 'flex-start'
                    newToolbarItem.style.cursor = 'pointer'
                    newToolbarItem.innerHTML = '<span class="show-channels-button toolbar-1t6TWx active" style="width: 26px; position: relative; top: -2px; display: flex; flex-direction: column; justify-content: flex-start; cursor: pointer;"><span class="show-channels-button toolbar-1t6TWx" style="width: 26px;position: relative;top: -6px;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;font-family: serif !important;"><span class="show-channels-button toolbar-1t6TWx active" style="position: relative;top: -2px;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;padding-right: 30px;padding-bottom: 25px;"><span class="show-channels-button toolbar-1t6TWx active" style="position: initial;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;"><span class="show-channels-button toolbar-1t6TWx active" style="position: absolute;display: flex;flex-direction: column;justify-content: flex-start;cursor: pointer;margin-bottom: 15px;"><span style="display: block;color: var(--text-normal);-webkit-transform: scale(2.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;height: 1px;text-align: center;">-</span><span style="display: block; color: var(--text-normal); -webkit-transform: scale(5.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;height: 19px;">-</span><span style="display: block; color: var(--text-normal); -webkit-transform: scale(2.0, 1.0);-moz-transform:scale(2.0, 1.0);-ms-transform:scale(2.0, 1.0);-o-transform:scale(2.0, 1.0);transform: scale(5,2);width: 0;padding-bottom: 5px;">-</span>';

        document.querySelector('[class*="toolbar"]').insertBefore(newToolbarItem,document.querySelector('.search-36MZv-'));

        document.querySelector('.show-channels-button').addEventListener('click',function(e){
            if(this.classList.contains('active')) {
	document.querySelector('.sidebar-2K8pFh').style.display = 'none';
	this.classList.toggle('active');
            } else {
	document.querySelector('.sidebar-2K8pFh').style.display = 'flex';
	this.classList.toggle('active');
            }
        });
    }
}

channelCollapseButton.prototype.getName = function(){
    return "Channel Collapse Button";
};
channelCollapseButton.prototype.getDescription = function(){
    return "Create a button that allows for hiding of channel list";
};
channelCollapseButton.prototype.getVersion = function(){
    return "1.0.0";
};
channelCollapseButton.prototype.getAuthor = function(){
    return "Author: DeNial Debugger: ThatGeekyWeeb";
};
channelCollapseButton.prototype.start = function(){
    this.addToolbarItem();
    console.log("channelCollapseButton loaded");
};
channelCollapseButton.prototype.stop = function(){
    if(document.querySelectorAll('.show-channels-button').length) {
        document.querySelector('.show-channels-button').outerHTML = "";
        delete document.querySelector('.show-channels-button');
    }
    document.querySelector('.channels-wrap').style.display = 'flex';
    console.log("channelCollapseButton unloaded");
};
channelCollapseButton.prototype.load = function(){
    this.addToolbarItem();
};
channelCollapseButton.prototype.onSwitch = function(){
    this.addToolbarItem();
}
