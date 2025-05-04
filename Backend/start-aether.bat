@echo off
echo 🧙‍♂️ Awakening Aether backend...

:: Activate virtual environment
call venv\Scripts\activate

:: Run Flask server
python classifiers\emotionServer.py

:: Keep the window open
cmd
