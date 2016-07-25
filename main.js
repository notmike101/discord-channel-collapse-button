(function(){
    var workArea = document.querySelector('.header-toolbar');
    var newToolbarItem = document.createElement('div');
    newToolbarItem.style.marginLeft = '8px';
    newToolbarItem.innerHTML = '<button class="sloppy-show-channels-button active" style="" type="button"><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); width: 0; height: 5px; text-align: center; position: absolute; top: 1px; left: 0;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); height: 5px; position: absolute; top: 6px; left: 0;">-</span><span style="display: block; color: #fefefe; -webkit-transform: scale(2.0, 1.0); -moz-transform:scale(2.0, 1.0); -ms-transform:scale(2.0, 1.0); -o-transform:scale(2.0, 1.0); transform: scale(6,1); width: 100%; height: 5px; position: absolute; top: 11px; left: 0;">-</span></button>';
    workArea.insertBefore(newToolbarItem,document.querySelector('.header-toolbar div.separator'));

    document.querySelector('.sloppy-show-channels-button').addEventListener('click',function(e){
        if(this.classList.contains('active')) {
            document.querySelector('.channels-wrap').style.display = 'none';
            this.classList.toggle('active');
        } else {
            document.querySelector('.channels-wrap').style.display = 'flex';
            this.classList.toggle('active');
        }
    });
})();
