$("#nut_thong_bao").click(function() {
    if($("#nut_thong_bao").hasClass("checked") == false) {
    $("#nut_thong_bao").addClass("checked");
    $("#nut_thong_bao img").attr("src", "download.jpg");
    $("#hop_thong_bao").css("display", "block");
    } else {
    $("#nut_thong_bao").removeClass("checked");
    $("#nut_thong_bao img").attr("src", "a.jpg");
    $("#hop_thong_bao").css("display", "");
    } });

    $(document).ready(function(){
        $('#hide').click(function(){
            $('p').hide();
        });
        $('#show').click(function(){
            $('p').show();
        });
    });

    $(document).ready(function(){
        $('button').click(function(){
            var div = $('div');
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '100px'}, "slow")
        });
    });