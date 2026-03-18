// WRITE
document.getElementById("submitBtn").addEventListener("click", () => {
  const date =
    document.getElementById("textDate").value.trim() ||
    document.getElementById("dateInput").value.trim();

  const content = document.getElementById("writedata").value;

  fetch("http://localhost:5000/write", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, content })
  })
    .then(res => res.json())
    .then(() => alert("Data Saved Successfully 👍"));
});


// READ
document.getElementById("readdata").addEventListener("click", () => {
  const date = document.querySelector(".read-inputs input").value.trim();

  fetch(`http://localhost:5000/read/${date}`)
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector(".read-data");
      container.innerHTML = "";

      if (data.message) {
        container.innerHTML = `<h2 style="padding:20px">No Data Found 😢</h2>`;
        return;
      }

      const p = document.createElement("p");
      p.style.padding = "20px";
      p.style.fontSize = "22px";
      p.textContent = data.content;
      container.appendChild(p);
    });
});


// UPDATE
document.getElementById("update-button").addEventListener("click", () => {
  const date =
    document.getElementById("textDate").value.trim() ||
    document.getElementById("dateInput").value.trim();

  const content = document.getElementById("writedata").value;

  fetch("http://localhost:5000/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, content })
  })
    .then(res => res.json())
    .then(() => alert("Data Updated 👍"));
});


// DELETE
document.getElementById("deletedata").addEventListener("click", () => {
  const date = document.querySelector(".read-inputs input").value.trim();

  fetch(`http://localhost:5000/delete/${date}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(() => {
      document.querySelector(".read-data").innerHTML = "";
      alert("Data Deleted ❌");
    });
});

//Contact script

// CONTACT FORM
document.querySelector(".Contactpage button").addEventListener("click", () => {

  const fullname = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phn-no").value.trim();
  const email = document.getElementById("email").value.trim();
  const suggestion = document.getElementById("suggestion-input").value.trim();

  if (!fullname || !phone || !email || !suggestion) {
    alert("Please fill all fields 😅");
    return;
  }

  fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullname, phone, email, suggestion })
  })
    .then(res => res.json())
    .then(() => {
      alert("Your Response has been submitted ❤️");

      document.getElementById("fullname").value = "";
      document.getElementById("phn-no").value = "";
      document.getElementById("email").value = "";
      document.getElementById("suggestion-input").value = "";
    });
});
