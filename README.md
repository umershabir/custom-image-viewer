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
