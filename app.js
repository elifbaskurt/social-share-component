function copy(id) {
    document.getElementById(id).select();
}

async function copyToClipboard() {
    const inputElement = document.getElementById('input-url');
    const copyAlert = document.querySelector('.copy-alert');
    
    try {
        await navigator.clipboard.writeText(inputElement.value);
        
        copyAlert.classList.add('show');
        
        setTimeout(() => {
            copyAlert.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Kopyalama başarısız:', err);
    }
}

// Copy butonuna tıklama olayını ekle
document.getElementById('copyButton').addEventListener('click', copyToClipboard);