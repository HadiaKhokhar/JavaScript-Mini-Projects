
const toastContainer = document.getElementById("toastContainer");
const buttons = Array.from(document.getElementsByClassName("button-group")[0].children);
const timeInMilliSecs = getComputedStyle(document.documentElement).getPropertyValue("--time").replace("s","") * 1000; // 3 seconds
const getIconForToast = (type) => {
  const icons = {
    success: "fa-check",
    error: "fa-circle-xmark",
    info: "fa-info",
    warning: "fa-bolt",
  }
  return icons[type] || "fa-dot-circle"
}

const getMessageForToast = (type) => {
  const messages = {
    success: "Operation completed successfully!",
    error: "An error occurred. Please try again.",
    info: "Here's some information for you.",
    warning: "Warning: Proceed with caution.",
  }
  return messages[type] || "Notification"
}

const createToast = (type) => {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  icon = getIconForToast(type);
  message = getMessageForToast(type);
  toast.innerHTML = `
  <div class="toast-content">
            <span class="toast-icon"><i class="fa-solid ${icon}"></i></span>
            <span class="toast-message">${message}</span>
  </div>
 <button class="toast-close" onclick="this.parentElement.remove()">
            <i data-lucide="x"></i>
        </button>
  <div class="toast-progress"></div>`;
  return toast;

}
let showToast = (type) => {
  const toast = createToast(type);
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hiding")
    toast.addEventListener("animationend", () => {
      toast.remove()
    })
  }, timeInMilliSecs)
  lucide.createIcons({
    attrs: {
      class: ["toast-icon"],
    },
  })
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.btnType);
  })
})



