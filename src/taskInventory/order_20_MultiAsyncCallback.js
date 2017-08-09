

/**
 * Order 20: Multi async, one final callback
 * @param {*} queries
 * @param {*} execute
 * @param {*} executeResult
 * @param {*} done
 */
const executeQueryList = (queries, execute, executeResult, done) => {
  if (queries.length <= 0) {
    done([]);
    return;
  }
  const values = [];
  const defaultExecute = (k1, k2) => { return k2; };
  const executeResultDist = executeResult || defaultExecute;
  const executeQuery = query => new Promise((resolve) => {
    execute(query).then((res) => {
      const resolveResult = executeResultDist(query, res) || res;
      resolve(resolveResult);
    }).catch((err) => {
      const resolveResult = executeResultDist(query, err) || err;
      resolve(resolveResult);
    });
  });
  const start = (index) => {
    if (index < queries.length) {
      executeQuery(queries[index]).then((res) => {
        values.push(res);
        start(index + 1);
      });
    } else {
      if (done) {
        done(values);
      }
    }
  };
  start(0);
};

export default executeQueryList;
