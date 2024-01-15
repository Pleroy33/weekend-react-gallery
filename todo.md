[x]Create Database in postgres/postico
[]Create endpoints in router.js file. At least CRUD.  Maybe more depending on stretch
[]Create endpoints in client.  
[]Create components for client side.
  


[]* Create a `GalleryList` component that:
 [] * When it loads, obtains the array of gallery item objects from `GET /api/gallery`, then stores it in a piece of React state.


 [] * In its `return` statement, `.map`s through the array of gallery item objects that are stored in React state to display each gallery item.
[]* Create a `GalleryItem` component that:
  []* Will be used to display a single gallery item.
  []* Expects to receive a single gallery item object as a prop. (These will be rendered inside the `GalleryList`'s `.map`.)
  []* Toggles between showing the image and description on click. Use [conditional rendering](https://react.dev/learn/conditional-rendering).
  []* Displays a gallery item's current number likes.
  []* Contains a "like" button that, when clicked, will fire off a `PUT /api/gallery/like/:id` request.
