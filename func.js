let keyB = document.getElementById('Keys');
document.addEventListener("keydown", event => {
    let pianoCodes = [  "KeyA",
        "KeyS",
        "KeyD",
        "KeyF",
        "KeyG",
        "KeyH",
        "KeyJ",
        "KeyW",
        "KeyE",
        "KeyT",
        "KeyY",
        "KeyU"];
    if (pianoCodes.includes(event.code)) {
        if(event.code == "KeyA"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "A.mp3";
            audio.play();
        }
        if(event.code == "KeyS"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "S.mp3";
            audio.play();
        }
        if(event.code == "KeyD"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "D.mp3";
            audio.play();
        }
        if(event.code == "KeyF"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "F.mp3";
            audio.play();
        }
        if(event.code == "KeyG"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "G.mp3";
            audio.play();
        }
        if(event.code == "KeyH"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "H.mp3";
            audio.play();
        }
        if(event.code == "KeyJ"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "J.mp3";
            audio.play();
        }
        if(event.code == "KeyW"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "W.mp3";
            audio.play();
        }
        if(event.code == "KeyE"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "E.mp3";
            audio.play();
        }
        if(event.code == "KeyT"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "T.mp3";
            audio.play();
        }
        if(event.code == "KeyY"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "Y.mp3";
            audio.play();
        }
        if(event.code == "KeyU"){
            let audio = document.createElement("AUDIO");
            let src = audio.src;
            audio.src = "U.mp3";
            audio.play();
        }
    }
    else {
        console.warn(`Unexpected keypress: '${event.code}'`)
    }
});

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

