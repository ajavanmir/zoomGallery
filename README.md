# zoomGallery

```markdown
# ZooM Gallery - Vanilla JavaScript Image Zoom Gallery

![Demo](demo.gif) <!-- Add a demo GIF if available -->

A lightweight, dependency-free JavaScript image gallery with zoom functionality. Perfect for showcasing product images or photo collections.

## Features

- Pure vanilla JavaScript (no jQuery or other dependencies)
- Responsive design (works on mobile & desktop)
- Smooth zoom effect on hover
- Click-to-preview thumbnail navigation
- Clean, modern UI
- Easy to integrate

## Installation

1. Include the CSS in your `<head>`:
```html
<link href="styles.css" rel="stylesheet">
```

2. Add the HTML structure:
```html
<div class="vanilla-zoom" id="my-gallery">
    <div class="sidebar">
        <img src="images/image1.jpg" alt="Image 1" class="small-preview">
        <img src="images/image2.jpg" alt="Image 2" class="small-preview">
        <!-- Add more thumbnails as needed -->
    </div>
    <div class="zoomed-image"></div>
</div>
```

3. Include the JavaScript before closing `</body>`:
```html
<script src="script.js"></script>
<script>
    zoomGallery.init("#my-gallery");
</script>
```

## Customization

### CSS Variables
Override these in your own CSS:
```css
.vanilla-zoom {
    --zoom-factor: 250%; /* Control zoom level */
    --thumbnail-spacing: 5px; /* Space between thumbnails */
    --gallery-width: 50%; /* Default gallery width */
}
```

### Mobile Breakpoint
The default mobile breakpoint is 768px. Adjust in `styles.css` as needed.

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge). IE11 is not supported.

## License
Copyright © 2025 Amir Javanmir. Released under the [MIT License](LICENSE).

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## Demo
See live demo: [https://your-demo-url.com](https://your-demo-url.com) <!-- Add your demo URL -->
```

### Tips for an even better README:
1. Add a "Getting Started" section with more detailed setup instructions
2. Include a "Troubleshooting" section for common issues
3. Add a "Roadmap" section for planned features
4. Include screenshots or a GIF showing the gallery in action
5. Add badges for build status, version, etc. if applicable

Would you like me to add any specific sections or modify any part of this README?
