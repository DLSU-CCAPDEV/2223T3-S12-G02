  function createCommentElement(comment) {
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
                var postContainer = $('#' + postId);
                var commentList = $('<ul>', {
                    class: 'comments-list'
                });

                comments.forEach(function(comment) {
                    var commentItem = createCommentElement(comment);
                    commentList.append(commentItem);
                });

                postContainer.append(commentList);
            }
