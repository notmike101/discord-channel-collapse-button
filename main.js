(function(){
    var ChannelCollapse = {
        addToolbarItem: function() {
            if(document.querySelectorAll('.show-channels-button').length == 0) {
                var newToolbarItem = document.createElement('span');
                newToolbarItem.classList.add('show-channels-button');
                newToolbarItem.classList.add('active');
                newToolbarItem.classList.add(document.querySelector('[class*="headerBar"] span[class^="iconMargin"]').classList[0])
                newToolbarItem.style.width = '26px'
                newToolbarItem.style.position = 'relative'
                newToolbarItem.style.top = '-2px'
                newToolbarItem.style.display = 'flex'
                newToolbarItem.style.flexDirection = 'column'
                newToolbarItem.style.justifyContent = 'flex-start'
                newToolbarItem.style.cursor = 'pointer'
                newToolbarItem.innerHTML = '<span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(5,1); width: 0; height: 5px; text-align: center;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(5.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(5,1); width: 0; height: 5px;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(5,1); width: 0; height: 5px;">-</span>';

                document.querySelector('[class*="headerBar"]>:nth-child(2)').insertBefore(newToolbarItem,document.querySelector('[class^="divider"]'));

                document.querySelector('.show-channels-button').addEventListener('click',function(e){
                    if(this.classList.contains('active')) {
                        document.querySelector('[class^="channels"]').style.display = 'none';
                        this.classList.toggle('active');
                    } else {
                        document.querySelector('[class^="channels"]').style.display = 'flex';
                        this.classList.toggle('active');
                    }
                });
            }
        },
        addEventListeners: function(){
            var guilds = document.querySelectorAll('[class^="guild"]');
            for(var i = 0;i < guilds.length; ++i) {
                guilds[i].addEventListener('click',function(){
                    window.setTimeout(function(){
                        console.log("Added event listener");
                        ChannelCollapse.addToolbarItem();
                    },1);
                });
            }
        }
    };

    ChannelCollapse.addToolbarItem();
    ChannelCollapse.addEventListeners();
})();
