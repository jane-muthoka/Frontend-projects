// Get all tab buttons and content sections
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        // Add click event listener to each tab button
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get the tab to show from data attribute
                const targetTab = this.getAttribute('data-tab');

                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));

                // Remove active class from all content sections
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Show the corresponding content
                document.getElementById(targetTab).classList.add('active');
            });
        });