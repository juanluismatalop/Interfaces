//7. Implementa un script que cuente el número de vocales y consonantes en una cadena.
function contarVocalesConsonantes(texto) {
    let vocales = 0;
    let consonantes = 0;
    const vocalesSet = new Set('aeiouAEIOU');
    for (let letra of texto) {
        if (/[a-zA-Z]/.test(letra)) {
            if (vocalesSet.has(letra)) {
                vocales++;
            } else {
                consonantes++;
            }
        }
    }
    return { vocales, consonantes };
}
