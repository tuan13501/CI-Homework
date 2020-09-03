class Destination {
    name;
    images;
    dateModified;

    constructor (name) {
        this.name = name;
        this.images = [];
        this.dateModified = new Date().toISOString();
    }
    set newImage(image) {
        this.images.push(image);
        this.dateModified = new Date().toISOString();
    }
    get info() {
        return `
        Địa điểm ${this.name}
        Review địa điểm ${this.images}
        Cập nhật vào lúc ${this.dateModified}
        `;
    }
}
export {Destination}