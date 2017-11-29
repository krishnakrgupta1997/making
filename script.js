$("#file").hide();
$("#chat").hide();
$("#favorites").hide();
$("#notifications").hide();

$(document).ready(function(){
    $("#file").hide();
    $(document).on('click','.upload_option_1',function(){
                        $("#file").toggle();
                    } );
                    
                    $(document).on('change','#file',function(){
                        var property=document.getElementById("file").files[0];
                    });
    
                    $("#Mlibrary").hide();
                    $(document).on('click','.upload_option_2',function(){
                                        $("#Mlibrary").toggle();
                                    } );
                    
                    $("#notifications").hide();
                    $(document).on('click','#notification_button',function(){
                        $("#chat").hide();
                        $("#favorites").hide();
                        $("#notifications").toggle();
                    });
                    
                    $("#chat").hide();
                    $(document).on('click','#chat_button',function(){
                        $("#favorites").hide();
                        $("#notifications").hide();
                        $("#chat").toggle();
                    });
                    
                    $("#favorites").hide();
                    $(document).on('click','#favorites_button',function(){
                        $("#notifications").hide();
                        $("#chat").hide();
                        $("#favorites").toggle();
                    });
                });