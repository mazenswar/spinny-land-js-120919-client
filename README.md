CSS Grid
Grid-based layout, two-dimensional system
Example makes dynamic auto-fill grid:

```
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 10px;
}
Example makes 5 x 5 grid, where each column and each row is divided into 5 parts each filling 20% of the column and row, respectively:
.image-gallery {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;
  grid-gap: 10px;
}
Example makes 3x3 grid, where each column is divided into 3 fractional units and each row is divided into 3 fractional units:
.image-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
}
grid-template is another way to generate your grid, and it combines both grid-template-columns and grid-template-rows
You can also target specific elements within the grid and specify where there should start/end via: grid-column-start, grid-column-end, grid-row-start, grid-row-end, grid-column, grid-row, grid-area
CSS transitions
https://cubic-bezier.com/#.17,.67,.83,.67
/* .gradient {
  width: 800px;
  height: 600px;
  border: 2px solid black;
  margin: 100px auto;
  background-image: linear-gradient(pink, cyan);
} */
.transition {
  width: 400px;
  height: 400px;
  background-color: black;
  margin: 100px auto;
  color: white;
  /* transition-property: width;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(.78,2.05,.95,-1.44) */
  /* transition: width 1s ease-in, background-color 2s ease-in, color 3s ease-in; */
  transition: all 2s;
}
.transition:hover{
  width: 800px;
  background-color: white;
  color: black
}

/* .gradient {
  width: 800px;
  height: 600px;
  border: 2px solid black;
  margin: 100px auto;
  background-image: linear-gradient(pink, cyan);
} */
.transition {
  width: 400px;
  height: 400px;
  background-color: black;
  margin: 100px auto;
  color: white;
  /* transition-property: width;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(.78,2.05,.95,-1.44) */
  /* transition: width 1s ease-in, background-color 2s ease-in, color 3s ease-in; */
  transition: all 2s;
}
.transition:hover{
  width: 800px;
  background-color: white;
  color: black
}
.transform {
  width: 400px;
  height: 400px;
  background-color: black;
  margin: 100px auto;
  color: white;
  /* transform: translateX(200px);
  transform: translateY(200px; */
  transition: transform 1s
}
.transform:hover {
  /* transform: translate(200px, 200px); */
  /* transform: rotate(90deg) */
  /* transform: scale(2, 2); */
  /* transform: skew(30deg); */
  /* transform: skew(30deg, 20deg) */
  transform: translate(200px, 200px) rotate(30deg)
}
.animation {
  width: 400px;
  height: 400px;
  background-color: black;
  position: relative;
  color: white;
  /* animation-name: anim;
  animation-duration: 4s;
  animation-delay: 2s;
  animation-iteration-count: 2;
  animation-direction: alternate; */
  /* animation: anim 4s infinite alternate; */
  /* animation: spin 10s linear infinite; */
  animation: anim 10s, spin 10s
}
@keyframes anim {
  0% {
    left: 0px;
    top: 0px;
    background-color: black;
  }
  25% {
    left: 500px;
    top: 0px;
    background-color: red;
  }
  50% {
    left: 500px;
    top: 500px;
    background-color: green;
  }
  75% {
    left: 0px;
    top: 500px;
    background-color: blue;
  }
  100% {
    left: 0px;
    top: 0px;
    background-color: black;
  }
}
@keyframes spin {
	0% {
		transform: rotateZ(0);
	}
	100% {
		transform: rotateZ(360deg);
	}
}

```
