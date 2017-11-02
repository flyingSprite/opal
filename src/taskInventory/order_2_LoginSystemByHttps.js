import https from 'https';
/**
 * Order 2: Order 2: Login system by https
 * Using https to login system like use curl to login.

  curl -k https://192.168.105.88/axapi/v3/auth -H "Content-type:application/json" -d '{
    "credentials": {
        "username": "admin",
        "password": "a10"
    }
  }'

  */
class LoginSystem {

  constructor() {
    this.options = {
      hostname: '192.168.105.99',
      port: '443',
      path: '/axapi/v3/auth',
      method: 'POST',
      rejectUnauthorized: false,
      // requestCert: true,
      headers: {
        'Content-Type': 'Application/json'
      }
    };
  }

  request(options, payload) {
    return new Promise((resolve, reject) => {
      const request = https.request(options, (res) => {
        res.on('data', (buffer) => {
          resolve(buffer.toString());
        });
      });
      request.on('error', (e) => {
        reject(e);
      });
      if (payload) {
        request.write(JSON.stringify(payload));
      }
      request.end();
    });
  }

  login2() {
    const payload = {
      credentials: {
        username: 'admin',
        password: 'a10'
      }
    };
    return this.request(this.options, payload);
  }

  login(callback) {
    const request = https.request(this.options, (res) => {
      res.on('data', (buffer) => {
        if (callback && typeof callback === 'function') {
          callback(buffer.toString());
        }
      });
    });
    const payload = {
      credentials: {
        username: 'admin',
        password: 'a10'
      }
    };
    request.write(JSON.stringify(payload));
    request.end();
  }
}

export default LoginSystem;
