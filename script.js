      function toggleTheme() {
        document.body.classList.toggle("night");
      }
      const sunElement = document.querySelector(".sun");
      const shadowElement = document.querySelector(".shadow");
      const bodyElement = document.body;

      let isDay = true;

      sunElement.addEventListener("click", () => {
        if (isDay) {
          bodyElement.classList.remove("day-mode");
          bodyElement.classList.add("night-mode");
          sunElement.classList.remove("day-sun");
          sunElement.classList.add("night-sun");
          bodyElement.style.animation = "dayToNight 10s forwards";
          sunElement.style.animation = "dayToNight2 10s forwards";
          shadowElement.classList.add("animate-shadow");
        } else {
          bodyElement.classList.remove("night-mode");
          bodyElement.classList.add("day-mode");
          sunElement.classList.remove("night-sun");
          sunElement.classList.add("day-sun");
          bodyElement.style.animation = "nightToDay 10s forwards";
          sunElement.style.animation = "nightToDay2 10s forwards";
          shadowElement.classList.add("animate-shadow");
        }
        isDay = !isDay;
      });
