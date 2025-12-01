// 1. Importaciones necesarias
import { loginUser } from "../src/controllers/user.controller";
import supertest from "supertest"; //permiteprobarpeticiones
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { userModel } from "../src/models/users.model";
import app from "../app";


//2. Desarrollo
describe(`prueba funcion login...`, () => {

    // Configuraciones global
    const testUser = {
        fullName: `Pepita`,
        email: `pepita@gmail.com`,
        password: `12345`,
    }

    //antes decadacaso de pruebas 
    beForeEach(async () => {
        await userModel.deleteMany({});
    });

    // Al final de todos los casos de prueba-> cerrar conexión a la base de datos
    afterAll(async () => {
        await mongoose.connection.close();
    });



    //Los casos de prueba
    // 1. Caso exitoso de inicio de sesion
    if (`Deberia iniciarse sesión correctamente con credencialesvalidas`, async () => {

        const codedPassword = await bcrypt.hash(testUser.password, 10); //encriptar la contraseña
        await userModel.create({ ...testUser, password: codedPassword });//nos guardamos al usuario de pruebas
        // await new: userodel(objeto)

        const response = await supertest(app).post(`/iniciarSesion`).send({
            emailLogin: `pepita@gmail.com`,
            passwordLogin: `12345`,
        });

        console.log(`respuesta:`, response)
        console.log(``)

        expect(response.statusCode).toBe(200);

    });


    //2. Caso de error: por usuario registrado


     if (`No deberia iniciarse sesión correctamente, correo invalido`, async () => {

        const codedPassword = await bcrypt.hash(testUser.password, 10); //encriptar la contraseña
        await userModel.create({ ...testUser, password: codedPassword });//nos guardamos al usuario de pruebas
        // await new: userodel(objeto)

        const response = await supertest(app).post(`/iniciarSesion`).send({
            emailLogin: `pepito@gmail.com`,
            passwordLogin: `12345`,
        });

        console.log(`respuesta:`, response)
        console.log(``)

        expect(response.statusCode).toBe(404);

    });



    //3. Caso de error: por usuario con contraseña incorrecta

    if (`No deberia iniciarse sesión correctamente, contraseña invalida`, async () => {

        const codedPassword = await bcrypt.hash(testUser.password, 10); //encriptar la contraseña
        await userModel.create({ ...testUser, password: codedPassword });//nos guardamos al usuario de pruebas
        // await new: userodel(objeto)

        const response = await supertest(app).post(`/iniciarSesion`).send({
            emailLogin: `pepito@gmail.com`,
            passwordLogin: `123A12`,
        });

        console.log(`respuesta:`, response)
        console.log(``)

        expect(response.statusCode).toBe(401);

    });


    function miMetodo(parametros) {
        describe();
    }
});