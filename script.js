// List of valid 6-digit keys
const validKeys = [
    "123456", "234567", "345678", "456789", "567890",
    "112233", "223344", "334455", "445566", "556677",
    "667788", "778899", "889900", "990011", "001122"
];

function validateKey() {
    const key = document.getElementById("key").value.trim();
    if (validKeys.includes(key)) {
        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    } else {
        alert("Invalid key. Please try again.");
    }
}

function goToStep3() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your Supercell ID username.");
        return;
    }
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
}

function selectPass(type) {
    const linkvertiseUrl = "https://linkvertise.com";
    if (type === "gold") {
        window.location.href = `${linkvertiseUrl}/gold`;
    } else if (type === "diamond") {
        window.location.href = `${linkvertiseUrl}/diamond`;
    }
}
