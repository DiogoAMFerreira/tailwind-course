// This script injects a live reload WebSocket client into HTML pages
(function () {
  var ws = new WebSocket("ws://" + location.host);
  ws.onmessage = function (event) {
    if (event.data === "reload") {
      location.reload();
    }
  };
})();
