import falcon
from falcon_cors import CORS
import json

class ItemResource:
    def __init__(self):
        self.items = [
            #example data
            {"id": 1.0, "user_id": "user1", "lat": "12.345", "lon": "67.890", "image": "http://placekitten.com/100/100", "keywords": "kitten", "description": "A cute kitten"},
            {"id": 2.0, "user_id": "user2", "lat": "23.456", "lon": "78.901", "image": "http://placekitten.com/200/200", "keywords": "kitten", "description": "Another cute kitten"},
        ]

    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(self.items)

    def on_post(self, req, resp):
        try:
            data = json.load(req.bounded_stream)
            self.items.append(data)
            resp.status = falcon.HTTP_201
            resp.body = json.dumps(data)
        except Exception as e:
            resp.status = falcon.HTTP_400
            resp.body = json.dumps({"error": str(e)})

    def on_delete(self, req, resp, id):
        try:
            id = float(id)
            self.items = [item for item in self.items if item["id"] != id]
            resp.body = json.dumps({"message": f"Item {id} deleted successfully"})
            resp.status = falcon.HTTP_200
        except ValueError:
            resp.status = falcon.HTTP_400
            resp.body = json.dumps({"error": "Invalid ID"})

# one instance of item resource
item_res = ItemResource()

app = falcon.App()

cors = CORS(allow_all_origins=True, allow_all_headers=True, allow_all_methods=True, allow_methods_list=['OPTIONS'])
app.add_middleware(cors.middleware)

# route to item resource
app.add_route('/item', item_res)
app.add_route('/item/{id}', item_res)

if __name__ == '__main__':
    from wsgiref import simple_server
    httpd = simple_server.make_server('127.0.0.1', 8000, app)
    print("serving on port 8000")
    httpd.serve_forever()