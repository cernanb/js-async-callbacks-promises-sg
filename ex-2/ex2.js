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

const output = (text) => {
	console.log(text)
}

const getFile = (file) => {
	fakeJax(file,(text) => {
		// what do we do here?
		handleResponse(file, text)
	});
}

let responses = {} //{"file2": false, "file1": false, "file3": "The last text"}

//define the handleResponse
const handleResponse = (file, contents) => {
	if(!responses[file]) {
		responses[file] = contents
	}

	var filenames = ["file1", "file2", "file3"]

	for (let i = 0; i < filenames.length; i++) {
		if (filenames[i] in responses) {
			if (typeof responses[filenames[i]] == "string") {
				output(responses[filenames[i]])
				responses[filenames[i]] = false
			}
		} else {
			return
		}
	}
	output("Complete")
}

// requesting all files at once
getFile("file1")
getFile("file2")
getFile("file3")
