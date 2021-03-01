const { query } = require("../connection");

module.exports = {
  get: function (req, res) {
    query("INSERT INTO people(name) values('Willian')", function (error, result, field) {
      if (error) {
        res.json(error);
      } else {
        query("SELECT name FROM people", function (error, result, field) {
          if (error) {
            res.json(error);
          } else {
            const arrayName = []
            result.forEach(element => { arrayName.push(`<li>${element.name}</li>`)})
            let join = arrayName.join(' ')
            res.send(`
              <h1>Full Cycle Rocks!</h1>
              <ul id="teste1"></ul>
              <script>
                let id = document.getElementById('teste1')
                id.innerHTML = "${join}"
              </script>
            `);
          }
        });
      }
    });
  },
};