var votedPosts = {};

function createPost(postID, pTitle, pContent, pAuthor, postLikes) {
	var postContainer = $('.post_container');

	// Create the post row element
	var postRow = $('<div>', {
		class: 'post row',
		id: 'post-' + postID
	});
	  
	// Create the rating bar element
	var ratingBar = $('<div>', {
		class: 'rating_bar'
	});
	 
	// TODO: votes should only work once per user
	// Create the upvote button
	var upvoteButton = $('<div>', {
		id: 'upvote-' + postID,
		class: 'button upvote',
		text: '⮝'
	});
	  
	// Create the counter element
	var counter = $('<div>', {
		id: 'counter-' + postID,
		class: 'counter',
		text: postLikes
	});

	// Create the downvote button
	var downvoteButton = $('<div>', {
		id: 'downvote-' + postID,
		class: 'button downvote',
		text: '⮟'
	});

	ratingBar.append(upvoteButton, counter, downvoteButton);

	// Create the img element
	var img = $('<div>', {
		class: 'img'
	});

	// Create the info element
		var info = $('<div>', {
		class: 'info'
		});

	// TODO: auto generate link for post ids
	// Create the link element
	var link = $('<a>', {
		href: '/post/' + postID
	});

	// Create the text element
	var text = $('<div>', {
		class: 'text'
	});

	// Create the title element
	var title = $('<div>', {
		class: 'title',
		html: pTitle
	});

	// Create the preview element
	var preview = $('<div>', {
		class: 'preview',
		html: pContent
	});

	text.append(title, preview);

	var author = $('<a>', {
		href: '/profile/' + pAuthor
	});

	author.append($('<div>', {
		class: 'author',
		html: '@' + pAuthor
	}));

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

	// TODO: link this to author page when that is implemented
 	info.append(link.append(text), author, tools);

	postRow.append(ratingBar, img, info);

	postContainer.append(postRow);

	upvoteButton.on('click', function() {
		vote(postID, 1);
	});

	downvoteButton.on('click', function() {
		vote(postID, -1);
	});

	//TODO: this is not a safe implementation
	editButton.on('click', function() {
		location.href = "/edit-post/" + postID;
	});

    deleteButton.on('click', function() {
		if (confirm(`Do you really want to delete this post?`) == true) {
			$.ajax({
				type: 'POST',
				url: '/delete-post',
				data: {
					postId: postID
				},
				success: function (response) {
					alert(`Post successfully deleted! Redirecting page...`);
					location.href = "/";
				},
				error: function (xhr, status, error) {
					console.error('Error deleting post:', error);
				}
			});
		}
    });

};

function vote(postId, value) {
	var upvoteButton = $('#upvote-' + postId);
	var downvoteButton = $('#downvote-' + postId);
	var currentVote = votedPosts[postId] || 0;

	var counter = $('#counter-' + postId);
	var currentCount = parseInt(counter.text());

	var newCount = currentCount - currentVote + value;

	$.ajax({
        type: 'POST',
        url: '/update-vote',
        data: {
            postId: postId,
            value: newCount
        },
        success: function (response) {
			// Check if the user has already voted on this post
			if (currentVote === value) {
				// User clicked on the same vote, remove the vote
				delete votedPosts[postId];
				value = 0;
				upvoteButton.removeClass('selected-upvote');
				downvoteButton.removeClass('selected-downvote');
			} else {
				votedPosts[postId] = value;
				if (value == 1) {
					upvoteButton.addClass('selected-upvote')
					downvoteButton.removeClass('selected-downvote');
				}
				else if (value == -1){
					upvoteButton.removeClass('selected-upvote');
					downvoteButton.addClass('selected-downvote')
				}
			}
			counter.text(newCount);
        },
        error: function (xhr, status, error) {
            console.error('Error updating vote:', error);
        }
    });
}

// TODO: Replace pAuthor with one that reads the current user.
// TODO: link to author profile
function pPost(pAuthor) {
	var pTitle = $('#pTitle').val();
	var pContent = $('#pContent').val();
	pAuthor = '@' + 'Foo.Bar';

	createPost(pTitle, pContent, pAuthor);
}