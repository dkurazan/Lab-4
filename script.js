// Task 1
const form = document.getElementById("orderForm");
const orderList = document.getElementById("orderList");

const createOrderElement = () => {
    const orderInfo = {
        name: form.elements.name.value,
        topping: form.elements.topping.value || "---",
        sauce: form.elements.sauce.value,
        extra1: form.elements.extra1.checked
            ? form.elements.extra1.value
            : false,
        extra2: form.elements.extra2.checked
            ? form.elements.extra2.value
            : false,
        instruction: form.elements.instructions.value,
    };

    const inputParentEl = document.createElement("tr");
    inputParentEl.innerHTML = `
        <td>${orderInfo.name}</td>
        <td>${orderInfo.topping}</td>
        <td>${orderInfo.sauce}</td>
        <td>${
            orderInfo.extra1
                ? orderInfo.extra2
                    ? orderInfo.extra1 + ", " + orderInfo.extra2
                    : orderInfo.extra1
                : orderInfo.extra2
                ? orderInfo.extra2
                : "---"
        }</td>
        <td>${orderInfo.instruction}</td>
    `;

    orderList.querySelector("tbody").append(inputParentEl);
};

const clearForm = () => {
    form.elements.name.value = "";
    form.elements.topping.forEach((item) => {
        item.checked = false;
    });
    form.elements.sauce.value = "Tomato";
    form.elements.extra1.checked = false;
    form.elements.extra2.checked = false;
    form.elements.instructions.value = "";
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createOrderElement();
    clearForm();
});

// Task 2
const dictionaryForm = document.getElementById('dictionaryForm');

const dictionary = {
    cat: 'кіт',
    dog: 'пес',
    bird: 'пташка',
    cow: 'корова',
    mouse: 'миша`',
};

function searchWord() {
    const wordInput = document.getElementById("wordInput");
    const resultDiv = document.getElementById("result");
    const word = wordInput.value.toLowerCase().trim();

    if (word === "") {
        resultDiv.textContent = "Enter the word for searching please.";
    } else if (!isNaN(word)) {
        resultDiv.textContent = "The word is not valid.";
    } else {
        const translation = dictionary[word];
        if (translation) {
            resultDiv.textContent = "Translation: " + translation;
        } else {
            resultDiv.textContent = "Word not found";
        }
    }

    wordInput.value = "";
}

dictionaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchWord();
})