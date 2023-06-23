function createCommentElement(author, content) {

    var commentId = 'comment-' + Date.now();

    // Create comment element
    var comment = $('<div>', {
        class: 'comment row',
        id: commentId

    });

    var ratingBar = $('<div>', {
        class: 'rating_bar'
    });

    var upvoteButton = $('<div>', {
        class: 'button upvote',
        text: '⮝',
        id: 'upvote-' + commentId
    });

    var counter = $('<div>', {
        class: 'counter',
        text: '0',
        id: 'counter-' + commentId
    });

    var downvoteButton = $('<div>', {
        class: 'button downvote',
        text: '⮟',
        id: 'downvote-' + commentId
    });

    ratingBar.append(upvoteButton, counter, downvoteButton);

    var info = $('<div>', {
        class: 'info'
    });

    var text = $('<div>', {
        class: 'text',
        text: content
    });

    var author = $('<div>', {
        class: 'author',
        text: author
    });

    var tools = $('<div>', {
        class: 'tools'
    });

    var editButton = $('<button>', {
        class: 'edit-comment',
        text: 'Edit'
    });

    var deleteButton = $('<button>', {
        class: 'delete-comment',
        text: 'Delete'
    });

    tools.append(editButton, deleteButton);

    info.append(text, author, tools);

    comment.append(ratingBar, info);

    $('.comment_container').append(comment);

    upvoteButton.on('click', function() {
        vote(commentId, 1);
    });

    downvoteButton.on('click', function() {
        vote(commentId, -1);
    });

};

function pPostComment(author) {
    var content = $('#pComment').val();
    author = '@' + 'Foo.Bar';

    createCommentElement(author, content);
}