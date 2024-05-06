# transcribe

[Backend Docs](backend/README.md)

[Frontend Docs](frontend/README.md)

## Live Links

[Backend](https://transcribe-test.fly.dev )

[Frontend](https://file-upload-cm.netlify.app/)


# Manual

## Frontend integration

The UI can is provided as Web Component. The Web Component is deployed with the frontend itself on netlify and can be found unter following URL: https://file-upload-cm.netlify.app/js/file-upload.umd.cjs

The file can be appended using the script tag as following: 

```
<script src="https://file-upload-cm.netlify.app/js/file-upload.umd.cjs"></script>
```

The web component is loaded using inside the body tag.

```
<file-upload></file-upload>
```

When a transcript completed successfully an event is triggered. To catch the event an event listener can be attached listening to the "transcription". 

In `event.detail` the transcription result is returned in following format:

```
{
	"file":<Loaded File>,
	"status":"<Status text>",
	"text":"<Transcription text>",
	"duration": <Amount of milliseconds it took>,
	"keywords":[<The keywords of the transcript>]
}
```

Example `index.html`: 

```
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="icon" href="/favicon.ico">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="https://file-upload-cm.netlify.app/js/file-upload.umd.cjs"></script>
		<title>Transcribe</title>
	</head>
	<body>
		<file-upload></file-upload>
		<script>
			const fileUpload = document.querySelector("file-upload");
			fileUpload.addEventListener('transcription', function (event) {
				if (event && event.detail && event.detail.length > 0) {
					console.log("Transcription update: ", event.detail[0]);
				}
			});		
		</script>
	</body>
</html>

```

---
## Backend API

Send file to backend to get it transcribed.

HTTP Request Parmas: 
URL: https://transcribe-test.fly.dev/uploadFull
Method: POST
Body: FormData (multipart form with file in field "files")

Response in JSON format:

time: execution time of Assembly AI
text: Transcribed text
keywords: Highlights returned from Assembly AI

Example: 

```
var formdata = new FormData();
formdata.append("file", fileInput.files[0], "<path/to/file>.mp3");

var requestOptions = {
	method: 'POST',
	body: formdata,
	redirect: 'follow'
};

fetch("https://transcribe-test.fly.dev/uploadFull", requestOptions)
.then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log('error', error));

/*
Log output:
{
	"time": 32723.045215964317,
	"text": "Runner's knee. Runner's knee is a condition characterized by pain behind or around the kneecap. It is caused by overuse muscle.",
	"keywords": ["kneecap", "condition", "Runner's knee", "Runner's", "pain", "overuse muscle"]
}
*/

```