let lang='en';
function toggleLang(){lang=lang==='en'?'fr':'en';document.getElementById('langBtn').textContent=lang==='en'?'FR':'EN';document.querySelectorAll('[data-en]').forEach(e=>{e.textContent=e.dataset[lang]});}
fetch('content/services.json').then(r=>r.json()).then(d=>{document.getElementById('servicesGrid').innerHTML=d.services.map(s=>`<div class="card"><h4>${s.title}</h4><p>${s.desc}</p></div>`).join('')}).catch(()=>{});
fetch('content/mayor.json').then(r=>r.json()).then(d=>{document.getElementById('mayorName').textContent=d.name+' - '+d.title;document.getElementById('mayorMsg').textContent=d.message});
fetch('content/news.json').then(r=>r.json()).then(d=>{if(d.news.length)document.getElementById('newsList').innerHTML=d.news.map(n=>`<div class="card"><h4>${n.title}</h4><p>${n.date||''}</p><p>${n.text||''}</p></div>`).join('')});
fetch('content/projects.json').then(r=>r.json()).then(d=>{if(d.projects.length)document.getElementById('projectsList').innerHTML=d.projects.map(p=>`<div class="card"><h4>${p.title}</h4><p>${p.location||''} - ${p.status||''}</p></div>`).join('')});
