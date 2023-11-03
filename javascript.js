"use strict"

window.onload = ()=>{
    setTimeout(()=>{
        disclaimer();
    },3000);
}

/*Images*/
function images() {
    //Img list
    const imgArray = ["A-B0T-1.png","A-B0T-2.png","A-B0T-3.png","A-B0T-4.png","A-B0T-5.png","A-B0T-6.png"]
    //Buttons
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");
    const imageChosen = document.getElementById("imageChosen");
    let counter = 0;

    rightBtn.addEventListener("click",(e)=>{
        counter += 1
        if(counter == imgArray.length){
            counter = 0
        }
        imageChosen.setAttribute("src",`img/${imgArray[counter]}`)
    });

    leftBtn.addEventListener("click",(e)=>{
        counter -= 1
        if (counter == -1) {
            counter = imgArray.length -1;
        }
        imageChosen.setAttribute("src",`img/${imgArray[counter]}`)
    })

    setInterval(()=>{
        counter += 1
        if(counter == imgArray.length){
            counter = 0
        }
        imageChosen.setAttribute("src",`img/${imgArray[counter]}`)
    },20000)

}
//Languages div
function languages_options() {
    const languagesBtn = document.getElementById("languagesBtn");
    const langArrayList = document.getElementById("langArrayList");
    const langArry_Flags = document.querySelector(".lang_list");
    const langText = document.getElementById("langText");

    languagesBtn.addEventListener("click",(e)=>{
        langArrayList.classList.toggle("classBlock")
    });

    langArry_Flags.addEventListener("click", (e)=>{
        
        let flagSTR = e.target.id 
        switch (flagSTR) {
            case "US":
                languagesBtn.setAttribute("src",`https://flagsapi.com/${e.target.id}/shiny/64.png`);
                langText.innerText = "English";
                break;
            case "ES":
                languagesBtn.setAttribute("src",`https://flagsapi.com/${e.target.id}/shiny/64.png`);
                langText.innerText = "Español";
                break;
            case "BR":
                languagesBtn.setAttribute("src",`https://flagsapi.com/${e.target.id}/shiny/64.png`);
                langText.innerText = "Portuguese";
                break;
            case "FR":
                languagesBtn.setAttribute("src",`https://flagsapi.com/${e.target.id}/shiny/64.png`);
                langText.innerText = "Français";
                break;
                langText.innerText = "Français";
            case "IT":
                languagesBtn.setAttribute("src",`https://flagsapi.com/${e.target.id}/shiny/64.png`);
                langText.innerText = "Italiano";
                break;
        
            default:
                languagesBtn.setAttribute("src",`https://flagsapi.com/US/shiny/64.png`)
                break;
        }
    })
}
/*Policy*/
function privacy_policy() {
    const privacyBTN = document.getElementById("privacy");
    const closeBtn = document.getElementById("closeBtn");
    const modal = document.querySelector(".modal");
    const contentModal = document.querySelector(".content_modal");
    const info_container = document.querySelector(".info_container");
 
    privacyBTN.addEventListener("click",(e)=>{
        modal.style.display = "block";
        if(window.innerWidth <= 440){
            contentModal.style.width = "300px";
            contentModal.style.height = "70%";
        }else{
            contentModal.style.width = "400px";
            contentModal.style.height = "490px";
        }
    
        window.onresize = ()=>{
            if(window.innerWidth <= 440){
                contentModal.style.width = "300px";
                contentModal.style.height = "70%";
            }else{
                contentModal.style.width = "400px";
                contentModal.style.height = "490px";
            }
        }
        //Creating policy
        const policy_text = `
        <h2>Privacy Policy</h2>
        <p> A-B0T understands that your privacy is important to you. We are committed to respecting your privacy and protecting your personal data, which is any information that is capable of identifying you as an individual person.</p>
        <p>A-B0T collects personal data such as: your e-mail address and password, the collection of personal data may be required for the operation of the bot: the main purpose of this is to open your BambooHr account and track your "Clock In" and "Clock Out" of your time job.</p>
        <p><b>***You do not have the obligation to provide it with such data, however, some of them are essential requirements to A-B0T work correctly***</b></p>
        <p>A-B0T never retains your personal information, the database just works locally on your machine, you can stop the A-B0T by just deleting your email and password at any moment you want.</p> `

        info_container.innerHTML = policy_text;
    });

    closeBtn.addEventListener("click",(e)=>{
        modal.style.display = "none"
    })

    //Close esc
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" || e.keyCode === 27){
            modal.style.display = "none"
        }
    });   
}
function terms_and_conditions() {
    const termBTN = document.getElementById("terms");
    const closeBtn = document.getElementById("closeBtn");
    const modal = document.querySelector(".modal");
    const contentModal = document.querySelector(".content_modal");
    const info_container = document.querySelector(".info_container");

    termBTN.addEventListener("click",(e)=>{
        modal.style.display = "block";

        if(window.innerWidth <= 440){
            contentModal.style.width = "340px";
            contentModal.style.height = "580px";
        }else{
            contentModal.style.width = "400px";
            contentModal.style.height = "490px";
        }
    
        window.onresize = ()=>{
            if(window.innerWidth <= 440){
                contentModal.style.width = "340px";
                contentModal.style.height = "580px";
            }else{
                contentModal.style.width = "400px";
                contentModal.style.height = "490px";
            }
        }

        //Creating text
        const terms_text = `
        <h2>Terms And Conditons</h2>
        <p>A-B0T may periodically change the Terms without prior notice, so please check back from time to time.</p>
        <p>By accessing and using "A-B0T", you agree to these Terms. For an explanation of our practices and policies related to the collection, use, and storage of our user's information, please read our Policy</p>
        <p>The user will need to provide their email and password from Bamboohr in order for A-B0T to run their scripts, these scripts just take this info and start checking their track time job.</p>
        <p>A-B0T Does not take or share any information added by the user, the database just works locally, this means A-B0T creates a local database on the user's machine, and this database does not have communication with any other foreign server</p>
        <p style="text-align: center" >You can revise the source code <a target="_blank" href="https://github.com/EumT07/A-B0T_version_0.0.1">here</a>.</p>
        `
        info_container.innerHTML = terms_text;
    });

    closeBtn.addEventListener("click",(e)=>{
        modal.style.display = "none"
    })
    //Close esc
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" || e.keyCode === 27){
            modal.style.display = "none"
        }
    });

    
}
function disclaimer() {
    const closeBtn = document.getElementById("closeBtn");
    const modal = document.querySelector(".modal");
    const contentModal = document.querySelector(".content_modal");
    const info_container = document.querySelector(".info_container");
    modal.style.display = "block";

    if(window.innerWidth <= 640){
        contentModal.style.width = "340px";
        contentModal.style.height = "90%"; 
    }else{
        contentModal.style.width = "600px";
        contentModal.style.height = "530px";
    }
    
    window.onresize = ()=>{
        if(window.innerWidth <= 640){
            contentModal.style.width = "340px";
            contentModal.style.height = "90%";
        }else{
            contentModal.style.width = "600px";
            contentModal.style.height = "530px";
        }
    }
    
    //Creating policy
    const policy_text = `
    <h2>Disclaimer</h2>
    <p>This is a little project to test or improve my knowledge skills with Python, this is not an official product. This project is just a simple bot and its function is help to control "time work", So this page is not a real page you can watch it by looking at the URL this was made with github pages in order to show how it could it be if it were as a real website. </p>
    <p>This code does not use malicious code, nor does it take personal data for any inappropriate use, but for the effective use of the bot you must establish an email and a password, which will be used on the Bamboohr page, such information is only stored locally in the "/db" databases so that the bot performs its operation correctly.</p>
    <p>The function of the bot is simple, this logs in to your account and runs the counter according to the time that the user establishes, this time only serves to keep track of the work schedule. So you are the only one who gives access to the bot to get into your Bambohr account "It just works with the specific Bammbo url about the company you work with". So this means you are the only one responsible for the correct work of this bot.</p>
    <p>If you download this bot, you are accepting all terms and conditions, that this could do its work very well or fail, and you are the one responsible for this.</p>
    <p>If you require any more information or have any questions about it, please feel free to contact me by email at eublanmata@gmail.com.</p>`

    info_container.innerHTML = policy_text;

    closeBtn.addEventListener("click",(e)=>{
        modal.style.display = "none"
    })

    //Close esc
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" || e.keyCode === 27){
            modal.style.display = "none"
        }
    });   
}
/*clicpboard from google bard*/
function copyText() {
    const clipboard = document.getElementById("clipboard");

    clipboard.addEventListener("click",()=>{
        const text = clipboard.textContent;

        // Create a temporary input element.
        const tempInputElement = document.createElement('input');

        // Set the value of the input element to the text to be copied.
        tempInputElement.value = text;

        // Append the input element to the body of the document.
        document.body.appendChild(tempInputElement);

        // Select the input element.
        tempInputElement.select();

        // Copy the text to the clipboard.
        document.execCommand('copy');

        // Remove the temporary input element from the body of the document.
        document.body.removeChild(tempInputElement);
    });
}
//Arrow up
function arrowUp() {
    const footer = document.getElementById("showBtn");
    const arrow_up_btn = document.getElementById("arrow_up_btn");

    footer.addEventListener("mouseover", ()=>{
        arrow_up_btn.style.transform = "translate(0%)"
    });
    footer.addEventListener("mouseout",()=>{
        arrow_up_btn.style.transform = "translate(200%)"
    });
}
//Menu responsive
function menu_responsive(){
    const menubarBtn = document.getElementById("menubar");
    const closeMenubarBtn = document.getElementById("closebar");
    const menuResponsive = document.getElementById("menuResponsive");
    const logo = document.querySelector(".botLogo");
    //Containers
    const menubarContainer = document.querySelector(".menubar_container");
    const closebarContainer = document.querySelector(".closebar_container");
    //scroll menu
    let topHeader = document.getElementById("top");
    let navContainer = document.querySelector(".nav_container");
    let navLi = document.querySelectorAll(".white");

    window.addEventListener("scroll",()=>{
        // let scroll = window.scrollY;
        if(window.scrollY > 10){
            navContainer.style.background = "#2c2c2c";
            menubarBtn.style.color = "#fff"; 
            closeMenubarBtn.style.color = "#fff";
            navLi.forEach(ele => ele.style.color = "#fff");
            logo.setAttribute("src","./img/whitebot.png");
        }else{
            navContainer.style.background = "transparent";
            navLi.forEach(ele => ele.style.color = "#000");
            menubarBtn.style.color = "#000"; 
            closeMenubarBtn.style.color = "#000";
            logo.setAttribute("src","./img/greenbot.png");

        }
    });
    
    menubarBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        menubarContainer.style.display = "none";
        menuResponsive.style.transform = "translate(0)";
        closebarContainer.style.display = "block";
    });

    closeMenubarBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        closebarContainer.style.display = "none";
        menubarContainer.style.display = "block"
        menuResponsive.style.transform = "translate(200px)";
    });

}


menu_responsive()
images()
languages_options()
privacy_policy()
terms_and_conditions()
copyText()
arrowUp()
