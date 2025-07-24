import React, { useState } from "react";

const AIFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAI = async () => {
    setLoading(true);
    // TODO: Replace with real AI integration (e.g., fetch to backend)
    await new Promise((res) => setTimeout(res, 1200));
    setFeedback(
      input
        ? `AI Feedback: Your message "${input}" is clear and empathetic. Try to be more specific about your feelings.`
        : "Please enter a message to get feedback."
    );
    setLoading(false);
  };

  return (
    <div>
      <h2>AI Feedback</h2>
      <textarea
        aria-label="Your message for AI feedback"
        placeholder="Type your message here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <button
        aria-label="Get AI Feedback"
        onClick={handleAI}
        style={{ marginBottom: 8 }}
        disabled={loading}
      >
        {loading ? "Getting Feedback..." : "Get AI Feedback"}
      </button>
      <div role="status" aria-live="polite" style={{ minHeight: 24 }}>
        {feedback}
      </div>
      <hr />
      <section>
        <h3>Accessibility & Privacy</h3>
        <ul>
          <li>All feedback is private and processed securely.</li>
          <li>Screen reader and keyboard navigation supported.</li>
          <li>No personal data is stored without consent.</li>
        </ul>
      </section>
    </div>
  );
};

export default AIFeedback;
