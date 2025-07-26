// --- DOM Elements ---
const conversionTypeSelect = document.getElementById('conversionType');
const convertBtn = document.getElementById('convertBtn');
const playBtn = document.getElementById('playBtn');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');

inputText.classList.add('thai-text');
outputText.classList.add('thai-text');

// --- Mappings will be loaded dynamically ---
let paliToJsMap = {};
let jsToPaliMap = {};

// --- Initialization on Page Load ---
document.addEventListener('DOMContentLoaded', async () => {
    // Disable button and show loading message
    convertBtn.disabled = true;
    convertBtn.textContent = 'Loading...';

    try {
        // Fetch both JSON files in parallel
        const [thPaliResponse, jsPaliResponse] = await Promise.all([
            fetch('../json/th-pali-js-key.json'),
            fetch('../json/js-pali-master.json')
        ]);

        if (!thPaliResponse.ok || !jsPaliResponse.ok) {
            throw new Error(`HTTP error! Status: ${thPaliResponse.status} & ${jsPaliResponse.status}`);
        }

        const thPaliJsData = await thPaliResponse.json();
        const jsPaliMasterData = await jsPaliResponse.json();

        // Build maps EXCLUSIVELY from the fetched JSON data
        for (const key in thPaliJsData) {
            if (thPaliJsData.hasOwnProperty(key)) {
               paliToJsMap[key] = thPaliJsData[key].js;
            }
        }
        for (const key in jsPaliMasterData) {
            if (jsPaliMasterData.hasOwnProperty(key)) {
                jsToPaliMap[key] = jsPaliMasterData[key]['th-pali'];
            }
        }
        
        // Re-enable the convert button
        convertBtn.disabled = false;
        convertBtn.textContent = 'Convert';
        console.log("Dictionary files loaded successfully.");

    } catch (error) {
        console.error("Failed to load dictionary files:", error);
        outputText.value = "Error: Could not load dictionary files. Please ensure the files are in the same directory and you are running a local server.";
        convertBtn.textContent = 'Error';
    }
});

// --- Speech Synthesis ---
const synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance();
utterance.onend = () => console.log('Speech has finished.');
utterance.onerror = (event) => console.error('SpeechSynthesisUtterance.onerror', event);

// --- Core Functions ---
function escapeRegExp(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function convertText(text, direction) {
    const map = direction === 'pali2js' ? paliToJsMap : jsToPaliMap;
    if (Object.keys(map).length === 0) {
        // This check is important in case the files are empty or fail to load.
        return "Conversion map is empty. Please check your JSON files.";
    }
    const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);
    const regex = new RegExp(sortedKeys.map(key => escapeRegExp(key)).join('|'), 'g');
    return text.replace(regex, matched => map[matched]);
}

// --- Event Listeners ---
convertBtn.addEventListener('click', () => {
    const direction = conversionTypeSelect.value;
    const input = inputText.value;
    if (!input.trim()) {
        outputText.value = "Please enter some text to convert.";
        return;
    }
    const result = convertText(input, direction);
    outputText.value = result;
});

playBtn.addEventListener('click', () => {
    if (synth.speaking) { synth.cancel(); }
    const textToSpeak = outputText.value;
    if (textToSpeak.trim()) {
        utterance.text = textToSpeak;
        if (conversionTypeSelect.value === 'js2pali') {
            let voice = synth.getVoices().find(v => v.lang === 'th-TH');
            if (voice) { utterance.voice = voice; utterance.lang = 'th-TH'; }
            else { console.warn("Thai voice not found, using default."); utterance.lang = 'en-US'; utterance.voice = synth.getVoices().find(v => v.lang === 'en-US' && v.default); }
        } else {
            utterance.lang = 'en-US';
            utterance.voice = synth.getVoices().find(v => v.lang === 'en-US' && v.default);
        }
        synth.speak(utterance);
    }
});
 
synth.onvoiceschanged = () => console.log("Available voices:", synth.getVoices());