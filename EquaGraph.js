const primaryColor = "#288181";
const buttonHoverColor = "#205a5a";
const darkColor = "#242323";
const inputBoxColor = "#5f5f5f";
const inputBoxColorLight ="#cecece";


const buttonSettingsElements = ["darkmode", "function1", "function2", "function3", "keepOpenSettings"];
const buttonSettings = {};

window.onload = function () {
    const icon = document.getElementById("icon");
    const settings = document.getElementById("settings");
    const settingsMouseLeave = document.getElementById("settingsMouseLeave");
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const main = document.getElementById("main");

    window.addEventListener("resize", calcHeight);
    calcHeight();

    for (let i = 0; i < 5; i++) {
        buttonSettings[i] = {
            status: false,
            element: document.getElementById(buttonSettingsElements[i]),
            child: document.getElementById(buttonSettingsElements[i]).querySelector("img")
        };
        buttonSettings[i].element.addEventListener("click", function() {
            buttonSettings[i].child.classList.toggle("showIconSettings");
            settingsFunctions(i); 
            buttonSettings[i].status = !buttonSettings[i].status;
        });
        buttonSettings[i].element.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
        icon.addEventListener("mouseenter", function() {
            settings.setAttribute("aria-hidden", "true");
            settings.style.transform = "translate(-430px, 20px)";
            if (!buttonSettings[0].status) {
                document.documentElement.style.setProperty('--menu-color', "white");
            }
        });
        settingsMouseLeave.addEventListener("mouseleave", function() {
            if (!buttonSettings[4].status) {
                settings.setAttribute("aria-hidden", "false");
                settings.style.transform = "translate(-430px, -280px)";
                if (!buttonSettings[0].status) {
                    document.documentElement.style.setProperty('--menu-color', darkColor);
                }
            }
        }); 
        settings.addEventListener("mouseleave", function() {
            if (!buttonSettings[4].status) {
                settings.setAttribute("aria-hidden", "false");
                settings.style.transform = "translate(-430px, -280px)";
                if (!buttonSettings[0].status) {
                    document.documentElement.style.setProperty('--menu-color', darkColor);
                }
            }
        }); 
    }

    buttonSettings[0].child.classList.toggle("showIconSettings");
    buttonSettings[0].status = true;

    function calcHeight() {
        let mainHeight = parseInt(main.offsetHeight) / window.innerHeight * 100;
        let mainTop = parseInt(header.offsetHeight - 2) / window.innerHeight * 100;
        main.style.top = mainTop + "vh";
        footer.style.top =  mainHeight + "vh"; 
    }   
       
    function settingsFunctions(click) {
        switch (click) {
            case 0: darkmodeFunction();
                    break;
            case 1: function1Function();
                    break;
            case 2: function2Function();
                    break;
            case 3: function3Function();
                    break;
        }
    }

    function darkmodeFunction() {
        if (!buttonSettings[0].status) {
            document.documentElement.style.setProperty('--text-color', "white");
            document.documentElement.style.setProperty('--page-color', darkColor);
            document.documentElement.style.setProperty('--inputBox-color', inputBoxColor);
        } else {
            document.documentElement.style.setProperty('--text-color', darkColor);
            document.documentElement.style.setProperty('--page-color', "white");
            document.documentElement.style.setProperty('--inputBox-color', inputBoxColorLight);
        }
    }

    function function1Function() {}
    function function2Function() {}
    function function3Function() {}  
    
}


