/** Site interactions; all page content lives in the HTML files. */
document.addEventListener('DOMContentLoaded', function () {
  var search = document.getElementById('post-search');
  if (search) {
    var entries = Array.from(document.querySelectorAll('#post-results .post')).map(function (post) { return {element: post.closest('.col-12'), title: post.querySelector('h3').textContent.toLowerCase()}; });
    search.addEventListener('input', function () {
      var query = search.value.trim().toLowerCase();
      var matches = 0;
      entries.forEach(function (entry) {
        var visible = entry.title.includes(query);
        entry.element.classList.toggle('d-none', !visible);
        if (visible) matches++;
      });
      document.getElementById('no-results').hidden = matches > 0;
    });
  }
});
