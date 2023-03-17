import sqlite3

def connect_db():
    conn = sqlite3.connect('users.db')
    return conn

def create_table():
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE users
                   (id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL,
                    password TEXT NOT NULL)''')
    conn.commit()
    conn.close()

if __name__ == '__main__':
    create_table()
