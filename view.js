show();
function show() {
	const app = document.getElementById('app');
	app.innerHTML = /*HTML*/ `
    
    <input id="userinput" autocomplete="off" type="text" placeholder='Input text here' oninput="sendKey(event)" />
    <button class="button" onclick="copyToClipboard()">Copy to Clipboard</button>
    <div class="morse">
      ${morseInput}
    </div>
  `;

	const input = document.getElementById('userinput');
	input.value = inputValue;
	input.focus();
}
// Event i parantes plukker ut mer informasjon enn bare this, som kan brukes på forskjellige måter i funksjoner.
// Se controller for mer info.
// e.target = document.getElementById('input')
// document.getElementById('input').focus();
