javascript:(
  function(){
    var css='#pw-handler, #pw-overlay { display: none !important }';

    if ('\v'=='v') {
      /* IE Only */
      document.createStyleSheet().cssText = css;
    } else {
      /* Webkit only */
      var tag = document.createElement('style');
      tag.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(tag);
      tag[(typeof document.body.style.WebkitAppearance=='string') ? 'innerText' : 'innerHTML'] = css;
    }
  }
)();
