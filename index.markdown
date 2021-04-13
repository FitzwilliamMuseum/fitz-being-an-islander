---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: 'Being an Islander'
---

<div class="section" id="holding">
  <div class="intro col-md-12">
  <a href="https://www.fitzmuseum.cam.ac.uk"><img src="https://beta.fitz.ms/images/logos/Fitz_logo_white.png" width="150" alt="Fitz logo" /></a>  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/StavrosNiarchosFoundation-logo_%282013%29.svg/352px-StavrosNiarchosFoundation-logo_%282013%29.svg.png" />
  <h1>{{page.title}}</h1>
  <p>Art and Identity of the large Mediterranean Islands</p>
  <button id="button">
    <i class="fas fa-volume-up"></i>
  </button>
  </div>
  <div id="player">
      <audio autoplay hidden loop controls>
       <source src="{{ site.baseurl }}/mp3/sea.mp3" type="audio/mpeg">
                  If you're reading this, audio isn't supported.
      </audio>
  </div>
</div>
