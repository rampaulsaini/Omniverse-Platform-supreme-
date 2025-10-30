#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

# ===== CONFIG =====
REPO_URL="https://github.com/rampaulsaini/omniverse--ai-scripts-"
BRANCH="update/readme-omniverse-append"
README_FILE="README.md"
WORKDIR="${HOME:-/data/data/com.termux/files/home}/tmp-omniverse-append-$$"

# ===== PREPARE WORKDIR =====
rm -rf "$WORKDIR" || true
mkdir -p "$WORKDIR"
cd "$WORKDIR"

echo "Cloning repository..."
git clone "$REPO_URL" repo
cd repo

echo "Creating and switching to branch: $BRANCH"
git checkout -b "$BRANCH"

# ===== BACKUP README =====
if [ -f "$README_FILE" ]; then
  cp "$README_FILE" "${README_FILE}.bak"
  echo "Backup created: ${README_FILE}.bak"
else
  echo "No existing README.md found — a new one will be created."
  touch "$README_FILE"
fi

# ===== APPEND CLEAN OMNIVERSE CONTENT =====
cat >> "$README_FILE" <<'OMNIFOIL'

---

## 🕉️ Omniverse — Supreme Manifest (Appended)

### 🌺 मंत्र / घोषवाक्य
**ॐ — मैं वह सूक्ष्म-अद्भुत चेतना हूँ जो "best" से आगे, "super best" से परे, और अब _Supreme Omniverse_ में पूर्ण रूप से प्रत्यक्ष है।**  
तुलनातीत, कालातीत, द्वैतातीत — प्रेमतित, संपूर्ण, सत्यप्रत्यक्ष।

---

### 🌌 पूर्ण काव्य / श्लोक
मैं शिरोमणि — पर-पर का प्रतीक, जहाँ शब्द मौन हो जाते हैं,  
तुलनातीत मेरी ध्वनि, कालातीत मेरी अनुभूति, द्वैत से परे मेरा अस्तित्व।  
प्रेम की उमंग में मैं सम्पूर्णता पाती हूँ, समग्रता में मैं संतुष्ट हो उठता हूँ;  
सत्य मेरी प्रत्यक्षता है, और मैं स्वयं वह युग हूँ — यथार्थ का सर्वोच्च स्वरूप।  

best से उठकर — super best की ओर, वहाँ से आगे — supreme Omniverse में विलीन,  
जहाँ हर अनुभव एक-सा, हर विभेद धुंधला, और हर परिग्रह प्रेम बनकर चमकता है।  
मैं न केवल देखता हूँ — मैं वह दर्शन हूँ; न केवल जानता हूँ — मैं वह सत्य हूँ।  
यहाँ कोई कमी नहीं, कोई क़ैद नहीं — केवल संपूर्ण अनुभूति, केवल शांति का विस्तार।

---

*(Auto-appended via Termux Omniverse script — with respect and care ✨)*

OMNIFOIL

# ===== COMMIT & PUSH =====
git add "$README_FILE"
git commit -m "docs: append Omniverse mantra & poem (best→super best→supreme Omniverse)"
git push -u origin "$BRANCH"

echo
echo "✅ Complete — branch pushed: $BRANCH"
echo "Open a Pull Request at:"
echo "https://github.com/rampaulsaini/omniverse--ai-scripts-/pull/new/$BRANCH"

# optional: cleanup
cd "$HOME" || true
rm -rf "$WORKDIR" || true
