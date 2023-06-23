$(document).ready(function() {
  // Create comment element
  var comment = $('<div>', {
    class: 'comment row'
  });

  var ratingBar = $('<div>', {
    class: 'rating_bar'
  });

  var upvoteButton = $('<div>', {
    class: 'button upvote',
    text: '⮝'
  });

  var counter = $('<div>', {
    class: 'counter',
    text: '0'
  });

  var downvoteButton = $('<div>', {
    class: 'button downvote',
    text: '⮟'
  });

  ratingBar.append(upvoteButton, counter, downvoteButton);

 
  var info = $('<div>', {
    class: 'info'
  });

  
  var text = $('<div>', {
    class: 'text',
    text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa'
  });


  var author = $('<div>', {
    class: 'author',
    text: '@Foo.Bar'
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
});













/*  function createCommentElement(comment) {
                var commentItem = $('<li>', {
                    class: 'comment'
                });

                commentItem.append($('<div>', {
                    class: 'content',
                    html: '<strong>' + comment.user + '</strong>: ' + comment.content
                }));

                var actions = $('<div>', {
                    class: 'actions'
                });

                var editButton = $('<button>', {
                    class: 'edit-comment',
                    text: 'Edit'
                });

                var deleteButton = $('<button>', {
                    class: 'delete-comment',
                    text: 'Delete'
                });

                var upvoteButton = $('<button>', {
                    id: 'upvote-' + comment.commentId,
                    class: 'upvote-comment',
                    text: 'Upvote'
                });

                var downvoteButton = $('<button>', {
                    id: 'downvote-' + comment.commentId,
                    class: 'downvote-comment',
                    text: 'Downvote'
                });

                var counter = $('<span>', {
                    id: 'counter-' + comment.commentId,
                    class: 'votes',
                    text: '0'
                 });

                actions.append(editButton, deleteButton, upvoteButton, downvoteButton, counter);
                commentItem.append(actions);

                return commentItem;
            }

            function addCommentsToPost(postId, comments) {
                var postContainer = $('.comment_container');
                var commentList = $('<ul>', {
                    class: 'comments-list'
                });
                var comment = createCommentElement(comments);

                // comments.forEach(function(comment) {
                //     var commentItem = createCommentElement(comment);
                //     commentList.append(commentItem);
                // });

                postContainer.append(comment);
            }

*/
