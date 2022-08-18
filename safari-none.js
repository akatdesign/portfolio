var burger1 = document.getElementsByName("burger"),
    burgerOption = burger.document.getElementsByTagName("div");

function wrap(element, wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
}

for(let i = 0; i < burgerOption.length; i++){
    let newSpan = document.createElement('span');
    wrap(burgerOption[i], newSpan);
}