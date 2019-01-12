console.log('starting from notes.js')

const addNote = (title, body) => {
console.log("adding note", title, body);
}

const getAll = () => {
  console.log('getting all notes')
}

const getNote = (title) => {
  console.log('reading note', title)
}

const removeNote = (title) => {
  console.log('removing note', title)
}



module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
