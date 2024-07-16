document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('testimonial-form');
    const testimonialContainer = document.querySelector('.testimonial-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const testimonialTitle = document.getElementById('testimonial-title').value;
        const testimonialText = document.getElementById('testimonial-text').value;
        const authorName = document.getElementById('author-name').value;

        if (testimonialText.trim() !== '' && authorName.trim() !== '') {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');
            testimonialDiv.innerHTML = `
                <div class="testimonial-text">
                    <h2>${testimonialTitle}</h2>
                    <p>"${testimonialText}"</p>
                    <p class="author">- ${authorName}</p>
                </div>
            `;
            testimonialContainer.insertBefore(testimonialDiv, document.querySelector('.interaction-box'));

            document.getElementById('testimonial-title').value = '';
            document.getElementById('testimonial-text').value = '';
            document.getElementById('author-name').value = '';
        } else {
            alert('Por favor, preencha todos os campos');
        }
    });
});