const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const d1 = document.querySelector('.d1')
const d2 = document.querySelector('.d2')
const e1 = document.querySelector('.e1')
const e2 = document.querySelector('.e2')
const e3 = document.querySelector('.e3')
const opening = document.querySelector('.opening')
const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const container3 = document.querySelector('.container3')
const container4 = document.querySelector('.container4')
const container5 = document.querySelector('.container5')
const preResults = document.querySelector('.preResult')
const nilaiKamu = document.querySelector('.result p')
let preResult = '';
let postResult = '';
let finalResult = '';

button1.addEventListener('click', function(){
    opening.style.display = 'none';
})

//choose 1
a1.addEventListener('click', function(){
    container1.style.display = 'none';
    postResult += ` dan nyaman saat sedang sendiri`
})
a2.addEventListener('click', function(){
    container1.style.display = 'none';
    postResult += ` dan nyaman saat dalam keadaan keramaian`
})

//choose 2
b1.addEventListener('click', function(){
    container2.style.display = 'none';
    postResult += `, lebih mengutamakan hubungan persahabatan dari yang lain.`
})
b2.addEventListener('click', function(){
    container2.style.display = 'none';
    postResult += `, lebih mengutamakan pekerjaan dari yang lain.`
})
b3.addEventListener('click', function(){
    container2.style.display = 'none';
    postResult += `, lebih mengutamakan pasangan hidup dari yang lain.`
})

//choose 3
c1.addEventListener('click', function(){
    container3.style.display = 'none';
    postResult += ` Terkadang kamu suka iri dengan kisah cinta temanmu.`
})
c2.addEventListener('click', function(){
    container3.style.display = 'none';
    postResult += ` Terkadang kamu suka hal dan tantangan baru.`
})
c3.addEventListener('click', function(){
    container3.style.display = 'none';
    postResult += ' Kalau lagi banyak masalah terkadang kamu suka menutupinya dengan hal santai.';
})

//choose 4
d1.addEventListener('click', function(){
    container4.style.display = 'none';
    preResult += `Kamu termaksud tipe orang yang suka memimpin`;
})
d2.addEventListener('click', function(){
    container4.style.display = 'none';
    preResult += `Kamu termaksud tipe orang yang suka diperhatiin`;
})

//choose 5
e1.addEventListener('click', function(){
    container5.style.display = 'none';
    postResult += ` Walaupun begitu kamu termaksud orang yang pekerja keras dan pantang menyerah.`;
    finalResult = preResult + postResult;
})
e2.addEventListener('click', function(){
    container5.style.display = 'none';
    postResult += `Walaupun begitu kamu termaksud orang yang sabar dan juga setia terhadap pasangan.`;
    finalResult = preResult + postResult;
})
e3.addEventListener('click', function(){
    container5.style.display = 'none';
    postResult += `Walaupun begitu kamu termaksud orang yang ikhlas menerima cobaan.`;
    finalResult = preResult + postResult;
})

//pre result
button2.addEventListener('click', function(){
    preResults.style.display = 'none';
    let tagNew = document.createElement('p')
    titleNew = document.createTextNode(finalResult)
    tagNew.appendChild(titleNew)
    nilaiKamu.appendChild(tagNew)
})





// right1.addEventListener('click', function (){
//     container1.style.display = 'none'
//     score += 50;

// wrong[3].addEventListener('click', function (){
//     container2.style.display = 'none'
//     score += 20
//     let tagNew = document.createElement('p')
//     titleNew = document.createTextNode(score)
//     tagNew.appendChild(titleNew)
//     nilaiKamu.appendChild(tagNew)
// });