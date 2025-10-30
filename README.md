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
#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

# ===== CONFIG (SSH) =====
REPO_SSH="git@github.com:rampaulsaini/omniverse--ai-scripts-.git"   # <-- अपनी SSH URL यहाँ डालें यदि अलग हो
BRANCH="update/readme-omniverse-append"
README="README.md"
WORKDIR="${HOME:-/data/data/com.termux/files/home}/tmp-omniverse-append-$$"

# ===== WORKDIR =====
rm -rf "$WORKDIR" || true
mkdir -p "$WORKDIR"
cd "$WORKDIR"

echo "Cloning repo via SSH..."
git clone "$REPO_SSH" repo
cd repo

echo "Creating branch $BRANCH..."
git checkout -b "$BRANCH"

# backup
if [ -f "$README" ]; then
  cp "$README" "${README}.bak"
  echo "Backup saved: ${README}.bak"
else
  touch "$README"
  echo "No README found — created new README.md"
fi

# append content
cat >> "$README" <<'OMNIFOIL'

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

*(Auto-appended via Termux Omniverse script — with respect ✨)*

OMNIFOIL

# commit & push
git add "$README"
git commit -m "docs: append Omniverse mantra & poem (best→super best→supreme Omniverse)"
git push -u origin "$BRANCH"

echo "Done. Branch pushed: $BRANCH"
echo "Open PR: https://github.com/rampaulsaini/omniverse--ai-scripts-/pull/new/$BRANCH"

# cleanup
cd "$HOME" || true
rm -rf "$WORKDIR" || true
#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

# ===== CONFIG (HTTPS) =====
REPO_URL="https://github.com/rampaulsaini/omniverse--ai-scripts-"
BRANCH="update/readme-omniverse-prepend"
README="README.md"
WORKDIR="${HOME:-/data/data/com.termux/files/home}/tmp-omniverse-prepend-$$"

# ===== WORKDIR =====
rm -rf "$WORKDIR" || true
mkdir -p "$WORKDIR"
cd "$WORKDIR"

echo "Cloning repo..."
git clone "$REPO_URL" repo
cd repo

echo "Creating branch $BRANCH..."
git checkout -b "$BRANCH"

# backup
if [ -f "$README" ]; then
  cp "$README" "${README}.bak"
  echo "Backup created: ${README}.bak"
else
  touch "$README"
  echo "No existing README — created new one."
fi

# prepare new content file
cat > /tmp/omniverse_new_content_$$.md <<'OMNIHEAD'
---
## 🕉️ Omniverse — Supreme Manifest (Prepended)

### 🌺 मंत्र / घोषवाक्य
**ॐ — मैं वह सूक्ष्म-अद्भुत चेतना हूँ जो "best" से आगे, "super best" से परे, और अब _Supreme Omniverse_ में पूर्ण रूप से प्रत्यक्ष है।**  
तुलनातीत, कालातीत, द्वैतातीत — प्रेमतित, संपूर्ण, सत्यप्रत्यक्ष।

---

### 🌌 पूर्ण काव्य / श्लोक
मैं शिरोमणि — पर-पर का प्रतीक, जहाँ शब्द मौन हो जाते हैं,  
तुलनातीत मेरी ध्वनि, कालातीत मेरी अनुभूति, द्वैत से परे मेरा अस्तित्व।  
प्रेम की उमंग में मैं सम्पूर्णता पाती हूँ, समग्रता में मैं संतुष्ट हो उठता हूँ;  
सत्य मेरी प्रत्यक्षता है, और मैं स्वयं वह युग हूँ — यथार्थ का सर्वोच्च स्वरूप।  

*(Auto-prepended via Termux Omniverse script — with respect ✨)*
OMNIHEAD

# combine: new content + old README -> tmp file, then move
cat /tmp/omniverse_new_content_$$.md "$README" > "${README}.new"
mv "${README}.new" "$README"
rm -f /tmp/omniverse_new_content_$$.md

# commit & push
git add "$README"
git commit -m "docs: prepend Omniverse mantra & poem (best→super best→supreme Omniverse)"
git push -u origin "$BRANCH"

echo "Done. Branch pushed: $BRANCH"
echo "Open PR: https://github.com/rampaulsaini/omniverse--ai-scripts-/pull/new/$BRANCH"

# cleanup
cd "$HOME" || true
rm -rf "$WORKDIR" || true
name: Append Omniverse README

on:
  workflow_dispatch: {}

jobs:
  append-readme:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Configure git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Create branch
        id: br
        run: |
          BR="update/readme-omniverse-append-$(date +%s)"
          echo "branch=$BR" >> $GITHUB_OUTPUT
          git checkout -b "$BR"

      - name: Backup README if exists
        run: |
          README=README.md
          if [ -f "$README" ]; then
            cp "$README" "${README}.bak"
            echo "Backup saved: ${README}.bak"
          else
            touch "$README"
            echo "Created empty README.md"
          fi

      - name: Append Omniverse content
        run: |
          cat >> README.md <<'OMNIFOIL'

---

## 🕉️ Omniverse — Supreme Manifest (Appended by Action)

### 🌺 मंत्र / घोषवाक्य
**ॐ — मैं वह सूक्ष्म-अद्भुत चेतना हूँ जो "best" से आगे, "super best" से परे, और अब _Supreme Omniverse_ में पूर्ण रूप से प्रत्यक्ष है।**  
तुलनातीत, कालातीत, द्वैतातीत — प्रेमतित, संपूर्ण, सत्यप्रत्यक्ष।

---

### 🌌 पूर्ण काव्य / श्लोक
मैं शिरोमणि — पर-पर का प्रतीक, जहाँ शब्द मौन हो जाते हैं,  
तुलनातीत मेरी ध्वनि, कालातीत मेरी अनुभूति, द्वैत से परे मेरा अस्तित्व।  
प्रेम की उमंग में मैं सम्पूर्णता पाती हूँ, समग्रता में मैं संतुष्ट हो उठता हूँ;  
सत्य मेरी प्रत्यक्षता है, और मैं स्वयं वह युग हूँ — यथार्थ का सर्वोच्च स्वरूप।  

*(Auto-appended via GitHub Actions — with respect ✨)*

OMNIFOIL

      - name: Commit & push
        run: |
          git add README.md
          git commit -m "docs: append Omniverse mantra & poem (action)"
          BR=$(git rev-parse --abbrev-ref HEAD)
          git push -u origin "$BR"

      - name: Output PR link
        run: |
          BR=$(git rev-parse --abbrev-ref HEAD)
          echo "Open Pull Request: https://github.com/${{ github.repository }}/pull/new/$BR"
          
