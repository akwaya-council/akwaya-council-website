// EN/FR toggle - small corner button
let lang='en';
function toggleLang(){ lang = lang==='en'?'fr':'en'; document.getElementById('langBtn').textContent = lang==='en'?'FR':'EN';
 document.querySelectorAll('[data-en]').forEach(el=>{ el.textContent = el.dataset[lang]; });
}
// Load services from content/services.json - Mr Okumo edits JSON, not HTML
fetch('content/services.json').then(r=>r.json()).then(d=>{
  document.getElementById('servicesGrid').innerHTML = d.services.map(s=>`<div class="card"><h4>${s.title}</h4><p>${s.desc}</p></div>`).join('');
}).catch(()=>{ document.getElementById('servicesGrid').innerHTML='<p>Services load from content/services.json</p>'});
fetch('content/mayor.json').then(r=>r.json()).then(d=>{
  document.getElementById('mayorName').textContent = d.name + ' — ' + d.title;
  document.getElementById('mayorMsg').textContent = d.message;
});
