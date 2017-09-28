console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
	
	try {
		// set variable noteString to the data that is read in notes-datal.json
		var notesString = fs.readFileSync('notes-data.json');	
		// set the notes variable to the current JSON parsed data that is in noteString declared above
		 return  JSON.parse(notesString);
	} catch (e) {
		// return empty array if it doesn't exist already
		return []
	}
};

var saveNotes = () => {

};

// Function for adding a note
var addNote = (title, body) => {
	// create variable for an empty array to store notes objects
	var notes = fetchNotes();
	// create note object that will have keys for the note title and the note body
	var note = {
		title,
		body
	};

	
	// filters through the whole notes array checking to see if the title entered by the user is the same
	// as any other title already used and declares it to a new array: dupiclateNotes.	
	var duplicateNotes = notes.filter((note) =>  note.title === title);
	
	// checks if the new array does not contain any info, indicating a note with that title already exists.
	if (duplicateNotes.length === 0) {
		// if array is empty push it to the main notes array and write it to the json
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	};

};

var getAll = () => {
	console.log('Getting all notes');
};

var readNote = (title) => {
	console.log('Reading note', title);
}

var removeNote = (title) => {
	console.log('Removing note', title);
}
module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};
