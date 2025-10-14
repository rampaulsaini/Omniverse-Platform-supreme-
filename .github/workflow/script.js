:root {
  --bg-color: #0b0c10;
  --text-color: #c5c6c7;
  --container-bg: #1f2833;
  --accent-color: #66fcf1;
}

body.light {
  --bg-color: #f5f5f5;
  --text-color: #0b0c10;
  --container-bg: #ffffff;
  --accent-color: #1f2833;
}

body {
  font-family: Arial, sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 400px;
  text-align: center;
  background: var(--container-bg);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px var(--accent-color);
}

h1 { font-size: 1.5rem; margin-bottom: 20px; }

.profile-container {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.profile-container img {
  width: 150px;
  max-width: 80%;
  border-radius: 50%;
  border: 3px solid var(--accent-color);
}

.lipsync {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 15px;
  background: #ff6f61;
  border-radius: 50%;
  display: none;
  animation: lipMove 0.3s infinite;
}

@keyframes lipMove {
  0% { transform: translateX(-50%) scaleY(1); }
  50% { transform: translateX(-50%) scaleY(1.5); }
  100% { transform: translateX(-50%) scaleY(1); }
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

select, button {
  width: 80%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
}

button {
  background-color: var(--accent-color);
  color: var(--bg-color);
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover { opacity: 0.8; }
  
