const faqQuestion = document.querySelectorAll('.faq-question');
        const faqItems = document.querySelectorAll('.faq-item');
        const faqAnswer = document.querySelectorAll('.faq-answer');
        faqQuestion.forEach((question, index) => {
            question.addEventListener('click', (e) => {
                const faqItem = faqItems[index] 
                const isFaqAnswerExpanded = faqItem.classList.contains('active');
                if (!isFaqAnswerExpanded) {
                    faqItems.forEach((faqItem) => {
                        faqItem.classList.remove('active');
                    });
                    faqItem.classList.add('active');
                }
                else{
                    faqItem.classList.remove('active');
                }

            });
        });