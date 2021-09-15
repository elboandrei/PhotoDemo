class Photo {
    constructor (width = 8, height = 10) {
        this.width = width;
        this.height = height;
    }

    price() {
        let finalPrice;

        if (this.width === 8 && this.height === 10) {
            finalPrice = 4;
        } else {
            if (this.width === 10 && this.height === 12) {
            finalPrice = 6;
            } else {
            finalPrice = 10;
            }
        }
        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs $${this.price()}`;
    }
}

class MattedPhoto extends Photo {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }

    price() {
        let finalPrice;

        if (this.width === 8 && this.height === 10) {
            finalPrice = 14;
        } else {
            if (this.width === 10 && this.height === 12) {
            finalPrice = 16;
            } else {
            finalPrice = 20;
            }
        }
        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs $${this.price()}`;
    }


}

class FramedPhoto extends Photo {
    constructor(width, height, material, style) {
        super(width, height);
        this.material = material;
        this.style = style;
    }

    price() {
        let finalPrice;

        if (this.width === 8 && this.height === 10) {
            finalPrice = 14;
        } else {
            if (this.width === 10 && this.height === 12) {
            finalPrice = 16;
            } else {
            finalPrice = 20;
            }
        }
        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} ${this.material} photo. The style is ${this.style} and it costs $${this.price()}`;
    }
}

let photo1 = new Photo(8, 10);
console.log(photo1.toString());
let photo2 = new Photo(20, 30);
console.log(photo2.toString());

let photo3 = new MattedPhoto(8, 10, "red");
console.log(photo3.toString());
let photo4 = new MattedPhoto(10, 12, "blue");
console.log(photo4.toString());

let photo5 = new FramedPhoto(8, 10, "gold", "modern");
console.log(photo5.toString());
let photo6 = new FramedPhoto(20, 30, "silver", "baroque");
console.log(photo6.toString());