//--- Hanchiang News ---
function getNews() {
  alert('getnews()');
  var newsContent = '';
  //const apiRoot = 'https://hjuapp.site/wp-json';
  const apiRoot = 'http://www.hanchiangnews.com/en/wp-json';
  var wp = new WPAPI({ endpoint: apiRoot });
  wp.posts()
    .perPage(3)
    .then(posts => {
      posts.forEach(function(post) {
        console.log(post.content.rendered);
        newsContent += post.content.rendered;
      });
      $$('#id-news-content').html(newsContent);
    })
    .catch(err => {
      console.log('Error: ' + err);
    });
}
