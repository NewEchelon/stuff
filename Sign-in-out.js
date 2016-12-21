	// ADD CLASS TO BODY BASED ON WHETHER USER IS SIGNED IN OR OUT
if($('.TopMenu ul li:nth-child(3) a').html() == 'Sign out'){
$('body').addClass('signed-in');
}else{
$('body').addClass('signed-out');
}
