document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const promptInput = document.getElementById('prompt');
    const resultContainer = document.getElementById('resultContainer');
    const generatedImage = document.getElementById('generatedImage');
    const downloadBtn = document.getElementById('downloadBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');

    generateBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            alert('Please enter a prompt');
            return;
        }

        // Show loading indicator
        loadingIndicator.style.display = 'block';
        resultContainer.style.display = 'none';

        try {
            console.log(`Generating image for prompt: "${prompt}"`);
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // For demo purposes, we'll use a placeholder image
            const demoImageUrl = `https://source.unsplash.com/random/800x600/?${encodeURIComponent(prompt)}`;
            
            generatedImage.src = demoImageUrl;
            downloadBtn.href = demoImageUrl;
            downloadBtn.download = `generated-${Date.now()}.jpg`;
            
            loadingIndicator.style.display = 'none';
            resultContainer.style.display = 'block';
        } catch (error) {
            console.error('Error generating image:', error);
            loadingIndicator.style.display = 'none';
            alert('Error generating image. Please try again.');
        }
    });
});
