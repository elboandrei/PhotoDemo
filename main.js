import { Photo, MattedPhoto, FramedPhoto } from './photo.js';

let photo1 = new Photo(8, 10);
console.log(photo1.toString());
let photo2 = new Photo(20, 30);
console.log(photo2.toString());

let mattedPhoto1 = new MattedPhoto(8, 10, "red");
console.log(mattedPhoto1.toString());
let mattedPhoto2 = new MattedPhoto(10, 12, "blue");
console.log(photo2.toString());

let framedPhoto1 = new FramedPhoto(8, 10, "gold", "modern");
console.log(framedPhoto1.toString());
let framedPhoto2 = new FramedPhoto(20, 30, "silver", "baroque");
console.log(framedPhoto2.toString());
