export default () => ({
    database: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'admin123',
        database: 'simulacroNestJs',
        autoLoadEntities: true,
        synchronize: true
    }
})