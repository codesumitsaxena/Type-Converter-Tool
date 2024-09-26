const textArea = document.querySelector('.input-area')

function convertToUpperCase() {
    textArea.value = textArea.value.toUpperCase()
    if (textArea.value === "") {
        alert("Please Enter Text")
    }
}

function convertToLowercase() {
    textArea.value = textArea.value.toLowerCase()
    if (textArea.value === "") {
        alert("Please Enter Text")
    }
}

function convertToCapitalize() {
    let captilized = textArea.value.charAt(0).toUpperCase() + textArea.value.slice(1).toLowerCase();
    textArea.value = captilized
    if (textArea.value === "") {
        alert("Please Enter Text")
    }
}

function copyText() {
    textArea.select()
    document.execCommand('copy')
    alert('Copied')
    if (textArea.value === "") {
        alert("Please Enter Text")
    }
}

function clearText() {
    document.querySelector('.input-area').value = ""
    if (textArea.value === "") {
        alert("Please Enter Text")
    }
}
function reset() {
    window.location.reload()
}
