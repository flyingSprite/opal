import crypto from 'crypto';

/**
 * Order 9: Generate MD5 for text
 * Using utf-8 encode.
 */
class GenerateMD5 {

  static md5(text) {
    return crypto.createHash('md5').update(text, 'utf8').digest('hex');
  }
}

export default GenerateMD5;
