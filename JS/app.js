"use strict";
(function ($) {
  $(document).ready(function () {
    $(".food-slider").slick({
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: ".prev-btn",
      nextArrow: ".next-btn",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 839,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const dealTime = "31 oct 2021 00:00:00";

function countdown() {
  const dealTimeDate = new Date(dealTime).getTime();
  const currentDate = new Date().getTime();
  const milliSecondsGap = dealTimeDate - currentDate;

  // how time works?
  const second = 1000;
  const minute = second * 60; //60,000
  const hour = minute * 60; //36,00,000
  const day = hour * 24; //8,46,00,000

  // calculate
  const textDay = Math.floor(milliSecondsGap / day); // round up and get day
  const textHour = Math.floor((milliSecondsGap % day) / hour); // remainder as  day
  const textMinute = Math.floor((milliSecondsGap % hour) / minute); // remainder as  hour
  const textSecond = Math.floor((milliSecondsGap % minute) / second); // remainder as  minute

  days.innerText = textDay;
  hours.innerText = textHour;
  minutes.innerText = textMinute;
  seconds.innerText = textSecond;
}

setInterval(countdown, 1000);

const siteContentWrapper = document.querySelector(".site-content-wrapper");
const navBackground = document.querySelector(".nav-background");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const navTrigger = document.querySelector(".nav-trigger");

navTrigger.addEventListener("click", function trigger() {
  siteContentWrapper.classList.toggle("scaled");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  navBackground.classList.toggle("display");
});
