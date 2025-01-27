// List of valid 6-digit keys
const validKeys = [
    "123456", "234567", "345678", "456789", "567890",
    "112233", "223344", "334455", "445566", "556677",
    "667788", "778899", "889900", "990011", "001122"
];

// Open Linkvertise to get a key in a new tab
function openKeyLink() {
    const keyLinkvertise = "https://direct-link.net/1285193/cracked-brawl-stars-keyv1";
    window.open(keyLinkvertise, "_blank");
}

// Validate the entered key
function validateKey() {
    const key = document.getElementById("key").value.trim();
    if (validKeys.includes(key)) {
        document.getElementById("step1").classList.add("hidden");
        document.getElementById("step2").classList.remove("hidden");
    } else {
        alert("Invalid key. Please try again.");
    }
}

// Proceed to platform selection
function goToStep3() {
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your Supercell ID username.");
        return;
    }
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
}

// Proceed to reward selection after platform selection
function selectPlatform(platform) {
    console.log(`Platform selected: ${platform}`);
    document.getElementById("step3").classList.add("hidden");
    document.getElementById("step4").classList.remove("hidden");
}

// Handle reward selection and redirect to Linkvertise
function selectReward(reward) {
    console.log(`Reward selected: ${reward}`);
    const rewardLinkvertise = "https://link-hub.net/1285193/brawl-stars-10-gems";
    window.open(rewardLinkvertise, "_blank");
}

