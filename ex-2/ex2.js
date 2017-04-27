const fakeJax = (url,cb) => {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(() => {
		cb(fake_responses[url]);
	},randomDelay);
}

const getFile = (file) => {
	fakeJax(file,(text) => {
		// what do we do here?
	});
}

// requesting all files at once
getFile("file1")
getFile("file2")
getFile("file3")
