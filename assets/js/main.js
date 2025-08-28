---
---
(function(){
  const searchInput = document.getElementById('search');
  const resultsEl = document.getElementById('results');
  if(!searchInput || !resultsEl) return;

  fetch('{{ "/episodes.json" | relative_url }}')  // <-- key change
    .then(r=>r.json())
    .then(data=>{ /* …unchanged… */ });
})();


// Client-side episode search using Lunr and /episodes.json
(function(){
  const searchInput = document.getElementById('search');
  const resultsEl = document.getElementById('results');
  if(!searchInput || !resultsEl) return;

  fetch('/episodes.json')
    .then(r=>r.json())
    .then(data=>{
      const idx = lunr(function(){
        this.ref('url');
        this.field('title');
        this.field('summary');
        this.field('tags');
        data.forEach(d=>this.add(d), this);
      });
      function render(q){
        resultsEl.innerHTML='';
        if(!q){ resultsEl.innerHTML = '<p class="muted">Type to search episodes…</p>'; return; }
        const hits = idx.search(q);
        if(hits.length===0){ resultsEl.innerHTML = '<p>No results.</p>'; return; }
        hits.slice(0,20).forEach(h=>{
          const item = data.find(d=>d.url===h.ref);
          const card = document.createElement('article');
          card.className='card episode-card';
          card.innerHTML = `<h3><a href="${item.url}">${item.title}</a></h3>
          <p>${item.summary||''}</p>
          <div>${(item.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
          resultsEl.appendChild(card);
        });
      }
      searchInput.addEventListener('input', (e)=>render(e.target.value.trim()));
      render('');
    });
})();
