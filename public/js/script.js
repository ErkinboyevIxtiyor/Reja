const createInput = document.getElementById("create-item");
const form = document.getElementById("form");
const modal = document.getElementById("modal");

const itemTemplate = (item) => {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
                  ${item.reja}
                  <div>
                    <button class="btn btn-outline-primary btn-edit" data-id="${item._id}">Edit</button>
                    <button class="btn btn-outline-danger btn-delete" data-id="${item._id}">Delete</button>
                  </div>
                </li>`;
};

document.addEventListener("click", (e) => {
  const btnEdit = e.target.classList.contains("btn-edit");
  const btnDelete = e.target.classList.contains("btn-delete");

  if (btnDelete) {
    const getId = e.target.getAttribute("data-id");
    if (confirm("Ochirishni istaysizmi?")) {
      axios
        .post("/delete-item", { id: getId })
        .then((response) => {
          console.log(response);
          if (response.data.state == "success") {
            e.target.parentElement.parentElement.remove();
            toastr.success("Muvaffaqiyatli ochirildi!");
          }
        })
        .catch((err) => {
          toastr.error("Sorov yuborishda xatolik yuz berdi!");
        });
    }
  }

  if (btnEdit) {
    const getId = e.target.getAttribute("data-id");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createInput.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createInput.value = "";
      createInput.focus();
      toastr.success("Muvaffaqiyatli bajarildi!");
    })
    .catch((err) => {
      console.log("Err:", err);
      toastr.error("Sorov yuborishda xatolik yuz berdi!");
    });
});
