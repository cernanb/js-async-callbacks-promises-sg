const fakeJax = (url,cb) => {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

const output = (text) {
	console.log(text)
}

const getFile = (file, cb) => {
	fakeJax(file,function(text){
		//what should be done here?
	});
}

// requesting files one at a time; similar to Example 1 in callback.js
