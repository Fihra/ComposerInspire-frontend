import Vex from 'vexflow';

const VF = Vex.Flow;

let flat = new VF.Accidental("b");
let sharp = new VF.Accidental("#");

/* Notes */

// Set up Major and Minor Scales like Circle of Fifths 

/*  Major Scales */

// C Major: C-D-E-F-G-A-B-C

const CMajKeys = ["c/4", "d/4", "e/4", "f/4", "g/4", "a/4", "b/4", "c/5"];

// G Major: G-A-B-C-D-E-F#-G
const GMajKeys = ["g/4", "a/4", "b/4", "c/4", "d/4", "e/4", "f#/4", "g/5"];

// D Major: D-E-F#-G-A-B-C#-D
const DMajKeys = ["d/4", "e/4", "f#/4", "g/4", "a/4", "b/4", "c#/4", "d/5"];

// A Major: A-B-C#-D-E-F#-G#-A
const AMajKeys = ["a/4", "b/4", "c#/4", "d/4", "e/4", "f#/4", "g#/4", "a/5"];

// E Major: E-F#-G#-A-B-C#-D#-E
const EMajKeys = ["e/4", "f#/4", "g#/4", "a/4", "b/4", "c#/4", "d#/4", "e/5"];

// B Major: B-C#-D#-E-F#-G#-A#-B
const BMajKeys = ["b/4", "c#/4", "d#/4", "e/4", "f#/4", "g#/4", "a#/4", "b/5"];

// F# Major: F#-G#-A#-B-C#-D#-E#-F#
const FsharpMajKeys = ["f#/4", "g#/4", "a#/4", "b/4", "c#/4", "d#/4", "e#/4", "f#/5"];

// C# Major: C#-D#-E#-F#-G#-A#-B#-C#
const CsharpMajKeys = ["d/4", "e/4", "f#/4", "g/4", "a/4", "b/4", "c#/4", "d/5"];

// Gb Major: Gb-Ab-Bb-Cb-Db-Eb-F-Gb
const GbMajKeys = ["gb/4", "ab/4", "bb/4", "cb/4", "db/4", "eb/4", "f/4", "gb/5"];

// Db Major Db-Eb-F-Gb-Ab-Bb-C-Db
const DbMajKeys = ["db/4", "eb/4", "f/4", "gb/4", "ab/4", "bb/4", "c/4", "db/5"];

// Ab Major Ab-Bb-C-Db-Eb-F-G-Ab
const AbMajKeys = ["ab/4", "bb/4", "c/4", "db/4", "eb/4", "f/4", "g/4", "ab/5"];

// Eb Major Eb-F-G-Ab-Bb-C-D-Eb
const EbMajKeys = ["eb/4", "f/4", "g/4", "ab/4", "bb/4", "c/4", "d/4", "eb/5"];

// Bb Major Bb-C-D-Eb-F-G-A-Bb
const BbMajKeys = ["bb/4", "c/4", "d/4", "eb/4", "f/4", "g/4", "a/4", "bb/5"];

// F Major F-G-A-Bb-C-D-E-F
const FMajKeys = ["f/4", "g/4", "a/4", "bb/4", "c/4", "d/4", "e/4", "f/5"];

/*----------------------------*/

/* Minor Scales */

// A Minor: a-b-c-d-e-f-g-a
const AMinKeys = ["a/4", "b/4", "c/4", "d/4", "e/4", "f/4", "g/4", "a/5"];

// D Minor: d-e-f-g-a-Bb-c-d
const DMinKeys = ["d/4", "e/4", "f/4", "g/4", "a/4", "bb/4", "c/4", "d/5"];

// G Minor: g-a-Bb-c-d-Eb-f-G
const GMinKeys = ["g/4", "a/4", "bb/4", "c/4", "d/4", "eb/4", "f/4", "g/5"];

// C Minor: c-d-Eb-F-g-Ab-Bb-c
const CMinKeys = ["c/4", "d/4", "eb/4", "f/4", "g/4", "ab/4", "bb/4", "c/5"];

// F Minor: f-g-Ab-Bb-C-Db-Eb-F
const FMinKeys = ["f/4", "g/4", "ab/4", "bb/4", "c/4", "db/4", "eb/4", "f/5"];

// Bb Minor: Bb-C-Db-Eb-F-Gb-Ab-Bb
const BbMinKeys = ["bb/4", "c/4", "db/4", "eb/4", "f/4", "gb/4", "ab/4", "bb/5"];

// A# Minor: A#-B#-C#-D#-E#-F#-G#-A#
const AsharpMinKeys = ["a#/4", "b#/4", "c#/4", "d#/4", "e#/4", "f#/4", "g#/4", "a#/5"];

// Eb Minor: Eb-f-Gb-Ab-Bb-Cb-Db-Eb
const EbMinKeys = ["eb/4", "f/4", "gb/4", "ab/4", "bb/4", "cb/4", "db/4", "eb/5"];

// D# Minor: D#-E#-F#-G#-A#-B-C#-D#
const DsharpMinKeys = ["d#/4", "e#/4", "f#/4", "g#/4", "a#/4", "b/4", "c#/4", "d#/5"];

// G# Minor: G#-A#-B-C#-D#-E-F#-G#
const GsharpMinKeys = ["g#/4", "a#/4", "b/4", "c#/4", "d#/4", "e/4", "f#/4", "g#/5"];

// C# Minor: C#-D#-E-F#-G#-A-B-C#
const CsharpMinKeys = ["c#/4", "d#/4", "e/4", "f#/4", "g#/4", "a/4", "b/4", "c#/5"];

// F# Minor: F#-G#-A-B-C#-D-E-F#
const FsharpMinKeys = ["f#/4", "g#/4", "a/4", "b/4", "c#/4", "d/4", "e/4", "f#/5"];

// B Minor: B-C#-D-E-F#-G-A-B
const BMinKeys = ["b/4", "c#/4", "d/4", "e/4", "f#/4", "g/4", "a/4", "b/5"];

// E Minor: E-F#-G-A-B-C-D-E
const EMinKeys = ["e/4", "f#/4", "g/4", "a/4", "b/4", "c/4", "d/4", "e/5"];

/* Major Scale Arrays */
const C_Major = []    
const G_Major = [] 
const D_Major = []  
const A_Major = []  
const E_Major = []  
const B_Major = []  
const Fsharp_Major = []
const Csharp_Major = []
const Gb_Major = []
const Db_Major = []
const Ab_Major = []
const Eb_Major = []
const Bb_Major = []
const F_Major = []  

/* Minor Scale Arrays */
const A_Minor = []  
const D_Minor = []; 
const G_Minor = []; 
const C_Minor = []; 
const F_Minor = [];  
const Bb_Minor = []; 
const Asharp_Minor = [];
const Eb_Minor = []; 
const Dsharp_Minor = [];
const Gsharp_Minor = [];
const Csharp_Minor = [];
const Fsharp_Minor = [];
const B_Minor = []; 
const E_Minor = []; 

const createScale = (scaleNotes, emptyScaleArray) => {
    // console.log({emptyScaleArray} + `${emptyScaleArray}`)
    // console.log(scaleNotes)
    for(let i = 0; i < scaleNotes.length; i++){
        if(scaleNotes[i].includes("#")){
            emptyScaleArray.push(new VF.StaveNote({keys: [scaleNotes[i]], duration: "8"}).addAccidental(0, sharp))
        }
        else if(scaleNotes[i].split("/")[0].length > 1){
            // console.log(scaleNotes[i])
            emptyScaleArray.push(new VF.StaveNote({keys: [scaleNotes[i]], duration: "8"}).addAccidental(0, flat))
        } else{
            emptyScaleArray.push(new VF.StaveNote({keys: [scaleNotes[i]], duration: "8"}))
        }  
    }
}

/* Modes */
//Dorian
// W W H W W W H

//Phrygian
// H W W W H W W

//Lydian
// W W W H W W H

//Mixolydian
// W W H W W H W

//Ionian
// W W H W W W H

// Aeolian
// W H W W H W W

//Locrian
// H W W H W W W

/* Chromatic Scale */

/*  Pentatonic Scales */

/* Octatonic Scales */

createScale(CMajKeys, C_Major);
createScale(GMajKeys, G_Major);
createScale(DMajKeys, D_Major);
createScale(AMajKeys, A_Major);
createScale(EMajKeys, E_Major);
createScale(BMajKeys, B_Major);
createScale(FsharpMajKeys, Fsharp_Major);
createScale(CsharpMajKeys, Csharp_Major);
createScale(GbMajKeys, Gb_Major);
createScale(DbMajKeys, Db_Major);
createScale(AbMajKeys, Ab_Major);
createScale(EbMajKeys, Eb_Major);
createScale(BbMajKeys, Bb_Major);
createScale(FMajKeys, F_Major);

createScale(AMinKeys, A_Minor);
createScale(DMinKeys, D_Minor);
createScale(GMinKeys, G_Minor);
createScale(CMinKeys, C_Minor);
createScale(FMinKeys, F_Minor);
createScale(BbMinKeys, Bb_Minor);
createScale(AsharpMinKeys, Asharp_Minor);
createScale(EbMinKeys, Eb_Minor);
createScale(DsharpMinKeys, Dsharp_Minor);
createScale(GsharpMinKeys, Gsharp_Minor);
createScale(CsharpMinKeys, Csharp_Minor);
createScale(FsharpMinKeys, Fsharp_Minor);
createScale(BMinKeys, B_Minor);
createScale(EMinKeys, E_Minor);

const allScales = {
    // C_Major, 
    // G_Major,
    // D_Major,
    // A_Major,
    // E_Major,
    // B_Major,
    // Fsharp_Major,
    // Csharp_Major,
    // Gb_Major,
    // Db_Major,
    // Ab_Major,
    // Eb_Major,
    // Bb_Major,
    // F_Major,

    // A_Minor,
    // D_Minor,
    // G_Minor,
    // C_Minor,
    F_Minor
}

export default allScales;