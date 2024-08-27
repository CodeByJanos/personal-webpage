import authProjectImg from "../../assets/auth_project.png";
import blogProjectImg from "../../assets/webdevs-cover.png";
import passManegerImg from "../../assets/pass_maneger_cover.png";

export const data = [
  {
    name: {
      en: "MERN AUTH",
      hu: "MERN AUTH"
    },
    description: {
      en: "This project was developed using the MERN stack and features a comprehensive authentication system, allowing users to update and delete their profiles. Additionally, Google authentication is integrated to enhance user login security and convenience.",
      hu: "Ez a projekt a MERN stack használatával készült, és egy átfogó hitelesítési rendszert tartalmaz, amely lehetővé teszi a felhasználók számára profiljaik frissítését és törlését. Továbbá, a Google-hitelesítés integrálva van, hogy növelje a felhasználói bejelentkezési biztonságot és kényelmet."
    },
    img: authProjectImg,
    url: "https://mern-auth-zmyu.onrender.com"
  },
  
  {
    name: {
      en: "WEBDEVS PORTAL",
      hu: "WEBDEVS PORTAL"
    },
    description: {
      en: "This project is a dynamic web development portal built using the Python Flask framework. The portal provides users with access to various web development resources, tutorials, and the ability to manage their own profiles. Flask's flexible and lightweight architecture enabled the development of a scalable and secure application, including an authentication system and database integration. Modern frontend technologies were also implemented to enhance the user experience.",
      hu: "Ez a projekt egy dinamikus webfejlesztői portál, amely Python Flask keretrendszerrel készült. A portál lehetőséget biztosít a felhasználók számára, hogy hozzáférjenek különböző webfejlesztési erőforrásokhoz, oktatóanyagokhoz, valamint saját profiljukat kezeljék. A Flask rugalmas és könnyű architektúrája lehetővé tette a skálázható és biztonságos alkalmazásfejlesztést, beleértve az autentikációs rendszert és az adatbázis integrációt is. A felhasználói élmény fokozására modern frontend technológiák is implementálásra kerültek."
    },
    img: blogProjectImg,
    url: "https://webdevs-5udt.onrender.com"
  },

  {
    name: {
      en: "PASSWORD MANAGER",
      hu: "JELSZÓKEZELŐ"
    },
    description: {
      en: "This is a useful offline app with a Python Tkinter interface. It's my second non-web service project. Users can store email addresses and generated passwords for their websites, ensuring security and easy credential management.",
      hu: "Ez egy hasznos offline alkalmazás Python Tkinter felülettel. Ez a második nem webszolgáltatásos projektem. A felhasználók tárolhatják az e-mail címeket és a generált jelszavakat a webhelyeikhez, biztosítva ezzel a biztonságot és a könnyű hitelesítő adatok kezelését."
    },
    img: passManegerImg,
    url: "https://github.com/janos870/password-maneger"
  },
];



