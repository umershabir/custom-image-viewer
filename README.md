# custom image viewer in react js
In this is tutorial I will explain how can we build a simple custom image viewer.
The library I am going to use in this tutorial is react modal, so let's start.
I am assuming this that all the boiler plates to get start with react you have done.
## Step 1
First I am going to install react modal with this command.  
  > npm install react-modal
## Step 2
next I am going to render a clickable component, It could be anything a text or a image which can be click and view the image or a link having multiple images to view, In my case there are multiple images to view I will render a simple clickable text to view images Which I will pass as a prop.  
```
export default function ImageViewer() {
  return (
  <span className='image-view'>
        View File
      </span>
  )
  }
  ```
