function createCommentElement(commentID, author, content, likes) {

    // Create comment element
    var comment = $('<div>', {
        class: 'comment row',
        id: commentID
    });

    var ratingBar = $('<div>', {
        class: 'rating_bar'
    });

    var upvoteButton = $('<div>', {
        class: 'button upvote',
        text: '⮝',
        id: 'upvote-' + commentID
    });

    var counter = $('<div>', {
        class: 'counter',
        text: likes,
        id: 'counter-' + commentID
    });

    var downvoteButton = $('<div>', {
        class: 'button downvote',
        text: '⮟',
        id: 'downvote-' + commentID
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
        text: '@' + author
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
        vote(commentID, 1);
    });

    downvoteButton.on('click', function() {
        vote(commentID, -1);
    });
    
    deleteButton.on('click', function() {
      //  deleteButton.closest('.comment.row').remove();
        db.deleteOne('comments', { _id: commentID }, (err, deletedComment) => {
      if (err) {
        console.error('Error deleting comment:', err.message);
      } else {
        console.log('Comment deleted:', deletedComment);
        comment.remove();
      }
    });
    });
}

function pPostComment(author) {
  var content = $('#pComment').val();
  author = '@' + 'Foo.Bar';

  createCommentElement(author, content);
}




