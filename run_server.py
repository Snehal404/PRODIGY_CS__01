import webbrowser
import http.server
import socketserver
import threading
import os

PORT = 8000

# Serve from current folder
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def start_server():
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"Server running at http://localhost:{PORT}/caesar.html")
        httpd.serve_forever()

thread = threading.Thread(target=start_server)
thread.daemon = True
thread.start()

webbrowser.open(f"http://localhost:{PORT}/caesar.html")

input("Press Enter to stop server...\n")

