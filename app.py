from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/job_tracker')
def job_tracker():
    return render_template('job_tracker.html')

@app.route('/data_analytics')
def data_analytics():
    return render_template('data_analytics.html')

@app.route('/logistics')
def logistics():
    return render_template('logistics.html')

@app.route('/reports')
def reports():
    return render_template('reports.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

if __name__ == '__main__':
    app.run(debug=True)