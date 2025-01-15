const todoListElement = document.querySelector<HTMLElement>(".todo-list");
if (todoListElement) {
    todoListElement.style.backgroundColor = "lightblue";
}

if (todoListElement) {
    // Ajoute un gestionnaire d'événements pour le clic
    todoListElement.addEventListener("click", () => {
        // Crée une icône de poubelle en SVG
        const trashIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        trashIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        trashIcon.setAttribute("viewBox", "0 0 24 24");
        trashIcon.setAttribute("width", "30");
        trashIcon.setAttribute("height", "30");
        trashIcon.classList.add("trashIcon")
        trashIcon.innerHTML = `
            <path d="M3 6h18v2H3V6zm2 2v12a2 2 0 002 2h10a2 2 0 002-2V8H5zm7 2h2v8h-2v-8zm-4 0h2v8H8v-8zm8 0h2v8h-2v-8z" fill="currentColor"/>
        `;
        trashIcon.style.color = "red";
        trashIcon.style.position = "absolute";
        trashIcon.style.right = "10px";
        trashIcon.style.top = "50%";
        trashIcon.style.transform = "translateY(-50%)";
        trashIcon.style.transition = "transform 0.3s ease-in-out";

        todoListElement.style.position = "relative";
        todoListElement.style.transition = "transform 0.3s ease-in-out";

        todoListElement.appendChild(trashIcon);
    });
}
