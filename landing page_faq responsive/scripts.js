function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    const answerContent = answer.querySelector('.answer-content');
    const faqItem = button.parentElement;

    if (faqItem.classList.contains('open')) {
        // If the FAQ item is open, close it
        answer.style.height = '0';
        answer.style.minHeight = '0'; // set min-height to zero
        answerContent.style.overflow = 'hidden';
        faqItem.classList.remove('open');
    } else {
        // If the FAQ item is closed, open it
        answer.style.height = answerContent.scrollHeight + 'px';
        answer.style.minHeight = '100px'; // set min-height to the minimum value
        answerContent.style.overflow = 'visible';
        faqItem.classList.add('open');
    }
}