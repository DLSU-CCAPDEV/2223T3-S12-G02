var votedPosts = {};

function createPost(pTitle, pContent, pAuthor) {
	var postContainer = $('.post_container');

	var postId = Date.now();

	// Create the post row element
	var postRow = $('<div>', {
		class: 'post row',
		id: postId
	});
	  
	// Create the rating bar element
	var ratingBar = $('<div>', {
		class: 'rating_bar'
	});
	 
	// TODO: votes should only work once per user
	// Create the upvote button
	var upvoteButton = $('<div>', {
		id: 'upvote-' + postId,
		class: 'button upvote',
		text: '⮝'
	});
	  
	// Create the counter element
	var counter = $('<div>', {
		id: 'counter-' + postId,
		class: 'counter',
		text: '0'
	});

	// Create the downvote button
	var downvoteButton = $('<div>', {
		id: 'downvote-' + postId,
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
		href: 'post.html'
		// TODO: bring this back
		//href: '#' + 'post-' + postId
	});

	// Create the text element
	var text = $('<div>', {
		class: 'text'
	});

	// Create the title element
	var title = $('<div>', {
		class: 'title',
		text: pTitle
	});

	// Create the preview element
	var preview = $('<div>', {
		class: 'preview',
		text: pContent
	});

	text.append(title, preview);

	// TODO: link this to author page when that is implemented
 	info.append(link.append(text), $('<div>', {
		class: 'author',
		text: pAuthor
	}));

	postRow.append(ratingBar, img, info);

	postContainer.append(postRow);

	upvoteButton.on('click', function() {
		vote(postId, 1);
	});

	downvoteButton.on('click', function() {
		vote(postId, -1);
	});

};

function vote(postId, value) {
	var upvoteButton = $('#upvote-' + postId);
	var downvoteButton = $('#downvote-' + postId);
	var currentVote = votedPosts[postId] || 0;

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

	var counter = $('#counter-' + postId);
	var currentCount = parseInt(counter.text());

	// Calculate the new vote count
	var newCount = currentCount - currentVote + value;

	// Update the vote count
	counter.text(newCount);
}

// TODO: Replace pAuthor with one that reads the current user.
// TODO: link to author profile
function pPost(pAuthor) {
	var pTitle = $('#pTitle').val();
	var pContent = $('#pContent').val();
	pAuthor = '@' + 'Foo.Bar';

	createPost(pTitle, pContent, pAuthor);
}