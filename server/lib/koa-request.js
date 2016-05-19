import request from 'request';

export default function asyncThing (options) {
  return new Promise((resolve, reject) => {
    request(options, function (err, response, body) {
      if (err) {
        console.error(err);
        return reject(err);
      }

      // Todo range the status code or send it?
      if (response.statusCode === 200) {
        return resolve({
          response,
          body,
          json : JSON.parse(body)
        });
      }
    });
  });
}
