chrome.runtime.onMessage.addListener(function(msg) { // catch SPA navigations triggered by background.js
  if (msg === 'page-rendered') {
    setTimeout(function () { // needed to add this because Vue reactivity shenanigans, probably
      load()
    }, 500)
  }
})

load() // we want to load this when we first get to our page anyways

function load() {
  // showing some random stuff with JS / jQuery - This is our main load function
  console.log('Hi! This is the extension running. Today is ' + new Date().toLocaleDateString())

  $('.subtitle-nuxt-smaller').css('max-width', '1300px')
  $('.subtitle-nuxt').text('Full-Stack Developer - and that includes Browser Extensions!')
  $('.subtitle-nuxt').after('<h2 class="subtitle-nuxt">The extension is running! Try opening the console with F12 or CTRL + SHIFT + J</div>')
}