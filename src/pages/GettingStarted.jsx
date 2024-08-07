import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GettingStarted = () => {
  return (
    <div className="getting-started">
      <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Getting Started</h1>

      <section id="overview" style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Overview</h2>
        <p>Welcome to the NexusPay API documentation. This guide will help you get started with integrating our payment solutions into your application.</p>
      </section>

      <section id="authentication" style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Authentication</h2>
        <p>To authenticate your API requests, you will need to generate a Bearer token using your account code and client key. The token should be included in the Authorization header of your requests.</p>
        <SyntaxHighlighter language="python" style={solarizedlight} customStyle={{ backgroundColor: "#2d2d2d", color: "#f8f8f2", padding: '1em' }}>
          {`import base64

def generate_token(account_code, client_key, secret_key='n3xusT3c#'):
    token_string = f"{account_code}-{client_key}-{secret_key}"
    encoded_token = base64.b64encode(token_string.encode()).decode()
    return f"Bearer {encoded_token}"

# Example usage
account_code = '83234'
client_key = 'JkxxOngMA'
token = generate_token(account_code, client_key)
print(token)  # Bearer W6dprK2khmaaWJ5g5trryaaQjtOspcHNxqfZm9U=
`}
        </SyntaxHighlighter>
      </section>

      <section id="making-requests" style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Making API Requests</h2>
        <h3 style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Pay In</h3>
        <p>To initiate a payment, use the following endpoint and parameters:</p>
        <p>Endpoint: <code>https://api.nexuspay.cloud/payin/process</code></p>
        <p>Method: POST</p>
        <p>Headers:</p>
        <SyntaxHighlighter language="json" style={solarizedlight} customStyle={{ backgroundColor: "#2d2d2d", color: "#f8f8f2", padding: '1em' }}>
          {`{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_GENERATED_TOKEN'
}`}
        </SyntaxHighlighter>
        <p>Body Parameters:</p>
        <SyntaxHighlighter language="json" style={solarizedlight} customStyle={{ backgroundColor: "#2d2d2d", color: "#f8f8f2", padding: '1em' }}>
          {`{
  "name": "gerald",
  "email": "marcSmith@yahoo.com",
  "amount": "100",
  "pay_method": "sp-qrph",
  "mobilenumber": "0909333322",
  "address": "Manila ph",
  "webhook": "https://api.nexuspay.cloud/hook/icore.php",
  "remarks": "remarks"
}`}
        </SyntaxHighlighter>
        <h3 style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Payout</h3>
        <p>To initiate a payout, use the following endpoint and parameters:</p>
        <p>Endpoint: <code>https://api.nexuspay.cloud/payout/payout</code></p>
        <p>Method: POST</p>
        <p>Headers:</p>
        <SyntaxHighlighter language="json" style={solarizedlight} customStyle={{ backgroundColor: "#2d2d2d", color: "#f8f8f2", padding: '1em' }}>
          {`{
  'Content-Type': 'text/plain',
  'Authorization': 'Bearer YOUR GENERATED TOKEN'
}`}
        </SyntaxHighlighter>
        <p>Body Parameters:</p>
        <SyntaxHighlighter language="json" style={solarizedlight} customStyle={{ backgroundColor: "#2d2d2d", color: "#f8f8f2", padding: '1em' }}>
          {`{
  "name": "mark pogi hook2 v2",
  "email": "marcSmith@yahoo.com",
  "amount": "100",
  "mobilenumber": "09058086521",
  "address": "Manila ph",
  "bank_account": "09058086521",
  "pay_method": "allbank_payout_g_exchange",
  "remarks": "cash out"
}`}
        </SyntaxHighlighter>
      </section>
    </div>
  );
};

export default GettingStarted;