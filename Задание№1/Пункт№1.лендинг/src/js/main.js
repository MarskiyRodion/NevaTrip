// Функция для создания кнопки "ещё"
function btnTimeMore() {
    const ulBtns = document.querySelectorAll('.list__btns');

    ulBtns.forEach(item => {
        let childArr = item.children
        
        if (childArr.length > 4) {
            const btnMore = document.createElement('button');
            const liBtn = document.createElement('li');
            liBtn.classList.add('btns__item');
            btnMore.classList.add('btn-reset', 'btns__btn');
            btnMore.textContent = 'ещё...';
            
            //Выбирае все элементы после 3 и присваевываем им display:none
            let arr = []
            for(let i = 0; i < childArr.length; i++) {
                arr.push(childArr[i])
            }
            let arrFirst = arr.slice(3,childArr.length)
            arrFirst.forEach(arrItem => {
                arrItem.style.display = 'none';
            })

            liBtn.append(btnMore)
            item.append(liBtn)
            
            // При клике на кнопку расскрываем все элементы, которые были скрыты или наоборот
            let index = 0
            btnMore.addEventListener('click', () => {
                index++
                if (index % 2 === 0) {
                    btnMore.textContent = 'ещё...'
                    arrFirst.forEach(arrItem => {
                        arrItem.style.display = 'none'
                    })
                } else {
                    btnMore.textContent = 'скрыть'
                    arrFirst.forEach(arrItem => {
                        arrItem.style.display = ''
                    })
                }
            })
        }
    })
}

btnTimeMore()