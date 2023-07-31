function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

for (let i = 11; i <= 20; i++) {
    const item = document.getElementById(`item-${i}`);
    const showLessButton = document.getElementById('lessButton');
    const showMoreButton = document.getElementById('moreButton');
    item.style.display = "none";
    showMoreButton.style.display = "block"
    showLessButton.style.display = "none"

    function showExtraGrid() {

        if (item.style.display === "none" && showMoreButton.style.display === "block") {


            for (let i = 11; i <= 20; i++) {

                const item = document.getElementById(`item-${i}`);
                item.style.display = "block";
                showMoreButton.style.display = "none"
                showLessButton.style.display = "block"
            }
        }
    }

    function hideExtraGrid() {

            for (let i = 11; i <= 20; i++) {

                const item = document.getElementById(`item-${i}`);
                item.style.display = "none";
                showMoreButton.style.display = "block"
                showLessButton.style.display = "none"
          
        }
    }


}

