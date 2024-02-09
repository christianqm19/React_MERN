const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []})

notesCtrl.createNote = (req, res) => res.json({message: 'Note Guardada'})

notesCtrl.getNote = (req, res) => res.json({title: 'Actividades del mes'})

notesCtrl.updateNote =(req, res) => res.json({message: 'Nota Actualizada'})

notesCtrl.deleteNote = (req, res) => res.json({message: 'Nota Eliminada'})

module.exports = notesCtrl;