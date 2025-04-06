  const animatedFormFields = document.querySelectorAll('.form-input, .form-textarea');
        
        const scrollObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const formFieldObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animation-visible');
                } else {
                    entry.target.classList.remove('animation-visible'); // Repeats animation on scroll
                }
            });
        }, scrollObserverOptions);

        animatedFormFields.forEach(formField => {
            formFieldObserver.observe(formField);
        });

        // Auto-resize textarea as user types
        document.getElementById('message-field').addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
