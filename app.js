const btnAdd = document.getElementById("add-habit");
const modalContainer = document.getElementById("modal_container");
const addHabit = document.getElementById("add_habit");
const form = document.getElementById("form");
const reps = document.getElementById("reps_habit");
const nameHabit = document.getElementById("name_habit");
btnAdd.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

addHabit.addEventListener("click", () => {
  modalContainer.classList.remove("show");
  agregarClase();
});

function formValidation(e) {
  e.preventDefault();
  const valorNameHabit = nameHabit.value.trim();
  const valorReps = reps.value.trim();
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

function agregarHabito() {}
