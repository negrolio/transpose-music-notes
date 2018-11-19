// const notesWithSharps = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
// const notesWithFlats =  ['A','BB','B','C','DB','D','EB','E','F','GB','G','AB']

const transportByHalfTones = (note,quanty,direction,arrayWithAllNotes)=>{
    //notes = note[1] === '#' || direction === 'up' && note[1] !== 'B' ?  notesWithSharps : notesWithFlats;

    let idxNote = arrayWithAllNotes.indexOf(note)
    let cromaticScale=arrayWithAllNotes.slice(idxNote).concat(arrayWithAllNotes.slice(0,idxNote))
    switch (direction){
        case 'up':
            return cromaticScale[quanty]
            break;
        case 'down':
            return cromaticScale[12-quanty]
            break;
    }
}

const setDirectionAndQuantyHalfTones = (from, to) => {
    if (from === 'C' && to === 'Bb') return {quanty: 2, direction: 'up'}
    if (from === 'C' && to === 'Eb') return {quanty: 3, direction: 'down'}
    if (from === 'Bb' && to === 'C') return {quanty: 2, direction: 'down'}
    if (from === 'Bb' && to === 'Eb') return {quanty: 5, direction: 'down'}
    if (from === 'Eb' && to === 'C') return {quanty: 3, direction: 'up'}
    if (from === 'Eb' && to === 'Bb') return {quanty: 5, direction: 'up'}
}

export default utilsFunctions = {
    transportByHalfTones: transportByHalfTones,
    setDirectionAndQuantyHalfTones: setDirectionAndQuantyHalfTones
}