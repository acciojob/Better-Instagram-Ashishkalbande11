// Assign IDs to each .image element

const images = document.querySelectorAll(".image");
images.forEach((i, index) => {
	i.setAttribute("id", `div${index + 1}`)
})

let draggedElement = null;
images.forEach((image) => {
    
    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        // e.dataTransfer.setData('text', e.target.id)
        draggedElement.style.opacity = 0.5;
    })
    image.addEventListener('dragend', (e) => {
        e.target.style.opacity = 1;
    })


    let events = ["dragover", "dragenter", 'drop']

    events.forEach(drag => {
        image.addEventListener(drag, (e) => {
            e.preventDefault();

            if(drag == "drop"){
                const targetElement = e.target;
                if(targetElement != draggedElement){
                    const draggedBackground = draggedElement.id;
                    draggedElement.id = targetElement.id;
                    targetElement.id = draggedBackground
                   


                    const draggedText = draggedElement.innerText;
                    draggedElement.innerText = targetElement.innerText;
                    targetElement.innerText = draggedText

                }
            }
            // draggedElement = null
        })
    })
})