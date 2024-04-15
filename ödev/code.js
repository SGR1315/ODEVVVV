document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll('.seat');
    const selectedSeatDisplay = document.getElementById('selected-seat-display');
    const priceDisplay = document.getElementById('price-display');
    const stadiumImage = document.getElementById('stadium-image');

    seats.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            updateSelectedSeatAndPrice();
        });
    });

    function updateSelectedSeatAndPrice() {
        const selectedSeats = document.querySelectorAll('.selected');
        const selectedSeatsCount = selectedSeats.length;
        const selectedSeatsList = Array.from(selectedSeats).map(seat => seat.textContent).join(', ');
        const price = selectedSeatsCount * 10; // Fiyat hesaplama mantığına göre güncellenmeli

        selectedSeatDisplay.textContent = selectedSeatsList;
        priceDisplay.textContent = `$${price}`;
    }

    stadiumImage.addEventListener('click', (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        let price;

        const width = stadiumImage.width;
        const height = stadiumImage.height;

        if (x < width / 2 && y < height / 2) {
            price = 10;
        } else if (x >= width / 2 && y < height / 2) {
            price = 20;
        } else if (x < width / 2 && y >= height / 2) {
            price = 30;
        } else if (x >= width / 2 && y >= height / 2) {
            price = 40;
        } else {
            price = 0;
        }

        priceDisplay.textContent = `$${price}`;
    });

    stadiumImage.style.cursor = 'pointer';
});
