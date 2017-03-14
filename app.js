var SC = require('soundcloud');

SC.initialize({
  client_id: 'aIgVsZTWV7KoLxgT1rMyzF2v096hUMTJ',
//   redirect_uri: 'http://example.com/callback'
});



SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});



SC.get('/user/183/tracks').then(function(tracks){
  console.log('Latest track: ' + tracks[0].title);
});

