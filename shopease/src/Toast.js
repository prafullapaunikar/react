function Toast({ message }) {
  function toast(message) {
    const toastEl = document.getElementById("toast");
    toastEl.innerText = message;
    toastEl.style.display = "block";
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => (toastEl.style.display = "none"), 2100);
  }
  if (message) toast(message);
  return <div className="toast" id="toast"></div>;
}

export default Toast;
