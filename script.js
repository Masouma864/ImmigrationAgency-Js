const hamburgerBtn = document.querySelector(".menu");
const toggleMenu = document.querySelector("#menu");
const menuList = document.querySelectorAll(".menuItem");
const closeBtn = document.querySelector(".close");

hamburgerBtn.addEventListener("click", () => {
  toggleMenu.style.display = "block";
});

menuList.forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenu.style.display = "none";
  });
});

closeBtn.addEventListener("click", () => {
  toggleMenu.style.display = "none";
});

// Dynamically creating speaker cards for the speakers container
const speakersDetails = [
  {
    className: "sp1",
    name: "lidya",
    info: " qualified Chartered Professional Accountant",
    description:"She has cumulated nearly 20 years experiences in Finance and Accounting roles in the Bank, technology and service industries.",

    projImageMobile: "images/lidya.jpg",
  },

  {
    className: "sp2",
    name: "jany",
    info: " Managing Partner of the firm ",
    description:
      "Jany has been a Vanuatu Resident since 2003 and he is currently the BAKHTAR INC.",
    projImageMobile: "images/jany.jpg",
  },
  {
    className: "sp3",
    name: "Evan",
    info: " degree in Law and Political Science (University of Lyon)",
    description:
      "Olivier joins AJC with more than twenty years of experience in corporate and commercial law at Belnet .",
    projImageMobile: "images/evan.jpg",
  },
  {
    className: "sp4",
    name: "Ryan",
    info: "a member of the corporate services team.",
    description:
      "  Ryan is trilingual, he speaks fluently French, Bislama and English.",
    projImageMobile: "images/ryan.jpg",
  },
  {
    className: "sp5",
    name: "Julia",
    info: " Executive secretary since October 2006 for BAKHTAR",
    description:
      "  Julia Paule takes care of the following services : Follow up with lands records; Immigration services ; Work permits; Business Licence applications.",
    projImageMobile: "images/julia.jpg",
  },
  {
    className: "sp6",
    name: "Roberto",
    info: " university and technological degree in marketing techniques.",
    description:
      " In France, he worked as a consultant in web marketing, social media and web communication. He moved to Vanuatu in september 2019 ",
    projImageMobile: "images/roberto.jpg",
  },
];

const speakerSection = document.getElementById("speakerContainer");
const speakCont = document.getElementById("speakers-container");

Array.from(speakCont.children).forEach((child, index) => {
  child.innerHTML = `<div class="${speakersDetails[index].className}">
    <div>
      <img src="${speakersDetails[index].projImageMobile}" alt="" class="speaker-img" />
    </div>
    <div class="descript">
      <h4>${speakersDetails[index].name}</h4>
      <p class="first">
      ${speakersDetails[index].info}
      </p>
      <p class="second">
      ${speakersDetails[index].description}
      </p>
    </div>
  </div>
  `;
});
