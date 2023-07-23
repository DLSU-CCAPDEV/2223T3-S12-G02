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

    deleteButton.on('click', function() {
      //  deleteButton.closest('.comment.row').remove();
        db.deleteOne('comments', { _id: commentId }, (err, deletedComment) => {
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
// Saves the comment to the database using the insertOne (from db.js)
  const comment = {
    commentContent: content,
    commentAuthor: author,
   // commentLikes: 0,
  };

  db.insertOne('comments', comment, (err, insertedComment) => {
    if (err) {
      console.error('Error saving comment:', err.message);
    } else {
      console.log('Comment saved:', insertedComment);
    }
  });
}



