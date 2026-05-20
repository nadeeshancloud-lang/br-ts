/**
 * CORE Frame Terminal Engine - Kanishka Net AI Client Module
 */

document.addEventListener("DOMContentLoaded", () => {
    const consoleForm = document.getElementById("consoleForm");
    const consoleInputField = document.getElementById("consoleInputField");
    const messageStream = document.getElementById("messageStream");
    const thinkingIndicator = document.getElementById("thinkingIndicator");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");

    // Initialize Local Memory Array Footprint Stack
    let conversationStateLog = JSON.parse(localStorage.getItem("kanishka_chat_log_v3") || "[]");

    // Rehydrate local environment state cache if populated
    if (conversationStateLog.length > 0) {
        conversationStateLog.forEach(messageObj => {
            renderMessageBubble(messageObj.text, messageObj.sender);
        });
    }

    consoleForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const refinedRawText = consoleInputField.value.trim();
        if (!refinedRawText) return;

        // Process Client Input Sequence Actions
        renderMessageBubble(refinedRawText, "user");
        saveMessageToLocalState(refinedRawText, "user");
        consoleInputField.value = "";

        // Trigger Automated Thinking Simulation Sequence Delay Loop
        thinkingIndicator.classList.remove("hidden");
        messageStream.scrollTop = messageStream.scrollHeight;

        setTimeout(() => {
            const analyticalSystemAnswer = computePredictiveResponse(refinedRawText);
            
            thinkingIndicator.classList.add("hidden");
            renderMessageBubble(analyticalSystemAnswer, "bot");
            saveMessageToLocalState(analyticalSystemAnswer, "bot");
        }, 1200); // 1.2s localized model frame iteration latency delay
    });

    if(clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", () => {
            localStorage.removeItem("kanishka_chat_log_v3");
            conversationStateLog = [];
            // Reset to clean system welcome template state
            messageStream.innerHTML = `
                <div class="chat-bubble bubble-system">
                    <div class="bubble-contents">
                        <span class="sender-title">[ SYSTEM DIAGNOSTICS LOG ]</span>
                        <p>Memory context array tracking cleared. Connection active.</p>
                    </div>
                </div>
            `;
        });
    }

    function renderMessageBubble(text, senderType) {
        const bubbleWrapper = document.createElement("div");
        bubbleWrapper.className = `chat-bubble bubble-${senderType}`;
        
        bubbleWrapper.innerHTML = `
            <div class="bubble-contents">
                <p>${text}</p>
            </div>
        `;
        
        messageStream.appendChild(bubbleWrapper);
        messageStream.scrollTop = messageStream.scrollHeight;
    }

    function saveMessageToLocalState(textPayload, senderIdentity) {
        conversationStateLog.push({ text: textPayload, sender: senderIdentity });
        localStorage.setItem("kanishka_chat_log_v3", JSON.stringify(conversationStateLog));
    }

    /* --- COGNITIVE REASONING LOOKUP ARRAY MATCHING MOCK ENGINE --- */
    function computePredictiveResponse(userInputString) {
        const lowercaseInput = userInputString.toLowerCase();

        if (lowercaseInput.includes("hello") || lowercaseInput.includes("hey") || lowercaseInput.includes("hi")) {
            return "Identity vector recognized. Welcome back to Kanishka Net Operational Node. Provide initialization parameters.";
        }
        if (lowercaseInput.includes("status") || lowercaseInput.includes("system")) {
            return "All subsystems reporting operational efficiency. Framework core: HTML5/CSS3/Vanilla JS. FPS: 60.0. Latency metrics: Nominal.";
        }
        if (lowercaseInput.includes("video") || lowercaseInput.includes("tutorial")) {
            return "Video deployment sequences are available inside the primary view container. Scroll to the 'Cinematic Showcase' section to pull streaming packets directly.";
        }
        if (lowercaseInput.includes("help") || lowercaseInput.includes("capabilities")) {
            return "I am configured to report telemetry statuses, answer pipeline configuration requests, and assist with UI/UX layout alignment queries.";
        }

        return "Data string cached successfully. Matrix reasoning path generated. Query resolved inside local memory model workspace layer.";
    }
});