(function(){
  var b=document.querySelector('.menu'),n=document.getElementById('nav');
  if(b&&n){var set=function(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.textContent=o?'Close':'Menu'};
    b.addEventListener('click',function(){set(!n.classList.contains('open'))});
    n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});}
  var p=document.getElementById('prog');
  if(p)addEventListener('scroll',function(){var h=document.documentElement;p.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
  var q=document.getElementById('q'),L=document.getElementById('latest');
  if(q&&L){var orig=L.innerHTML,data=null,esc=function(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML};
    var run=function(){var t=q.value.trim().toLowerCase();if(!t){L.innerHTML=orig;return}
      var r=data.filter(function(x){return (x.t+' '+x.s+' '+x.c).toLowerCase().indexOf(t)>-1}).slice(0,25);
      L.innerHTML=r.length?'<div class="rows">'+r.map(function(x){return '<a class="row" href="'+x.u+'"><span class="rd">'+esc(x.d)+'</span><span class="rt"><strong>'+esc(x.t)+'</strong><small>'+esc(x.s)+'</small></span><span class="rc">'+esc(x.c)+'</span></a>'}).join('')+'</div>':'<p class="empty">No matches.</p>'};
    q.addEventListener('input',function(){if(data)return run();fetch('/search.json').then(function(r){return r.json()}).then(function(j){data=j;run()}).catch(function(){})});}
})();
