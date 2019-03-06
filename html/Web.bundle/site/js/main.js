var root = document.getElementById("root");

root.innerHTML = '<h1>Welcome to React Native!</h1>';
root.innerHTML += '<p>To get started, edit App.js</p>';

var qs = (window.location.search.match(/([^=?&]+=[^&]+)/g)||[]).reduce(function(a,b) {
  a[b.split('=')[0]] = b.split('=')[1];
  return a;
}, {});

switch (qs.platform) {
  case 'ios':
    root.innerHTML += '<p>Press Cmd+R to reload,<br />';
    root.innerHTML += 'Cmd+D or shake for dev menu.</p>';
    break;
  case 'android':
    root.innerHTML += '<p>Double tap R on your keyboard to reload,<br />';
    root.innerHTML += 'Shake or press menu button for dev menu.</p>';
    break;
};

root.innerHTML += '<p>This HTML can be edited from<br />';
root.innerHTML += '<span class="code">/path/to/project/html/Web.bundle/site/index.html</span></p>';
root.innerHTML += '<p class="warn">Remember to re-build if files in the<br />Web.bundle folder are updated.</p>';
root.innerHTML += '<button onClick="buttonClick()">Click Me</button>';

function buttonClick() {
  window.ReactNativeWebView.postMessage(JSON.stringify({title: 'Notice', message: 'Hello World!'}));
}
