// UN ARCHIVO.TEST.JS se conoce SUIT de pruebas
// Es el lugar donde ustedes definen  los casos de prueba agrupados por tematica


//1. importaciones
import { suma } from "../src/utils/ejemplo.js"

//2. desarrollo
/*
1. Bloques de prueba (agrupapor método)-> describe (una descripción, fn flecha)
2. Casos individuales de prueba ->it (una descripción, fn flecha)
- eS  QUE ABARQUEN LA MAYORIA DE LOS CASOS POSIBLES
- Usted Conozca el resultado esperado
*/

describe(`Probar función suma...`, ()=>{
    // definimos los casos individuales
    it(`Caso 1 : suma correcta de numeros positivos`, ()=>{
        expect(suma(2,3)).toBe(5);
    });

    it(`Caso 2 : suma correcta de numero con cero`, ()=>{
        expect(suma(7,0)).toBe(7);
    });

    it(`Caso 1 : suma correcta de numeros negativos`, ()=>{
        expect(suma(--2,-4)).toBe(-6);
    });
});