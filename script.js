const username = document.getElementById("name");
const isWoman = document.getElementById("womanBox"); 
const selectColor = document.getElementById("colors"); 
const register = document.getElementById("register");



register.addEventListener("click", () =>{  
    let count = 0;
    document.cookie = `${username.name}= ${username.value}`; 

        window.open("", "_self").onload = () => count += 1 
        this.document.body.innerHTML = `Welcome ${getCookie(username.name)} . You have visited this site ${count} times :) .` 
        this.document.body.style.color = selectColor.options[selectColor.selectedIndex].value
})

getCookie = (cookieName) =>{
    let ca = document.cookie.split(';'); 
        return ca.filter(el => el.includes(cookieName) ? el.split("=")[1] : null)
        /*let cookie = `${cookieName}=`
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i]; 
            while (c.charAt(0) == ' ') {                              //an other solution
                c = c.substring(1); 
            }  
            if (c.indexOf(cookie) == 0) { 
                return c.substring(cookie.length, c.length);
            }
        }*/
}

setCookie = (cookieName, cookieValue, expiryDate) =>{
    document.cookie = `${cookieName}= ${cookieValue} ; expires =${expiryDate}`; 
} 

deleteCookie = (cookieName) =>{
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
} 

allCookieList = () =>{
    return document.cookie
} 

hasCookie = (cookieName) =>{
    let username = getCookie(cookieName);
    return username != "" ? false : true;
}

document.body.style.fontSize ="18px"