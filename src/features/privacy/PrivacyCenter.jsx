import React from "react";

const PrivacyCenter = () => (
  <div>
    <h2>Privacy Center</h2>
    <p>Manage your privacy and security settings here.</p>
    <form aria-label="Privacy Settings">
      <label>
        <input type="checkbox" />
        Allow anonymous feedback
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Enable data encryption
      </label>
      <br />
      <label>
        <input type="checkbox" />
        Receive privacy tips
      </label>
    </form>
    <section>
      <h3>Accessibility</h3>
      <ul>
        <li>High contrast mode available</li>
        <li>Screen reader support</li>
        <li>Keyboard navigation</li>
      </ul>
    </section>
    <section>
      <h3>How to Use</h3>
      <p>
        Adjust your privacy settings to control what information is shared and how
        feedback is processed. All data is handled securely and with respect for
        your privacy.
      </p>
    </section>
  </div>
);

export default PrivacyCenter;
