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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCk0YPQvdC60YbQuNGPINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINC60L3QvtC/0LrQuCBcItC10YnRkVwiXHJcbmZ1bmN0aW9uIGJ0blRpbWVNb3JlKCkge1xyXG4gICAgY29uc3QgdWxCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3RfX2J0bnMnKTtcclxuXHJcbiAgICB1bEJ0bnMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBsZXQgY2hpbGRBcnIgPSBpdGVtLmNoaWxkcmVuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoaWxkQXJyLmxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgYnRuTW9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBjb25zdCBsaUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bnNfX2l0ZW0nKTtcclxuICAgICAgICAgICAgYnRuTW9yZS5jbGFzc0xpc3QuYWRkKCdidG4tcmVzZXQnLCAnYnRuc19fYnRuJyk7XHJcbiAgICAgICAgICAgIGJ0bk1vcmUudGV4dENvbnRlbnQgPSAn0LXRidGRLi4uJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v0JLRi9Cx0LjRgNCw0LUg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0L/QvtGB0LvQtSAzINC4INC/0YDQuNGB0LLQsNC10LLRi9Cy0LDQtdC8INC40LwgZGlzcGxheTpub25lXHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXVxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2hpbGRBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkQXJyW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBhcnJGaXJzdCA9IGFyci5zbGljZSgzLGNoaWxkQXJyLmxlbmd0aClcclxuICAgICAgICAgICAgYXJyRmlyc3QuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGFyckl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxpQnRuLmFwcGVuZChidG5Nb3JlKVxyXG4gICAgICAgICAgICBpdGVtLmFwcGVuZChsaUJ0bilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vINCf0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDINGA0LDRgdGB0LrRgNGL0LLQsNC10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0YssINC60L7RgtC+0YDRi9C1INCx0YvQu9C4INGB0LrRgNGL0YLRiyDQuNC70Lgg0L3QsNC+0LHQvtGA0L7RglxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwXHJcbiAgICAgICAgICAgIGJ0bk1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCsrXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTW9yZS50ZXh0Q29udGVudCA9ICfQtdGJ0ZEuLi4nXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyRmlyc3QuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJySXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTW9yZS50ZXh0Q29udGVudCA9ICfRgdC60YDRi9GC0YwnXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyRmlyc3QuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJySXRlbS5zdHlsZS5kaXNwbGF5ID0gJydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmJ0blRpbWVNb3JlKCkiXX0=
