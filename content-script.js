console.log('Hi! This is the extension running. Today is ' + new Date().toLocaleDateString())

$('.subtitle-nuxt-smaller').css('max-width', '1300px')
$('.subtitle-nuxt').text('Full-Stack Developer - and that includes Browser Extensions!')
$('.subtitle-nuxt').after('<h2 class="subtitle-nuxt">The extension is running! Try opening the console with F12 or CTRL + SHIFT + J</div>')