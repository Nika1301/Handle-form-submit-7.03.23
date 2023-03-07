console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);

  let age = Number(data["age"]);
  let badness = Number(data["badness"]);
  let ageBadnessSum = age + badness;
  console.log(ageBadnessSum);
});
