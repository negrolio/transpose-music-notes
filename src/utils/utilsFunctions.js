const notesWithFlats =  ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']

const transposeNoteFromTo = (note,from,to,arrayWithAllNotes) => {

    const quantyToTranspose = getQuantyOfSemitoneFromTo(from, to)

    // we have to use the notesWithFlats array, because the 'from' come from the buttons of InstrumentSelection,
    // and they are written with flats
    const idxFrom = notesWithFlats.indexOf(from)

    // we use the array with the index of the 'from' to order starting from the selected instrument tonality
    const arrayStartingFrom = setOrderOfArrayFrom(arrayWithAllNotes, idxFrom)

    // the 'note' is the note to transpose the same quantity of semitones that there are 'from' one instrument 'to' another
    const idxOfSelectedNote = arrayStartingFrom.indexOf(note)
    const diff = idxOfSelectedNote - quantyToTranspose

    if (diff < 0) {
        const idxOfTransposedNote = arrayStartingFrom.length + diff
        return arrayStartingFrom[idxOfTransposedNote]
    } else {
        return arrayStartingFrom[diff]
    }
}

const getQuantyOfSemitoneFromTo = (from, to) => {
    if (from === to) return 0;

    const idxFrom = notesWithFlats.indexOf(from)
    const arrayStartFrom = setOrderOfArrayFrom(notesWithFlats, idxFrom)

    return arrayStartFrom.indexOf(to)
}

// this function will order the array from the indicated index onforward, plus what is behind
const setOrderOfArrayFrom = (arr, idx) => {
    return arr.slice(idx).concat(arr.slice(0,idx))
}

export default utilsFunctions = {
    transposeNoteFromTo: transposeNoteFromTo
}