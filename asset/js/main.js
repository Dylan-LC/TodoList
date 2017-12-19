$("ul").on("click", "li", function(){
  // console.log($(this).css("color"));
  $(this).toggleClass("completed");
  // $(this).css("color", "gray");
  // $(this).css("text-decoration", "line-through");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  var todoText = $(this).val();
  if(event.which == 13){
    $("ul").append("<li><span> <i class='fa fa-trash-o' aria-hidden='true'></i> </span>" + todoText + "</li>")
  }
});
