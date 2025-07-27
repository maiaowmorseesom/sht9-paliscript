from pydub import AudioSegment
from pydub.playback import play
import numpy as np
import http.server
import socketserver
import threading
import os
from urllib.parse import urlparse

audio = AudioSegment.from_file("demo_js.wav")
bell = AudioSegment.from_file("TTS/backgroundsound/bell.mp3")
bg1 = AudioSegment.from_file("TTS/backgroundsound/bg1.mp3")
uia = AudioSegment.from_file("TTS/backgroundsound/uia.mp3")
bg3 = AudioSegment.from_file("TTS/backgroundsound/bg3.mp3")

audio = audio.set_channels(1) # เพื่อความง่ายในการประมวลผล, แปลงเป็น mono
audio = audio.set_frame_rate(44100) # กำหนด frame rate มาตรฐาน
bell = bell.fade_out(2000) # เพิ่ม fade out 2 วินาที

#speed(pitch) setting
def speeddown(sound, speed) :
    speed = (100 - speed) / 100
    slowed_audio = int(sound.frame_rate * speed)
    slowed_audio = sound._spawn(sound.raw_data, overrides={"frame_rate": slowed_audio})
    slowed_audio = slowed_audio.set_frame_rate(sound.frame_rate) # ตั้ง frame rate กลับ เพื่อรักษา pitch ให้ใกล้เคียง

    return (slowed_audio)

#mixing
def eq_n_reverb(sound) :
    reverb_audio = sound
    initial_delay = 200 # ms
    decay_factor = 0.6 # ปัจจัยการลดทอนของแต่ละ echo (0-1)

    # สร้างหลายๆ echo ที่ลดทอนลงไปเรื่อยๆ
    for i in range(1, 3): # สร้าง 2 layers ของ echo
        delay = initial_delay * i
        gain = -15 * i * decay_factor # ลด gain ให้มากขึ้นตามจำนวน echo
        echo = sound.apply_gain(gain)
        reverb_audio = reverb_audio.overlay(echo, position=delay)
    filtered_audio = reverb_audio.low_pass_filter(4000) # กรองความถี่สูงกว่า 4000 Hz (ให้เสียงทุ้มขึ้นแต่ยังชัด)
    filtered_audio = filtered_audio.high_pass_filter(100) # เอาเสียงต่ำเกินไปออก (เพื่อให้เสียงไม่บวม)
    return(filtered_audio)

def final_setting(sound) :
    final_audio = sound.normalize() # ปรับความดังสูงสุดให้เป็น 0 dBFS
    final_audio = final_audio.apply_gain(5) # เพิ่มเสียงขึ้น 5 dB
    return final_audio

def play_and_export(sound, filename, speed, gain, bg) :
    sound = speeddown(sound, speed) # ปรับความเร็วเสียง
    sound = eq_n_reverb(sound) # เพิ่ม reverb effect
    sound = final_setting(sound) # ปรับระดับเสียงให้เหมาะสม
    sound = sound.apply_gain(gain) # ปรับระดับเสียง
    if bg: # ถ้ามีเสียงพื้นหลัง
        sound = sound.overlay(bg) # ผสมกับเสียงพื้นหลัง

    # Create output directory if it doesn't exist
    os.makedirs("audio_output", exist_ok=True)
    output_path = f"audio_output/{filename}"

    sound.export(output_path, format="wav") # บันทึกไฟล์เสียง
    print(f"Audio saved: http://127.0.0.1:8000/{filename}")
    return output_path

# Custom HTTP handler to serve audio files
class AudioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="audio_output", **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def start_audio_server():
    PORT = 8000
    with socketserver.TCPServer(("", PORT), AudioHandler) as httpd:
        print(f"Audio server running at http://127.0.0.1:{PORT}/")
        httpd.serve_forever()

# Start the server in a separate thread
server_thread = threading.Thread(target=start_audio_server, daemon=True)
server_thread.start()

# เรียกใช้ฟังก์ชันเพื่อสร้างเสียงต้นฉบับและเสียง UIA
play_and_export(audio, "original.wav", 10, -10, None)
play_and_export(audio, "uia_audio.wav", -20, -5, uia)
play_and_export(audio, "bg1.wav", 10, -10, bg1)
play_and_export(audio, "bg3.wav", -20, -5, bg3)

print("Audio files are now available at:")
print("http://127.0.0.1:8000/original.wav")
print("http://127.0.0.1:8000/uia_audio.wav")
print("http://127.0.0.1:8000/bg1.wav")
print("http://127.0.0.1:8000/bg3.wav")

# Keep the server running
try:
    while True:
        pass
except KeyboardInterrupt:
    print("\nServer stopped.")
