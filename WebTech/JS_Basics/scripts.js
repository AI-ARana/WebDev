document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const department = document.getElementById("department").value;
        const uni = document.getElementById("uni").value;
        saveData("form", { name, email,department,uni });
        displayData();
    });


    function saveData(formId, data) {
        let storedData = JSON.parse(localStorage.getItem(formId)) || [];
        storedData.push(data);
        localStorage.setItem(formId, JSON.stringify(storedData));
    }

    function displayData() {
        ["form"].forEach((formId) => {
            const data = JSON.parse(localStorage.getItem(formId)) || [];
            const list = document.getElementById(`${formId}-data`);
            list.innerHTML = "";
            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `Name: ${item.name}, Email: ${item.email}, Department: ${item.department}, University: ${item.uni}`;
                list.appendChild(listItem);
            });
        });
    }

    displayData();  // Initial call to display any stored data
});
