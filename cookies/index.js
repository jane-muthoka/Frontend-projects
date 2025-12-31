accept_cookies=document.getElementById('accept-cookies');
decline_cookies=document.getElementById('decline-cookies');
cookie_notification=document.getElementById('cookie-notification');
text=document.getElementById('txt');

accept_cookies.addEventListener('click',function(){
    document.cookie="cookies_accepted=true; path=/; max-age="+60*60*24*365;
    cookie_notification.style.display="block";
    accept_cookies.style.display="none";
    decline_cookies.style.display="none";
    text.style.display="none";
});

decline_cookies.addEventListener('click',function(){
    document.cookie="cookies_accepted=false; path=/; max-age="+60*60*24*365;
    cookie_notification.style.display="none";
});

if(document.cookie.indexOf('cookies_accepted=')===-1){
    cookie_notification.style.display="block";
}   
else{
    cookie_notification.style.display="none";
}
