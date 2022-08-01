# custom image viewer in react js
In this is tutorial I will explain how can we build a simple custom image viewer.
The library I am going to use in this tutorial is react modal, so let's start.
I am assuming this that all the boiler plates to get start with react you have done.
## Step 1
First I am going to install react modal with this command.  
  > npm install react-modal
## Step 2
next I am going to render a clickable component, It could be anything a text or a image which can be click and view the image or a link having multiple images to view, In my case there are multiple images to view I will render a simple clickable text to view images Which I will pass as a prop.  
```javascript
export default function ImageViewer() {
  return (
  <span className='image-view'>
        View File
      </span>
  )
  }
  ```
## Step 3
Next I am going to make this line clickable by applying onClick function and link it to the react modal.  
```javascript
import React from 'react'
import Modal from 'react-modal'  
export default function ImageViewer() {
const openModal => () {
    setIsOpen(true)
  }
  const closeModal => () {
    setIsOpen(false)
  }
  return (
  <span className='image-view' onClick={openModal}>
        View File
      </span>
  )
  }
  ```
## Step 4  
Next step is all about the view how you want to open and view your react modal, in my case it will look like this.  
![imageViewer!](/src/images/imageviewer.png 'image viewer')  
you can check this JSX in github,   
## Step 5
let's render our images, In my case Images are coming from an API that's why I passed that in a prop, but for the sake of this tutorial I will statically pass an array of some random images.  
```javascript
const images = [
  'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
]
```  
and map these Images.  
```javascript 

              images.map((item, index) => (
                <img
                  onClick={() => setImgItem(index)}
                  key={index}
                  className={index === imgItem ? 'active-image' : ''}
                  src={item}
                  alt=''
                  style={{
                    width: '100px',
                    height: '125px',
                    margin: '5px',
                    cursor: 'pointer',
                  }}
                  />
             
```   
I styled active image with active class the logic is if image index is equal to ImageItem number add active class by onClicking function which set the image index to image item so the condition equates true and active class added.

