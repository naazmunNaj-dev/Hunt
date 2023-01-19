$(function () {
  $(".banner-part-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    pauseOnHover: false,
    prevArrow: ".left",
    nextArrow: ".right",
  });

  $(".service-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    pauseOnHover: false,
    prevArrow: ".top",
    nextArrow: ".bottom",
    vertical: true,
    centerMode: true,
    centerPadding: "20px",
  });

  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 1000,
    vertical: true,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: ".text-details-slider",
    prevArrow: ".up",
    nextArrow: ".down",
  });

  $(".text-details-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    vertical: true,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: ".image-slider",
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
