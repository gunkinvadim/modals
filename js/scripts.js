window.onload = function(e) {

    var openBtn = document.querySelectorAll('.button-open');


    function Popup(){


        var body = document.querySelector('body');
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.append(overlay);

        var popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = '<div class="popup-content"></div><button class="button-close">&times</button>';
        body.append(popup);
        
        var popupContent = document.querySelector('.popup-content');
        var closeBtn = document.querySelector('.button-close');
        
        this.open = function(content){
            console.log(content);
            overlay.classList.add('showed');
            popup.classList.add('showed');
            popupContent.innerHTML = content;
        };
        
        this.close = function(){
            overlay.classList.remove('showed');
            popup.classList.remove('showed');
        };

        overlay.onclick = this.close;
        closeBtn.onclick = this.close;
        
    }

    var p = new Popup();

    openBtn[0].onclick = function(){
        p.open('Popup 1');
    };

    openBtn[1].onclick = function(){
        p.open('Popup 2');
    };

    openBtn[2].onclick = function(){
        p.open('Popup 3');
    };

};