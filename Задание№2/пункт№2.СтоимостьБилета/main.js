(() => {

    let container = document.querySelector('.container');
    let descr = document.createElement('p');

    //Создаём форму и обрабатываем полученные значения
    function createForm() {

        let form = document.createElement('form');
        form.classList.add()

        //Создаём select с направлением
        const selectTrack = document.createElement('select');
        selectTrack.classList.add('form-select', 'mb-2')
        const AtrackB = document.createElement('option');
        const BtrackA = document.createElement('option');
        const AtrackBtrackA = document.createElement('option');
        AtrackB.innerText = 'из A в B';
        BtrackA.innerText = 'из B в A';
        AtrackBtrackA.innerText = 'из A в B и обратно в А';

        //Создаём поле для ввода кол-ва билетов
        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add('form-control', 'mb-2');
        input.setAttribute('required', '')

        //кнопка
        const btn = document.createElement('button');
        btn.textContent = 'Посчитать';
        btn.classList.add('btn', 'btn-success')

        //Добавляем два обязательных select путь и время
        selectTrack.append(AtrackB, BtrackA, AtrackBtrackA)
        form.append(selectTrack, createSelectTime(), input, btn)

        //Реализуем появление дополнительного времени при клике на "из A в B и обратно в А"
        selectTrack.addEventListener('change', () => {
            if (selectTrack.value === 'из A в B и обратно в А') {
                if (document.querySelectorAll('.select-time').length > 1) return;
                input.before(createSelectTime())
            } else {
                if (document.querySelectorAll('.select-time').length === 1) return;
                document.querySelector('.select-time').remove()
            }
        })

        container.append(form)

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            descr.innerHTML = ''
            let allTime = document.querySelectorAll('.select-time');
            const time = document.querySelector('.select-time');

            if (allTime.length > 1) {
                descr.innerHTML = `
            Вы выбрали ${input.value} билета по маршруту ${selectTrack.value} стоимостью ${input.value * 1200}р.<br>
            Это путишествие займёт у вас 50 минут в одну сторону и 50 минут в обратную.<br>
            Теплоход отправляется со станции А в ${time.value.slice(0, 5)}, а прибывает на станцию B в ${createTimeDescr(allTime[0].value)}
            `
                container.append(descr)
            } else {
                descr.innerHTML = `
            Вы выбрали ${input.value} билета по маршруту ${selectTrack.value} стоимостью ${input.value * 700}р.<br>
            Это путишествие займёт у вас 50 минут.<br>
            Теплоход отправляется со станции А в ${time.value.slice(0, 5)}, а прибывает на станцию B в ${createTimeDescr(time.value)} 
            `
                container.append(descr)
            }

            if(selectTrack.value === 'из B в A') {
                descr.innerHTML = `
            Вы выбрали ${input.value} билета по маршруту ${selectTrack.value} стоимостью ${input.value * 700}р.<br>
            Это путишествие займёт у вас 50 минут.<br>
            Теплоход отправляется со станции B в ${time.value.slice(0, 5)}, а прибывает на станцию A в ${createTimeDescr(time.value)} 
            `
                container.append(descr)
            }
        })

        return selectTrack;
    }

    createForm()

    //Функция для создания select со временем
    function createSelectTime() {
        const timeAB = ['18:00', '18:30', '18:45', '19:00', '19:15', '21:00']
        const timeBA = ['18:30', '18:45', '19:00', '19:15', '19:35', '21:50', '21:55']
        let selectTime = document.createElement('select')
        selectTime.classList.add('select-time', 'form-select', 'mb-2')

        for (let i = 0; i < timeAB.length; i++) {
            let option = document.createElement('option')
            option.innerText = `${timeAB[i]}(из A в B)`
            selectTime.append(option)
        }

        for (let i = 0; i < timeBA.length; i++) {
            let option = document.createElement('option')
            option.innerText = `${timeBA[i]}(из B в A)`
            selectTime.append(option)
        }

        return selectTime
    }

    //Функция, которая обрабатывет время
    function createTimeDescr(src) {
        let deleteTrackFirst = src.replace('из A в B')
        let timeFirst = deleteTrackFirst.split(':');
        let minuteFirst = parseInt(timeFirst[0]) * 60 + parseInt(timeFirst[1]);
        let minute = minuteFirst + 50
        console.log(minute)

        if (minute % 60 === 0) {
            let timeHourse = minute / 60;
            let time = `${timeHourse}:00`
            console.log(time)
            return time
        } else {
            let timeHourse = (minute - (minute % 60)) / 60
            if (timeHourse === 0) {
                let time = `${timeHoursee}:${parseInt(timeFirst[1])+50}`
                console.log(time)
                return time
            } else {
                let time = `${timeHourse}:${minute % 60}`
                console.log(time)
                return time
            }
        }
    }

    createTimeDescr('15:52')


})();