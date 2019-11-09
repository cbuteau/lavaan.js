
var fs = require('fs');
var zlib = require('zlib');

// third party
var BufferReader = require('buffer-reader');

// <editor-fold>


// #define NAMED_BITS 16
// struct sxpinfo_struct {
//     SEXPTYPE type      :  5;  /* discussed above */
//     unsigned int scalar:  1;  /* is this a numeric vector of length 1? */
//     unsigned int obj   :  1;  /* is this an object with a class attribute? */
//     unsigned int alt   :  1;  /* is this an ALTREP object? */
//     unsigned int gp    : 16;  /* general purpose, see below */
//     unsigned int mark  :  1;  /* mark object as ‘in use’ in GC */
//     unsigned int debug :  1;
//     unsigned int trace :  1;
//     unsigned int spare :  1;  /* debug once and with reference counting */
//     unsigned int gcgen :  1;  /* generation for GC */
//     unsigned int gccls :  3;  /* class of node for GC */
//     unsigned int named : NAMED_BITS; /* used to control copying */
//     unsigned int extra : 32 - NAMED_BITS;
// }; /*		    Tot: 64 */


// no	SEXPTYPE	Description
// 0	NILSXP	NULL
// 1	SYMSXP	symbols
// 2	LISTSXP	pairlists
// 3	CLOSXP	closures
// 4	ENVSXP	environments
// 5	PROMSXP	promises
// 6	LANGSXP	language objects
// 7	SPECIALSXP	special functions
// 8	BUILTINSXP	builtin functions
// 9	CHARSXP	internal character strings
// 10	LGLSXP	logical vectors
// 13	INTSXP	integer vectors
// 14	REALSXP	numeric vectors
// 15	CPLXSXP	complex vectors
// 16	STRSXP	character vectors
// 17	DOTSXP	dot-dot-dot object
// 18	ANYSXP	make “any” args work
// 19	VECSXP	list (generic vector)
// 20	EXPRSXP	expression vector
// 21	BCODESXP	byte code
// 22	EXTPTRSXP	external pointer
// 23	WEAKREFSXP	weak reference
// 24	RAWSXP	raw vector
// 25	S4SXP	S4 classes not of simple type


// </editor-fold>


var SEXPTYPE = {
    NILSXP: 0,
    SYMSXP: 1,
    LISTSXP: 2,
    CLOSXP: 3,
    ENVSXP: 4,
    PROMSXP: 5,
    LANGSXP: 6,
    SPECIALSXP: 7,
    BUILTINSXP: 8,
    CHARSXP: 9,
    LGLSXP: 10,
    INTSXP: 13,
    REALSXP: 14,
    CPLXSXP: 15,
    STRSXP: 16,
    DOTSXP: 17,
    ANYSXP: 18,
    VECSXP: 19,
    EXPRSXP: 20,
    BCODESXP: 21,
    EXTPTRSXP: 22,
    WEAKREFSXP: 23,
    RAWSXP: 24,
    S4SXP: 25
};

Object.freeze(SEXPTYPE);

function buildStruct(reader) {
  var type = reader.nextUInt8(5);
  var scalar = reader.nextUInt8(1);
  var obj = reader.nextUInt8(1);
  var alt = reader.nextUInt8(1);
  var gp = reader.nextUInt16BE();
  var mark = reader.nextUInt8(1);
  var debug = reader.nextUInt8(1);
  var trace = reader.nextUInt8(1);
  var spare = reader.nextUInt8(1);
  var gcgen = reader.nextUInt8(1);
  var acls = reader.nextUInt8(3);
  var named = reader.nextUInt16BE();
  var extra = reader.nextUInt16BE();

  var struct = {
    type: type,
    scalar: scalar,
    obj: obj,
    alt: alt,
    gp: gp,
    mark: mark,
    debug: debug,
    trace: trace,
    spare: spare,
    gcgen: gcgen,
    acls: acls,
    named: named,
    extra: extra
  };

  return struct;
}


module.exports = {
  load: function(rdaFilePath) {
    var buffer = fs.readFileSync(rdaFilePath);
    var uncompressed = zlib.gunzipSync(buffer);
    var reader = new BufferReader(uncompressed);
    var start = reader.nextString(4);
    if (start === 'RDX2') {
      console.log('We have a RData file lets parse it');
      while (reader.tell() - uncompressed.length >= 64) {
        var struct = buildStruct(reader);
      }
    }
  },
  save: function(data, rdaFilePath) {
    throw new Error('Not implemented');
  }
}
