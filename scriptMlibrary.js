
$(document).ready(function(){
    $('#upload_box').hide();
    $(document).on('click','#upload_boxe',function(){
        $('#upload_boxe').hide();
        $('#upload_box').show();
    });
    $(document).on('click','window',function(){
        $('#upload_box').hide();
        $('#upload_boxe').show();
    });
    
    var span = document.getElementsByClassName("close")[0];
                    span.onclick = function() {
                        $("#Mlibrary").toggle();
                    }
                    var modal = document.getElementById('myModal');
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            $("#Mlibrary").toggle();
                        }
                    }
});

