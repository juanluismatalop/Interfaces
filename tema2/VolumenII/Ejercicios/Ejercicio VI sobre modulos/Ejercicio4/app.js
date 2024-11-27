function loadOperations() {
    import('./mathOperations.js').then(module => {
        const { add, subtract, multiply } = module;
        console.log("Suma:", add(10, 5));
        console.log("Resta:", subtract(10, 5));
        console.log("Multiplicación:", multiply(10, 5));
    }).catch(error => {
        console.error("Error al cargar el módulo:", error);
    });
}