window.addEventListener("DOMContentLoaded", () => {
    const buttonForm = document.getElementById('buttonForm');
    const popUp = document.getElementById('pop-up');
    const form = document.getElementById('form');
    const name = document.getElementById('Name');
    const email = document.getElementById('Email');
    const number = document.getElementById('Number');
    const organisation = document.getElementById('Organisation');
    const message = document.getElementById('Message');
    const check = document.getElementById('Check');
    const btnSuccess = document.getElementById('buttonSuccess');
    const formList = [
        [name, 'name'],
        [email, 'email'],
        [number, 'number'],
        [organisation, 'organisation'],
        [message, 'message']
    ];

    async function post(user) {
        try {
            let response = await fetch('https://formcarry.com/s/bC6_PmjJ3x', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8' 
                },
                body: JSON.stringify(user)
            });

            let result = await response.json();
            alert(result.message);

        } catch (e) {
            alert("Вы неправильно указали данные!");
        }
    }

    buttonForm.addEventListener('click', () => {
        popUp.style.display = 'flex';
        buttonForm.style.display = 'none';
        history.pushState(
            {form: 'form'},
            'form',
            '#form.html'
        );
    });

    popUp.addEventListener('click', () => {
        history.back();
        popUp.style.display = 'none';
        buttonForm.style.display = 'flex';
    });

    form.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    formList.forEach((e) => {
        e[0].value = localStorage.getItem(e[1]);
        e[0].addEventListener('change', () => {
            localStorage.setItem(e[1], e[0].value);
        });
    });

    btnSuccess.addEventListener('click', async (e) => {
        if (!(check.checked)) {
            alert("Вы не приняли политику конфиденциальности!");
            return;
        };

        e.preventDefault();
        
        history.back();
        popUp.style.display = 'none';
        buttonForm.style.display = 'flex';

        const user = {
            name: name.value,
            email: email.value,
            number: number.value,
            organisation: organisation.value,
            message: message.value
        };

        console.log(user);

        formList.forEach(e => {
            localStorage.setItem(e[1], "");
            e[0].value = "";
        });

        await post(user);
    });
})