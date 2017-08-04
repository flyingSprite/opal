import crypto from 'crypto';

/**
 * Order 10: Generate SHA1 and SHA256 for text
 * Using utf-8 encode.
 */
class GenerateSHA {

  static sha1(text) {
    return crypto.createHash('sha1').update(text, 'utf8').digest('hex');
  }

  static sha256(text) {
    return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
  }

}

export default GenerateSHA;
