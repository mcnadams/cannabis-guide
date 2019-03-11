export function makeSingleLi(effect) {
    const template = document.createElement('template');
    template.innerHTML = `<li id="effect-li">${effect}</li>`;
    return template.content;
}
 
export function makeStrainHeader(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <header id="strain-header">
            <h1>${strain.name}</h1>
            <h2>${strain.race}</h2>    
        </header>
    `;

    return template.content;
}

export function makeDescription(strain) {
    const template = document.createElement('template');
    template.innerHTML = `
        <p>${strain.desc}</p>
    `;

    return template.content;
}


const header = document.getElementById('strain-header');
const description = document.getElementById('description');
const positiveList = document.getElementById('positive-effects-list');
const negativeList = document.getElementById('negative-effects-list');
const medicalList = document.getElementById('medical-effects-list');


export function makeStrainPage(strain, allEffects) {
    allEffects.positive.forEach(effect => {
        const dom = makeSingleLi(effect);
        positiveList.appendChild(dom);
    });
    allEffects.negative.forEach(effect => {
        const dom = makeSingleLi(effect);
        negativeList.appendChild(dom);
    });
    allEffects.medical.forEach(effect => {
        const dom = makeSingleLi(effect);
        medicalList.appendChild(dom);
    });
    header.appendChild(makeStrainHeader(strain));
    description.appendChild(makeDescription(strain));
}


