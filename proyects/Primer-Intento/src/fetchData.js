function getSuspender(promise) {
    let status = "Pendiente";
    let respuesta;

    const suspender = promise.then(
        (res) => {
            status = "Listo";
            respuesta = res;
        },
        (err) => {
            status = "Error";
            respuesta = err;
        }
    );

    const leer = () => {
        switch (status) {
            case "Pendiente":
                throw suspender;
            case "Error":
                throw respuesta;
            default:
                return respuesta;
        }
    };

    return { leer };
}

export function fetchData(url) {
    const promesa = fetch(url)
        .then((res) => res.json())
        .then((data) => data);

    return getSuspender(promesa);
}