from pydub import AudioSegment
from pydub.playback import play
import numpy as np

# 1. โหลดไฟล์เสียง
audio = AudioSegment.from_file("../chant.mp3")
bell = AudioSegment.from_file("bell.mp3")

# 2. ปรับความดังเบื้องต้น (ถ้าเสียงต้นฉบับเบาหรือดังเกินไป) และเพิ่มfade in
audio = audio.set_channels(1) # เพื่อความง่ายในการประมวลผล, แปลงเป็น mono
audio = audio.set_frame_rate(44100) # กำหนด frame rate มาตรฐาน
bell = bell.fade_out(2000) # เพิ่ม fade out 2 วินาที

# 3. ลดความเร็วและปรับ Pitch อย่างละเอียดขึ้น (ใช้เทคนิคที่ซับซ้อนขึ้น)
# วิธีนี้พยายามรักษา pitch เมื่อลดความเร็ว แต่ก็ยังจำกัดใน Pydub
# ถ้าต้องการคุณภาพสูง ต้องใช้ Librosa/PyDub combined with external pitch shifters
slowed_audio_rate = int(audio.frame_rate * 0.8) # ลดความเร็วลง 20%
slowed_audio = audio._spawn(audio.raw_data, overrides={"frame_rate": slowed_audio_rate})
slowed_audio = slowed_audio.set_frame_rate(audio.frame_rate) # ตั้ง frame rate กลับ เพื่อรักษา pitch ให้ใกล้เคียง

# 4. เพิ่ม Reverb effect (เสียงก้อง) ให้เป็นธรรมชาติขึ้น
# การทำ reverb ด้วย pydub ให้ผลลัพธ์ที่จำกัด
# คุณอาจต้องลองใช้ค่า delay และ gain ที่หลากหลายขึ้น หรือพิจารณาใช้ไลบรารีอื่น
reverb_audio = slowed_audio
initial_delay = 300 # ms
decay_factor = 0.6 # ปัจจัยการลดทอนของแต่ละ echo (0-1)

# สร้างหลายๆ echo ที่ลดทอนลงไปเรื่อยๆ
for i in range(1, 3): # สร้าง 2 layers ของ echo
    delay = initial_delay * i
    gain = -20 * i * decay_factor # ลด gain ให้มากขึ้นตามจำนวน echo
    echo = slowed_audio.apply_gain(gain)
    reverb_audio = reverb_audio.overlay(echo, position=delay)

# 5. กรองเสียงให้ทุ้มขึ้นและชัดเจนขึ้น (ปรับ EQ)
# บทสวดมักจะมีเสียงย่านต่ำที่ชัดเจน แต่ก็ยังคงรายละเอียดของเสียงพูด
# ลองปรับ Low-pass filter ให้ออกไปในย่านที่สูงขึ้น เพื่อให้เสียงไม่ทึบเกินไป
# และ High-pass filter เพื่อตัดเสียงรบกวนต่ำๆ ที่ไม่จำเป็นออก
filtered_audio = reverb_audio.low_pass_filter(2500) # กรองความถี่สูงกว่า 2500 Hz (ให้เสียงทุ้มขึ้นแต่ยังชัด)
filtered_audio = filtered_audio.high_pass_filter(100) # เอาเสียงต่ำเกินไปออก (เพื่อให้เสียงไม่บวม)

# 6. เพิ่มความดังและลดเสียงที่ดังเกินไป
# บทสวดมักจะมีความดังที่สม่ำเสมอ
final_audio = filtered_audio.normalize() # ปรับความดังสูงสุดให้เป็น 0 dBFS
final_audio = final_audio.apply_gain(5) # เพิ่มเสียงขึ้น 5 dB

# 7. เล่นและบันทึกเสียง
final_audio = bell + final_audio
final_audio.export("monk_chant_improved.wav", format="wav")

play(final_audio)

print("เสียงสวดแบบพระถูกบันทึกเป็น monk_chant_improved.wav แล้ว")
