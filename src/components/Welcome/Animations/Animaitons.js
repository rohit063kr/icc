import { Fragment, useEffect } from "react";

const Animations = function () {
  useEffect(() => {
    const navigation = document.querySelector(".navigation");
    const navigationBtn = document.querySelector(".navigation__menu-btn");

    const headerComponent = document.querySelector(".header");

    const headerDownBtn = document.querySelector(".header__down-link");

    const tertiaryBtnParentComponents = document.querySelectorAll(
      ".tertiary-btn-parent"
    );

    navigationBtn.addEventListener("click", function () {
      navigation.classList.toggle("navigation__nav-spread");
    });

    // Sticky-navigation
    const headerObserverOption = {
      root: null,
      threshold: 0.14,
      rootMargin: "0px",
    };

    const headerObserverCallback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          navigation.classList.remove("navigation--fixed");
        if (!entry.isIntersecting)
          navigation.classList.add("navigation--fixed");
      });
    };

    const headerObserver = new IntersectionObserver(
      headerObserverCallback,
      headerObserverOption
    );
    headerObserver.observe(headerComponent);

    // Revealing sections
    const sections = document.querySelectorAll(".section");

    const option = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px",
    };

    const sectionObserverCallBack = function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section-hidden");
        observer.unobserve(entry.target);
      });
    };

    const sectionObserver = new IntersectionObserver(
      sectionObserverCallBack,
      option
    );

    Array.from(sections).forEach((section) => {
      section.classList.add("section-hidden");
      sectionObserver.observe(section);
    });

    // Tertiary Buttons effect

    const btnEffectCallback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target
            .querySelector(".btn--tertiary")
            .classList.add("btn--active");
        if (!entry.isIntersecting)
          entry.target
            .querySelector(".btn--tertiary")
            .classList.remove("btn--active");
      });
    };

    const tertiaryBtnObserverOptions = {
      root: null,
      rootMargin: "-10px",
      threshold: 1,
    };

    const tertiaryBtnParentObserver = new IntersectionObserver(
      btnEffectCallback,
      tertiaryBtnObserverOptions
    );

    Array.from(tertiaryBtnParentComponents).forEach((component) => {
      tertiaryBtnParentObserver.observe(component);
    });

    // Smooth scrolling
    const smoothScroll = function (target) {
      const addresss = target.getAttribute("href");
      const element = document.querySelector(addresss);
      element.scrollIntoView({ behavior: "smooth" });
    };

    navigation.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("navigation__link")) return;
      smoothScroll(e.target);
      navigation.classList.remove("navigation__nav-spread");
    });

    headerDownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(e.target.closest(".header__down-link"));
    });
  });

  return <Fragment></Fragment>;
};

export default Animations;
