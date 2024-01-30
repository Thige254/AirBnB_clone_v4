# web_dynamic/2-hbnb.py

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/2-hbnb', strict_slashes=False)
def hbnb():
    return render_template('2-hbnb.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003)

