console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

// console.log('yargs', argv )



if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Your note has been added")
    notes.printNote(note)
  } else {
    console.log("Note already exists")
  }
} else if ( command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log("Your note has been found")
    notes.printNote(note)
  } else {
    console.log("Note not found")
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)
  noteRemoved ? console.log(`note with title ${argv.title} removed`) : console.log('note not found')
} else {
  console.log('command not recognized')
}
