"use strict";

var burger = document.querySelector('.burger'),
    menu = document.querySelector('nav');
burger.addEventListener('click', function () {
  menu.classList.toggle('nav--active');
  burger.classList.toggle('burger--active');
  document.body.classList.toggle('disable-scroll');
});
"use strict";

var heroSwiper = new Swiper('.hero__swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    allowTouchMove: false
  },
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
var casesSwiper = new Swiper('.cases__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      watchOverflow: true,
      freeMode: true
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      watchOverflow: true,
      freeMode: true
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true
    }
  }
});
"use strict";

function formMessage() {
  var message = document.querySelector('.main-form__message');
  message.classList.add('main-form__message--active');
}

new window.JustValidate('.main-form', {
  rules: {
    mail: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 30
    },
    textarea: {
      required: true,
      minLenght: 10,
      maxLenght: 40
    }
  },
  messages: {
    name: 'Как вас зовут?',
    mail: 'Укажите ваш e-mail',
    textarea: 'Вы ничего не написали о компании'
  },
  colorWrong: '#00b8f0',
  tooltip: {
    selectorWrap: '.tooltip-wrapper' // default value - just-validate-tooltip-container

  },
  submitHandler: function submitHandler(form, values, ajax) {
    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function callback(response) {
        console.log(response);

        if (response == 'OK') {
          formMessage();
        }
      }
    });
  }
}); //

function mailMessage(mailForm) {
  var message = mailForm.parentElement.querySelector('.mail-form__message');
  message.classList.add('mail-form__message--active');
  mailForm.classList.remove('mail-form--active');
}

document.querySelectorAll('.mail-form__btn').forEach(function (target) {
  target.addEventListener('click', function (evt) {
    var mailForm = evt.target.parentElement;

    if (!mailForm.classList.contains('.mail-form--active')) {
      mailForm.classList.add('mail-form--active');
    }

    ;
    new window.JustValidate('.mail-form--active', {
      rules: {
        mail: {
          required: true,
          email: true
        }
      },
      messages: {
        mail: 'Укажите ваш e-mail'
      },
      colorWrong: '#00b8f0',
      tooltip: {
        selectorWrap: '.tooltip-wrapper' // default value - just-validate-tooltip-container

      },
      submitHandler: function submitHandler(form, values, ajax) {
        ajax({
          url: 'https://just-validate-api.herokuapp.com/submit',
          method: 'POST',
          data: values,
          async: true,
          callback: function callback(response) {
            console.log(response);

            if (response == 'OK') {
              mailMessage(mailForm);
            }
          }
        });
      }
    });
  });
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsInNsaWRlcnMuanMiLCJ2YWxpZGF0aW9uLmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6WyJidXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJvZHkiLCJoZXJvU3dpcGVyIiwiU3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiLCJwYXVzZU9uTW91c2VFbnRlciIsImFsbG93VG91Y2hNb3ZlIiwic3BlZWQiLCJlZmZlY3QiLCJmYWRlRWZmZWN0IiwiY3Jvc3NGYWRlIiwiY2FzZXNTd2lwZXIiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwid2F0Y2hPdmVyZmxvdyIsImZyZWVNb2RlIiwiZm9ybU1lc3NhZ2UiLCJtZXNzYWdlIiwiYWRkIiwid2luZG93IiwiSnVzdFZhbGlkYXRlIiwicnVsZXMiLCJtYWlsIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5hbWUiLCJtaW5MZW5naHQiLCJtYXhMZW5naHQiLCJ0ZXh0YXJlYSIsIm1lc3NhZ2VzIiwiY29sb3JXcm9uZyIsInRvb2x0aXAiLCJzZWxlY3RvcldyYXAiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybSIsInZhbHVlcyIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiYXN5bmMiLCJjYWxsYmFjayIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm1haWxNZXNzYWdlIiwibWFpbEZvcm0iLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0YXJnZXQiLCJldnQiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQUEsSUFDRUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FEVDtBQUlBRixNQUFNLENBQUNJLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckNELEVBQUFBLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxNQUFmLENBQXNCLGFBQXRCO0FBQ0FOLEVBQUFBLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsZ0JBQXhCO0FBQ0FMLEVBQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjRixTQUFkLENBQXdCQyxNQUF4QixDQUErQixnQkFBL0I7QUFDRCxDQUpEOzs7QUNIQSxJQUFNRSxVQUFVLEdBQUcsSUFBSUMsTUFBSixDQUFXLGVBQVgsRUFBNEI7QUFDN0NDLEVBQUFBLFNBQVMsRUFBRSxZQURrQztBQUU3Q0MsRUFBQUEsSUFBSSxFQUFFLElBRnVDO0FBRzdDQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFLElBREM7QUFFUkMsSUFBQUEsaUJBQWlCLEVBQUUsSUFGWDtBQUdSQyxJQUFBQSxjQUFjLEVBQUU7QUFIUixHQUhtQztBQVE3Q0MsRUFBQUEsS0FBSyxFQUFFLElBUnNDO0FBUzdDQyxFQUFBQSxNQUFNLEVBQUUsTUFUcUM7QUFVN0NDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxTQUFTLEVBQUU7QUFERDtBQVZpQyxDQUE1QixDQUFuQjtBQWVBLElBQU1DLFdBQVcsR0FBRyxJQUFJWCxNQUFKLENBQVcsZ0JBQVgsRUFBNkI7QUFDL0NDLEVBQUFBLFNBQVMsRUFBRSxZQURvQztBQUUvQ1csRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLEVBQUUsRUFBRSxvQkFETTtBQUVWQyxJQUFBQSxJQUFJLEVBQUUsU0FGSTtBQUdWQyxJQUFBQSxTQUFTLEVBQUU7QUFIRCxHQUZtQztBQU8vQ0MsRUFBQUEsV0FBVyxFQUFFO0FBQ1gsU0FBSztBQUNIQyxNQUFBQSxhQUFhLEVBQUUsQ0FEWjtBQUVIQyxNQUFBQSxZQUFZLEVBQUUsRUFGWDtBQUdIQyxNQUFBQSxhQUFhLEVBQUUsSUFIWjtBQUlIQyxNQUFBQSxRQUFRLEVBQUU7QUFKUCxLQURNO0FBT1gsU0FBSztBQUNISCxNQUFBQSxhQUFhLEVBQUUsR0FEWjtBQUVIQyxNQUFBQSxZQUFZLEVBQUUsRUFGWDtBQUdIQyxNQUFBQSxhQUFhLEVBQUUsSUFIWjtBQUlIQyxNQUFBQSxRQUFRLEVBQUU7QUFKUCxLQVBNO0FBYVgsVUFBTTtBQUNKSCxNQUFBQSxhQUFhLEVBQUUsQ0FEWDtBQUVKQyxNQUFBQSxZQUFZLEVBQUUsRUFGVjtBQUdKRSxNQUFBQSxRQUFRLEVBQUU7QUFITjtBQWJLO0FBUGtDLENBQTdCLENBQXBCOzs7QUNoQkEsU0FBU0MsV0FBVCxHQUF1QjtBQUNyQixNQUFPQyxPQUFPLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQWpCO0FBRUE2QixFQUFBQSxPQUFPLENBQUMxQixTQUFSLENBQWtCMkIsR0FBbEIsQ0FBc0IsNEJBQXRCO0FBQ0Q7O0FBR0QsSUFBSUMsTUFBTSxDQUFDQyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDO0FBQ3BDQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFFBQVEsRUFBRSxJQUROO0FBRUpDLE1BQUFBLEtBQUssRUFBRTtBQUZILEtBREQ7QUFLTEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLFFBQVEsRUFBRSxJQUROO0FBRUpHLE1BQUFBLFNBQVMsRUFBRSxDQUZQO0FBR0pDLE1BQUFBLFNBQVMsRUFBRTtBQUhQLEtBTEQ7QUFVTEMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JMLE1BQUFBLFFBQVEsRUFBRSxJQURGO0FBRVJHLE1BQUFBLFNBQVMsRUFBRSxFQUZIO0FBR1JDLE1BQUFBLFNBQVMsRUFBRTtBQUhIO0FBVkwsR0FENkI7QUFpQnBDRSxFQUFBQSxRQUFRLEVBQUU7QUFDUkosSUFBQUEsSUFBSSxFQUFFLGdCQURFO0FBRVJILElBQUFBLElBQUksRUFBRSxvQkFGRTtBQUdSTSxJQUFBQSxRQUFRLEVBQUU7QUFIRixHQWpCMEI7QUFzQnBDRSxFQUFBQSxVQUFVLEVBQUUsU0F0QndCO0FBdUJwQ0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1BDLElBQUFBLFlBQVksRUFBRSxrQkFEUCxDQUMwQjs7QUFEMUIsR0F2QjJCO0FBMkJwQ0MsRUFBQUEsYUFBYSxFQUFFLHVCQUFVQyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFFM0NBLElBQUFBLElBQUksQ0FBQztBQUNIQyxNQUFBQSxHQUFHLEVBQUUsZ0RBREY7QUFFSEMsTUFBQUEsTUFBTSxFQUFFLE1BRkw7QUFHSEMsTUFBQUEsSUFBSSxFQUFFSixNQUhIO0FBSUhLLE1BQUFBLEtBQUssRUFBRSxJQUpKO0FBS0hDLE1BQUFBLFFBQVEsRUFBRSxrQkFBVUMsUUFBVixFQUFvQjtBQUM1QkMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBQ0EsWUFBSUEsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCMUIsVUFBQUEsV0FBVztBQUNaO0FBQ0Y7QUFWRSxLQUFELENBQUo7QUFZRDtBQXpDbUMsQ0FBdEMsRSxDQTZDQTs7QUFFQSxTQUFTNkIsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0IsTUFBTTdCLE9BQU8sR0FBRzZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QjNELGFBQXZCLENBQXFDLHFCQUFyQyxDQUFoQjtBQUNBNkIsRUFBQUEsT0FBTyxDQUFDMUIsU0FBUixDQUFrQjJCLEdBQWxCLENBQXNCLDRCQUF0QjtBQUNBNEIsRUFBQUEsUUFBUSxDQUFDdkQsU0FBVCxDQUFtQnlELE1BQW5CLENBQTBCLG1CQUExQjtBQUNEOztBQUVEN0QsUUFBUSxDQUFDOEQsZ0JBQVQsQ0FBMEIsaUJBQTFCLEVBQTZDQyxPQUE3QyxDQUFxRCxVQUFVQyxNQUFWLEVBQWtCO0FBQ3JFQSxFQUFBQSxNQUFNLENBQUM3RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVOEQsR0FBVixFQUFlO0FBRTlDLFFBQU1OLFFBQVEsR0FBR00sR0FBRyxDQUFDRCxNQUFKLENBQVdKLGFBQTVCOztBQUVBLFFBQUksQ0FBQ0QsUUFBUSxDQUFDdkQsU0FBVCxDQUFtQjhELFFBQW5CLENBQTRCLG9CQUE1QixDQUFMLEVBQXdEO0FBQ3REUCxNQUFBQSxRQUFRLENBQUN2RCxTQUFULENBQW1CMkIsR0FBbkIsQ0FBdUIsbUJBQXZCO0FBQ0Q7O0FBQUE7QUFJRCxRQUFJQyxNQUFNLENBQUNDLFlBQVgsQ0FBd0Isb0JBQXhCLEVBQThDO0FBQzVDQyxNQUFBQSxLQUFLLEVBQUU7QUFDTEMsUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLFFBQVEsRUFBRSxJQUROO0FBRUpDLFVBQUFBLEtBQUssRUFBRTtBQUZIO0FBREQsT0FEcUM7QUFPNUNLLE1BQUFBLFFBQVEsRUFBRTtBQUNSUCxRQUFBQSxJQUFJLEVBQUU7QUFERSxPQVBrQztBQVU1Q1EsTUFBQUEsVUFBVSxFQUFFLFNBVmdDO0FBVzVDQyxNQUFBQSxPQUFPLEVBQUU7QUFDUEMsUUFBQUEsWUFBWSxFQUFFLGtCQURQLENBQzBCOztBQUQxQixPQVhtQztBQWU1Q0MsTUFBQUEsYUFBYSxFQUFFLHVCQUFVQyxJQUFWLEVBQWdCQyxNQUFoQixFQUF3QkMsSUFBeEIsRUFBOEI7QUFFM0NBLFFBQUFBLElBQUksQ0FBQztBQUNIQyxVQUFBQSxHQUFHLEVBQUUsZ0RBREY7QUFFSEMsVUFBQUEsTUFBTSxFQUFFLE1BRkw7QUFHSEMsVUFBQUEsSUFBSSxFQUFFSixNQUhIO0FBSUhLLFVBQUFBLEtBQUssRUFBRSxJQUpKO0FBS0hDLFVBQUFBLFFBQVEsRUFBRSxrQkFBVUMsUUFBVixFQUFvQjtBQUM1QkMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7O0FBQ0EsZ0JBQUlBLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkcsY0FBQUEsV0FBVyxDQUFDQyxRQUFELENBQVg7QUFDRDtBQUNGO0FBVkUsU0FBRCxDQUFKO0FBWUQ7QUE3QjJDLEtBQTlDO0FBK0JELEdBekNEO0FBMENELENBM0NEO0FDNURBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyksXG4gIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKVxuXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhYmxlLXNjcm9sbCcpO1xufSk7XG4iLCJcbmNvbnN0IGhlcm9Td2lwZXIgPSBuZXcgU3dpcGVyKCcuaGVyb19fc3dpcGVyJywge1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogNTAwMCxcbiAgICBwYXVzZU9uTW91c2VFbnRlcjogdHJ1ZSxcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIH0sXG4gIHNwZWVkOiAxMDAwLFxuICBlZmZlY3Q6ICdmYWRlJyxcbiAgZmFkZUVmZmVjdDoge1xuICAgIGNyb3NzRmFkZTogdHJ1ZVxuICB9LFxufSk7XG5cbmNvbnN0IGNhc2VzU3dpcGVyID0gbmV3IFN3aXBlcignLmNhc2VzX19zd2lwZXInLCB7XG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdidWxsZXRzJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgMzIwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXG4gICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICB9LFxuICAgIDc2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMi41LFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIHdhdGNoT3ZlcmZsb3c6IHRydWUsXG4gICAgICBmcmVlTW9kZTogdHJ1ZSxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgfVxuICB9XG59KTtcbiIsImZ1bmN0aW9uIGZvcm1NZXNzYWdlKCkge1xuICBjb25zdCAgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWZvcm1fX21lc3NhZ2UnKVxuXG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbi1mb3JtX19tZXNzYWdlLS1hY3RpdmUnKTtcbn1cblxuXG5uZXcgd2luZG93Lkp1c3RWYWxpZGF0ZSgnLm1haW4tZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBtYWlsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5naHQ6IDIsXG4gICAgICBtYXhMZW5naHQ6IDMwXG4gICAgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5naHQ6IDEwLFxuICAgICAgbWF4TGVuZ2h0OiA0MFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZTogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgIG1haWw6ICfQo9C60LDQttC40YLQtSDQstCw0YggZS1tYWlsJyxcbiAgICB0ZXh0YXJlYTogJ9CS0Ysg0L3QuNGH0LXQs9C+INC90LUg0L3QsNC/0LjRgdCw0LvQuCDQviDQutC+0LzQv9Cw0L3QuNC4JyxcbiAgfSxcbiAgY29sb3JXcm9uZzogJyMwMGI4ZjAnLFxuICB0b29sdGlwOiB7XG4gICAgc2VsZWN0b3JXcmFwOiAnLnRvb2x0aXAtd3JhcHBlcicgLy8gZGVmYXVsdCB2YWx1ZSAtIGp1c3QtdmFsaWRhdGUtdG9vbHRpcC1jb250YWluZXJcbiAgfSxcblxuICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSwgdmFsdWVzLCBhamF4KSB7XG5cbiAgICBhamF4KHtcbiAgICAgIHVybDogJ2h0dHBzOi8vanVzdC12YWxpZGF0ZS1hcGkuaGVyb2t1YXBwLmNvbS9zdWJtaXQnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICBhc3luYzogdHJ1ZSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIGlmIChyZXNwb25zZSA9PSAnT0snKSB7XG4gICAgICAgICAgZm9ybU1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG5cblxuLy9cblxuZnVuY3Rpb24gbWFpbE1lc3NhZ2UobWFpbEZvcm0pIHtcbiAgY29uc3QgbWVzc2FnZSA9IG1haWxGb3JtLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1haWwtZm9ybV9fbWVzc2FnZScpXG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWFpbC1mb3JtX19tZXNzYWdlLS1hY3RpdmUnKTtcbiAgbWFpbEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbC1mb3JtLS1hY3RpdmUnKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haWwtZm9ybV9fYnRuJykuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcblxuICAgIGNvbnN0IG1haWxGb3JtID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKCFtYWlsRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJy5tYWlsLWZvcm0tLWFjdGl2ZScpKSB7XG4gICAgICBtYWlsRm9ybS5jbGFzc0xpc3QuYWRkKCdtYWlsLWZvcm0tLWFjdGl2ZScpO1xuICAgIH07XG5cblxuXG4gICAgbmV3IHdpbmRvdy5KdXN0VmFsaWRhdGUoJy5tYWlsLWZvcm0tLWFjdGl2ZScsIHtcbiAgICAgIHJ1bGVzOiB7XG4gICAgICAgIG1haWw6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBtYWlsOiAn0KPQutCw0LbQuNGC0LUg0LLQsNGIIGUtbWFpbCcsXG4gICAgICB9LFxuICAgICAgY29sb3JXcm9uZzogJyMwMGI4ZjAnLFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBzZWxlY3RvcldyYXA6ICcudG9vbHRpcC13cmFwcGVyJyAvLyBkZWZhdWx0IHZhbHVlIC0ganVzdC12YWxpZGF0ZS10b29sdGlwLWNvbnRhaW5lclxuICAgICAgfSxcblxuICAgICAgc3VibWl0SGFuZGxlcjogZnVuY3Rpb24gKGZvcm0sIHZhbHVlcywgYWpheCkge1xuXG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vanVzdC12YWxpZGF0ZS1hcGkuaGVyb2t1YXBwLmNvbS9zdWJtaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnT0snKSB7XG4gICAgICAgICAgICAgIG1haWxNZXNzYWdlKG1haWxGb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsbnVsbF19
