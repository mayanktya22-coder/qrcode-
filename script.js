document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('qr-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrContainer = document.getElementById('qrcode');

    let qrcode = null;

    generateBtn.addEventListener('click', generateQRCode);

    input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            generateQRCode();
        }
    });

    function generateQRCode() {
        const text = input.value.trim();

        if (!text) {
            alert("Please enter text or URL");
            return;
        }

        qrContainer.innerHTML = '';

        qrcode = new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});