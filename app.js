let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {

    let list = document.querySelector('.list');
    let list_box = document.createElement('div');
    list_box.style.height = '50px';
    list_box.style.width = '400px';
    list_box.style.background = '#f42800';
    list_box.style.borderRadius = '5px';
    list_box.style.margin = '0 auto';
    list_box.style.marginTop = '10px';

    let inp = document.querySelector('.input').value;
    let input_item = document.createElement('p');
    input_item.style.marginTop = '5px';
    input_item.style.marginLeft = '10px';
    input_item.style.fontSize = '25px';
    input_item.style.color = '#fff';
    input_item.style.textAlign = 'start';
    input_item.style.fontWeight = 'bold';
    input_item.style.display = 'inline-block';

    let bin_img = document.createElement('img');
    bin_img.src = 'bin.png';
    bin_img.style.height = 'auto';
    bin_img.style.width = '40px';
    bin_img.style.float = 'right';
    bin_img.style.marginRight = '10px';
    bin_img.style.marginTop = '5px';
    bin_img.style.cursor = 'pointer';

    list.appendChild(list_box);
    list_box.appendChild(input_item).innerHTML = inp;
    list_box.appendChild(bin_img);

    bin_img.addEventListener('click', () => {
        list_box.remove();
    })

    e.preventDefault()
})