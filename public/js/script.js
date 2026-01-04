const createInput = document.getElementById("create-item");
const form = document.getElementById("form");
const btnDeleteAll = document.getElementById("btn-delete-all");

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
  const getId = e.target.getAttribute("data-id");
  if (btnDelete) {
    if (confirm("Ochirishni istaysizmi?")) {
      axios
        .post("/delete-item", { id: getId })
        .then((response) => {
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
    let item_text =
      e.target.parentElement.parentElement.querySelector(
        "#item-text"
      ).innerHTML;
    let edit_prompt = prompt("O'zgartirishni kiriting", item_text);
    if (edit_prompt) {
      axios
        .post("/update-item", {
          id: getId,
          text: edit_prompt,
        })
        .then((response) => {
          if (response.data.state == "success") {
            toastr.success("Ma'lumot muvafiqiyatli o'zgartirildi");
            e.target.parentElement.parentElement.querySelector(
              "#item-text"
            ).innerHTML = edit_prompt;
          }
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
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

const deleteAll = btnDeleteAll.addEventListener("click", () => {
  axios
    .post("/delete-all-item", { delete: true })
    .then((response) => {
      if (response.data.state == "success") {
        alert("Hamma ma'lumot o'chirildi!");
        document.location.reload();
      }
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});
