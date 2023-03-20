$('h1').addClass('big-title margin-50')

$('h1').text('Bye.')

// $('button').text("Don't Click Me")
$('button').html("<strong>Click Here</strong>")

$('img').attr('src')

$('a').attr('href', 'https://github.com/alastrapablo')


$('h1').click(function () {
    $('h1').css('color', 'purple')

    setTimeout(() => {
        $('h1').css('color', 'cadetblue')
    }, 1000);
})

//without for loop
$('button').click(function () {
    $('h1').css('color', 'salmon')
})

$('input').keypress(function (event) {
    console.log(event.key);
})


$(document).keypress(function (event) {
    $('h1').text(event.key)
})

$('h1').on('mouseover', function () {
    $('h1').css('color', 'brown')
})


$('h1').before('<hr></hr>')
$('h1').prepend('<button><</button>')
$('h1').append('<button>></button>')
$('input').after('<hr></hr>')

// $('button').remove()

