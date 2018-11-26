import bigPhoto from '../assets/bigPhoto';
import smallPhoto from '../assets/smallPhoto';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = smallPhoto;

document.body.appendChild(image);


const bigImage = document.createElement('img');
bigImage.src = bigPhoto;

document.body.appendChild(bigImage);
