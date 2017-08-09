/**
 * Order 14: Use RSA to encryto and decryto.
 *
 * Refer to
 * https://stackoverflow.com/questions/19003321/node-js-function-to-generate-rsa-keys-using-open-ssl
 * http://ju.outofmemory.cn/entry/118198
 */
import cp from 'child_process';
import assert from 'assert';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';


class UseRSA {

  constructor() {
    this.privateFilename = 'docs/private.pem';
    this.publicFilename = 'docs/public.pem';
  }

  genKeysByKeypair() {
    // use keypair, see https://www.npmjs.com/package/keypair
  }

  genKeysByOpenssl(cb) {
    // Gen private
    cp.exec('openssl genrsa 1024', (err, priv, stderr) => {
      // Save private key to file
      fs.writeFileSync(this.privateFilename, priv);
      // Gen public
      cp.exec(`openssl rsa -in ${this.privateFilename} -pubout`, (err, pub, stderr) => {
        // Save public key to file
        fs.writeFileSync(this.publicFilename, pub);
        if (cb) {
          cb({ public: pub, private: priv });
        }
      });
    });
  }

  encryto(text) {
    const absolutePath = path.resolve(this.publicFilename);
    const publicKey = fs.readFileSync(absolutePath, 'utf8');
    const buffer = new Buffer(text, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
  }

  decryto(encrytoText) {
    const absolutePath = path.resolve(this.privateFilename);
    const privateKey = fs.readFileSync(absolutePath, 'utf8');
    const buffer = new Buffer(encrytoText, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString('utf8');
  }
}

export default UseRSA;
