const meusProjetos = [
{
id:"01",
title:"SuccessTrail",
desc:"Case de Product Management focado em jornada pós-compra, experiência do cliente e identificação de oportunidades para reduzir atritos após a aquisição.",
techs:["Product Discovery","Service Design","UX"],

github:"https://github.com/anavieira00-product/Portif-lio---Marketplace",
deploy:"https://anavieira00-product.github.io/Portif-lio---Marketplace/",

images:[
"1abertura.png",
"1hipotesesdesolucao.png",
"1solucao.png"
]
},
{
id:"02",
title:"FrotaPro",
desc:"Plataforma fictícia de gestão preventiva de frotas e sinistros, combinando visão computacional, evidências rastreáveis e validação humana para reduzir disputas, retrabalho e downtime.",
techs:["Product Strategy","Legal Product","IA","Compliance"],

github:"https://github.com/anavieira00-product/Portif-lio---FrotaPro-Gest-o-Preventiva-Sinistros-de-Frota",
deploy:"https://anavieira00-product.github.io/Portif-lio---FrotaPro-Gest-o-Preventiva-Sinistros-de-Frota/",

images:[
"2abertura.png",
"2problemas.png",
"2solucao.png"
]
}
];

const grid=document.getElementById("projects-grid");

meusProjetos.forEach((projeto,index)=>{

const card=document.createElement("div");
card.className="project-card";

const techs=projeto.techs
.map(t=>`<span>#${t}</span>`)
.join("");

const images=projeto.images
.map((img,i)=>`
<img src="${img}"
alt="${projeto.title}"
class="slide-img"
style="display:${i===0?"block":"none"}">
`)
.join("");

card.innerHTML=`

<div class="project-header-row">
<span class="project-number">${projeto.id}</span>

<div class="project-meta-links">

<a href="${projeto.github}"
target="_blank"
title="Código-Fonte">
<i class="fa-brands fa-github"></i>
</a>

<a href="${projeto.deploy}"
target="_blank"
title="Visualizar Live">
<i class="fa-solid fa-rocket"></i>
</a>

</div>
</div>

<div class="project-info">

<h3>${projeto.title}</h3>

<p>${projeto.desc}</p>

<div class="proj-techs">
${techs}
</div>

</div>

<div class="project-slider-container">

<div class="slides-wrapper" id="slides-${index}">
${images}
</div>

${
projeto.images.length>1
?`
<button class="slide-btn prev">
<i class="fa-solid fa-chevron-left"></i>
</button>

<button class="slide-btn next">
<i class="fa-solid fa-chevron-right"></i>
</button>
`
:""
}

</div>
`;

grid.appendChild(card);

if(projeto.images.length>1){

let currentSlide=0;

const wrapper=card.querySelector(`#slides-${index}`);
const imgs=wrapper.querySelectorAll(".slide-img");
const prev=card.querySelector(".slide-btn.prev");
const next=card.querySelector(".slide-btn.next");

function updateSlide(newSlide){

imgs[currentSlide].style.display="none";

currentSlide=
(newSlide+imgs.length)%imgs.length;

imgs[currentSlide].style.display="block";
}

next.addEventListener("click",()=>{
updateSlide(currentSlide+1);
});

prev.addEventListener("click",()=>{
updateSlide(currentSlide-1);
});

}

});