//META{"name":"channelCollapseButton"}*//
var  channelCollapseButton = function(){};

channelCollapseButton.prototype.getName = function(){
    return "Channel Collapse Button";
};
channelCollapseButton.prototype.getDescription = function(){
    return "Create a button that allows for hiding of channel list";
};
channelCollapseButton.prototype.getVersion = function(){
    return "1.0.1";
};
channelCollapseButton.prototype.getAuthor = function(){
    return '<a href="https://github.com/IRDeNial" target="_BLANK">DeNial</a>';
};

channelCollapseButton.prototype.load = function(){
    this.loaded = false;
    this.bdIsLoaded = false;
    this.collapseButtonDisplayed = false;

    this.addToolbarItem = function(){
        if(!this.collapseButtonDisplayed) {
            var newToolbarItem = document.createElement('button');
            newToolbarItem.type = 'button';
            newToolbarItem.classList.add('show-channels-button');
            newToolbarItem.classList.add('active');
            newToolbarItem.innerHTML = '<span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); width: 0; height: 5px; text-align: center; position: absolute; top: 1px; left: 0;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); width: 0; height: 5px; position: absolute; top: 6px; left: 0;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); width: 0; height: 5px; position: absolute; top: 11px; left: 0;">-</span>';

            document.querySelector('.header-toolbar').insertBefore(newToolbarItem,document.querySelector('.header-toolbar div.separator'));
            
            document.querySelector('.show-channels-button').addEventListener('click',function(e){
                if(this.classList.contains('active')) {
                    document.querySelector('.channels-wrap').style.display = 'none';
                    this.classList.toggle('active');
                } else {
                    document.querySelector('.channels-wrap').style.display = 'flex';
                    this.classList.toggle('active');
                }
            });
            this.collapseButtonDisplayed = true;
        }
    }
};
channelCollapseButton.prototype.unload = function(){};
channelCollapseButton.prototype.stop = function(){
    if(document.querySelectorAll('.show-channels-button').length) {
        document.querySelector('.show-channels-button').outerHTML = "";
        delete document.querySelector('.show-channels-button');
    }
    document.querySelector('.channels-wrap').style.display = 'flex';
    this.loaded = false;
};
channelCollapseButton.prototype.onSwitch = function(){
    if(this.loaded) {
        this.addToolbarItem();
    }
}
channelCollapseButton.prototype.observer = function(e) {
    if(!this.loaded) {
        if(e.target.classList.contains("guilds")) {
            this.loaded = true;
            this.bdIsLoaded = true;
            this.addToolbarItem();
        }
    }
};
channelCollapseButton.prototype.start = function(){
    if(this.bdIsLoaded) {
        this.addToolbarItem();
    }
};