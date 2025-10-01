

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector('input[type="file"]');
    const list = document.querySelector('.images-list');
    const prototype = document.querySelector('.images-list__item--prototype');

    input.addEventListener("change", function (e) {
     
        const files = Array.from(e.target.files);

        for (const file of files) {
            if (file.type.includes("image")) {
                const clone = prototype.cloneNode(true);
                clone.classList.remove('images-list__item--prototype');
                clone.style.display = 'block';

                clone.querySelector('.images-list__item-name').textContent = file.name;
                clone.querySelector('.images-list__item-size').textContent = 
                    (file.size / (1024 * 1024)).toFixed(2) + " MB";
                clone.querySelector('.images-list__item-img').src = URL.createObjectURL(file);

                list.appendChild(clone);
            }
        }
    });
});