function createCommentElement(commentID, author, content, likes, editable=false) {

    // Create comment element
    var comment = $('<div>', {
        class: 'comment row',
        id: 'comment-' + commentID
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
        html: content
    });

    var author = $('<div>', {
        class: 'author',
        html: '@' + author
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

    if (editable) {
        info.append(text, author, tools);
    }
    else {
        info.append(text, author);
    }

    comment.append(ratingBar, info);

    $('.comment_container').append(comment);

    upvoteButton.on('click', function() {
        vote(commentID, 1);
    });

    downvoteButton.on('click', function() {
        vote(commentID, -1);
    });
    
    deleteButton.on('click', function() {
		if (confirm(`Do you really want to delete this comment?`) == true) {
			$.ajax({
				type: 'POST',
				url: '/delete-comment',
				data: {
					commentID: commentID
				},
				success: function (response) {
                    comment.remove();
				},
				error: function (xhr, status, error) {
					console.error('Error deleting post:', error);
				}
			});
		}
    });
}

function pPostComment(author) {
  var content = $('#pComment').val();
  author = '@' + 'Foo.Bar';

  createCommentElement(author, content);
}




