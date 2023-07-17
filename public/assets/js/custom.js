
(function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); 


    const navHeader = document.querySelector('.main_header_content');
    // const siteHeader = document.querySelector('.sticky_header_content');
    // const stickyHeader = document.querySelector('.sticky_header_content .sticky_header_default');
      const windowpos = window.pageYOffset;
      if(windowpos > 500)
      {
        navHeader.classList.add('hidden')
      }
    
    // if (siteHeader) {
    //   const windowpos = window.pageYOffset;
    //   if (windowpos > 500) {
    //     siteHeader.classList.add('fixed-header');
    //     stickyHeader.classList.add('wow', 'animate__animated', 'animate__slideInDown');
    //   } else {
    //     siteHeader.classList.remove('fixed-header');
    //     stickyHeader.classList.remove('wow', 'animate__animated', 'animate__slideInDown');
    //   }
    // }
  