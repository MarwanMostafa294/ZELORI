const cards = [
  { id: "classic", name: "Classic Ivory", style: "Soft ivory · timeless", kind: "", label: "THE WEDDING OF", first: "Mohamed", second: "Hager", date: "Sunday · 11 October 2026", time: "at eight in the evening", venue: "VOLN VILLA · CAIRO" },
  { id: "noir", name: "Noir", style: "Black · gold · dramatic", kind: "card-noir", label: "AN EVENING IN BLACK", first: "Karim", second: "Nour", date: "Saturday · 21 November 2026", time: "cocktails from seven", venue: "THE NOIR ROOM" },
  { id: "rose", name: "Rosé", style: "Italian watercolor · garden", kind: "card-rose", label: "TOGETHER WITH THEIR FAMILIES", first: "Youssef", second: "Mariam", date: "Friday · 18 December 2026", time: "at half past six", venue: "ROSE GARDEN HALL · GIZA" },
  { id: "minimal", name: "Minimal", style: "Olive · modern", kind: "card-minimal", label: "SAVE THE DATE", first: "Adam", second: "Lina", date: "Wednesday · 6 January 2027", time: "ceremony at five", venue: "CAIRO HOUSE" },
  { id: "royal", name: "Royal", style: "Regal · refined", kind: "card-royal", label: "THE HONOUR OF YOUR PRESENCE", first: "Omar", second: "Farida", date: "Sunday · 14 February 2027", time: "at seven in the evening", venue: "BARON EMPAIN PALACE" },
  { id: "editorial", name: "Editorial", style: "Fashion · contemporary", kind: "card-editorial", label: "A NEW CHAPTER", first: "Ziad", second: "Salma", date: "Saturday · 27 March 2027", time: "doors open at six", venue: "VILLA BELLE ÉPOQUE" },
  { id: "minimalismBrown", name: "Minimalism · Warm Brown", style: "Cream paper · warm walnut", kind: "card-ref-brown", label: "A PROMISE IN WARM EARTH TONES", first: "Omar", second: "Nadine", date: "Sunday · 17 October 2027", time: "at seven in the evening", venue: "THE GARDEN HOUSE" },
  { id: "minimalismDarkRed", name: "Minimalism · Burgundy", style: "Ivory · burgundy · gold seal", kind: "card-ref-burgundy", label: "A CLASSIC PROMISE", first: "Yassin", second: "Laila", date: "Sunday · 7 November 2027", time: "at eight in the evening", venue: "MAISON ROUGE" },
  { id: "minimalismDarkBrown", name: "Minimalism · Dark Brown", style: "Deep walnut · evening elegance", kind: "card-ref-walnut", label: "TOGETHER · AFTER SUNSET", first: "Zain", second: "Jana", date: "Sunday · 21 November 2027", time: "at half past seven", venue: "VILLA AMARA" },
  { id: "bohoFloralBrown", name: "Boho Floral · Earth", style: "Watercolor botanicals · rustic", kind: "card-ref-boho", label: "GATHERED IN BLOOM", first: "Amir", second: "Farah", date: "Sunday · 12 December 2027", time: "at half past five", venue: "OLIVE GROVE" },
  { id: "springGardenGreen", name: "Spring Garden · Green", style: "Fresh leaves · spring garden", kind: "card-ref-garden", label: "A DAY TO BLOOM TOGETHER", first: "Tarek", second: "Salma", date: "Monday · 3 April 2028", time: "at half past four", venue: "THE CONSERVATORY" },
  { id: "sarayaGold", name: "Saraya · Gold", style: "Golden arches · Arabic-inspired", kind: "card-ref-saraya", label: "ليلة من العمر", first: "Ahmed", second: "Layla", date: "Wednesday · 19 April 2028", time: "at eight in the evening", venue: "AL QASR · CAIRO" }
];
const params = new URLSearchParams(location.search);
const cardsRoot = document.getElementById("cards");
cardsRoot.innerHTML = cards.map((card) => `
  <article class="card-product" id="${card.id}">
    <div class="invite-card ${card.kind}" aria-label="${card.name} Digital Card preview">
      <span class="overline">${card.label}</span>
      <div class="names">${card.first}<i>&amp;</i>${card.second}</div>
      <div class="rule"></div>
      <div class="details">${card.date}<br>${card.time}</div>
      <span class="place">${card.venue}</span>
      <span class="preview-watermark" aria-hidden="true">STYLE PREVIEW</span>
    </div>
    <div class="product-caption"><h2>${card.name}</h2><span>99 EGP</span></div>
    <p class="product-copy">${card.style} · preview only. Your finished card is personalized and delivered after purchase.</p>
    <a class="buy-link" href="index.html?design=${card.id}&amp;package=digital-card#order">Choose this Digital Card · 99 EGP</a>
  </article>`).join("");

const selected = cards.find((card) => card.id === params.get("design"));
if (selected) document.getElementById(selected.id)?.scrollIntoView({ block: "center", behavior: "smooth" });
