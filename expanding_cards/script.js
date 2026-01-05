const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panels.forEach((p) => {
      p.classList.remove("flex-[5]", "rounded");
      p.classList.add("flex-[0.2]", "rounded-xl");
    });

    panel.classList.remove("flex-[0.2]", "rounded-xl");
    panel.classList.add("flex-[5]", "rounded");
  });
});

