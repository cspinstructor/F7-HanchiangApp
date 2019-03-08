// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log('Device is ready!');
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function(page) {
  // Do something here for "about" page
});

myApp.onPageInit('timetable', function(page) {
  // Do something here for "about" page
});

myApp.onPageInit('news', function(page) {
  // Do something here for "about" page
});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
  // Get page data from event data
  var page = e.detail.page;

  if (page.name === 'about') {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('Here comes About page 1');
  }
});

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function(e) {
  // Following code will be executed for page with data-page attribute equal to "about"
  //myApp.alert('Here comes About page 2');
});

$$('#id-calendar').on('click', function() {
  console.log('id-calendar');
  alert('calendar clicked');
});

$$('#id-news').on('click', function() {
  console.log('id-news');
  getNews();
});

$$('.panel-left').on('panel:open', function() {
  console.log('Panel left: open');
});

//--- Hanchiang News ---
function getNews() {
  var newsContent = '';
  //const apiRoot = 'https://hjuapp.site/wp-json';
  const apiRoot = 'http://www.hanchiangnews.com/en/wp-json';
  var wp = new WPAPI({ endpoint: apiRoot });
  wp.posts().then(function(posts) {
    posts.forEach(function(post) {
      console.log(post.content.rendered);
      newsContent += post.content.rendered;
    });
    $$('#id-news-content').html(newsContent);
  });
}
