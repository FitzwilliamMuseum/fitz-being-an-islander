$(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['introduction', 'sponsors'],
      navigation: {
        'position': 'right',
        'tooltips': ['Introduction', 'Sponsors']
      },
      afterRender: function(){
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function(anchorLink, index){
        if(index>1){
          $('#pp-nav').removeClass('custom');
        }else{
          $('#pp-nav').addClass('custom');
        }
      }
    });
  });
  const button = document.querySelector("#button");
  const icon = document.querySelector("#button > i");
  const audio = document.querySelector("audio");

  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();
      icon.classList.remove('fa-volume-up');
      icon.classList.add('fa-volume-mute');

    } else {
      audio.pause();
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-up');
    }
    button.classList.add("fade");
  });
