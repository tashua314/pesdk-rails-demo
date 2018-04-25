window.onload = function () {
  $.getJSON("/html5_license.json", function(json) {
    var license = JSON.stringify(json);
    var container = document.getElementById('pesdk')

    var editor = new PhotoEditorSDK.UI.ReactUI({
      container: container,
      license: license,
      assets: {
          baseUrl: '/assets',
          resolver: function (path) { return path }
      }
    })
  })
}
