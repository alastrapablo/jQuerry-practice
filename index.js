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

$('button').on('click', function (e) {
    $('button').hide(e)

    setTimeout(() => {
        $('button').show(e)
    }, 1000);
})

$('button').click(function (e) {
    $('h2').toggle(e)
})

$('button').on('click', function (e) {
    $('h1').fadeOut(e)

    setTimeout(() => {
        $('h1').fadeIn(e)
    }, 1000);
})

// $('h1').click(function (e) {
//     $('h1').fadeToggle(e)
// })

// $('hr').on('click', function (e) {
//     $('div').slideUp(e)

//     setTimeout(() => {
//         $('div').slideDown(e)
//     }, 1000);
// })

// $('hr').click(function (e) {
//     $('div').slideToggle(e)
// })

// $('hr').click(function () {
//     $('h3').animate({ opacity: 0.5 })
// })

$('hr').on('click', function (e) {
    $('div').slideUp(e).slideDown(e).animate({ opacity: 0.5 })
})