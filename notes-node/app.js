console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	// check if note already exists and prompt the user upon success or failure
	if (note) {
		console.log('Note successfully created');
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Error: note title exists. Please create with a new title');
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.readNote(argv.title);
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized');
}
