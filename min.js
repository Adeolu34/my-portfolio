$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-circle-xmark');
        $('header').toggleClass('toggle');
    });

    function resetClassesOnScroll() {
        $('#menu').removeClass('fa-circle-xmark');
        $('header').removeClass('toggle');
    }

    // Use a debounce function to prevent frequent firing
    const debouncedReset = debounce(resetClassesOnScroll, 200);

    $(window).on('scroll load', debouncedReset);

    // Debounce function
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this,
                  args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    // Add a click event for the "View More" button
    $('#viewMoreBtn').click(function () {
        // Toggle the visibility of additional divs
        $('.porfolio-content.hidden').toggleClass('hidden');
        // Hide the "View More" button once all divs are visible
        if ($('.porfolio-content.hidden').length === 0) {
            $('#viewMoreBtn').hide();
        }
    });
});
