const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes');

const titleOption = (describe) => {
  return {
    describe: describe,
    demand: true,
    alias: 't'
  }
}

const bodyOption = () => {
  return {
    describe: 'Message of note',
    demand: true,
    alias: 'b'
  }
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOption('Title of note to be added'),
    body: bodyOption()

  })
  .command('list', 'Lists all the notes')
  .command('read', 'Read a note', {
    title: titleOption('Title of note you want to read')
  })
  .command('remove', 'Remove a note', {
    title: titleOption('Title of note you want to remove')
  })
  .help()
  .argv;

const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Your note has been added")
    notes.printNote(note)
  } else {
    console.log("Note already exists")
  }
} else if ( command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note) => notes.printNote(note))
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
