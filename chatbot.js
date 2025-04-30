// Marketing Lad ChatBot - Embed Widget (v0.1)
(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    #mlad-chat-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #e67e22;
      color: white;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      font-size: 28px;
      cursor: pointer;
      z-index: 9999;
    }

    #mlad-chat-box {
      display: none;
      position: fixed;
      bottom: 90px;
      right: 20px;
      width: 300px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      z-index: 9999;
    }

    #mlad-chat-box input,
    #mlad-chat-box textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
    }

    #mlad-chat-box button {
      background-color: #e67e22;
      color: white;
      border: none;
      padding: 10px;
      width: 100%;
      border-radius: 4px;
      cursor: pointer;
    }

    #mlad-powered {
      font-size: 10px;
      text-align: center;
      margin-top: 8px;
      color: #999;
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'mlad-chat-btn';
  btn.innerHTML = '&#9993;';
  document.body.appendChild(btn);

  const box = document.createElement('div');
  box.id = 'mlad-chat-box';
  box.innerHTML = `
    <input type="text" id="mlad-name" placeholder="Your Name" required />
    <input type="email" id="mlad-email" placeholder="Your Email" required />
    <textarea id="mlad-message" placeholder="Your Message" rows="4" required></textarea>
    <button id="mlad-send">Send Message</button>
    <div id="mlad-powered">Powered by Marketing Lad ChatBot</div>
  `;
  document.body.appendChild(box);

  btn.onclick = () => {
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
  };

  document.getElementById('mlad-send').onclick = async () => {
    const name = document.getElementById('mlad-name').value;
    const email = document.getElementById('mlad-email').value;
    const message = document.getElementById('mlad-message').value;

    if (!name || !email || !message) return alert('All fields are required.');

    const res = await fetch('https://formspree.io/f/mnqewvpa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      alert('Message sent!');
      box.style.display = 'none';
      document.getElementById('mlad-name').value = '';
      document.getElementById('mlad-email').value = '';
      document.getElementById('mlad-message').value = '';
    } else {
      alert('Failed to send message. Please try again later.');
    }
  };
})();

