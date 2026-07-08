// script.js

const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");
const music = document.getElementById("music");
const loveBtn = document.getElementById("loveBtn");


// =====================
// MỞ PHONG BÌ
// =====================

envelope.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        welcome.style.display="none";
        letter.style.display="flex";

        // bắt đầu nhạc sau khi có tương tác
        music.play().catch(()=>{});

        typeWriter();

    },1200);

});


// =====================
// HIỆU ỨNG GÕ CHỮ
// =====================

let index=0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}


// =====================
// TIM RƠI
// =====================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (Math.random()*25+15)+"px";

    heart.style.animationDuration=
    (Math.random()*5+5)+"s";


    document.getElementById("hearts")
    .appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },10000);

}


setInterval(createHeart,300);



// =====================
// HOA ANH ĐÀO RƠI
// =====================

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML="🌸";

    flower.style.left=Math.random()*100+"vw";

    flower.style.fontSize=
    (Math.random()*20+15)+"px";


    flower.style.animationDuration=
    (Math.random()*5+5)+"s";


    document.getElementById("flowers")
    .appendChild(flower);


    setTimeout(()=>{

        flower.remove();

    },10000);

}


setInterval(createFlower,500);




// =====================
// PHÁO HOA
// =====================

const canvas =
document.getElementById("fireworks");

const ctx =
canvas.getContext("2d");


canvas.width=innerWidth;
canvas.height=innerHeight;


let particles=[];


function firework(x,y){

    for(let i=0;i<80;i++){

        particles.push({

            x:x,
            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            size:Math.random()*4+1,

            color:
            `hsl(${Math.random()*360},100%,60%)`

        });

    }

}



function animateFirework(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach((p,i)=>{


        ctx.beginPath();

        ctx.fillStyle=p.color;

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        ctx.fill();


        p.x+=p.dx;

        p.y+=p.dy;


        p.dy+=0.05;


        p.size*=0.98;


        if(p.size<0.3){

            particles.splice(i,1);

        }


    });


    requestAnimationFrame(
        animateFirework
    );

}


animateFirework();



loveBtn.addEventListener("click",()=>{


    for(let i=0;i<8;i++){

        setTimeout(()=>{

            firework(
                Math.random()*innerWidth,
                Math.random()*innerHeight/2
            );


        },i*300);

    }


    loveBtn.innerHTML=
    "💖 Anh sẽ luôn bên em 💖";


});




// =====================
// CHỐNG LỖI KHI ĐỔI KÍCH THƯỚC
// =====================

window.addEventListener(
"resize",
()=>{

canvas.width=innerWidth;

canvas.height=innerHeight;

});
