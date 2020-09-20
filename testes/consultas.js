const db = require("../config/db");

// .map(p => p.nome)
// db("perfis")
//   .then(res => res.map(p => p.nome))
//   .then(nomes => console.log(nomes))
//   .catch(e => console.log(e.sqlMessage))
//   .finally(() => db.destroy());

// db("perfis")
//   .select("nome", "id")
//   .then(res => console.log(res))
//   .finally(() => db.destroy());

// db.select("nome", "id")
//   .from("perfis")
//   .then(res => console.log(res))
//   .finally(() => db.destroy());

// db.select("nome", "id")
//   .from("perfis")
//   .limit(4).offset(2)
//   .then(res => console.log(res))
//   .finally(() => db.destroy());

db("perfis")
  .select("id", "nome")
  // .where({ id: 2 })
  // .where("id", "=", 2)
  // .where("nome", "like", "%min%")
  // .whereNot({ id: 2 })
  .whereIn("id", [1, 2, 3])
  // .first()
  .then(res => console.log(res))
  .finally(() => db.destroy());