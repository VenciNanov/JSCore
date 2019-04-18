function solve() {
    let isAuth = false;
    let createOfferElement = $('#create-offers');

    if (!isAuth) {
        createOfferElement.css('display', 'none')
    } else {
        createOfferElement.css('display', 'block')
    }

    let loginBtn = $('#loginBtn');
    loginBtn.on('click', (e) => {
        if (!isAuth) {
            login(e);

        } else {
            logout(e);

        }
    })

    let createOfferBtn = $('#create-offer-Btn');
    createOfferBtn.on('click', (e) => {
        e.preventDefault();
        if (isAuth) {
            let offerNameEl = $('#offerName');
            let companyEl = $('#company');
            let descriptionEl = $('#description');

            let offerName = offerNameEl.val();
            let company = companyEl.val();
            let description = descriptionEl.val();

            if (offerName && company && description) {
                let wrapper = $('<div class="col-3"></div>');
                let card = $('<div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;"></div>');
                let cardheader = $(`<div class="card-header">${offerName}</div>`)
                let cardBody = $('<div class="card-body"></div>');
                let cardTitle = $(`<h5 class="card-title">${company}</h5>`)
                let cardText = $(`<p class="card-text">${description}</p>`)

                cardBody.append(cardTitle);
                cardBody.append(cardText);
                card.append(cardheader);
                card.append(cardBody);
                wrapper.append(card);

                $('#offers #offers-container').append(wrapper);

                offerNameEl.val("")
                companyEl.val("")
                descriptionEl.val("")
            }
        }
    })


    function logout(e) {
        e.preventDefault();

        let usernameEl = $('#username');
        usernameEl.val("");
        usernameEl.removeClass('border-0 bg-light');
        usernameEl.removeAttr('disabled')
        loginBtn.text('Login')
        isAuth = false;
        createOfferElement.css('display', 'none')
    }

    function login(e) {
        e.preventDefault();
        let usernameEl = $('#username');
        let username = usernameEl.val();
        let notificationEl = $('#notification');


        if (username.length >= 4 && username.length <= 10) {
            usernameEl.val(`Hello, ${username}!`)
            usernameEl.attr('disabled', true)
            usernameEl.addClass('border-0 bg-light');
            loginBtn.text('Logout')
            isAuth = true;
            createOfferElement.css('display', 'block')
            notificationEl.text("");
        } else {
            notificationEl.text('The username length should be between 4 and 10 characters.')

        }
    }
}

solve();