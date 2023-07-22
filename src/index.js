const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
// Nav Listesi:
const navList = document.querySelectorAll("nav a");
for(var i=0; i<navList.length ; ++i){
  navList[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  navList[i].setAttribute("class", "italic");
}
/* navList.forEach((navA, index) => {
  let sira = index+1;
  navA.textContent = siteContent.nav["nav-item-" + sira]; 
  navA.textContent.setAttribute("class", "italic")})*/

  // Section -CTA
const ctaTextH1 = document.querySelector(".cta-text h1");
ctaTextH1.textContent = siteContent["cta"]["h1"];
const ctaTextButton = document.querySelector(".cta-text button");
ctaTextButton.textContent = siteContent["cta"]["button"];

// Section -main-content
const topContH = document.querySelectorAll(".top-content h4");
topContH[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
topContH[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topContP = document.querySelectorAll(".top-content p");
topContP[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
topContP[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const bottomContH = document.querySelectorAll(".bottom-content h4");
bottomContH[0].textContent = siteContent["ana-içerik"]["servisler-h4"];
bottomContH[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
bottomContH[2].textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomContP = document.querySelectorAll(".bottom-content p");
bottomContP[0].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
bottomContP[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
bottomContP[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//Section - Contact
const iletisimH = document.querySelector(".contact h4");
iletisimH.textContent = siteContent["iletisim"]["iletişim-h4"];
const iletisimP = document.querySelectorAll(".contact p");
iletisimP[0].textContent = siteContent["iletisim"]["adres"];
iletisimP[1].textContent = siteContent["iletisim"]["telefon"];
iletisimP[2].textContent = siteContent["iletisim"]["email"];

//Section - Footer
const footerA = document.querySelector("footer a");
footerA.textContent = siteContent.footer.copyright;
footerA.setAttribute("class", "bold");

//Images
const headerImg = document.querySelector("#logo-img");
headerImg.setAttribute("src", siteContent["images"]["logo-img"]);
//headerImg.src = siteContent["images"]["logo-img"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["images"]["cta-img"]);
//ctaImg.src = siteContent["images"]["cta-img"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];