function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    const chatBox = document.getElementById("chatBox");

    if (message === "") return;

    // User message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = message;
    chatBox.appendChild(userDiv);

    // Bot response
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.className = "bot-message";
        botDiv.innerText = getBotResponse(message);
        chatBox.appendChild(botDiv);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

function getBotResponse(message) {
    message = message.toLowerCase();

    // Greetings
    if (message.includes("hi") || message.includes("hello")) {
        return "Hi! 😊 How was your sleep last night?";
    }

    // Sleep quality
    if (message.includes("good")) {
        return "That's great to hear! 🌙 Getting consistent good sleep helps your mood and focus.";
    }

    if (message.includes("bad") || message.includes("poor") || message.includes("tired")) {
        return "I'm sorry to hear that 😴 Do you have trouble falling asleep or staying asleep?";
    }

    // Sleep problems
    if (message.includes("can't sleep") || message.includes("insomnia")) {
        return "That sounds frustrating. 😔 Try avoiding your phone 1 hour before bed and keep a regular sleep schedule.";
    }

    if (message.includes("wake up")) {
        return "Waking up often at night can be caused by stress or caffeine. Do you drink coffee late in the day?";
    }

    // Tips
    if (message.includes("how to sleep better") || message.includes("tips")) {
        return "Here are some tips 💤:\n• Sleep at the same time daily\n• Avoid caffeine at night\n• Keep your room dark & cool\n• Limit screen time before bed";
    }

    if (message.includes("phone")) {
        return "Using your phone before sleep can reduce melatonin 😵 Try reading or listening to calm music instead.";
    }

    // Default
    return "Tell me more about your sleep 🌙 Are you feeling rested when you wake up?";
}
