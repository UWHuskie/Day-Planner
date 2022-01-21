$(document).ready(function () {
var saved = $(".saveBtn")
saved.on("click", function(){
    console.log(this)
     var time = $(this).parent().attr("id")
    console.log(time)
    var text = $(this).siblings(".description").val()
    console.log(text)
    localStorage.setItem(time, text)
})
    
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
    var currentHour = moment().get('hour');
    var rowHour = $(this).parent().attr("id")
    console.log(currentHour)
   
    $(".time-block").each(function(){
        var id = parseInt($(this).attr('id'));
        // console.log(id);
        if (currentHour === id){
            $(this).addClass("present")
        }
     });
    

}) 

