// Assign IDs to each .image element
const images = document.querySelectorAll(".image");
images.forEach((image, index) => {
  image.setAttribute("id", `div${index + 1}`);
});

let draggedElement = null;

// Drag-and-drop functionality
images.forEach((image) => {
  // When dragging starts
  image.addEventListener("dragstart", (event) => {
    draggedElement = event.target;
    event.target.classList.add("selected"); // Add visual feedback
  });

  // When dragging ends
  image.addEventListener("dragend", (event) => {
    event.target.classList.remove("selected"); // Remove visual feedback
  });

  // Allow drop
  image.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  // Handle the drop
  image.addEventListener("drop", (event) => {
    event.preventDefault();
    if (draggedElement && draggedElement !== event.target) {
      // Swap background images
      const tempBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = event.target.style.backgroundImage;
      event.target.style.backgroundImage = tempBackground;
    }
    draggedElement = null;
  });
});
