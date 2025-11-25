document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      title: "hi & welcome !",

      subtitle: `
            this website is currently under construction...<br>
            while waiting, please take care of my energetic kitties!<br><br>
            you might have questions... if so, please contact me:<br><br>
      <a href="mailto:contact@sunshinethomann.ch"class="email-link">contact@sunshinethomann.ch</a>
        `,
    },

    fr: {
      title: "salut et bienvenue !",

      subtitle: `
            ce site est actuellement en construction...<br>
            en attendant, prenez soin de mes chatons très actifs!<br><br>
            si vous avez des questions… contactez-moi :<br><br>
      <a href="mailto:contact@sunshinethomann.ch" class="email-link">contact@sunshinethomann.ch</a>
        `,
    },
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      element.innerHTML = translations[lang][key];
    });
  }

  // Buttons
  document.getElementById("switch-fr").onclick = () => setLanguage("fr");
  document.getElementById("switch-en").onclick = () => setLanguage("en");

  // Default language
  setLanguage("en");
});
