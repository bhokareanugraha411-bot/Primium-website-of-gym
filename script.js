document.addEventListener('DOMContentLoaded',()=>{
  const set=(id,val)=>{const e=document.getElementById(id);if(e)e.textContent=val};
  set('gymName',GYM.name); set('gymTagline',GYM.tagline); set('phoneText',GYM.phone); set('locationText',GYM.location); set('hoursText',GYM.hours); set('instaText',GYM.instagramHandle);
  document.querySelectorAll('[data-whatsapp]').forEach(a=>a.href='https://wa.me/'+GYM.whatsapp);
  document.querySelectorAll('[data-phone]').forEach(a=>a.href='tel:'+GYM.phone.replace(/\s/g,''));
  document.querySelectorAll('[data-instagram]').forEach(a=>a.href=GYM.instagram);
  document.querySelectorAll('[data-maps]').forEach(a=>a.href=GYM.maps);
  document.querySelectorAll('[data-gym]').forEach(e=>e.textContent=GYM.name);
});
