// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line


const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureCardMarkup(galleryItems);

pictureContainer.insertAdjacentHTML("beforeend", pictureMarkup)

function createPictureCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("");
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    showCounter: false
});

// console.log(galleryItems);









// * Task with ✨  -- https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

// function findEvenIndex(arr) {
//     let rightArr = [];
//     let leftArr = [];

//     if (arr.length % 2 === 0) {
//         rightArr = arr.slice(0, arr.length / 2)
//         leftArr = arr.slice(arr.length / 2, arr.length)
//     } else {
//         rightArr = arr.slice(0, (arr.length - 1) / 2)
//         leftArr = arr.slice((arr.length + 1) / 2, arr.length)
//     }


//     const rightSummArr = [];
//     const rightSumm = rightArr.reduce((acc, el) => {
//         acc += el;
//         rightSummArr.push(acc);
//         return acc;
//     }, 0)

//     const leftSummArr = [];
//     const leftSumm = leftArr.reverse().reduce((acc, el, ind) => {
//         acc += el;
//         leftSummArr.push(acc);
//         return acc;
//     }, 0)


//     for (let i = 0; i < rightSummArr.length; i++) {
//         if (rightSummArr.reverse()[i] === leftSummArr.reverse()[i]) {
//             return rightSummArr.length - i;
//         }
//     }
//     return -1;
// }


// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), "3 The array was: [1,2,3,4,3,2,1] \n");
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), " 1 The array was: [1,100,50,-51,1,1] \n");
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), " -1, The array was: [1,2,3,4,5,6] \n");
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), " 3 The array was: [20,10,30,10,10,15,35] \n");





