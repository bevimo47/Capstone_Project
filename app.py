from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask app
app = Flask(__name__)

# Configure database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://terrasteer:H1rv3y263ql@capstonedb.cbi0ekqes6po.eu-north-1.rds.amazonaws.com:5432/capstonedb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Define database models
class ProductCost(db.Model):
    __tablename__ = 'product_cost'
    id = db.Column(db.Integer, primary_key=True)
    # Define your columns based on your database schema

class PersonnelTracker(db.Model):
    __tablename__ = 'Personnel_tracker'
    id = db.Column(db.Integer, primary_key=True)
    # Define your columns based on your database schema

# Define routes
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

# Main execution
if __name__ == '__main__':
    app.run(debug=True)