import {Sequelize} from 'sequelize'

const db = new Sequelize('sql10504888', 'sql10504888', 'Uhps2SWxF9',{
    host:'sql10.freesqldatabase.com',
    dialect: 'mysql'
})

export default db