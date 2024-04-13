document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var batch = document.getElementById('batch').value;
  var code = document.getElementById('code').value;
  window.location.href = 'SSP-' + batch + '-' + code + '.html';
});
