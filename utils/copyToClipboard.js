function copyToClipboard() {
  const el = document.createElement("textarea");
  const iOS = window.navigator.userAgent.match(/ipad|iphone/i);
  el.contentEditable = true; // needed for iOS >= 10
  el.readOnly = false; // needed for iOS >= 10
  el.value = str;
  el.style.border = "0";
  el.style.padding = "0";
  el.style.margin = "0";
  el.style.position = "absolute";
  // sets vertical scroll
  const yPosition = window.pageYOffset || document.documentElement.scrollTop;
  el.style.top = `${yPosition}px`;

  document.body.appendChild(el);

  if (iOS) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
  } else {
    el.select();
  }

  const successful = document.execCommand("copy");
  document.body.removeChild(el);

  return successful;
}

export default copyToClipboard;
