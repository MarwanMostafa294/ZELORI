/* ZELORI storefront interactions */
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
function setMobileMenu(open) {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.toggle("active", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
menuButton?.addEventListener("click", () => setMobileMenu(menuButton.getAttribute("aria-expanded") !== "true"));
document.querySelectorAll(".mobile-menu a").forEach((link) => link.addEventListener("click", () => setMobileMenu(false)));

document.querySelector(".demo-button")?.addEventListener("click", () => { window.location.href = "invitation-demo.html"; });

const filterButtons = document.querySelectorAll(".filter-button");
filterButtons.forEach((button) => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  filterButtons.forEach((item) => item.classList.toggle("active", item === button));
  document.querySelectorAll(".design-card").forEach((card) => card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter));
}));

const previewModal = document.getElementById("previewModal");
const previewClose = document.getElementById("previewClose");
const previewOverlay = document.getElementById("previewOverlay");
const previewTitle = document.getElementById("previewTitle");
const previewDescription = document.getElementById("previewDescription");
const previewPrice = document.getElementById("previewPrice");
const previewInvitation = document.getElementById("previewInvitation");
const previewOrder = document.getElementById("previewOrder");
const previewSmall = document.getElementById("previewSmall");
const previewOpen = document.getElementById("previewOpen");
const previewCard = document.getElementById("previewCard");
const previewFirstName = document.getElementById("previewFirstName");
const previewSecondName = document.getElementById("previewSecondName");
const previewDate = document.getElementById("previewDate");
const previewTime = document.getElementById("previewTime");
const previewVenue = document.getElementById("previewVenue");
const designInput = document.getElementById("design");
const packageSelect = document.getElementById("package");
packageSelect?.addEventListener("change", () => {
  if (packageSelect.value === "Custom Design — 499 EGP" && !designInput.value) {
    designInput.value = "Custom Design — brief to be confirmed";
  }
});
const designData = {
  classic: { title: "Classic Ivory", description: "An ivory vintage invitation with swan-inspired line art, an ornate frame and a welcome-envelope opening.", price: "From 299 EGP", background: "#f2ebdd", color: "#242321", accent: "#c8a96b", smallText: "VINTAGE SWAN · CLASSIC", first: "Mohamed", second: "Hager", date: "11 · 10 · 2026", time: "8:00 PM", venue: "Voln Villa · Cairo", page: "invitation-demo.html", variant: "preview-classic" },
  noir: { title: "Noir", description: "A bold black invitation with luxurious gold details for couples looking for a dramatic and sophisticated style.", price: "From 299 EGP", background: "#242321", color: "#f8f5ef", accent: "#c8a96b", smallText: "AN EVENING IN BLACK", first: "Karim", second: "Nour", date: "21 · 11 · 2026", time: "8:00 PM", venue: "The Noir Room", page: "noir-invitation.html", variant: "preview-noir" },
  rose: { title: "Rosé", description: "An Italian garden-inspired invitation with watercolor-like olive and terracotta washes.", price: "From 299 EGP", background: "#eee6d7", color: "#4b4338", accent: "#91774e", smallText: "WATERCOLOR GARDEN", first: "Youssef", second: "Mariam", date: "18 · 12 · 2026", time: "6:30 PM", venue: "Rose Garden Hall", page: "rose-invitation.html", variant: "preview-rose" },
  minimal: { title: "Minimal", description: "A calm olive-green wedding website with spare typography and a clean, modern layout.", price: "From 299 EGP", background: "#e9ebdc", color: "#30372b", accent: "#747b50", smallText: "OLIVE · SAVE THE DATE", first: "Adam", second: "Lina", date: "06 · 01 · 2027", time: "5:00 PM", venue: "Cairo House", page: "minimal-invitation.html", variant: "preview-minimal" },
  royal: { title: "Royal", description: "A carved-wood floral doorway opens into a richly framed royal invitation.", price: "From 299 EGP", background: "#33302d", color: "#f8f5ef", accent: "#c8a96b", smallText: "FLORAL DOOR REVEAL", first: "Omar", second: "Farida", date: "14 · 02 · 2027", time: "7:00 PM", venue: "Baron Empain Palace", page: "royal-invitation.html", variant: "preview-royal" },
  editorial: { title: "Editorial", description: "A blush, mobile-first invitation with a demonstration RSVP form. Replies are not sent or saved.", price: "From 299 EGP", background: "#f4e7e9", color: "#463b3f", accent: "#b78691", smallText: "RSVP DEMO · MAP · COUNTDOWN", first: "Ziad", second: "Salma", date: "27 · 03 · 2027", time: "6:00 PM", venue: "Villa Belle Époque", page: "editorial-invitation.html", variant: "preview-editorial" }
};
Object.assign(designData, {
  minimalismBrown: { title: "Minimalism · Warm Brown", description: "Cream paper, a tilted photo detail and calm walnut accents in an airy, earthy invitation.", price: "From 299 EGP", background: "#f5efe3", color: "#49382d", accent: "#9a7452", smallText: "WARM EARTH · MINIMAL", first: "Omar", second: "Nadine", date: "17 · 10 · 2027", time: "7:00 PM", venue: "The Garden House", page: "invitation-references.html?design=minimalismBrown", variant: "preview-ref-brown" },
  minimalismDarkRed: { title: "Minimalism · Burgundy", description: "Ivory stationery, deep burgundy accents, a wax-seal detail and a quietly formal layout.", price: "From 299 EGP", background: "#f7f0e8", color: "#49272e", accent: "#792f3b", smallText: "BURGUNDY · MODERN", first: "Yassin", second: "Laila", date: "07 · 11 · 2027", time: "8:00 PM", venue: "Maison Rouge", page: "invitation-references.html?design=minimalismDarkRed", variant: "preview-ref-burgundy" },
  minimalismDarkBrown: { title: "Minimalism · Dark Brown", description: "A deeper walnut palette, cream typography and a photo-led opening with hand-painted botanical notes.", price: "From 299 EGP", background: "#4b342b", color: "#fff6e9", accent: "#c59b68", smallText: "WALNUT · EVENING", first: "Zain", second: "Jana", date: "21 · 11 · 2027", time: "7:30 PM", venue: "Villa Amara", page: "invitation-references.html?design=minimalismDarkBrown", variant: "preview-ref-walnut" },
  bohoFloralBrown: { title: "Boho Floral · Earth", description: "Original watercolor-style botanicals, warm cream paper and a relaxed outdoor celebration mood.", price: "From 299 EGP", background: "#f4eee3", color: "#514238", accent: "#987257", smallText: "GARDEN · IN BLOOM", first: "Amir", second: "Farah", date: "12 · 12 · 2027", time: "5:30 PM", venue: "Olive Grove", page: "invitation-references.html?design=bohoFloralBrown", variant: "preview-ref-boho" },
  springGardenGreen: { title: "Spring Garden · Green", description: "Fresh green foliage, a light garden setting and a softly framed invitation for an outdoor day.", price: "From 299 EGP", background: "#eef2e8", color: "#334638", accent: "#748968", smallText: "A GARDEN CELEBRATION", first: "Tarek", second: "Salma", date: "03 · 04 · 2028", time: "4:30 PM", venue: "The Conservatory", page: "invitation-references.html?design=springGardenGreen", variant: "preview-ref-garden" },
  sarayaGold: { title: "Saraya · Gold", description: "A warm palace-inspired invitation with an original gilded arch, lantern details and Arabic accents.", price: "From 299 EGP", background: "#f7efdf", color: "#594329", accent: "#b28a45", smallText: "ليلة من العمر · SARAYA", first: "Ahmed", second: "Layla", date: "19 · 04 · 2028", time: "8:00 PM", venue: "Al Qasr · Cairo", page: "invitation-references.html?design=sarayaGold", variant: "preview-ref-saraya" }
});
const referencePortfolio = document.querySelector(".designs-grid");
const referenceDesigns = [
  ["minimalismBrown", "minimal", "WARM EARTH · MINIMAL", "Warm Brown", "Cream paper · Polaroid detail", "#f5efe3", "#49382d", "#9a7452"],
  ["minimalismDarkRed", "classic", "BURGUNDY · MODERN", "Burgundy", "Ivory · deep red · wax seal", "#f7f0e8", "#49272e", "#792f3b"],
  ["minimalismDarkBrown", "luxury", "WALNUT · EVENING", "Dark Brown", "Walnut · cream · photo-led", "#4b342b", "#fff6e9", "#c59b68"],
  ["bohoFloralBrown", "romantic", "GARDEN · IN BLOOM", "Boho Floral Brown", "Earthy watercolor botanicals", "#f4eee3", "#514238", "#987257"],
  ["springGardenGreen", "romantic", "A GARDEN CELEBRATION", "Spring Garden Green", "Fresh foliage · outdoor", "#eef2e8", "#334638", "#748968"],
  ["sarayaGold", "luxury", "ليلة من العمر · SARAYA", "Saraya Gold", "Golden arch · palace elegance", "#f7efdf", "#594329", "#b28a45"]
];
referenceDesigns.forEach(([id, category, kicker, title, caption, background, color, accent], index) => {
  const data = designData[id];
  const card = document.createElement("article");
  card.className = "design-card reference-design-card";
  card.dataset.category = category;
  card.dataset.design = id;
  card.innerHTML = `<div class="design-preview reference-preview ref-${id}" style="--ref-bg:${background};--ref-ink:${color};--ref-accent:${accent}"><span>${kicker}</span><h3>${data.first}<small>&amp;</small>${data.second}</h3><div class="preview-line"></div><p>${data.date}</p></div><div class="design-info"><div><span class="design-number">0${index + 7}</span><h3>${title}</h3><p>${caption}</p></div><div class="design-price"><span>From</span><strong>299 EGP</strong></div></div><button class="design-button" type="button">View Design →</button>`;
  referencePortfolio?.append(card);
});
let selectedDesign = "classic";
let lastPreviewTrigger = null;
document.querySelectorAll(".design-button").forEach((button) => button.addEventListener("click", () => {
  const card = button.closest(".design-card");
  const design = card?.dataset.design;
  const data = designData[design];
  if (!data || !previewModal) return;
  selectedDesign = design;
  previewTitle.textContent = data.title;
  previewDescription.textContent = data.description;
  previewPrice.textContent = data.price;
  previewSmall.textContent = data.smallText;
  previewFirstName.textContent = data.first;
  previewSecondName.textContent = data.second;
  previewDate.textContent = data.date;
  previewTime.textContent = data.time;
  previewVenue.textContent = data.venue;
  previewInvitation.style.background = data.background;
  previewInvitation.style.color = data.color;
  previewInvitation.style.borderColor = data.accent;
  previewInvitation.className = `preview-invitation ${data.variant}`;
  previewOpen.href = data.page;
  previewCard.href = `digital-cards.html?design=${design}`;
  lastPreviewTrigger = button;
  previewModal.classList.add("active");
  document.body.style.overflow = "hidden";
  previewClose?.focus();
}));
function closePreview() { if (!previewModal?.classList.contains("active")) return; previewModal.classList.remove("active"); document.body.style.overflow = ""; lastPreviewTrigger?.focus(); }
previewClose?.addEventListener("click", closePreview);
previewOverlay?.addEventListener("click", closePreview);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") { closePreview(); setMobileMenu(false); }
  if (previewModal?.classList.contains("active") && event.key === "Tab") {
    const focusable = [...previewModal.querySelectorAll('a[href],button:not([disabled])')].filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
previewOrder?.addEventListener("click", () => {
  const data = designData[selectedDesign];
  if (designInput && data) designInput.value = data.title;
  const packageInput = packageSelect;
  if (packageInput) packageInput.value = "Web Invitation — 299 EGP";
  closePreview();
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
});

const orderParams = new URLSearchParams(window.location.search);
const requestedDesign = orderParams.get("design");
const requestedProduct = orderParams.get("package");
if ((requestedDesign && designData[requestedDesign] || requestedProduct) && designInput) {
  if (requestedDesign && designData[requestedDesign]) {
    selectedDesign = requestedDesign;
    designInput.value = designData[requestedDesign].title;
  }
  if (requestedProduct === "digital-card") document.getElementById("package").value = "Digital Card — 99 EGP";
  else if (requestedProduct === "web-invitation") document.getElementById("package").value = "Web Invitation — 299 EGP";
  else if (requestedProduct === "custom-design") {
    packageSelect.value = "Custom Design — 499 EGP";
    if (!designInput.value) designInput.value = "Custom Design — brief to be confirmed";
  }
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
}

const orderForm = document.getElementById("orderForm");
const formSuccess = document.getElementById("formSuccess");
orderForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const submitButton = orderForm.querySelector(".order-submit");
  const referenceField = document.getElementById("orderReference");
  const statusField = document.getElementById("orderStatus");
  const paymentStatusField = document.getElementById("paymentStatus");
  const packageInput = document.getElementById("package");
  const today = new Date();
  const datePart = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;
  const reference = `ZEL-${datePart}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
  referenceField.value = reference;
  statusField.value = "Request received — follow up on WhatsApp";
  paymentStatusField.value = "Discuss payment with customer on WhatsApp — no online payment";
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  try {
    const response = await fetch(orderForm.action, { method: "POST", body: new FormData(orderForm), headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("Form submission failed");
    document.getElementById("successReference").textContent = `Order reference: ${reference}`;
    document.getElementById("successStatus").textContent = `Status: ${reference} received — continue on WhatsApp to confirm your order.`;
    const message = encodeURIComponent(`Hello ZELORI, I submitted order ${reference} for ${designInput.value} (${packageInput.value}). Please confirm my order and explain the payment method and timing.`);
    document.getElementById("successWhatsApp").href = `https://wa.me/201274755728?text=${message}`;
    formSuccess.classList.add("show");
    submitButton.textContent = "Request Sent ✓";
  } catch {
    submitButton.disabled = false;
    submitButton.textContent = "Submit Your Request";
    alert("Your request could not be sent. Please try again or contact us on WhatsApp at +20 127 475 5728.");
  }
});

