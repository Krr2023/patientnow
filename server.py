from http.server import HTTPServer, BaseHTTPRequestHandler

class MyHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_type = self.headers['content-type']
        if content_type == 'application/x-www-form-urlencoded':
            content_length = int(self.headers['content-length'])
            post_data = self.rfile.read(content_length)
            # 解析表單資料
            print(post_data.decode('utf-8'))
        else:
            # 不支援的內容類型
            pass

if __name__ == '__main__':
    port = 8000
    server = HTTPServer(('', port), MyHandler)
    print('伺服器已啟動，正在監聽埠 {} ...'.format(port))
    server.serve_forever()
