// HEader
const header = document.createElement("header");
header.className = "site-header";

const container = document.createElement("div");
container.className = "container";

const headerDiv = document.createElement("div");
headerDiv.className = "header";

const logoLink = document.createElement("a");
logoLink.className = "header-logo";
logoLink.href = "./xizmatlar.html";

const logoImg = document.createElement("img");
logoImg.src = "./images/logo.svg";
logoImg.alt = "Site logo 'Pixer'";
logoImg.width = 58.11;
logoImg.height = 20;

logoLink.appendChild(logoImg);
headerDiv.appendChild(logoLink);

const navbar = document.createElement("div");
navbar.className = "header-navbar navbar";

// Navbar 
const homeLink = document.createElement("a");
homeLink.className = "navbar-links";
homeLink.href = "./xizmatlar.html";
homeLink.textContent = "Bosh sahifa";
navbar.appendChild(homeLink);

const xizmatlarWrapper = document.createElement("div");
xizmatlarWrapper.className = "dropdown-wrapper";

const xizmatlarLink = document.createElement("a");
xizmatlarLink.className = "navbar-links";
xizmatlarLink.href = "./xizmatlar.html";
xizmatlarLink.textContent = "Xizmatlar";
xizmatlarWrapper.appendChild(xizmatlarLink);

const xizmatlarDropdown = document.createElement("div");
xizmatlarDropdown.className = "dropdown";

const xizmat1 = document.createElement("a");
xizmat1.href = "./xizmatlar.html";
xizmat1.textContent = "Vebsayt";
xizmatlarDropdown.appendChild(xizmat1);

const xizmat2 = document.createElement("a");
xizmat2.href = "./xizmatlar.html";
xizmat2.textContent = "Telegram bot";
xizmatlarDropdown.appendChild(xizmat2);

const xizmat3 = document.createElement("a");
xizmat3.href = "./xizmatlar.html";
xizmat3.textContent = "SMM";
xizmatlarDropdown.appendChild(xizmat3);

const xizmat4 = document.createElement("a");
xizmat4.href = "./xizmatlar.html";
xizmat4.textContent = "Grafik dizayn";
xizmatlarDropdown.appendChild(xizmat4);

const xizmat5 = document.createElement("a");
xizmat5.href = "./xizmatlar.html";
xizmat5.textContent = "CRM tizim";
xizmatlarDropdown.appendChild(xizmat5);

xizmatlarWrapper.appendChild(xizmatlarDropdown);
navbar.appendChild(xizmatlarWrapper);

const portfolioLink = document.createElement("a");
portfolioLink.className = "navbar-links";
portfolioLink.href = "./xizmatlar.html";
portfolioLink.textContent = "Portfolio";
navbar.appendChild(portfolioLink);

const jamoaLink = document.createElement("a");
jamoaLink.className = "navbar-links";
jamoaLink.href = "./xizmatlar.html";
jamoaLink.textContent = "Jamoa";
navbar.appendChild(jamoaLink);

const blogLink = document.createElement("a");
blogLink.className = "navbar-links";
blogLink.href = "./xizmatlar.html";
blogLink.textContent = "Blog";
navbar.appendChild(blogLink);

const kontaktlarLink = document.createElement("a");
kontaktlarLink.className = "navbar-links";
kontaktlarLink.href = "./xizmatlar.html";
kontaktlarLink.textContent = "Kontaktlar";
navbar.appendChild(kontaktlarLink);

const phoneLink = document.createElement("a");
phoneLink.className = "navbar-phone-link";
phoneLink.href = "";
phoneLink.textContent = "+998 90 921 37 11";
navbar.appendChild(phoneLink);

headerDiv.appendChild(navbar);
container.appendChild(headerDiv);
header.appendChild(container);
document.body.appendChild(header);


const main = document.createElement("main");

// Hero section
const heroSection = document.createElement("section");
heroSection.className = "hero-section";

const heroContainer = document.createElement("div");
heroContainer.className = "container";

const heroWrapper = document.createElement("div");
heroWrapper.className = "hero-wrapper";

const heroTitle = document.createElement("div");
heroTitle.className = "hero-title";

const heroHeading = document.createElement("h2");
heroHeading.textContent = "Biznesingizni keyingi bosqichga olib chiqing";
heroTitle.appendChild(heroHeading);

const heroText = document.createElement("p");
heroText.textContent =
  "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar";
heroTitle.appendChild(heroText);

const heroLink = document.createElement("a");
heroLink.href = "./xizmatlar.html";
heroLink.textContent = "Xizmatlar bilan tanishish";
heroTitle.appendChild(heroLink);

heroWrapper.appendChild(heroTitle);

const heroVideo = document.createElement("div");
heroVideo.className = "hero-video";

const iframe = document.createElement("iframe");
iframe.width = 458;
iframe.height = 258;
iframe.src = "https://www.youtube.com/embed/qP23O70ve7k?modestbranding=1&showinfo=0&rel=0";
iframe.frameBorder = "0";
iframe.allow ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
iframe.allowFullscreen = true;

heroVideo.appendChild(iframe);
heroWrapper.appendChild(heroVideo);

heroContainer.appendChild(heroWrapper);
heroSection.appendChild(heroContainer);
main.appendChild(heroSection);

// Xizmatlar section
const xizmatlarSection = document.createElement("section");
xizmatlarSection.className = "xizmatlar-section";

const xizmatlarContainer = document.createElement("div");
xizmatlarContainer.className = "container";

const xizmatlarWrapper1 = document.createElement("div");
xizmatlarWrapper1.className = "xizmatlar-wrapper";

const xizmatlarHeading = document.createElement("h2");
xizmatlarHeading.textContent = "Xizmatlar";
xizmatlarWrapper1.appendChild(xizmatlarHeading);

const xizmatlarText = document.createElement("p");
xizmatlarText.className = "xizmatlar-text";
xizmatlarText.textContent = "Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar";
xizmatlarWrapper1.appendChild(xizmatlarText);

const xizmatlarList = document.createElement("ul");
xizmatlarList.className = "xizmatlar-list";

const xizmatlarItem1 = document.createElement("li");
xizmatlarItem1.className = "xizmatlar-item";
const xizmatlarImg1 = document.createElement("img");
xizmatlarImg1.src = "./images/xizmatlar-img1.png";
xizmatlarImg1.alt = "Xizmatlar images";
xizmatlarImg1.height = 130;
xizmatlarItem1.appendChild(xizmatlarImg1);
const xizmatlarTitle1 = document.createElement("h3");
xizmatlarTitle1.textContent = "Vebsayt tuzish";
xizmatlarItem1.appendChild(xizmatlarTitle1);
const xizmatlarDesc1 = document.createElement("p");
xizmatlarDesc1.textContent = "lorem ipsum";
xizmatlarItem1.appendChild(xizmatlarDesc1);
xizmatlarList.appendChild(xizmatlarItem1);

const xizmatlarItem2 = document.createElement("li");
xizmatlarItem2.className = "xizmatlar-item";
const xizmatlarImg2 = document.createElement("img");
xizmatlarImg2.src = "./images/xizmatlar-img2.png";
xizmatlarImg2.alt = "Telegram bot";
xizmatlarImg2.height = 130;
xizmatlarItem2.appendChild(xizmatlarImg2);
const xizmatlarTitle2 = document.createElement("h3");
xizmatlarTitle2.textContent = "Telegram bot";
xizmatlarItem2.appendChild(xizmatlarTitle2);
const xizmatlarDesc2 = document.createElement("p");
xizmatlarDesc2.textContent = "lorem ipsum";
xizmatlarItem2.appendChild(xizmatlarDesc2);
xizmatlarList.appendChild(xizmatlarItem2);

const xizmatlarItem3 = document.createElement("li");
xizmatlarItem3.className = "xizmatlar-item";
const xizmatlarImg3 = document.createElement("img");
xizmatlarImg3.src = "./images/xizmatlar-img3.png";
xizmatlarImg3.alt = "SMM";
xizmatlarImg3.height = 130;
xizmatlarItem3.appendChild(xizmatlarImg3);
const xizmatlarTitle3 = document.createElement("h3");
xizmatlarTitle3.textContent = "SMM";
xizmatlarItem3.appendChild(xizmatlarTitle3);
const xizmatlarDesc3 = document.createElement("p");
xizmatlarDesc3.textContent = "lorem ipsum";
xizmatlarItem3.appendChild(xizmatlarDesc3);
xizmatlarList.appendChild(xizmatlarItem3);

const xizmatlarItem4 = document.createElement("li");
xizmatlarItem4.className = "xizmatlar-item";
const xizmatlarImg4 = document.createElement("img");
xizmatlarImg4.src = "./images/xizmatlar-img4.png";
xizmatlarImg4.alt = "Grafik dizayn";
xizmatlarImg4.height = 130;
xizmatlarItem4.appendChild(xizmatlarImg4);
const xizmatlarTitle4 = document.createElement("h3");
xizmatlarTitle4.textContent = "SMM";
xizmatlarItem4.appendChild(xizmatlarTitle4);
const xizmatlarDesc4 = document.createElement("p");
xizmatlarDesc4.textContent = "lorem ipsum";
xizmatlarItem4.appendChild(xizmatlarDesc4);
xizmatlarList.appendChild(xizmatlarItem4);

const xizmatlarItem5 = document.createElement("li");
xizmatlarItem5.className = "xizmatlar-item";
const xizmatlarImg5 = document.createElement("img");
xizmatlarImg5.src = "./images/xizmatlar-img5.png";
xizmatlarImg5.alt = "CRM tizimlar";
xizmatlarImg5.height = 130;
xizmatlarItem5.appendChild(xizmatlarImg5);
const xizmatlarTitle5 = document.createElement("h3");
xizmatlarTitle5.textContent = "CRM tizimlar";
xizmatlarItem5.appendChild(xizmatlarTitle5);
const xizmatlarDesc5 = document.createElement("p");
xizmatlarDesc5.textContent = "lorem ipsum";
xizmatlarItem5.appendChild(xizmatlarDesc5);
xizmatlarList.appendChild(xizmatlarItem5);


xizmatlarWrapper1.appendChild(xizmatlarList);
xizmatlarContainer.appendChild(xizmatlarWrapper1);
xizmatlarSection.appendChild(xizmatlarContainer);
main.appendChild(xizmatlarSection);

document.body.appendChild(main);
