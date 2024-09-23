document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const imageData = urlParams.get("imageData");

    if (imageData) {
        // 새로운 이미지 요소를 생성하여 페이지에 추가
        const imgElement = document.createElement("img");
        imgElement.src = imageData;
        imgElement.alt = "Uploaded Image";

        const figureElement = document.createElement("figure");
        figureElement.appendChild(imgElement);

        // columns 요소 맨 앞에 figure 추가
        const columns = document.getElementById("columns");
        columns.prepend(figureElement); // 새로 추가된 이미지가 맨 위로 오게 함
    }
});

function submitFormWithPreview(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // 파일을 선택하면 자동으로 폼 제출
            const form = fileInput.closest('form');
            const imageDataInput = document.createElement('input');
            imageDataInput.type = 'hidden';
            imageDataInput.name = 'imageData';
            imageDataInput.value = e.target.result; // 이미지 데이터를 URL로 전송
            form.appendChild(imageDataInput);
            form.submit();
        };
        reader.readAsDataURL(file);
    }
}


