const invitationStyles = {
  minimalismBrown: { name:"Minimalism Brown", first:"Omar", second:"Nadine", date:"2027-10-17T19:00:00+03:00", venue:"The Garden House", map:"The Garden House Cairo", ceremony:"The Garden House", reception:"The Garden House", time:"7:00 PM", welcome:"6:30 PM", dress:"Garden Formal", kicker:"THE WEDDING OF", side:"WARM BROWN · A ZELORI INVITATION", family1:"MR. & MRS. HASSAN\nSALMA HASSAN", family2:"MR. & MRS. FOUAD\nNADINE FOUAD", schedule:[["18:30","Welcome drinks"],["19:00","Wedding ceremony"],["19:45","Garden photographs"],["20:30","Dinner is served"],["22:00","Music and dancing"]], photos:8 },
  minimalismDarkRed: { name:"Minimalism Dark Red", first:"Yassin", second:"Laila", date:"2027-11-07T20:00:00+02:00", venue:"Maison Rouge", map:"Maison Rouge Cairo", ceremony:"St. George Hall", reception:"Maison Rouge", time:"8:00 PM", welcome:"7:00 PM", dress:"Formal Evening", kicker:"SAVE THE DATE", side:"BURGUNDY · A ZELORI INVITATION", family1:"MR. & MRS. SALEH\nYASSIN SALEH", family2:"MR. & MRS. KAMEL\nLAILA KAMEL", schedule:[["19:00","Guest arrival"],["20:00","Ceremony and vows"],["20:45","Family photographs"],["21:30","Dinner reception"],["23:00","Dancing"]], photos:9 },
  minimalismDarkBrown: { name:"Minimalism Dark Brown", first:"Zain", second:"Jana", date:"2027-11-21T19:30:00+02:00", venue:"Villa Amara", map:"Villa Amara Cairo", ceremony:"Villa Amara", reception:"Villa Amara", time:"7:30 PM", welcome:"7:00 PM", dress:"Evening Formal", kicker:"SAVE THE DATE", side:"DARK WALNUT · A ZELORI INVITATION", family1:"MR. & MRS. IBRAHIM\nZAIN IBRAHIM", family2:"MR. & MRS. NABIL\nJANA NABIL", schedule:[["19:00","Guests arrive"],["19:30","Ceremony begins"],["20:15","Garden photographs"],["21:00","Dinner reception"],["22:30","An evening of dancing"]], photos:7 },
  bohoFloralBrown: { name:"Boho Floral Brown", first:"Amir", second:"Farah", date:"2027-12-12T17:30:00+02:00", venue:"Olive Grove", map:"Olive Grove Cairo", ceremony:"Olive Grove Garden", reception:"Olive Grove", time:"5:30 PM", welcome:"5:00 PM", dress:"Bohemian Garden", kicker:"GATHERED IN BLOOM", side:"BOHO FLORAL · EARTH", family1:"MR. & MRS. KHALIL\nAMIR KHALIL", family2:"MR. & MRS. YOUNIS\nFARAH YOUNIS", schedule:[["17:00","Garden welcome"],["17:30","Ceremony beneath the trees"],["18:15","Photos in the olive grove"],["19:00","Supper and conversation"],["21:00","Music under the stars"]], photos:10 },
  springGardenGreen: { name:"Spring Garden Green", first:"Tarek", second:"Salma", date:"2028-04-03T16:30:00+02:00", venue:"The Conservatory", map:"The Conservatory Cairo", ceremony:"St. Mary Garden Chapel", reception:"The Conservatory", time:"4:30 PM", welcome:"4:00 PM", dress:"Spring Garden Attire", kicker:"SAVE THE DATE", side:"A SPRING GARDEN WEDDING", family1:"MR. & MRS. TAREK\nTAREK ASHRAF", family2:"MR. & MRS. SALEM\nSALMA SALEM", schedule:[["16:00","Garden welcome"],["16:30","Ceremony"],["17:15","Confetti and photographs"],["18:00","Garden reception"],["20:00","Dinner and dancing"]], photos:9 },
  sarayaGold: { name:"Saraya Gold", first:"Ahmed", second:"Layla", date:"2028-04-19T20:00:00+02:00", venue:"Al Qasr · Cairo", map:"Al Qasr Cairo wedding venue", ceremony:"Saraya Ballroom", reception:"Al Qasr Palace", time:"8:00 PM", welcome:"7:30 PM", dress:"Black Tie · Formal", kicker:"دعوة زفاف", side:"SARAYA · GOLDEN PALACE", family1:"السيد والسيدة أحمد\nعائلة العريس", family2:"السيد والسيدة محمود\nعائلة العروس", schedule:[["7:30 م","استقبال الضيوف · Guests arrive"],["8:00 م","عقد القران · Nikah ceremony"],["8:45 م","الصور التذكارية · Photographs"],["9:30 م","وليمة العرس · Wedding reception"],["11:00 م","الاحتفال · Celebration"]], photos:8 }
};
// Editorial wedding imagery from Pexels, composed into ZELORI's invitation previews.
const weddingImage = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1100`;
const invitationImages = {
  minimalismBrown: [37298829,38675476,35999747,31820123,30822475,30411308],
  minimalismDarkRed: [30822475,31820123,30411308,37298829,38675476,35999747],
  minimalismDarkBrown: [38675476,30822475,37298829,30411308,31820123,35999747],
  bohoFloralBrown: [35999747,38675476,31820123,37298829,30411308,30822475],
  springGardenGreen: [38675476,35999747,31820123,37298829,30411308,30822475],
  sarayaGold: [30822475,31820123,38675476,30411308,37298829,35999747]
};
const params = new URLSearchParams(location.search);
const requested = params.get("design");
const activeStyleId = Object.hasOwn(invitationStyles, requested) ? requested : "minimalismBrown";
const style = invitationStyles[activeStyleId];
const photos = invitationImages[activeStyleId].map(weddingImage);
const page = document.getElementById("invitation");
page.classList.add(`theme-${activeStyleId}`);
if (activeStyleId === "springGardenGreen") page.querySelector(".ref-hero").after(page.querySelector("#gallery"));
const opened = params.get("open") === "1";
document.body.classList.toggle("cover-pending", !opened);
const rtl = activeStyleId === "sarayaGold";
document.body.classList.add(`cover-${activeStyleId}`);
if (rtl) {
  document.documentElement.lang="en"; document.documentElement.dir="ltr";
  document.querySelectorAll("#coverKicker,#heroIntro,#heroCopy").forEach((el)=>{el.lang="ar";el.dir="rtl";});
  document.querySelector(".ref-cover-family").lang="ar";document.querySelector(".ref-cover-family").dir="rtl";
  document.getElementById("nameOne").lang="en";document.getElementById("nameTwo").lang="en";
  document.getElementById("familyOne").lang="ar";document.getElementById("familyOne").dir="rtl";
  document.getElementById("familyTwo").lang="ar";document.getElementById("familyTwo").dir="rtl";
}
document.title = `${style.name} · ${style.first} & ${style.second} | ZELORI`;
document.getElementById("heroKicker").textContent=style.kicker;
document.getElementById("heroIntro").textContent=rtl?"بكل الحب والفرح":activeStyleId==="minimalismBrown"?"Together with their families":"THE WEDDING CELEBRATION OF";
document.getElementById("nameOne").textContent=style.first;
document.getElementById("nameTwo").textContent=style.second;
document.getElementById("coupleNames").setAttribute("aria-label",`${style.first} and ${style.second}`);
document.getElementById("heroCopy").textContent=rtl?"نتشرف بدعوتكم لمشاركتنا أجمل ليلة":activeStyleId==="minimalismBrown"?"We joyfully invite you to celebrate our wedding day with us.":"Join us as we begin our life together.";
document.getElementById("sideNote").textContent=style.side;
const eventDate=new Date(style.date);
const dateBits=new Intl.DateTimeFormat(rtl?"ar-EG":"en-US",{weekday:"long",day:"2-digit",month:"long",year:"numeric",timeZone:"UTC"}).formatToParts(eventDate);
const part=(type)=>dateBits.find((item)=>item.type===type)?.value||"";
document.getElementById("dayName").textContent=part("weekday").toUpperCase();
document.getElementById("dayNumber").textContent=part("day");
document.getElementById("monthYear").textContent=`${part("month").toUpperCase()} · ${part("year")}`;
document.getElementById("coverKicker").textContent=style.kicker;
document.getElementById("coverNameOne").textContent=style.first;
document.getElementById("coverNameTwo").textContent=style.second;
document.getElementById("coverDate").textContent=`${part("month")} ${part("day")}, ${part("year")}`;
document.getElementById("coverGuest").textContent=style.second;
if(rtl){document.getElementById("coverKicker").textContent="دعوة زفاف";document.querySelector(".ref-cover-invite").textContent="يسرّنا دعوتكم";document.querySelector(".ref-cover-invite").lang="ar";document.querySelector(".ref-cover-invite").dir="rtl";document.getElementById("coverFamily").textContent="للاحتفال معنا";document.getElementById("openInvitation").textContent="افتح الدعوة";document.getElementById("openInvitation").lang="ar";document.getElementById("openInvitation").dir="rtl";for(const id of ["demoBadge","coverDemoBadge"]){const badge=document.getElementById(id);badge.textContent="معاينة تصميم · تفاصيل تجريبية";badge.lang="ar";badge.dir="rtl";}}
document.getElementById("openInvitation").addEventListener("click",()=>{document.body.classList.remove("cover-pending");const next=new URL(location.href);next.searchParams.set("open","1");history.replaceState(null,"",next);window.scrollTo({top:0,behavior:"smooth"});});
document.getElementById("ceremonyNameOne").textContent=style.first;
document.getElementById("ceremonyNameTwo").textContent=style.second;
document.getElementById("familyOne").textContent=style.family1;
document.getElementById("familyTwo").textContent=style.family2;
document.getElementById("ceremonyVenue").textContent=style.ceremony;
document.getElementById("receptionVenue").textContent=style.reception;
document.getElementById("ceremonyTime").textContent=style.time;
document.getElementById("receptionTime").textContent=style.time;
document.getElementById("ceremonyDate").textContent=`${part("weekday")} · ${part("day")} ${part("month")} ${part("year")}`;
document.getElementById("receptionDate").textContent=document.getElementById("ceremonyDate").textContent;
document.getElementById("receptionTimeLarge").textContent=style.time;
document.getElementById("receptionDateLarge").textContent=`${part("weekday").toUpperCase()} ${part("day")} ${part("month").toUpperCase()}`;
document.getElementById("receptionYear").textContent=part("year");
document.getElementById("welcomeTime").textContent=style.welcome;
document.getElementById("receptionStart").textContent=style.time;
document.getElementById("venueTitle").textContent=style.venue;
document.getElementById("venueAddress").textContent="Cairo, Egypt";
document.getElementById("mapMarker").textContent=style.venue;
document.getElementById("dressTitle").textContent=style.dress;
document.getElementById("scheduleList").innerHTML=style.schedule.map(([time,label])=>`<li><time>${time}</time><span>${label}</span></li>`).join("");
document.getElementById("wishSamples").innerHTML=["Wishing you a lifetime of love and laughter.","Congratulations! May your new chapter be full of happiness."].map((wish,index)=>`<article><b>${index?"A dear friend":"With love"}</b><p>${wish}</p></article>`).join("");
const track=document.getElementById("photoTrack");
track.innerHTML=Array.from({length:style.photos},(_,i)=>`<div class="ref-photo-card scene-${(i%6)+1}" role="img" aria-label="Wedding photograph ${i+1}" style="--gallery-image:url('${photos[i%photos.length]}')"><span>${String(i+1).padStart(2,"0")}</span></div>`).join("");
const heroPhotos=page.querySelectorAll(".ref-photo");
heroPhotos.forEach((photo,index)=>{photo.style.backgroundImage=`url('${photos[index%photos.length]}')`;photo.style.backgroundPosition=index===0?"center 38%":"center 45%";});
document.getElementById("galleryTotal").textContent=String(style.photos).padStart(2,"0");
let activePhoto=0;
function paintGallery(){const cards=[...track.children];const shift=matchMedia("(max-width:700px)").matches?110:175;cards.forEach((card,index)=>{let offset=index-activePhoto;const half=cards.length/2;if(offset>half)offset-=cards.length;if(offset< -half)offset+=cards.length;const distance=Math.abs(offset);card.style.transform=`translate(calc(-50% + ${offset*shift}px),-50%) rotateY(${offset*-16}deg) scale(${Math.max(.52,1-distance*.13)})`;card.style.opacity=String(Math.max(.12,1-distance*.2));card.style.zIndex=String(10-distance);card.classList.toggle("is-current",offset===0);card.setAttribute("aria-hidden",String(distance>2));});document.getElementById("galleryCurrent").textContent=String(activePhoto+1).padStart(2,"0");}
document.querySelector(".gallery-prev").addEventListener("click",()=>{activePhoto=(activePhoto+style.photos-1)%style.photos;paintGallery();});
document.querySelector(".gallery-next").addEventListener("click",()=>{activePhoto=(activePhoto+1)%style.photos;paintGallery();});
paintGallery();
const monthIndex=eventDate.getUTCMonth();
const grid=document.getElementById("calendarGrid");
const week=rtl?["ن","ث","ر","خ","ج","س","أ"]:["Mo","Tu","We","Th","Fr","Sa","Su"];
let monthOffset=0;
function paintCalendar(){
 const showing=new Date(Date.UTC(eventDate.getUTCFullYear(),monthIndex+monthOffset,1));
 document.getElementById("calendarMonth").textContent=new Intl.DateTimeFormat(rtl?"ar-EG":"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(showing);
 const year=showing.getUTCFullYear(),month=showing.getUTCMonth();
 const firstDay=(new Date(Date.UTC(year,month,1)).getUTCDay()+6)%7;
 const daysInMonth=new Date(Date.UTC(year,month+1,0)).getUTCDate();
 grid.innerHTML=week.map((day)=>`<span class="cal-week">${day}</span>`).join("")+Array.from({length:firstDay},()=>'<span aria-hidden="true"></span>').join("")+Array.from({length:daysInMonth},(_,i)=>{const selected=month===eventDate.getUTCMonth()&&year===eventDate.getUTCFullYear()&&i+1===eventDate.getUTCDate();return `<span class="${selected?"cal-selected":""}"${selected?' aria-current="date"':''}>${selected?`<b>${i+1}</b>`:i+1}</span>`}).join("");
}
paintCalendar();
const calendarStart=new Date(eventDate.getTime());
const calendarEnd=new Date(calendarStart.getTime()+2*60*60*1000);
const googleDate=(date)=>date.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
document.getElementById("calendarLink").href=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${style.first} & ${style.second} Wedding`)}&dates=${googleDate(calendarStart)}/${googleDate(calendarEnd)}&location=${encodeURIComponent(style.venue+", Cairo, Egypt")}`;
document.getElementById("mapLink").href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(style.map)}`;
document.getElementById("calPrev").addEventListener("click",()=>{monthOffset--;paintCalendar();});
document.getElementById("calNext").addEventListener("click",()=>{monthOffset++;paintCalendar();});
const countdownDate=eventDate.getTime();
function updateCountdown(){const rest=Math.max(0,countdownDate-Date.now());const values={days:Math.floor(rest/86400000),hours:Math.floor(rest/3600000)%24,minutes:Math.floor(rest/60000)%60,seconds:Math.floor(rest/1000)%60};for(const [id,value]of Object.entries(values)){document.getElementById(id).textContent=String(value).padStart(2,"0");}}
updateCountdown();window.setInterval(updateCountdown,1000);
document.getElementById("refRsvp").addEventListener("submit",(event)=>{event.preventDefault();document.getElementById("rsvpMessage").textContent="Preview only — RSVP is inactive. No message was sent or saved.";});
document.getElementById("giftButton").addEventListener("click",()=>{document.querySelector(".ref-gift").classList.toggle("gift-open");});
for(const [elementId,product]of [["digitalOrder","digital-card"],["webOrder","web-invitation"]])document.getElementById(elementId).href=`index.html?design=${encodeURIComponent(activeStyleId)}&package=${product}#order`;
