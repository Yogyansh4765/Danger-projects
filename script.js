function changeBox() {
    const box = document.getElementById('box');
    const input = document.getElementById('input').value.trim();
    
    // Split the input by spaces and filter out empty strings
    const parts = input.split(/\s+/).filter(Boolean);

    let color = '';
    let radius = '';

    // Identify color and radius parts
    parts.forEach(part => {
        if (/^#[0-9A-F]{3,6}$/i.test(part) || isValidColorName(part)) {
            color = part;
        } else if (/^\d+(px|%)$/.test(part)) {
            radius = part;
        }
    });

    // Apply color
    if (color) {
        box.style.backgroundColor = color;
    } else {
        box.style.backgroundColor = '#FFFFFF'; // Default color if invalid
    }

    // Apply radius
    if (radius) {
        box.style.borderRadius = radius;
    } else {
        box.style.borderRadius = '0%'; // Default radius if invalid
    }
}

// Helper function to check if a color name is valid
function isValidColorName(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}
