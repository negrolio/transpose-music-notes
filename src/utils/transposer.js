const notesWithSharps = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
const notesWithFlats =  ['A','BB','B','C','DB','D','EB','E','F','GB','G','AB']

export default transportByHalfTones = (note,quanty,direction)=>{
    notes = note[1] === '#' || direction === 'up' && note[1] !== 'B' ?  notesWithSharps : notesWithFlats;

    let idxNote = notes.indexOf(note)
    let cromaticScale=notes.slice(idxNote).concat(notes.slice(0,idxNote))
    switch (direction){
        case 'up':
            return cromaticScale[quanty]
            break;
        case 'down':
            return cromaticScale[12-quanty]
            break;
    }
}
//console.log(transportByHalfTones('AB',2,'up'))