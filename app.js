/* Loader: base app + UX A+B+C */
(function(){
  function load(src, cb){
    var s=document.createElement('script');
    s.src=src;
    s.onload=cb||function(){};
    s.onerror=function(){ console.warn('failed', src); if(cb) cb(); };
    document.head.appendChild(s);
  }
  load('https://cdn.jsdelivr.net/gh/stefanosupernet-sudo/ecolanyards@c928dc99a2491efc36f87dccd251f37dc2377464/app.js', function(){
    load('ux-abc.js?v=20261023abc');
  });
})();
