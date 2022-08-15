
document.getElementById("commentPostBtn").addEventListener('click', function() {
    const commentInputValue = document.getElementById("commentInputBox").value;
    const newPeragraphTag = document.createElement('p');
    newPeragraphTag.innerHTML = commentInputValue;
    const commentsDisplaySection = document.getElementById("commentsDisplaySection");
    commentsDisplaySection.appendChild(newPeragraphTag);
    document.getElementById("commentInputBox").value = '';
});