const guysSection = document.getElementById('guys-section');
const girlsSection = document.getElementById('girls-section');
const partnersList = document.getElementById('partners-list');
const matchButton = document.getElementById('match-button');
const autoMatch = document.getElementById("auto");
const matchModal = document.getElementById('match-modal');
const modalImages = document.getElementById('modal-images');

let guysImages = [];
let girlsImages = [];

function handleImageUpload(event, section) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (section === 'guys') {
                guysImages.push(e.target.result);
            } else {
                girlsImages.push(e.target.result);
            }
            updatePlaceholder(section);
        };
        reader.readAsDataURL(file);
    }
}

function updatePlaceholder(section) {
    const placeholder = section === 'guys' ? document.getElementById('guys-placeholder') : document.getElementById('girls-placeholder');
    placeholder.innerHTML = '';
    const images = section === 'guys' ? guysImages : girlsImages;
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = '100px';
        img.style.margin = '5px';
        placeholder.appendChild(img);
    });
}

guysSection.addEventListener('dragover', (e) => e.preventDefault());
guysSection.addEventListener('drop', (e) => {
    e.preventDefault();
    handleImageUpload(e, 'guys');
});

girlsSection.addEventListener('dragover', (e) => e.preventDefault());
girlsSection.addEventListener('drop', ( e) => {
    e.preventDefault();
    handleImageUpload(e, 'girls');
});

// Add click-to-upload functionality
guysSection.addEventListener('click', () => Upload('guys'));
girlsSection.addEventListener('click', () => Upload('girls'));

function Upload(section) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.multiple = true;

    fileInput.addEventListener('change', (event) => {
        handleImageUpload(event, section);
    });

    fileInput.click();
}

matchButton.addEventListener('click', () => {
    if (guysImages.length < 1 || girlsImages.length < 1) {
        alert('Please upload at least 1 images in each section.');
        return;
    }
    const randomGuy = guysImages[Math.floor(Math.random() * guysImages.length)];
    const randomGirl = girlsImages[Math.floor(Math.random() * girlsImages.length)];
    displayMatch(randomGuy, randomGirl);
});

autoMatch.addEventListener("click", () => {
    if (guysImages.length < 1 || girlsImages.length < 1) {
        alert('Please upload at least 1 image in each section.');
        return;
    }

    function matchAndDisplay() {
        // If there are images left in both sections, continue matching
        if (guysImages.length > 0 && girlsImages.length > 0) {
            const randomGuy = guysImages[Math.floor(Math.random() * guysImages.length)];
            const randomGirl = girlsImages[Math.floor(Math.random() * girlsImages.length)];
    
            // Display the match in the modal
            matchModal.style.display = 'flex';
            modalImages.innerHTML = `
                <img src="${randomGuy}" alt="Guy" />
                <img src="${randomGirl}" alt="Girl" />
            `;
    
            // Close the modal after 5 seconds and move to the partners section
            setTimeout(() => {
                matchModal.style.display = 'none';
                moveToPartners(randomGuy, randomGirl);
    
                // Recursively call `matchAndDisplay` to continue matching
                matchAndDisplay();
            }, 5000); // Wait 5 seconds before continuing
        } else {
            // If no more images to match, show "That's All!" message
            matchModal.style.display = 'flex';
            modalImages.innerHTML = "<strong>That's All!</strong>";
    
            // Close the modal after 5 seconds
            setTimeout(() => {
                matchModal.style.display = 'none';
            }, 1000);
        }
    }

    // Start the matching process
    matchAndDisplay();
});

// Function to display the matched images in the modal
function displayMatch(guy, girl) {
    // Show the modal with the matched images
    matchModal.style.display = 'flex';
    modalImages.innerHTML = `
        <img src="${guy}" alt="Guy" />
        <img src="${girl}" alt="Girl" />
    `;

    // Set a timer to close the modal after 5 seconds and move the images to the partners section
    setTimeout(() => {
        matchModal.style.display = 'none';
        moveToPartners(guy, girl);
    }, 5000); // Close after 5 seconds
}

function moveToPartners(guy, girl) {
    const matchDisplay = document.createElement('div');
    matchDisplay.innerHTML = `
        <div class="match">
            <img src="${guy}" alt="Guy" style="width: 100px;"/>
            <img src="${girl}" alt="Girl" style="width: 100px;"/>
        </div>
    `;
    partnersList.appendChild(matchDisplay);
    removeMatchedImages(guy, girl);
}

function removeMatchedImages(guy, girl) {
    guysImages = guysImages.filter(image => image !== guy);
    girlsImages = girlsImages.filter(image => image !== girl);
    updatePlaceholder('guys');
    updatePlaceholder('girls');
}

