(function(){
  var MODAL_KEY = 'simplinova_newsletter_shown_v1';
  var DELAY_SECONDS = 6;

  function showModal() {
    var modal = document.getElementById('newsletter-modal');
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function hideModal() {
    var modal = document.getElementById('newsletter-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function init() {
    document.addEventListener('DOMContentLoaded', function(){
      var modal = document.getElementById('newsletter-modal');
      if (!modal) return;

      var closeBtn = modal.querySelector('.newsletter-modal__close');
      closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        hideModal();
        try { localStorage.setItem(MODAL_KEY, 'dismissed'); } catch(e){}
      });

      // close on overlay click
      modal.addEventListener('click', function(e){
        if (e.target === modal) {
          hideModal();
          try { localStorage.setItem(MODAL_KEY, 'dismissed'); } catch(e){}
        }
      });

      // handle ESC
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') hideModal();
      });

      var form = document.getElementById('newsletter-form');
      if (form) {
        form.addEventListener('submit', function(evt){
          evt.preventDefault();
          var emailInput = form.querySelector('input[type="email"]');
          var email = emailInput && emailInput.value;
          if (!email) return;

          // optimistic UI
          var submitBtn = form.querySelector('button[type="submit"]');
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';

          // Send a POST to /contact to create a contact (Shopify contact form)
          var payload = new URLSearchParams();
          payload.append('form_type','customer');
          payload.append('contact[email]', email);

          fetch('/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload.toString()
          }).then(function(resp){
            // success path (we don't rely on response body)
            submitBtn.textContent = 'Subscribed!';
            try { localStorage.setItem(MODAL_KEY, 'subscribed'); } catch(e){}
            setTimeout(hideModal, 900);
          }).catch(function(){
            submitBtn.disabled = false;
            submitBtn.textContent = 'Subscribe & Get 10% Off';
            alert('There was a problem subscribing. Please try again.');
          });
        });
      }

      // Only show if not dismissed/subscribed
      try {
        var status = localStorage.getItem(MODAL_KEY);
        if (!status) {
          // read possible delay from section settings via data attribute (optional)
          var delayAttr = modal.dataset.delaySeconds;
          var delay = parseInt(delayAttr) || DELAY_SECONDS;
          setTimeout(showModal, delay * 1000);
        }
      } catch(e) {
        setTimeout(showModal, DELAY_SECONDS * 1000);
      }
    });
  }

  init();
})();
