
// Step-1: Add event listener to the comment post button.
document.getElementById("commentPostBtn").addEventListener('click', function() {

    // Step-2: Get new comment value from comment input box.
    const commentInputValue = document.getElementById("commentInputBox").value;

    // Step-3: Add paragraph tag to the comment display section.
    const newPeragraphTag = document.createElement('p');
    newPeragraphTag.innerText = commentInputValue;
    const commentsDisplaySection = document.getElementById("commentsDisplaySection");
    commentsDisplaySection.appendChild(newPeragraphTag);

    // Step-4: Reset comment input box as empty.
    document.getElementById("commentInputBox").value = '';
});