const pool = require('../database');

async function getAllProducts(){
const [rows] = await pool.query(`select id,name, cast(price as double) as price, image from products`);

return rows;

}

async function getProductById(){

const [rows] = await pool.query(`select * from products where id = ?`, [id]);
return rows[0]


}

module.exports = {
    getAllProducts,getProductById
  };