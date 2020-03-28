const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./workshop.db')

db.serialize(function () {
    // create table
    // template literals or template screen
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );            
    `)
    
    // input data on table
    /* const query = `
    INSERT INTO ideas (
        image,
        title,
        category,
        description,
        link
    ) VALUES (?, ? , ?, ? ,? );
    `
    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, minima vel quia minus cumque reprehenderit assumenda temporibus reiciendis harum accusamus placeat, officiis iure, modi cum magnam consectetur nostrum? Ipsam, maiores.",
        "https://youtube.com"
    ] */

    /* db.run(query, values, function(err){
        if (err) return console.log(err)

        console.log(this)
    }) */

    // delet data
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //    if (err) return console.log(err)
    //    
    //    console.log("DELETED", this)
    // })

    // consult data
    /* db.all(` SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        console.log(rows)
    }) */


})

module.exports = db