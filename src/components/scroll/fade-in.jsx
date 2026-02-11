import { useEffect } from "react";

export const useFadeIn = () => {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,          
        rootMargin: "0px 0px -50px 0px"
      }
    );

    faders.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
