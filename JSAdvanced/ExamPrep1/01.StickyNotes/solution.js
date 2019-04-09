function addSticker() {
    var titleInput = $('.title');
    var textInput = $('.content');

    let title = titleInput.val();
    let text = textInput.val();

    if (title && text) {
        addNote(title, title);

        resetInput(titleInput, textInput);

    }
    function addNote(titleElement, textElement) {
       

        let stickerList = $('#sticker-list');

        let contentElement = $('<li>');
        contentElement.addClass('note-content')

        let closeBtn = $('<a>');
        closeBtn.addClass('button');
        closeBtn.text('x');
        closeBtn.on('click', (e) => {
            $(e.target).parent().remove();
        });

        contentElement.append(closeBtn);

        let header = $('<h2>');
        header.text(title);
        contentElement.append(header);

        contentElement.append($('<hr>'));

        let textElem = $('<p>');
        textElem.text(text);
        contentElement.append(textElem);

        stickerList.append(contentElement);
    }

    function resetInput($titleElem, $textElem) {
        $titleElem.val('');
        $textElem.val('');
    }

}