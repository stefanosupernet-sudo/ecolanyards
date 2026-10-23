/* temporary loader - restores previous working app.js */
(function(){
  var s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/gh/stefanosupernet-sudo/ecolanyards@c928dc99a2491efc36f87dccd251f37dc2377464/app.js';
  s.onload=function(){ console.log('app.js restored from c928dc99'); };
  document.head.appendChild(s);
})();
