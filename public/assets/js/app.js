$(function () {
    $('#submit').on('click', function (e) {
        e.preventDefault()

        if ($('#icon_prefix').val() === '') {
            $('#validate').show()
        } else {
            var newBurger = {
                burger_name: $('#icon_prefix').val().trim()
            }

            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function () {
                console.log('added new burger', newBurger)
                location.reload()
            })
        }
    })

    $('.devour').on('click', function (e) {
        e.preventDefault()

        var id = $(this).data('id')
        var nowDevoured = $(this).data('nowdevoured')

        var ate = {
            devoured: true
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: ate
        }).then(function () {
            console.log('changed devoured to', nowDevoured)
            location.reload()
        })
    })

    $('.delete').on('click', function(e) {
        e.preventDefault()

        var id = $(this).data('id')
        
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function() {
            console.log('deleted burger id: ' + id)
            location.reload()
        })
    })
})