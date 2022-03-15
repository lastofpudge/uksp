document.addEventListener("DOMContentLoaded", function (event) {
  function __getHelpCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function __setHelpCookie(name, value, options = {}) {
    options = {
      path: "/",
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  if (__getHelpCookie("uk_help_closed") !== undefined) return;

  document.body.innerHTML += `<div class="g2-line" id="js-g2-line">
<div class="g2-line__content">
<span class="g2-line__text show">
  <span>Stop Russian invasion into Europe. Learn how you can help Ukraine withstand</span>
  <a class="g2-line__btn-save" href="https://helpukrainewin.org/" rel="nofollow" target="_blank">HERE</a>
</span>
<span class="g2-line__stand">#StandWithUkraine</span>
</div>
<button  id="js-g2-line__close" class="g2-line__close">&#10006;</button>  
</div>`;

  let g2_close = document.getElementById("js-g2-line__close");
  let g2_block = document.getElementById("js-g2-line");

  g2_close.onclick = function (event) {
    g2_block.style.display = "none";

    __setHelpCookie("uk_help_closed", "1", {});
  };
});
