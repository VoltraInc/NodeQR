const qrmaker = require('qrmaker');

function generateQRCode(data, containerId) {
  var qrcode = new qrmaker.QRCode(0, QRCode.ErrorCorrectLevel.L);
  qrcode.addData(data);
  qrcode.make();

  var container = document.getElementById(containerId);

  var qrCodeElement = qrcode.createImgTag(4, 0);

  container.innerHTML = qrCodeElement;
}

document.addEventListener("DOMContentLoaded", function () {
  var dataToEncode = "https://www.example.com";
  var containerId = "qrcode-container";

  generateQRCode(dataToEncode, containerId);
});
