// ---------- RIGGA · Candado de artículos del blog ----------
// El contenido del artículo NO está en el HTML visible: viaja codificado
// en base64 dentro de un <script type="text/plain"> y solo se decodifica
// e inserta en la página si el hash SHA-256 de la clave ingresada coincide
// con el hash guardado abajo. La clave en sí nunca aparece en texto plano
// en el código de la página.

var RIGGA_GATE_HASH = "a37afe6ddd363d8f727c17d467baa85ac86a3820851379cbca1bb3505c9ed115";

async function riggaSha256(text) {
  var enc = new TextEncoder().encode(text);
  var buf = await crypto.subtle.digest("SHA-256", enc);
  var arr = Array.from(new Uint8Array(buf));
  return arr.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
}

function riggaInitGate() {
  var gate = document.querySelector(".gate");
  if (!gate) return;

  var form = gate.querySelector(".gate-form");
  var input = gate.querySelector(".gate-input");
  var error = gate.querySelector(".gate-error");
  var encoded = document.getElementById("gate-payload");
  var target = document.getElementById("gate-target");
  var cacheKey = "rigga_unlocked_" + location.pathname;

  function reveal(html) {
    target.innerHTML = html;
    gate.style.display = "none";
    target.style.display = "block";
  }

  // Si este artículo ya se desbloqueó antes en esta misma sesión de navegador, muéstralo directo.
  var cached = sessionStorage.getItem(cacheKey);
  if (cached) {
    reveal(cached);
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = input.value || "";
    riggaSha256(value).then(function (hash) {
      if (hash === RIGGA_GATE_HASH) {
        var html = decodeURIComponent(escape(atob(encoded.textContent.trim())));
        sessionStorage.setItem(cacheKey, html);
        reveal(html);
      } else {
        error.style.display = "block";
        input.value = "";
        input.focus();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", riggaInitGate);
