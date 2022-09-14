$('.textb').keyup(function(e){
    console.log(e);
    if(e.keyCode === 13 && $('.textb').val() != ''){
        let task = $('<div class="task"></div>').text($('.textb').val());
        let checked = $('<i class="fa-solid fa-check"></i>');
        let del = $('<i class="fa-solid fa-trash"></i>')

        task.append(del, checked);
        $('.not-comp').append(task);

        del.on('click', function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            })
        })

        checked.on('click', function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                p.fadeIn();
                $('.comp').append(p);

                checked.remove();
               

            })
       
        })
        $('.textb').val('');
    }
})