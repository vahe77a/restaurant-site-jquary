// nav link
$(document).ready(function(){
    let a = $('nav a[data-from]');
    a.click(function(e){
        e.preventDefault();
        let id = $(this).data('from');
        let ofs = $(`[data-to=${id}]`).offset().top;
        $('html,body').animate({
            scrollTop:ofs - 50
        },500) 
    });
    // button 1
    let btn1 = $('.btn1');
    btn1.click(function(f){
        f.preventDefault();
        let id = $(this).data('from');
        let ofs = $(`[data-to=${id}]`).offset().top;
        $('html,body').animate({
            scrollTop:ofs - 50
        },500) 
    })
// button 2
    let btn2 = $('.btn2');
    btn2.click(function(f){
        f.preventDefault();
        let id = $(this).data('from');
        let ofs = $(`[data-to=${id}]`).offset().top;
        $('html,body').animate({
            scrollTop:ofs - 50
        },500) 
    })

// nav menu
    $('#menuBtn').on('click',function(){
        $('#topMenu').toggleClass("open");
    });

    

})