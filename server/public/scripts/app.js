$(document).ready(function(){

    $('.container').on('click', '.benjamin', function(){
        $.ajax({
            type: "GET",
            url: "/data",
            success: function(data){
                appendDom(data);
            }
        });

    })

    $('.container').on('click', '.deleteme', function(){
        $(this).parent().remove();
    })




});

function appendDom(data){
    for (var i=0; i<data.people.length; i++){


        $('.container').append('<div class="person well col-md-3"></div>');
        var $el = $('.container').children().last()
        //$el.addClass("count", count);
        $el.append('<img src="' + data.people[i].imageURL + '"><br>');
        $el.append('<p>' + data.people[i].name + '</p>');
        $el.append('<p>' + data.people[i].location + '</p>');
        $el.append('<p>' + data.people[i].position + '</p>');
        $el.append('<button class="deleteme btn btn-danger">Delete</button>');
    }

}